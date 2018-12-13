import React from "react";
import $ from "jquery";
import { Alert } from "reactstrap";
import { Link, browserHistory } from 'react-router';
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
      value: '',
      promotionCode: "",
      toggleButtonSpin: true
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
  handleOnChange(e) {
     this.setState({promotionCode: e.target.value})
  }

  toggleButtonSpinNow() {
    this.setState({
      toggleButtonSpin: !this.state.toggleButtonSpin,
    })
  }

  // get Discount from 
  getDiscount() {
     this.props.getDiscount(this.state.promotionCode);
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
          <Row stye = {{marginTop: 10}}>
            <Col sm={4}>
              <input
              style = {{width : "100%"}}
                type="text"
                name="promotionCode"
                value={this.state.promotionCode}
                className="FormControl"
                placeholder="Promotion Code"
                onChange={this.handleOnChange.bind(this)}
              />
            
            </Col>
            <Col sm ={1}>
              <i class="fa fa-check icon"></i>
            </Col>
            <Col sm={1}>
              <Button color= "info"
                onClick = {this.getDiscount.bind(this)}
              >
                {this.state.toggleButtonSpin && <i className="fa fa-spinner fa-spin"></i>}
                Apply
              </Button>
            </Col>
          </Row>
          <p style={{ marginTop: "30px" }}>
            <Button
              bsStyle="primary"
              className="btn btn-info"
              onClick={() => {
                browserHistory.push({
                  pathname: "/book",
                  state: { park: this.props.park }
                })
              }}
            >
              CONFIRM
              </Button>
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