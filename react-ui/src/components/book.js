import React from "react";
import $ from "jquery";
import { Alert } from "reactstrap";

import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

  import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'
  

class book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: "",
      lat: "",
      long: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    $("#root").css("background", "white");
    console.log("parkinfo:", this.props.location.park);

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
              
              <Alert color="success">

                Your booking have been confirmed!
              </Alert>
            </div>

             <div>
      <Card>
        <CardBody>
        <CardTitle>Location: {this.props.location.park.location}</CardTitle>
          <CardSubtitle>Price: {this.props.location.park.price}</CardSubtitle>
        </CardBody>
        <img width="100%" src={this.props.location.park.image} alt="Card image cap" />
        <CardBody>
          <CardText>Owner Name: {this.props.location.park.ownerdetails[0].name}</CardText>
          <CardText>Mobile: {this.props.location.park.ownerdetails[0].phoneNumber}</CardText>
          <CardText>Start Time: {this.props.location.park.startTime}</CardText>
          <CardText>End Time: {this.props.location.park.endTime}</CardText>
          <Button target="_blank" rel="noopener noreferrer" href={`http://maps.google.com/maps?saddr=${this.state.lat},${this.state.long}&daddr=${this.props.location.park.lat},${this.props.location.park.long}`} className="btn btn-info">Direction</Button>
          <Button className="btn btn-success" onClick={this.toggle}>{this.props.buttonLabel}>Check Out</Button>

       
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>






        </CardBody>
      </Card>
    </div>
      </Container>
    );
  }
}

export default book;


