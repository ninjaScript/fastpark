import React from "react";
import {
  Button,Modal,Form, ModalHeader,FormText,ModalBody,ModalFooter,FormGroup,Label,
  Input, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Row, Container
} from "reactstrap";
import logo from "../style/logo.png";
import car from "../style/coolcar.jpg";
import family from "../style/family.jpg";
import line from "../style/line.png";
import hello1 from "../style/hello1.png";

// improved owners profile for better implementation of the website
// this part will add parking information , uploading for users to choose. function such as modal also implemented so that the owner can initialize there product
// rendering all the files and basic functionality is the bases of this component 
class ParkPop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      imgSrc: null,
      selectedFile: null
    };
    this.acceptedFileTypes = "image/x-png, image/png, image/jpg,image.jpeg";
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleBtnClick = () => {
    this.props.handleAddClick(this.state.selectedFile, done => {
      if (done) {
        this.toggle();
      }
    });
  };
  fileSelectedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
    var reader = new FileReader();

    reader.onload = e => {
      this.setState({ imgSrc: e.target.result });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  render() {
    return (
      <div>

 <Navbar class="navbar navbar-transparent" style={{marginTop: "-70px"}}light>

          <NavbarBrand style={{marginLeft: "-110px"}} href="/" className="mr-auto"><img src={logo} width="40px" height="40px" className="logo"/><h2 className="logoName">arkIn</h2></NavbarBrand>
            <Nav>
              <NavItem>
                <NavLink id="bt" style={{color: "#b43932"}} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="bt" style={{color: "#b43932"}}  href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="bt" style={{color: "#b43932"}}  href="#">Need Assistance</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        <img src = {car} className="profile1" />

        <Card style={{height: "550px", marginTop: "-350px", width: "1000px", marginLeft: "300px"}}>
        <a  style={{marginTop: "20px", marginLeft: "50px"}} href="#"><i style={{color: "#b43932"}} className="fa fa-star fa-lg"></i>OWNER</a>
                <div className="imgdiv1" >
                
                  <img className="userImage"  src={family} alt="User Image" />
                    </div>
                  <Col className="usercard">
                      <CardBody>
                          <img src={hello1} width="100px" height="100px"/>
                            <CardTitle><span className="im">I'm</span><span className="myName"><b>Who I. am</b></span></CardTitle>
                            <CardSubtitle style={{marginTop: "-10px"}}>Galaxy Police</CardSubtitle>
                          <img src={line} style={{marginTop: "-90px", marginLeft: "-90px"}}/>
                        <div style={{marginTop: "-80px"}} >
                          <CardSubtitle><b>Address</b><p  id="info">Planet Ultron</p ></CardSubtitle>
                          <CardSubtitle><b>Email</b> <p  id="info">avengers@avengers.com</p ></CardSubtitle>
                          <CardSubtitle><b>Phone Number</b><p  id="info">+967 44456 9765</p ></CardSubtitle>
                          <button className="edit1" href="#">Edit</button>
                        </div>
                      </CardBody>
                        <div className="mediaBar" style={{backgroundColor: "#006789", marginTop: "100px", marginLeft: "-395px"}}>
                        <div style={{marginLeft: "350px", padding: "20px"}}>
                            <a className="iconTo" href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a className="iconTo" href="#"><i className="fa fa-instagram fa-lg"></i></a>
                            <a className="iconTo" href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a className="iconTo" href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                        </div>
                        </div>
                  </Col>
              </Card>  
        <Button id="addbtn" onClick={this.toggle} style={{backgroundColor:"#006789"}}>
          Add Park{this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Park</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label htmlFor="addParkImageFile">Upload Image</Label>
              <input
                type="file"
                name="file"
                id="addParkImageFile"
                accept={this.acceptedFileTypes}
                multiple={false}
                onChange={this.fileSelectedHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="addParkTitle">Title</Label>
              <Input
                type="text"
                name="Title"
                id="addParkTitle"
                placeholder="Insert Park Title"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="addParkDescription">Description</Label>
              <Input
                type="text"
                name="Description"
                id="addParkDescription"
                placeholder="Insert Park Description"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="addParkArea">Area</Label>
              <Input
                type="text"
                name="Area"
                id="addParkArea"
                placeholder="Insert Park Area"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="addParkPrice">Price</Label>
              <Input
                type="text"
                name="Price"
                id="addParkPrice"
                placeholder="Insert Price"
              />
            </FormGroup>
            <Form inline>
              <label htmlFor="addParkStart" id="StartL">
                Start
              </label>
              <label htmlFor="addParkEnd" id="EndL">
                End
              </label>
            </Form>
            <Form inline>
              <input
                type="time"
                className="form-control"
                id="addParkStart"
                placeholder="Start Hour"
              />
              <input
                type="time"
                className="form-control"
                id="addParkEnd"
                placeholder="End Hour"
              />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleBtnClick}>
              Add
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ParkPop;
