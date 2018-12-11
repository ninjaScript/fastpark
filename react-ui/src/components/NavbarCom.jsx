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
import $ from "jquery"
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import HostCar from "./HostCar.jsx";
import "../style/NavbarCom.css";
import signUp from "./SignUp.jsx";
import Book from "./book.js"
import logo from "../style/logo.png";

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
  componentDidMount() {
    $("#searchtxt").hide();
    $("#searchbtn").hide();
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      modal: !this.state.modal,
      
    });
  }

  logout(){
    this.setState({
      storage: window.localStorage.removeItem('user'),
    });

  }

  render() {
    return (
    <div>
      <div className="mynav">
        <Navbar color="navbar-dark bg-dark" dark expand="md" class="nav">
          <NavbarBrand href="/" className="NavbarBrand">
            <img src={logo} width="40px" height="40px" className="logo"/><h2 className="logoName">arkIn</h2>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <input
              id="searchtxt"
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button
              id="searchbtn"
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>

            <Nav className="ml-auto" navbar>
            <NavItem style={{'display':this.state.hideNav ? 'none': 'block'}}>
                <HostCar />
              </NavItem>
              <NavItem  style={{'display':this.state.hideNav ? 'none': 'block'}}>
                <SignIn handleClick = {this.handleLoginClick}/>
              </NavItem>
              <NavItem style={{'display': this.state.hideNav ? 'none':'block'}}>
                <SignUp />
              </NavItem>
              <NavItem>
              <NavLink style={{'display': this.state.hideNav === false ?  'none':'block'}} href={"/"} onClick={this.logout}>Log out{this.props.buttonLabel}</NavLink>
              </NavItem>
             <NavItem>
               <NavLink href="/About">About</NavLink>
             </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </div>
      
    );
  }
}
