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
import {browserHistory} from 'react-router';
import $ from "jquery";
import Footer from "./Footer.js";
import CustomerService from "./CustomerService.js";
import WhySection from "./WhySection.js";
import background from "../style/bk.jpeg";
import WhatWeDo from "./WhatWeDo.js";
import WhoWeHelp from "./WhoWeHelp.js";
// adding google location library
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

  render() {
    console.warn(this.state.place);
    return (
      <div width="100%">
        <Card id="homecard" >
          <h4 style={{textAlign: "center"}}>Choose your Park anywhere any time</h4>
          <CardBody>
           
            <Row>
              <Col sm={3}>
                <Button 
                  color="primary"
                  onClick = {this.handleGetLoaction.bind(this)}
                >
                  My Location
                </Button>
              </Col>
              <Col sm = {8}>
                <input
                  type="text"
                  style={{width: "317px"}}
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
                type="time"
                className="form-control"
                id="Start"
                placeholder="Select a Date & Time"
              />
              <input
                type="time"
                className="form-control"
                id="End"
                placeholder="Select a Date & Time"
              />
            </Form>
        
              <Button 
                 color="primary" 
                 id="btn"
                 onClick = {() => {
                    browserHistory.push({
                      pathname: "/search-results",
                      state: { 
                        query: this.state.inputValue.toLowerCase(),
                        place: this.state.place
                      }
                    })
                 }}
              >
                Search
              </Button>
          </CardBody>
        </Card>
        <div>
          <img src={background} width="100%" />
          <WhoWeHelp/>
          <WhatWeDo />
          <WhySection />
          <CustomerService />
          <Footer />
        </div>
      </div>
    );
  }
}
export default CardHome;
