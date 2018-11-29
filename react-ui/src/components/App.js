import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import "../App.css";

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
/*

 return (
      <BrowserRouter>
        <div className="App">
          <NavLink to="/">home</NavLink>
          <NavLink to="/about"> About</NavLink>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
      </BrowserRouter>
    );

    return (
       <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {"This is "}
          <a href="https://github.com/mars/heroku-cra-node">
            {"create-react-app with a custom Node/Express server"}
          </a>
          <br />
        </p>
        <p className="App-intro">
          {this.state.fetching
            ? "Fetching message from API"
            : this.state.message}
        </p>
      </div>
    );

*/
