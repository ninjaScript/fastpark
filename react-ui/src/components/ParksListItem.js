import React from "react";
import { Component } from "react";
import { Link } from 'react-router';
import $ from "jquery";

// import Example from './signup';
import { Container, Row, Col } from "reactstrap";


// Import Sign up to use it inside Booking
import SignUp from "./SignUp.jsx";
import Book from "./book.js";
import AlertToConfirmBook from "./popUpAlert.jsx";

import {
  Card,
  CardImg,
  CardBlock,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge
} from "reactstrap";

// import { Card, CardBlock, Button, CardTitle, CardText, CardImg } from 'reactstrap';
// import mapCard from './mapCard'

class ParksListItem extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      message: null,
      fetching: true,
      modalsignUp: false,
      modalBook: false,
      park : props.parkInfo,
      promotion :{},
      price : 0
    };

    // this.toggle = this.toggle.bind(this);
    // this.changeRoute = this.changeRoute.bind(this);
    // this.toggleSignUp = this.toggleSignUp.bind(this);
    // this.toggleBook = this.toggleBook.bind(this);
  }

  
//   toggleSignUp() {
//     this.setState({
//       modal: !this.state.modalsignUp
//     });
  
//   }

//   toggleBook() {
//     this.setState({
//       modal: !this.state.modalBook
//     });
  
//   }

// changeRoute () {
//   if (localStorage.getItem("username") === null) {
//     //...opensignUp
//     this.toggleSignUp()
//   } else {
//     // render book page
//   }
//     console.log("test");
//   };


handleBookClick = () => {
if(window.localStorage.getItem("user")) {
  window.localStorage.setItem("book", true);
  $.ajax({
    url: "/updatepark",
    type: "POST",
    data: JSON.stringify({
      parkId: this.props.parkInfo._id,
      userId: window.localStorage.getItem("user")._id
    }),
    contentType: "application/json",
    success: function(data) {
      console.log("update", data);
    },
    error: function(error) {
      console.error("errorrrrrr", error);
    }
  });
} else {
  window.localStorage.setItem("book", false);
}
  

}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

handleAlert = () => {
alert("u are not signedIn please signIn first")
}

getDiscount (promotionCode) {
   console.log(promotionCode);
   $.ajax({
    url: "/use-promotion",
    type: "POST",
    data: JSON.stringify({
      code: promotionCode
    }),
    contentType: "application/json",
    success: (data) => {
      console.log("promotion Code", data);
      if( data.available) {
        this.setState({promotion: data})
        this.computeDiscount(data)
      } else {
        alert("Promotion code not available")
      } 
    },
    error: function(error) {
      console.error("Error", error);
    }
  });
 }

 computeDiscount (promotion) {
   
    let price = this.props.parkInfo.price * (promotion.discount / 100);
     this.setState({price : price});
    this.props.parkInfo.newPrice = price;
    console.log(this.props.parkInfo);
 }

render() {
  console.log(this.props.parkInfo)
  return (
   
    <div>
     <Card className="mapCardN">
      <CardImg  width="100%" src={this.props.parkInfo.image} />
      <CardBody>
        <CardTitle>{this.props.parkInfo.title}</CardTitle>
        <CardSubtitle>{this.props.parkInfo.description}</CardSubtitle>
        <CardText>{""}</CardText>
        <CardText>{"Area : "}{this.props.parkInfo.location}</CardText>
        <CardText>Owner Name : {this.props.parkInfo.ownerdetails[0].name}</CardText>
        <CardText>Phone Number : {this.props.parkInfo.ownerdetails[0].phoneNumber}</CardText>
        <CardText>{"Time : From "}{this.props.parkInfo.startTime}{" To "}{this.props.parkInfo.endTime}</CardText>
        <CardText>Rating : {this.props.parkInfo.ownerdetails[0].rating}</CardText>
        <CardText>
           { this.state.price === 0 ? "Price : " + this.props.parkInfo.price : <del style={{marginRight: 20}}>{"Price : " + this.props.parkInfo.price + "JD"}</del> }
           { this.state.price !== 0 ? <label color= "primary"> {"Price : " + this.state.price + "JD"}</label>: "" }
        </CardText>
        {/* <Link to={{pathname:"/book", park: this.props.parkInfo}} className="bookButton" >
            <Button className="btn btn-info">Book Now</Button>
        </Link> */}
        
        <AlertToConfirmBook park = {this.props.parkInfo} getDiscount = {this.getDiscount.bind(this)}/>        
        {/* <Button style={{backgroundColor:"green",marginLeft:"50px"}}>+Add To Favourite</Button> */}
      </CardBody>
    </Card>
  </div>
   
  );
}
};

export default ParksListItem;
