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
import logo from '../style/Customer.png';


export default class CustomerService extends React.Component {
  render() {
    return (
      <Form className="Customer">
        <FormGroup col>
       
           
       
          <Col sm={10}>
          <Col className="headCustomer">
          <h1>Find out more today</h1>
            <h5>
                Fill out the form below for more information about how we can work with 
                you to drive higher revenues and improve customer experience at your car parks.
                Need help with your booking? Contact customer support here.
            </h5>
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
    );
  }
}

  