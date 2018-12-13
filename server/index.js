const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("../database/index");
const PORT = process.env.PORT || 5000;
const multer = require("multer");

const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Answer API requests.

///////////////////////
const storage = multer.diskStorage({
   destination: function(req, file, cb){
    cb(null, __dirname + '/../react-ui/public/Userimg')
   },
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myImage");


// app.post('/signup', upload, (req, res) => {
//   console.log(req.file)
// });

app.post("/signup", upload, function (req, res) {
  console.log(req.body);
  console.log(req.file)
  // recive the data from the formData request;
  let user = JSON.parse(req.body.user);
  // make link to image to save in database
  let imgUrl = 'http://' + req.get('host') + '/Userimg/' + req.file.filename;
  user.imgUrl = imgUrl;
  db.saveUser(user, function (user, err) {
    if (err) console.log("error", err);
      console.log("user", user);
    if (user) {
      res.send(user);
    }
  });
});

// handle login post request from client
app.post("/login", function (req, res) {
  db.checkPassword(req.body, function (err, result) {
    if (err) console.log("erreeer", err);
    console.log(result, "passRespassRespassRespassRespassRespassRes");

    res.send(result);
  });
});

app.post('/customer-services', function (req, res) {
  console.log("admin", req.body);
  var user = {
    "name": req.body.name,
    "email": req.body.email,
    "phoneNumber": req.body.phoneNumber,
    "comments": req.body.comments
  }
  db.saveMessageCustomer(user, function(error, result) {
    if (error) {console.log("error", error)
  } else {
    console.log("Success!", result)
  }
  });
})

//handle GET requests for parks listings
app.post("/parks", function(req, res) {
  if (req.body.location) {
    db.findParks(req.body.location, function (parks) {
      res.json(parks);
    });
  } else {
    db.findOwnerParks(req.body.ownerId, function (err, parks) {
      if (err) console.log("findOwnerParksERROR", err);
      res.json(parks);
    });
  }
});
//handle owner Creation from /signup post request
app.post("/ownersignup", function (req, res) {
  db.saveOwner(req.body, function (owner, err) {
    if (err) {
      throw err;
    }
    console.log("saved owner");
    res.send({
      ownerId: owner._id,
      name: owner.name,
      phoneNumber: owner.phoneNumber,
      email: owner.email
    });
  });
});

//handle owner Creation from /logIn post request
app.post("/ownerlogin", function (req, res) {
  console.log(req.body)
  db.checkPasswordOwner(req.body, function (result, match) {
    console.log(match);
    //console.log(result,"passRes");
    if (match) {
      res.send({
        data: {
          ownerId: result._id,
          name: result.name,
          phoneNumber: result.phoneNumber,
          email: result.email
        }
      });
    } else {
      res.send({
        data: false
      });
    }

  });
});

//handle adding new park listing by owners from /addpark post request
app.post("/addpark", function (req, res) {
  console.log(req.body)
  db.savePark(req.body, function (done, err) {
    if (err) {
      throw err;
    }
    console.log("saved park");
    res.send(done);
  });
});

app.delete("/deletepark", function (req, res) {
  db.deletePark(req.body.parkId, function (done) {
    res.send(done);
  })
})

app.post("/updatepark", (req, res) => {
  db.updatePark(req.body.parkId, req.body.userId, (done, err) => {
    if (err) console.log("updateError", err);
    res.send(done);
  });
});

//handle adding rating coming from user after checking out from //updateownerrating post request
app.post("/updateownerrating", (req, res) => {
  db.updateOwnerRating(req.body.ownerId, req.body.rating, (done, err) => {
    if (err) console.log("updateError", err);
    res.send(done);
  });
});
// post request to save the promotion code in db
app.post('/add-promotion', function(req, res){
  db.savePromotionCode(req.body ,function(promotionCode){
    res.send(promotionCode);
  })
});

// get request to retrive all promotionCode
app.get('/promotion', function(req, res){
  db.getAllpromotion(function(err, result){
    res.send(result);
  })
})

// this to update code promotion availablity
app.post('/update-promotion', function(req, res){
  console.log(req.body)
   db.updateStatePromotionCode(req.body, function(ok, result){
     if (ok) {
       res.send(true);
     }
   })
})

// use promotion code and get discount
app.post('/use-promotion', function(req, res){
  db.usePromotionCode(req.body.code ,function(err, result){
    console.log(result)
    res.send(result);
  })
});

// get request to get messages for customer services 
app.get('/customer-services', function(req, res){
  db.getAllMessage(function(err, result){
    if(result) {
      res.send(result)
    } 
  })
})



///////////////////

// All remaining requests return the React app, so it can handle routing.
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../react-ui/build", "index.html"));
});


app.listen(PORT, function () {
  console.error(
    `Node cluster worker ${process.pid}: listening on port ${PORT}`
  );
});


