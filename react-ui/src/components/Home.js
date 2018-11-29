import React, { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }
  render() {
    return <div>Hi home</div>;
  }
}

export default Home;
