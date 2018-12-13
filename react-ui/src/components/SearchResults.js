import React, { Component } from "react";
import ParksList from "./ParksList.js";
import GoogleMapsContainer from "./GoogleMapsContainer.js";
import { Container, Row, Col } from "reactstrap";
import $ from "jquery";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { parks: [] , noData: ""};
  }
  componentDidMount() {
    $("#searchtxt").show();
    $("#searchbtn").show();
    $("#root").css("background", "white");
    console.log("query from the home comp", this.props.location.query);
    $.ajax({
      url: "/parks",
      type: "POST",
      data: JSON.stringify({
        location: this.props.location.query,
        place: this.props.location.place
      }),
      contentType: "application/json",
      success: parks => {
        console.log(parks)
        if (parks.length > 0) {
          this.setState({ parks: parks, noData:"" });
        } else  {
          console.log("No Data Exist ");
          this.setState({noData:"No Parking Exist in this area" });
        }
      },
      error: function(error) {
        console.error("Error", error);
      }
    });
  }

  render() {
    return (
      <Container fluid style = {{marginTop: '30px'}}>
        <Row>
          <Col sm="7">
            <div>
              <ParksList parks={this.state.parks} />
              
            </div>

          </Col>
          <Col sm="5">
            <div className="sticky">
              <GoogleMapsContainer parks={this.state.parks} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchResults;
