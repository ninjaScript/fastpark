var assert = require("assert");
var request = require('supertest');
var db = require('../database/index.js');
// var app = require('../server/index.js');
var chai = require('chai');
// var expect = chai.expect;

describe('Server Test', function () {

 describe('Connection Test', function () {
   //test the connection with correct path
   it('Should have a response from the server ', function (done) {
     request('http://localhost:3000')
     .get('/').expect(200, done)
   })
   //test the connection with the wrong path
   it('should resived error from the server with wrong path ', function (done) {
     request('http://localhost:3000').get('/wrong').expect(404, done)
   })

 })
})
//Post test for create username in server 
describe('Fast parking requirement', function () {
	
	describe('POST User', function(done){
			it('Should Create Acount SignUp', function(done){
		// create account for the username
		request('http://localhost:3000').post("/signup")
		.expect(200)
		.send({
			"name": "Mustaf",
    		"phoneNumber": "079633333",
    		"username": "mustaf",
    		"password": "mmmmmm",
    		"plateNumber": "34567",
   			 "email": "m@m.com "
			})
		.end(done)
		});
	});
});

//This test for login for the users

describe('Fast parking requirement', function () {
	describe('POST login', function(done){
			it('Should login', function(done){
		// you can signin your account
		request('http://localhost:3000').post("/login")
		.expect(200)
		.send({
   			 "email": "m@m.com ",
   			 "password": "mmmmmm"
			})
		.end(done)
		});
	});
});


// this test for the saving database from mongo database.

describe('Database saved User:', function(done) {
   
      it('Saves a record to the database', function(done){
      // beforeEach(function(done) {
        // console.log(db.User)
        user = new db.User({
			"name": "TestAhmed",
    		"phoneNumber": "079633333",
    		"username": "mustaf",
    		"password": "ppp",
    		"plateNumber": "34567",
   			 "email": "m@m.com "
        });
        user.save(function(err) {
          if(err) console.log("mustafERRRR",err)
            console.log("saveeeed")
          done();
        });
      });

 });




//Post test for create Ownername in server 
describe('Fast parking requirement', function () {
	
	describe('POST Owner', function(done){
			it('Should Create Acount SignUp', function(done){
		// create account for the owner
		request('http://localhost:3000').post("/ownersignup")
		.expect(200)
		.send({
			"name": "Azhar",
    		"phoneNumber": "079888888",
    		"username": "Azhar",
    		"password": "12345",
   			 "email": "az@az.com "
			})
		.end(done)
		});
	});
});


// this test for the saving database from mongo database.

// describe('Database saved Owner:', function(done) {
   
// 	it('Saves a record to the database', function(done){
// 	// beforeEach(function(done) {
// 		owner = new db.Owner({
// 	"name": "Azhar",
// 		"phoneNumber": "079888888",
// 		"username": "Azhar",
// 		"password": "12345",
// 			"email": "az@az.com "
// 		});
// 		Owner.save(function(err) {
// 			if(err) console.log("error",err)
// 				console.log("the owner has been savedsaved")
// 			done();
// 		});
// 	});

// });