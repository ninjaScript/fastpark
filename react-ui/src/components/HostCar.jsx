import React from "react";
import {
  Button,
  Modal,
  NavLink,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import {browserHistory} from "react-router";
import HostSignUp from "./HostSignUp.jsx";
import $ from "jquery";
import { format } from "url";
class HostCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLogin :false, 
      user : null
    };

    this.toggle = this.toggle.bind(this);
    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

// send post recuest from client to BE to signin as an owner
  login() {
    this.toggle()

    const ownerObj ={
      email: this.state.email,
      password: this.state.password
    }
    console.log('here signinownerloginownerloginownerlogin',ownerObj);
        $.ajax({
        url: "/ownerlogin",
        type: "POST",
        data: JSON.stringify(ownerObj),
        contentType: "application/json",
        success: (res) => {

          if (res.data) {
            this.setState({isLogin: true, user: res.data});
            window.localStorage.setItem("user", res)
            console.log("pleasssssss", res);
            browserHistory.push ({
              pathname: "/owner-dashboard",
              state: {owner: res.data}
            })
          } else {
            alert("this User not exist");
          }
         
        },
        error: function(error) {
          console.error("errorrrrrr", error);
        }
      });

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange (event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }


  render() {
    
    // if(this.state.isLogin){
    //   return (
    //     <Redirect to = {{
    //       pathname: "/OwnerDashboard",
    //       user: this.state.user
    //     }} />
    //   )
    // }

    return (
      <div>
        <NavLink onClick={this.toggle}>
          Host Car{this.props.buttonLabel}
        </NavLink>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Host Car</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="input your Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="input your password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <HostSignUp />
            {/*href="/ownerdashboard"*/}
            <Button color="primary" onClick={this.login} >
              Sign in
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default HostCar;
