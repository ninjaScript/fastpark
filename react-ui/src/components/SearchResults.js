import React, { Component } from "react";
import ParksList from "./ParksList.js";
import GoogleMapsContainer from "./GoogleMapsContainer.js";
import { Grid, Col, Row } from "react-bootstrap";
import $ from "jquery";
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { parks: [] };
  }
  componentDidMount() {
    $.ajax({
      url: "/parks",
      type: "POST",
      data: JSON.stringify({ location: "khalda" }),
      contentType: "application/json",
      success: parks => {
        this.setState({ parks });
      },
      error: function(error) {
        console.error("errorrrrrr", error);
      }
    });
  }
  render() {
    if (this.state.parks) {
      return (
        <div>
          <Grid>
            <Row className="show-grid">
              <Col lg={6} mdPush={6}>
                <GoogleMapsContainer parks={this.state.parks} />
              </Col>
              <Col lg={6} mdPull={6}>
                <ParksList parks={[1, 2, 3]} />
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }
}
export default SearchResults;
