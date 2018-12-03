import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home.jsx";
import "../App.css";
import Navbar from "./NavbarCom.jsx";
import SearchResults from "./SearchResults.js";
import $ from 'jquery'
// import signUp from './signup.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
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

    //   $.ajax({
    //   url: "/signup",
    //   type: "POST",
    //   data: JSON.stringify({
    //     name: "walaa something",
    //     email: "w@w.com ",
    //     plateNumber: "33218",
    //     phoneNumber: "0780122323",
    //     password: "walaa123",
    //     username: "walaa11"
      
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
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={SearchResults} />
        
 
      </div>
    </Router>
    );
  }
}

export default App;
