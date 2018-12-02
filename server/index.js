const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const db = require("../database/index");
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${
        worker.process.pid
      } exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, "../react-ui/build")));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  // Answer API requests.
  //handle GET requests for parks listings
  app.post("/parks", function(req, res) {
    db.findParks(req.body.location, function(parks) {
      res.json(parks);
    });
  });
  //handle owner Creation from /signup post request
  app.post("/ownersignup", function(req, res) {
    db.saveOwner(req.body, function(done, err) {
      if (err) {
        throw err;
      }
      console.log("saved");
      res.send("done");
    });
  });
  //handle adding new park listing by owners from /addpark post request
  app.post("/addpark", function(req, res) {
    db.savePark(req.body, function(done, err) {
      if (err) {
        throw err;
      }
      console.log("saved");
      res.send("done");
    });
  });
  // All remaining requests return the React app, so it can handle routing.
  app.get("*", function(request, response) {
    response.sendFile(
      path.resolve(__dirname, "../react-ui/build", "index.html")
    );
  });

  app.listen(PORT, function() {
    console.error(
      `Node cluster worker ${process.pid}: listening on port ${PORT}`
    );
  });
}
