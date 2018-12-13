import React from "react";
import RowTablePromo from "./RowTablePromo.jsx"
import $ from 'jquery';
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
  CardText,
  CardSubtitle
} from "reactstrap";
export default class ItemsMessageCustomers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Card style = {{padding: 10 , width: "70%", margin: 10}}>
        <CardBody>
          <Row>
            <Col sm ={10}>
              <p><CardTitle>{"Name: "+ this.props.message.name}</CardTitle></p>
              <p> <CardSubtitle>{"Email: "+ this.props.message.email}</CardSubtitle></p>
              <p> <CardSubtitle> {"Phone number: "+ this.props.message.phoneNumber}</CardSubtitle></p>
            </Col>
            <Col sm = {2}>
              <label>{"Date: "+ this.props.message.date}</label>
            </Col>
          </Row>
          <Row>
            <CardText>
               <h5>Message</h5>
              {
                this.props.message.comments
              }
            </CardText>
          </Row>
          <Row>
            <Button style = {{marginTop: 25 }} color = "danger">Delete</Button>
          </Row>
        </CardBody>
      </Card>
    )
  }

}