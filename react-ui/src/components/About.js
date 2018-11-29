import React, { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }
  render() {
    return <div>Hi About</div>;
  }
}

export default About;
