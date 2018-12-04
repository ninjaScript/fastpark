import React from 'react';
import { Button, Modal, ModalHeader,NavLink, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import $ from "jquery";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: ""
    };

    this.toggle = this.toggle.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event){
    this.setState({username : event.target.value})
    }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    console.log("hiiiii", this.state.username)
  }

 handleSUpClick = () => {
   const userObj ={
    name: this.state.username,
    email: "w@w.com ",
    plateNumber: "33218",
    phoneNumber: "0780122323",
    password: "walaa123",
    username: "hhhhhh"
  }
      $.ajax({
      url: "/signup",
      type: "POST",
      data: JSON.stringify(userObj),
      contentType: "application/json",
      success: function(data) {
        console.log("pleasssssss", data);
      },
      error: function(error) {
        console.error("errorrrrrr", error);
      }
    });
 }

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle}>Sign Up{this.props.buttonLabel}</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign up</ModalHeader>
          <ModalBody>
          <FormGroup>
          <Label for="text" onChange={this.updateInput} >User Name</Label>
          <Input type="text" name="name" id="fullName" placeholder="input your full name" />
        </FormGroup>
        <FormGroup>
          <Label for="text">Plate Number</Label>
          <Input type="plateNum" name="email" id="PlateNumber" placeholder="input your plate number" />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="input your Email" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="input your password" />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input type="phone" name="phone" id="phuneNum" placeholder="input your phone number" />
        </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Sign up</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
         
        </Modal>
      </div>
    );
  }
}

export default SignUp;