import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import SearchResults from "./SearchResults";
import {
  Jumbotron,
  Grid,
  ControlLabel,
  Form,
  FormGroup,
  Button,
  FormControl
} from "react-bootstrap";
import "../style/Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h3>Choose your Park anywhere any time .</h3>
          <label htmlFor="inputEmail4">Where</label>
          <input type="text" className="form-control" name="Street Name" />
          <Form inline>
            <label htmlFor="inputEmail3">Start</label>

            <label htmlFor="inputPassword4" id="EndL">
              End
            </label>
          </Form>
          <Form inline>
            <input
              type="text"
              className="form-control"
              id="Start"
              placeholder="Start"
            />
            <input
              type="text"
              className="form-control"
              id="End"
              placeholder="End"
            />
          </Form>
          <p>
            <Link to={{ pathname: "/SearchResults", query: "mahmoud" }}>
              Search
            </Link>
          </p>
        </Jumbotron>
        ;
      </Grid>
    );
  }
}

// <Button bsStyle="primary">Search</Button>
//<Link to="/SearchResults">Search</Link>
