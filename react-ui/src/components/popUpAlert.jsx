import React from "react";
import $ from "jquery";
import { Alert } from "reactstrap";
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardBlock,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import Book from "./book.js";
import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";

class AlertToConfirmBook extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: false,
      value: ''
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    if (this.state.show) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
          <h4>CONFIRM YOUR BOOK !</h4>
          <p>
            Are you sure you want to book this park?
            </p>
        
              <ControlLabel>If you have promotion code put it here to get discount</ControlLabel>
              <Row>
                <Col md ={3}>
                <input
                  type="text"
                  className="FormControl"
                  placeholder="Promotion Code"
                  onChange={this.handleChange}
                />
                </Col>
              <Col md={1}>
              <Button style={{ backgroundColor: "green", color: "white" }}>Apply</Button>
              </Col>
              </Row>
          <p style={{marginTop:"30px"}}>
            <Link to={{ pathname: "/book", park: this.props.park }} className="bookButton" >
              <Button bsStyle="primary" className="btn btn-info">CONFIRM</Button>
            </Link>
            <Button style={{ marginLeft: "100px" }} onClick={this.handleDismiss}>DISMISS</Button>
          </p>
        </Alert>
      );
    }

    return <Button onClick={this.handleShow}>Book Now</Button>;
  }
};

export default AlertToConfirmBook;

  // render(<AlertDismissable />)