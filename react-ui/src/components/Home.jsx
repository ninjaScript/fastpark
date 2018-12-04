import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import SearchResults from "./SearchResults";
import {Button
} from "reactstrap";
import "../style/Home.css";

export default class Home extends Component {
  render() {
    return (
     
       
          <p>
            <Link to={{ pathname: "/SearchResults", query: "mahmoud" }}>
            <Button bsStyle="primary">Search</Button>
            </Link>
          </p>
       
    );
  }
}

// <Button bsStyle="primary">Search</Button>
//<Link to="/SearchResults">Search</Link>
