import React from "react";
import {Router, Route, Link, browserHistory } from "react-router";

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
  Col,
  ButtonGroup,
  Badge
} from "reactstrap";
import PromotionCode from "./PromotionCode.jsx";
import MessageCustomers from './MessageCustomers.jsx';


export default class AdmainDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
        <div style={{ margin: 20 }}>
          <h1>Admain Dashboard</h1>
          <Row style={{ marginTop: 40 }}>
            <Col sm={3}>
              <ButtonGroup vertical>
                
                <Button outline color="info" size="lg" block
                 onClick = {() => {
                  browserHistory.push({
                    pathname: '/admin-dashboard/promotion-code',
                  })
                 }}
                >
                  {/* <Link style= {{textDecoration: "none"}} to = "/admin-dashboard/promotion-code"></Link> */}
                   Generate promotion code
                     
                </Button>
                <Button outline color="info" size="lg" block
                 onClick = {() => {
                  browserHistory.push({
                    pathname: '/admin-dashboard/message-customers',
                  })
                 }}
                >
                   Message customer services 
                  {/* <Link style= {{textDecoration: "none", marginRight: 10}} to = "/admin-dashboard/message-customers">
                    Message customer services 
                  </Link> */}
                  <Badge  pill> 12 </Badge>
                </Button>
                <Button outline color="info" size="lg" >Track transaction and Booking</Button>
                <Button outline color="info" size="lg" block>Owner</Button>
              </ButtonGroup>
            </Col>
            <Col sm = {9}>
            
                {/* <Route exact path={"admin-dashboard/promotion-code"} component={PromotionCode} />
                <Route exact path= {"admin-dashboard/message-customers"} component={MessageCustomers} /> */}
             
            </Col>
          </Row>
        </div> 
    )
  }

}