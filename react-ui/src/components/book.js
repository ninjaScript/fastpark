import React from "react";
import $ from "jquery";
import { Alert } from "reactstrap";
import Footer from "./Footer.js";

import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router";
// import RatingCom from "./Rating.jsx"
import Rating from "react-rating";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel);

class book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: "",
      lat: "",
      long: "",
      value: 0,
    };
    this.ratingCount =  0
  }


  handleChangeRate = e => {
    console.log(e);

    this.ratingCount = e
  }

// send post recuest from client to BE to update park data
  handleCheckOutClick = () => {
    this.toggle();
    $.ajax({
      url: "/updatepark",
      type: "POST",
      data: JSON.stringify({
        parkId: this.props.location.state.park._id,
        userId: null
      }),
      contentType: "application/json",
      success: function(data) {
        console.log("update", data);
      },
      error: function(error) {
        console.error("errorrrrrr", error);
      }
    });

    // send post recuest from client to BE to update rating.

    $.ajax({
      url: "/updateparkrating",
      type: "POST",
      data: JSON.stringify({
        rating: this.ratingCount,
        parkId: this.props.location.state.park._id
      }),
      contentType: "application/json",
      success: function(data) {
        console.log("update", data);
      },
      error: function(error) {
        console.error("Error", error);
      }
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  componentDidMount() {
    $("#root").css("background", "white");
    //////// this.props.location.park.ownerdetails[0]._id
    console.log("parkinfo:", this.props.location.state.park);

    this.getLocation(location => {
      this.setState({ lat: location.lat, long: location.long });
    });
  }

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

  render() {
    return (
      <Container fluid>
        <div className="directionBtn">
          <Alert color="success">Your booking has been confirmed!</Alert>
        </div>
        <div className="bookingCard">
        
          <Card>
            <CardBody>
              <CardTitle>
                Location: {this.props.location.state.park.location}
              </CardTitle>
              <CardSubtitle>
                Price: {this.props.location.state.park.newPrice ? this.props.location.state.park.newPrice: this.props.location.state.park.price} JD
              </CardSubtitle>
            </CardBody>
            <img
              width="100%"
              src={this.props.location.state.park.image}
              alt="Card image cap"
            />
            <CardBody>
              <CardText>
                Owner Name: {this.props.location.state.park.ownerdetails[0].name}
              </CardText>
              <CardText>
                Mobile: {this.props.location.state.park.ownerdetails[0].phoneNumber}
              </CardText>
              <CardText>
                Start Time: {this.props.location.state.park.startTime}
              </CardText>
              <CardText>End Time: {this.props.location.state.park.endTime}</CardText>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href={`http://maps.google.com/maps?saddr=${this.state.lat},${
                  this.state.long
                }&daddr=${this.props.location.state.park.lat},${
                  this.props.location.state.park.long
                }`}
                className="btn btn-info"
              >
                Direction
              </Button>{" "}
              <Button className="btn btn-success" onClick={this.toggle}>
                {this.props.buttonLabel}Check Out
              </Button>

              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
              >
                <ModalHeader toggle={this.toggle}>Check Out</ModalHeader>
                <ModalBody>
                  <div>
                    <p>Please rate the Owner park here</p>
                    <br/>
                    {/* <Rating  /> */}
                    <div>
                      {/* <Rating {...this.props} initialRating={this.state.value} />
        <button onClick={this.handleClick}>Reset</button> */}
                      <Rating
                        onChange={this.handleChangeRate}
                        emptySymbol={
                          <img src="../img/star-empty.png" className="icon" />
                        }
                        fullSymbol={
                          <img src="../img/star-full.png" className="icon" />
                        }
                      />
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    disabled={this.ratingCount}
                    color="primary"
                    onClick={this.handleCheckOutClick}
                  >
                    Check Out
                  </Button>{" "}
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        </div>
        <Footer/>
      </Container>
    );
  }
}

export default book;
