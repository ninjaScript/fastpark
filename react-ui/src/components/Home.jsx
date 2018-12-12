import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Form,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import "../style/Home.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import Footer from './Footer.js';
// adding google location library
import { GoogleComponent } from 'react-google-location'
import Geocode from "react-geocode";
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBAe4cdWlsIE8Rc4eXiMumZyJXK7Qn-7FE");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

// const API_KEY = "AIzaSyDpKwSgkSgxI2zQNYzRnulK7KQzltbc0SI"  // how to get key - step are below

class CardHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "all",
      place: null
    };
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  getAddress() {
    // this.getLocation(function(obj){
    //   console.log(obj)
    //   Geocode.fromLatLng(obj.lat, obj.long).then(
    //     response => {
    //       const address = response.results[0].formatted_address;
    //       console.log(address);
    //     },
    //     error => {
    //       console.error(error);
    //     }
    //   );
    // })
  }
// function to get the location 
  getLocation(cb) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        cb({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  // handle with on click on button to get the Location
  handleGetLoaction() {
    this.getLocation((obj) => {
      var location = obj.lat + " " + obj.long;
      this.setState({ place: obj, inputValue: location })
    })
  }


  // handlOnKeyPass () {
  //   this.setState({
  //     inputValue: ""
  //   });
  // }
  render() {
    console.warn(this.state.place);
    return (
      <body>
        <div>
          <Card id="homecard">
            <h4>Choose your Park anywhere any time .</h4>
            <CardBody>
              <label htmlFor="Where">Where</label>
              <Row >
                <Col sm={3}>
                  <Button className="btn"
                    color="primary"
                    onClick={this.handleGetLoaction.bind(this)}

                  >
                    My Location
                  </Button>
                </Col>
                <Col sm>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Where do you want to Park?"
                    value={this.state.inputValue}
                    onChange={evt => this.updateInputValue(evt)}
                  />
                </Col>
              </Row>
              <Form inline>
                <label htmlFor="inputEmail3" id="StartL">
                  Start
              </label>
                <label htmlFor="inputPassword4" id="EndL">
                  End
              </label>
              </Form>
              <Form inline>
                <input
                  type="text"
                  className="form-control"
                  id="Start"
                  placeholder="Select a Date & Time"
                />
                <input
                  type="text"
                  className="form-control"
                  id="End"
                  placeholder="Select a Date & Time"
                />
              </Form>
              <Link
                to={{
                  pathname: "/SearchResults",
                  query: this.state.inputValue.toLowerCase(),
                  place : this.state.place
                }}
              >
                <Button color="primary" id="btn" href="/searchresults">
                  Search
                </Button>
              </Link>
            </CardBody>
          </Card>
          
        </div>
        <div>
       
        </div>
       
      </body>
    );
  }
}
export default CardHome;
