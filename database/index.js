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
  ownerId: String
});

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

const Owner = mongoose.model("Owner", OwnerSchema);
const Park = mongoose.model("Park", ParkSchema);
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

let hashPassword = function(password,cb){
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
      if(err) throw err;

      bcrypt.hash(password, salt, function(err, hash){
          if(err) return next(err);
          console.log("azhar", hash);
          cb(hash) ;
      });
  });
}
let saveUser = (data, cb) => {
  
  hashPassword(data["password"],function(hashedPassword){
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
  })
};

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

let savePark = data => {
  let park = new Park({
    title: data["title"],
    description: data["description"],
    long: data["long"],
    lat: data["lat"],
    location: data["location"],
    image: data["image"],
    ownerId: data["ownerId"]
  });
  park.save(function(err) {
    if (err) throw err;
    console.log("saved");
  });
};

let findParks = (query, cb) => {
  console.log("query", query);
  Park.find(
    { location: query },

    function(err, res) {
      console.log("ress", res);
    }
  );

  //db.parks.aggregate([{ $match: { location: "khalda" } }])
};

module.exports.saveOwner = saveOwner;
module.exports.savePark = savePark;
module.exports.findParks = findParks;
module.exports.saveUser = saveUser;
