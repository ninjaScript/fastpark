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
  CardImg
} from "reactstrap";
import logo from '../style/logo.png';


class Footer extends React.Component {
  render() {
    return (
      <div className="lastFooter">
            <footer class="footer-distributed">
        <div class="footer-left">
          <img
              className="media3"
              src={logo}
              alignItem="center"
          />
         
          <p class="footer-company-name" style={{marginTop: "50px"}}>adCraft Advertising &copy; 2018</p>
        </div>
        <div className="footer-nextleft">
        <Row>
          <p class="footer-links">
            <li href="#">Home</li> 
            <li href="#">Blog</li>
            <li href="#">Pricing</li>
            <li href="#">About</li>
            <li href="#">Faq</li>
            <li href="#">Contact</li>
          </p>
          </Row>
        </div>
        <div class="footer-center">
        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>18 Hacker Haus Street</span> Amman, Jordan</p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p>+962 79641 8297</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">ParkIn@parkin.com</a></p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Our friendly hosts will welcome you with smile. With ParkIn, it’s easy to get rewarded
          </p>
          <div class="footer-icons">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>
          </div>
        </div>
        </footer>

    </div>
    );
  }
}
export default Footer;
