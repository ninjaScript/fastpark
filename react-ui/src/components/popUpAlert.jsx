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
  Button
} from "reactstrap";
import Book from "./book.js";
import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";

class AlertToConfirmBook extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleDismiss = this.handleDismiss.bind(this);
      this.handleShow = this.handleShow.bind(this);
  
      this.state = {
        show: false
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
            <p>
            <Link to={{pathname:"/book", park: this.props.park}} className="bookButton" >
              <Button bsStyle="primary" className="btn btn-info">CONFIRM</Button>
            </Link>
              <Button onClick={this.handleDismiss}>DISMISS</Button>
            </p>
          </Alert>
        );
      }
  
      return <Button onClick={this.handleShow}>Book Now</Button>;
    }
  };

  export default AlertToConfirmBook;

  // render(<AlertDismissable />)