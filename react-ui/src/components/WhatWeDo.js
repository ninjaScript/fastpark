import React from 'react';
import "../style/Home.css";
import {
  Form,
  Input,
  Label,
  FormGroup,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  CardImg,
  Col, 
  FormText
} from "reactstrap";
import Mark from '../style/mark.png';
import $ from "jquery";

// Customer Service Render Part, Organize the front-end version with styling from Home css file
// Adding some image for marketing appearance of website as well as form in order for the user to use if they need assistance in there booking
// Added in form such as name, email and information needed to better understand the user such as there comments
export default class WhatWeDo extends React.Component {
  render() {
    return (
    
      <div className="whatWeDo" width="100%">
        <h1 style={{textAlign: "center", marginTop: "40px"}}>Our Work</h1>
          <div>
            <img src={Mark} height="500px" width="800px" style={{marginLeft: "900px", marginTop: "100px"}}/>
          </div>
          <div className="customer1" style={{marginLeft: "300px"}}>
                <Form>    
                    <FormGroup>
                       <p>ParkIn are experts in <b>parking management with data content information</b>. With our leading solution, 
                           we <b>widen returns</b> from utilised car parks at offices, retail centres – and <b>transform payments</b> with the 
                           Jordan’s favourite parking app.</p>
                           
                           <p>Using <b>award-winning technology</b> and unique yield management techniques, our flexible parking management service is trusted at <b>more 
                           Jordan sites</b>: from single spaces to multi storey car parks.</p>
                           
                           <p>ParkIn’s car park technology can be precisely 
                           tailored to your specific needs – either by integrating into your existing setup to <b>drive additional 
                           value</b>, or by managing entire sites <b>end-to-end</b></p>
                           
                           <p>Find out how you could benefit with a <b>free consultation today</b>.</p>
                           <Button className="getIn" href = "/CustomerService" style={{backgroundColor: "#b43932"}}>Get in Touch</Button>
                    </FormGroup>
                </Form>
           </div>
      </div>
    );
  }
}

  