import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import "../App.css";
import { Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch("/api")
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      })
      .catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Button bsStyle="primary">Primary</Button>
          <NavLink to="/">home</NavLink>
          <NavLink to="/about"> About</NavLink>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
