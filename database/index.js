var mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost/test');
mongoose.connect(
  "mongodb://admin:admin123@ds119374.mlab.com:19374/fastpark",
  { useNewUrlParser: true }
);

var bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;

var db = mongoose.connection;
const Schema = mongoose.Schema;

db.on("error", function() {
  console.log("mongoose connection error");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
});
const OwnerSchema = new Schema({
  name: String,
  phoneNumber: String,
  email: String,
  password: String,
  rating: String,
  image: String
});
const ParkSchema = new Schema({
  title: String,
  description: String,
  long: String,
  lat: String,
  location: String,
  image: String,
  ownerId: { type: mongoose.Schema.ObjectId, ref: "Owner" },
  price: String,
  startTime: String,
  endTime: String
});

const Owner = mongoose.model("Owner", OwnerSchema);
const Park = mongoose.model("Park", ParkSchema);
let saveOwner = (data, cb) => {
  let owner = new Owner({
    name: data["name"],
    phoneNumber: data["phoneNumber"],
    email: data["email"],
    password: data["password"],
    rating: data["rating"],
    image: data["image"]
  });
  owner.save(function(err) {
    if (err) cb(null, err);
    //returning the auto generated id from the db to be used when adding new parks
    cb(owner._id, null);
  });
};

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: String,
  plateNumber: {
    type: String,
    required: true
  },
  name: String,
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});
const User = mongoose.model("User", UserSchema);

// UserSchema.pre('save', function(next){
//   var user = this;
//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
//       if(err) return next(err);

//       bcrypt.hash(user.password, salt, function(err, hash){
//           if(err) return next(err);

//           user.password = hash;
//           next();
//       });
//   });
// });

let hashPassword = function(password, cb) {
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) throw err;

    bcrypt.hash(password, salt, function(err, hash) {
      if (err) return next(err);
      console.log("azhar", hash);
      cb(hash);
    });
  });
};
let saveUser = (data, cb) => {
  hashPassword(data["password"], function(hashedPassword) {
    let user = new User({
      name: data["name"],
      phoneNumber: data["phoneNumber"],
      username: data["username"],
      password: hashedPassword,
      plateNumber: data["plateNumber"],
      email: data["email"]
    });

    user.save(function(err) {
      if (err) cb(null, err);
      console.log("herrrrrrrrrrrrrreeeeee");
      console.log(user);
      cb(user, null);
    });
  });
};
//checking login password with database
let checkPassword = (data, cb) => {
  console.log('mustaf Data: ', data)
  User.findOne({ email: data.email }, function(err, res) {
    if (res) {
      bcrypt.compare(data.password, res.password, function(err, isMatch) {
        if (err) return cb(null, err);
        cb(isMatch, err);
      });
    }
    else{cb(false, null)}
  });
};

let savePark = (data, cb) => {
  let park = new Park({
    title: data["title"],
    description: data["description"],
    long: data["long"],
    lat: data["lat"],
    location: data["location"],
    image: data["image"],
    ownerId: data["ownerId"],
    price: data["price"],
    startTime: data["startTime"],
    endTime: data["endTime"]
  });
  park.save(function(err) {
    if (err) throw err;
    cb(true);
  });
};
let findParks = (query, cb) => {
  db.collection("parks")
    .aggregate([
      { $match: { location: query } },
      {
        $lookup: {
          from: "owners",
          localField: "ownerId",
          foreignField: "_id",
          as: "ownerdetails"
        }
      },
      { $project: { _id: 0 } }
    ])
    .toArray(function(err, res) {
      if (err) throw err;
      cb(res);
    });
};
let findOwnerParks = (query, callback) => {
  Park.find({ ownerId: query }, function(err, parks) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, parks);
    }
  });
};
module.exports.saveOwner = saveOwner;
module.exports.savePark = savePark;
module.exports.findParks = findParks;
module.exports.findOwnerParks = findOwnerParks;
module.exports.saveUser = saveUser;
module.exports.checkPassword = checkPassword;
module.exports.User = User;
