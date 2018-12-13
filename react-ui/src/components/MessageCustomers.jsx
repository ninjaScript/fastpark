import React from "react";
import RowTablePromo from "./RowTablePromo.jsx"
import $ from 'jquery';
import {
  Card,
  CardBody,
  Table,
  Button,
  Row,
  Col,
  Badge
} from "reactstrap";
import ItemsMessageCustomers from './ItemsMessageCustomers.jsx';

export default class MessageCustomers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.getAllMessages();
  }

  // function to genreate promotion code
  getAllMessages() {
    $.ajax({
      url: "/customer-services",
      type: "GET",
      contentType: "application/json",
      success: res => {
        if (res) {
          console.log(res)
          this.setState({ data: res });
        }
      },
      error: function (error) {
        console.error("Error", error);
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Customer Services <Badge  pill color= "success"> {this.state.data.length} </Badge></h2>
        <Row>
          {
            this.state.data.map((message) => (
              <ItemsMessageCustomers message = {message} />
            ))
          }
        </Row>
      </div>
    )
  }

}