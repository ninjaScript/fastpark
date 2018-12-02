var mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost/test');
mongoose.connect(
  "mongodb://admin:admin123@ds119374.mlab.com:19374/fastpark",
  { useNewUrlParser: true }
);
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
  price: String
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
  // console.log("query", query);
  // Park.find(
  //   { location: query },

  //   function(err, res) {
  //     console.log("ress", res);
  //   }
  // );

  //db.parks.aggregate([{ $match: { location: "khalda" } }])

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
module.exports.saveOwner = saveOwner;
module.exports.savePark = savePark;
module.exports.findParks = findParks;
