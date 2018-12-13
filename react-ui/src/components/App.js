import React, { Component } from "react";
import {Router, Route, browserHistory } from "react-router";
import Home from "./Home.jsx";
import "../App.css";
import Navbar from "./NavbarCom.jsx";
import SearchResults from "./SearchResults.js";
import $ from "jquery";
import SignUp from "./SignUp.jsx";
import About from "./About.jsx";
import SignIn from "./SignIn.jsx";
import OwnerDashboard from "./OwnerDashboard.jsx";
import Book from "./book";
import CustomerService from "./CustomerService.js";
import UserProfile from "./UserProfile.jsx"
import AdmainDashboard from "./AdminDashboard.js";
import PromotionCode from "./PromotionCode.jsx";


// import CardHome from './CardHome.jsx';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }
  
  
// render routes 
  render() {
    return (
        <div>
          <div>
            <Navbar />
          </div> 
          <div>
            {this.props.children}
          </div>
        </div>   
    )
  }
}

export default App;
