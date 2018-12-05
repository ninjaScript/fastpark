import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App.js";
// import SignIn from "../components/SignIn.jsx";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
// it('calls onsubmit with username and password', () => {
// 	const onClick = jest.fn()
// 	const container = document.createElement('div')
// 	ReactDOM.render(<login onClick={onClick} />, container)
// 	const form = container.querySelector('form')
// 	const {username, password} = form.elements
// 	username.value = 'chucknorris',
// 	password.value = 'I do not need a password'
// 	form.dispathEvent(new window.Event('submit'))
// 	expect(onClick).toHaveBeenCalledTimes()
// 	expect(onClick).toHaveBeenCalledTimes({
// 		username: username.value,
// 		password: password.value,
// 	})
//   ReactDOM.render(<App />, div);
// })

// it('should call Login upon click', () => {
//   const wrapper = shallow(<Login ...props/>);
//   const button = wrapper.find('NavLink')
//   console.log('bbbb',button)
//   button.simulate('click')
//   expect(props.toggle).toHaveBeenCalled()
// })

  // it('should call download file', () => {
  //   const callShowLoader = jest.fn()
  //   const wrapper = shallow(<DownloadFile {...props} callShowLoader={callShowLoader} />)
  //   wrapper.find('button').simulate('click')
  //   expect(callShowLoader).toHaveBeenCalled()
  // })

//   var request = require('supertest');
// // var app = require('../app');
// console.log(app);
// describe("homepage", function () {
// 	it("Choose your Park anywhere any time", function(done){
// 		request('http://localhost:3000/').get("/")
// 		.expect(200)
// 		.expect(/Choose your Park anywhere any time/,done);
// 	})
// })




  var request = require('supertest');
// var app = require('../app');
// console.log(app);
describe("homepage", function () {
	it("Choose your Park anywhere any time", function(done){
		request('http://localhost:3000/').get("/")
		.expect(200)
		.expect(/Choose your Park anywhere any time/,done);
	})
})