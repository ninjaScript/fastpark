import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home.jsx";
import "../App.css";
import Navbar from "./NavbarCom.jsx";
import SearchResults from "./SearchResults.js";
import $ from "jquery";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import OwnerDashboard from "./OwnerDashboard.jsx";
import Book from "./book"
import About from "./About.jsx";
// import CardHome from './CardHome.jsx';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }
  //"5c026ba1548c172ce9294538"
  componentDidMount() {
    // $.ajax({
    //   url: "/ownersignup",
    //   type: "POST",
    //   data: JSON.stringify({
    //     name: "mahmoud khudairi",
    //     phoneNumber: "0796880279",
    //     email: "mahmoudkhudairi@gmail.com",
    //     password: "123456",
    //     rating: "5",
    //     image: ""
    // fetch("/api")
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(`status ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then(json => {
    //     this.setState({
    //       message: json.message,
    //       fetching: false
    //     });
    //   })
    //   .catch(e => {
    //     this.setState({
    //       message: `API call failed: ${e}`,
    //       fetching: false
    //     });
    //   });
    // $.ajax({
    //   url: "/updatepark",
    //   type: "POST",
    //   data: JSON.stringify({
    //     parkId: "5c06f54d6eee5b6c7d86824e",
    //     userId: "5c079c1c91800c33dc838573"
    //   }),
    //   contentType: "application/json",
    //   success: function(data) {
    //     console.log("update", data);
    //   },
    //   error: function(error) {
    //     console.error("errorrrrrr", error);
    //   }
    // });
    // $.ajax({
    //   url: "/updatepark",
    //   type: "POST",
    //   data: JSON.stringify({
    //     parkId: "5c06f54d6eee5b6c7d86824e",
    //     userId: null
    //   }),
    //   contentType: "application/json",
    //   success: function(data) {
    //     console.log("update", data);
    //   },
    //   error: function(error) {
    //     console.error("errorrrrrr", error);
    //   }
    // });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/OwnerDashboard" component={OwnerDashboard} />
          <Route exact path="/SearchResults" component={SearchResults} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/About" component={About} />

        </div>
      </Router>
    );
  }
}

export default App;
