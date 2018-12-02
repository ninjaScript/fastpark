const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const db = require('../database/index.js'); 
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.post("/signup" , function(req, res){
    // console.log(req);
  
      // username: req.body.username,
      // password: req.body.password,
      // name: req.body.name,
      // plateNumber: req.body.plateNumber,
      // email: req.body.email,
      // phoneNumber: req.body.phoneNumber
    

    db.saveUser(req.body, function(user){
      console.log("server");
      console.log(user);
      if(user){
        res.send(user);
      }
    }) 
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
