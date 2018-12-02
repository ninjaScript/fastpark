import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./Home.js";
import "../App.css";
import SearchResults from "./SearchResults.js";
import $ from "jquery";
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
    //   url: "/addpark",
    //   type: "POST",
    //   data: JSON.stringify({
    //     title: "cheep park",
    //     description: "good place ",
    //     long: "35.8378158",
    //     lat: "31.9866246",
    //     location: "khalda",
    //     image: "",
    //     ownerId: "5c026ba1548c172ce9294538"
    //   }),
    //   contentType: "application/json",
    //   success: function(data) {
    //     console.log("pleasssssss", data);
    //   },
    //   error: function(error) {
    //     console.error("errorrrrrr", error);
    //   }
    // });
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
    //   }),
    //   contentType: "application/json",
    //   success: function(data) {
    //     console.log("pleasssssss", data);
    //   },
    //   error: function(error) {
    //     console.error("errorrrrrr", error);
    //   }
    // });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavLink to="/">home</NavLink>
          <NavLink to="/Search"> searchReasults</NavLink>
          <Route path="/" exact component={Home} />
          <Route path="/Search" exact component={SearchResults} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
