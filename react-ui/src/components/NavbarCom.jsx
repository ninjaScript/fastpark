import React from "react";
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
  DropdownItem
} from "reactstrap";
import { Link } from 'react-router-dom'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import HostCar from "./HostCar.jsx";
import "../style/NavbarCom.css";
import signUp from "./SignUp.jsx";
import Book from "./book.js"
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    // this.signup = this.signup.bind(this);
    // //login
    // this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);


    
    this.state = {
      isOpen: false,
      modal: false,
       hideNav: window.localStorage.getItem('user')?true:false,
       //window.localStorage.getItem('user')==null,
       storage : window.localStorage.getItem('user')
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      modal: !this.state.modal,
      
    });
  }
    // signup(){
    //   this.setState({
    //     hideNav: !this.hideNav,
    //   });

    // }
    // login(){
    //   console.log("hhhhhhhhhhhhhh");
    //   this.setState({
    //     hideNav: !this.hideNav,
    //   });

    // }
    // logout(){
    //   console.log("hhhhhhhhhhhhhh");
    //   // this.setState({
    //   storage:localStorage.removeItem('user')
    //   });

    // }
  // }
  logout(){
    console.log("hhhhhhhhhhhhhh");
    this.setState({
      storage: window.localStorage.removeItem('user'),
    });

  }

  render() {
    return (
      <div className="mynav">
        <Navbar color="navbar-dark bg-dark" dark expand="md" className="nav">
          <NavbarBrand href="/" className="NavbarBrand">
            ParkIn
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <HostCar />
              </NavItem>
              { !this.hideNav?  
              <NavItem>
                <SignIn/>
              </NavItem>
              : null
            }
              { !this.hideNav?  
              <NavItem>
                <SignUp/>
              </NavItem>
              : null
            }
              { !this.hideNav?  
              <NavItem>
              <NavLink href={"/"} onClick={this.logout}>Log out{this.props.buttonLabel}</NavLink>
              </NavItem>
              : null
            }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
