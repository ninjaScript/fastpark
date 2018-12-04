import React from 'react';
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
 DropdownItem } from 'reactstrap';
 // import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
import HostCar from './HostCar.jsx';
import '../style/NavbarCom.css';
 // import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
 constructor(props) {
   super(props);

   this.toggle = this.toggle.bind(this);
   this.state = {
     isOpen: false,
     modal: false
   };
 }
 toggle() {
   this.setState({
     isOpen: !this.state.isOpen,
     modal: !this.state.modal
   });

 }


 render() {
   return (
     <div>
       <Navbar color="navbar-dark bg-dark" dark expand="md">
         <NavbarBrand href="/" className="NavbarBrand">ParkIn</NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>
             <NavItem>
             <HostCar/>
        
             </NavItem>
             <NavItem>
             <SignIn/>
             </NavItem>
             <NavItem>
             <SignUp/>
             </NavItem>
           </Nav>
         </Collapse>
       </Navbar>
     </div>
   );
 }
}