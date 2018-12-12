const mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost/test');
mongoose.connect(
  "mongodb://qusay97:nin123@ds251240.mlab.com:51240/park",
  { useNewUrlParser: true }
);

const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
const db = mongoose.connection;
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
db.on("error", function() {
  console.log("mongoose connection error");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
});

// schema for user
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
  }, 
  imgUrl: String,
  balance: Number
});

// shcema for favorite park
const FavParkSchema = new Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
  parkId: { type: mongoose.Schema.ObjectId, ref: "Park" },
}); 

// Schema for owner 
const OwnerSchema = new Schema({  
  name: String,
  phoneNumber: String,
  email: String,
  password: String,
  rating: String,
  image: String, 
});

// schema for Park
const ParkSchema = new Schema({
  title: String,
  description: String,
  long: String,
  lat: String,
  location: String,
  image: String,
  limit : Number,
  ownerId: { type: mongoose.Schema.ObjectId, ref: "Owner" },
  // userId: { type: mongoose.Schema.ObjectId, ref: "User" },
  price: String,
  rateAvg: Number,
  numFeed: Number,
  startTime: String,
  endTime: String
});

//schema for Booking
const BookingSchema = new Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
  parkId: { type: mongoose.Schema.ObjectId, ref: "Park" },
  startTime: String,
  endTime : String,
  price : Number,
  createdAt : {
    type : Date,
    default: Date.now()
  } 
})

//schema for prmotion code
const PromotionCodeSchema = new Schema({
  code: String,
  discount: Number, 
  startTime: Date, 
  endTime: Date
})

const CustomerServicesSchema = new Schema({
  name: String, 
  email: String,
  phoneNumber: String,
  comments: String
})

const User = mongoose.model("User", UserSchema);
const Owner = mongoose.model("Owner", OwnerSchema);
const Park = mongoose.model("Park", ParkSchema);
const Booking = mongoose.model("Booking", BookingSchema);
const FavPark = mongoose.model("FavPark", FavParkSchema);
const PromotionCode = mongoose.model("PromotionCode", PromotionCodeSchema)
const CustomerServices = mongoose.model("CustomerServices", CustomerServicesSchema);

// This function to save the message for customer services
const saveMessageCustomer = (data, callback) => {
  
  let message = new CustomerServices({
    name: data.name, 
    phoneNumber: data.phoneNumber, 
    email : data.email,
    comments: data.comments
  });
  message.save(function (err, user) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, user)
    }
  })
}

//saving user to Users table // updated
const saveUser = (data, cb) => {
  hashPassword(data["password"], function(err, hashedPassword) {
    if (err) console.log("HashPassword Error", err);
    let user = new User({
      name: data["name"],
      phoneNumber: data["phoneNumber"],
      username: data["username"],
      password: hashedPassword,
      plateNumber: data["plateNumber"],
      email: data["email"],
      imgUrl: data["imgUrl"]
    });
    user.save(function(err) {
      if (err) cb(null, err);
      cb(user, null);
    });
  });
};
//generating hash password using bcrypt
const hashPassword = function(password, cb) {
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) throw err;

    bcrypt.hash(password, salt, function(err, hash) {
      if (err) return cb(err, null);
      cb(null, hash);
    });
  });
};
//checking login password with database
const checkPassword = (data, cb) => {
  User.findOne({ email: data.email }, function(err, res) {
    
    if (res) {
      //here i change cb(isMatch,error) to cb(res, err) because i need to send user information in response
      bcrypt.compare(data.password, res.password, function(err, isMatch) {
        if (err) return cb(null, err);
        cb(res._id, err);
      });
    } else {
      cb(false, null);
    }
  });
}

//fix error log in as owner
const checkPasswordOwner = (data, cb) => {
  console.log(data,"OwnerOwnerOwnerOwnerOwnerOwnerdata")
  Owner.findOne({ email: data.email }, function(err, res) {
    
    if (res) {
      //here i change cb(isMatch,error) to cb(res, err) because i need to send user information in response
      // bcrypt.compare(data.password, res.password, function(err, isMatch) {
      //   if (err) return cb(null, err);
        cb(res._id, err);
    //  });
    } else {
      cb(false, null);
    }
  });
}
//saving owner to the Owners table
const saveOwner = (data, cb) => {
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

//saving parks to Parks table
const savePark = (data, cb) => {
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

//finding all parks based on the provided location
//using aggregation to get all the owner details from owners table
const findParks = (query, cb) => {
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
      }
    ])
    .toArray(function(err, res) {
      if (err) throw err;
      cb(res);
    });
};
//finding all ownerParks based on the provided ownerId
//using aggregation to get all the user details from users table
const findOwnerParks = (ownerId, callback) => {
  db.collection("parks")
    .aggregate([
      { $match: { ownerId: ObjectId(ownerId) } },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userdetails"
        }
      }
    ])
    .toArray(function(err, res) {
      console.log(res, err);
      if (err) callback(err, null);
      callback(null, res);
    });
};
//updating the park document with userId based on booking and checkout
const updatePark = (parkId, userId, cb) => {
  Park.updateOne({ _id: parkId }, { userId: userId }, function(err, res) {
    if (res) {
      cb(true, null);
    } else {
      cb(false, err);
    }
  });
};
const deletePark = function (parkId, cb){
  Park.deleteOne({"_id":ObjectId(parkId)},(err,res)=>{
    if (err) {
      console.log("delete error", err)
    } 
    cb(res)
  });
};


//updating the owner rating based on rating after checkout
const updateOwnerRating = (ownerId, rating, cb) => {
  console.log(rating,"rating come from FE")
  Owner.updateOne({ _id: ownerId }, { rating: rating }, function(err, res) {

    if (res) {
      cb(true, null);
    } else {
      cb(false, err);
    }
  });
};

const findUser = (user_id, cb) => {
  User.findOne({_id: user_id},
  function (err, user) {
    if(err){console.log('error', err)}
    cb(user)
  });
}




module.exports.findUser = findUser;
module.exports.saveOwner = saveOwner;
module.exports.savePark = savePark;
module.exports.findParks = findParks;
module.exports.findOwnerParks = findOwnerParks;
module.exports.saveUser = saveUser;
module.exports.checkPassword = checkPassword;
//checkPasswordOwner
module.exports.checkPasswordOwner = checkPasswordOwner;
module.exports.saveMessageCustomer = saveMessageCustomer;
module.exports.User = User;
module.exports.deletePark = deletePark;
module.exports.updatePark = updatePark;
// updateOwnerRating
module.exports.updateOwnerRating = updateOwnerRating;

