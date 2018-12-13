import React, { Component } from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import Home from "./components/Home.jsx";
import "./App.css";
import Navbar from "./components/NavbarCom.jsx";
import SearchResults from "./components/SearchResults.js";
import $ from "jquery";
import SignUp from "./components/SignUp.jsx";
import About from "./components/About.jsx";
import SignIn from "./components/SignIn.jsx";
import OwnerDashboard from "./components/OwnerDashboard.jsx";
import Book from "./components/book";
import CustomerService from "./components/CustomerService.js";
import AdmainDashboard from "./components/AdminDashboard.js";
import PromotionCode from "./components/PromotionCode.jsx";
import MessageCustomers from './components/MessageCustomers.jsx';
import App from "./components/App.js"
import UserProfile from './components/UserProfile.jsx'

// import CardHome from './CardHome.jsx';
class Routers extends Component {
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
      <Router history={browserHistory}>

        <Route exact path="/" component={App}>
           <IndexRoute component = {Home} />
          <Route exact path= {"home"} component={Home}></Route>
          <Route exact path={"search-results"} component={SearchResults} />
          <Route exact path= {"owner-dashboard"} component={OwnerDashboard} />
          <Route exact path={"book"} component={Book} />
          <Route exact path= {"About"} component={About} />
          <Route exact path= {"CustomerService"} component={CustomerService} />
          <Route exact path= {"user-profile"} component={UserProfile} />

          
          <Route exact path= {"admin-dashboard"} component={AdmainDashboard} >
            
          </Route>
          <Route exact path={"admin-dashboard/promotion-code"} component={PromotionCode} />
          <Route exact path= {"admin-dashboard/message-customers"} component={MessageCustomers} />
        </Route>
      </Router>
    );
  }
}

export default Routers;
