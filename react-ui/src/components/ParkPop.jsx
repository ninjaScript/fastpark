import React from 'react';
import { Button, Modal, Form, ModalHeader,FormText, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

class ParkPop extends React.Component {
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

        <Button onClick={this.toggle} color="primary">Add Park{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Park</ModalHeader>
          <ModalBody>
          <FormGroup>
          <Label for="exampleFile">Upload Image</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
          <Label for="text">Title</Label>
          <Input type="text" name="Title" id="Title" placeholder="input your Park Title" />
        </FormGroup>
        <FormGroup>
          <Label for="text">Description</Label>
          <Input type="text" name="Description" id="Description" placeholder="input your Park Description" />
        </FormGroup>
        <FormGroup>
          <Label for="text">Area</Label>
          <Input type="text" name="Area" id="Area" placeholder="input your Park Area" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="input your password" />
        </FormGroup>
        <Form inline>
        <label for="inputEmail3" id="StartL">Start</label>    
        <label for="inputPassword4" id="EndL">End</label>    
        </Form>
        <Form inline>
        <input type="text" class="form-control" id="Start" placeholder="Start Hour"/>
        <input type="text" class="form-control" id="End" placeholder="End Hour"/>
        </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add</Button>
            
          </ModalFooter>
         
        </Modal>
      </div>
    );
  }
}

export default ParkPop;