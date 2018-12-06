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

import HostSignUp from "./HostSignUp.jsx";
class HostCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
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
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="input your password"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <HostSignUp />
            <Button color="primary" onClick={this.toggle}>
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
