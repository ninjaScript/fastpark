import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
      <Router>
        <div style={{ margin: 20 }}>
          <h1>Admain Dashboard</h1>
          <Row style={{ marginTop: 40 }}>
            <Col sm={3}>
              <ButtonGroup vertical>
                
                <Button outline color="info" size="lg" block>
                     <Link style= {{textDecoration: "none"}} to = "/AdminDashboard/PromotionCode">
                       Generate promotion code
                     </Link>
                </Button>
                <Button outline color="info" size="lg" block>
                  <Link style= {{textDecoration: "none", marginRight: 10}} to = "/AdminDashboard/MessageCustomers">
                    Message customer services 
                  </Link>
                  <Badge  pill> 12 </Badge>
                </Button>
                <Button outline color="info" size="lg" >Track transaction and Booking</Button>
                <Button outline color="info" size="lg" block>Owner</Button>
              </ButtonGroup>
            </Col>
            <Col sm = {9}>
                <Route exact path="/AdminDashboard/PromotionCode" component={PromotionCode} />
                <Route exact path="/AdminDashboard/MessageCustomers" component={MessageCustomers} />
            </Col>
          </Row>
        </div>
      </Router>
    )
  }

}