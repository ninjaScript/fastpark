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
import Customer from '../style/Customer.png';


export default class CustomerService extends React.Component {
  render() {
    return (
      <div className="customerService">
          <div id="advertisement">
            <img src={Customer}/>
          </div>
          <div className="customer">
      <Form >    
        <FormGroup>
   
          <Col sm={10}>
          <Col className="headCustomer">
          <h1>Find out more today</h1>
            <p>
                Fill out the form below for more information about how we can work with 
                you to drive higher revenues and improve customer experience at your car parks.</p>
                <p>Need help with your booking? <span id="contact" link="">Contact customer support here.</span>
            </p>
            </Col>
            <Input type="text" name="name" id="exampleName" placeholder="Name" />
          </Col>
        </FormGroup>
        <FormGroup col>
      
          <Col sm={10}>
            <Input type="text" name="email" id="exampleEmail" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup col>

          <Col sm={10}>
            <Input type="number" name="number" id="Phone Number" placeholder="Phone Number"/>
          </Col>
        </FormGroup>
        <FormGroup col>
          <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" placeholder="Comments"/>
          </Col>
        </FormGroup>
        
        
    
       
        <FormGroup >
    
            <Button id="submit">SEND</Button>
          
        </FormGroup>
      </Form>
      </div>
      </div>
    );
  }
}

  