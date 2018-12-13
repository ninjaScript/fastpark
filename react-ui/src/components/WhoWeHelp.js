import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../style/Home.css";
import com from "../style/com.jpeg";
import employee from "../style/employee.jpeg";
import public1 from "../style/public1.jpeg";


export default class WhoWeHelp extends React.Component {
  render() {
    return (
        <div className="mainTop" style={{backgroundColor: "#f4f4f4"}}>
      <Container>
        <h1 style={{textAlign: "center", padding: "50px", marginBottom: "-50px"}}> Who We Help </h1>
        <Row>
          <Col  style={{marginTop: "100px"}}><img style={{borderRadius: "15px"}}width="300px" height="300px" src={com}/>
          <h2 style={{textAlign: "justify", marginTop: "10px"}}>Commercial Property</h2><p style={{textAlign: "justify", width: "300px"}}>We help property owners and landlords across the Jordan to unlock the value of their parking assets – from underused office car parks to empty land awaiting development.</p></Col>
          <Col style={{marginTop: "100px"}}><img style={{borderRadius: "15px"}}width="300px" height="300px" src={employee}/>
          <h2 style={{textAlign: "center", marginLeft: "-40px", marginTop: "10px"}}>Employees and Public Sectors</h2><p style={{textAlign: "justify", width: "300px"}}>Parking operators choose ParkIn to provide an easier way for customers to pay. We also tap into our million users to drive awareness of your car park and fill your empty spaces.</p></Col>
          <Col style={{marginTop: "100px"}}><img style={{borderRadius: "15px"}}width="300px" height="300px" src={public1}/>
          <h2 style={{marginLeft: "50px", marginTop: "10px"}}>Public Sector</h2><p style={{textAlign: "justify", width: "300px"}}>We supply 5-star rated mobile payments and management to the public sector. Unlike other providers, we offer a positive driver-first service – and will never charge unexpected fees.
          </p>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}