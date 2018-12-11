import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Form,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../style/Home.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import Footer from "./Footer.js";
import CustomerService from "./CustomerService.js";
import WhySection from "./WhySection.js";
import background from "../style/bk.jpeg";


class CardHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  render() {
    return (
<div>
        <Card id="homecard" >
          <h4>Choose your Park anywhere any time .</h4>
          <CardBody>
            <label htmlFor="Where">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Where do you want to Park?"
              value={this.state.inputValue}
              onChange={evt => this.updateInputValue(evt)}
            />
            <Form inline>
              <label htmlFor="inputEmail3" id="StartL">
                Start
              </label>
              <label htmlFor="inputPassword4" id="EndL">
                End
              </label>
            </Form>
            <Form inline>
              <input
                type="text"
                className="form-control"
                id="Start"
                placeholder="Select a Date & Time"
              />
              <input
                type="text"
                className="form-control"
                id="End"
                placeholder="Select a Date & Time"
              />
            </Form>
            <Link
              to={{
                pathname: "/SearchResults",
                query: this.state.inputValue.toLowerCase()
              }}
            >
              <Button color="primary" id="btn" href="/searchresults">
                Search
              </Button>
            </Link>
          </CardBody>
        </Card>
        <div>
          <img src={background}/>
         <WhySection/>
         <CustomerService/>
         <Footer/>
        </div>
        </div>
    );
  }
}
export default CardHome;
