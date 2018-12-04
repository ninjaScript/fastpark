import React, { Component } from "react";
import ParksList from "./ParksList.js";
import GoogleMapsContainer from "./GoogleMapsContainer.js";
import { Container, Row, Col } from 'reactstrap';
import $ from "jquery";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { parks: [],
      fakeParks :  [
       // Samsung:
         {brand: "Samsung",
         name: "Galaxy A6",
         price: 269.99,
         img: "https://c1.staticflickr.com/5/4861/45991059522_8f35b4582c_o.png"
         },
       
         {brand: "Samsung",
         name: "Galaxy J6 Plus",
         price: 156.994,
         img: "https://c1.staticflickr.com/5/4827/32170068628_f232334ee9_o.png"
         },
       
        {brand: "Samsung",
         name: "Galaxy J2",
         price: 91.000,
         img: "https://c1.staticflickr.com/5/4820/31101968047_bd62911528_o.png"
         },
       
         {brand: "Samsung",
         name: "Galaxy S9",
         price: 839.99,
         img: "https://c1.staticflickr.com/5/4870/31101968197_e1b74a6a26_o.png"
         },
       ////////
         {brand: "Samsung",
         name: "Galaxy J5",
         price: 170.00,
         img: "https://c1.staticflickr.com/5/4864/31101968327_c70b2cf537_o.png"
         },
       
         {brand: "Samsung",
         name: "Galaxy Note 8",
         price: 750.00,
         img: "https://c1.staticflickr.com/5/4835/45991059302_1088a59def_o.png"
         },
       
         {brand: "Samsung",
         name: "Galaxy J1 Mini Prime",
         price: 90.00,
         img: "https://c1.staticflickr.com/5/4866/32170068368_ba40a752e3_o.png"
         },
       
         {brand: "Samsung",
         name: "Galaxy A8",
         price: 800.00,
         img: "https://c1.staticflickr.com/5/4917/32170068728_b64e1fbefb_o.png"
         },
       
         {brand: "Samsung",
         name: "Galaxy C7",
         price: 150.00,
         img: "https://c1.staticflickr.com/5/4858/31101967937_5964b105b6_o.png"
         }
       ] };
  }
  componentDidMount() {
    console.log("query from the home comp", this.props.location.query);
    $.ajax({
      url: "/parks",
      type: "POST",
      data:JSON.stringify({"location": "khalda" }),  
      contentType: "application/json",
      success: parks => {
        
        this.setState({ parks });
      },
      error: function(error) {
        console.error("errorrrrrr", error);
      }
    });
    
  $.ajax({
      url: "/addpark",
      type: "POST",
      data: JSON.stringify({
        title: "cheep park",
        description: "good place ",
        long: "35.8378158",
        lat: "31.9866246",
        location: "khalda",
        image: "",
        ownerId: "5c026ba1548c172ce9294538"
      }),
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
    <Container fluid>
 
     <Row>
          <Col sm="7" >
          <ParksList parks={this.state.fakeParks} />
          </Col>
          <Col  sm="5" >
          <div className="sticky">
          <GoogleMapsContainer parks={this.state.parks} />
          </div>
          
          </Col>
          </Row>
    </Container>

  );
    }
}


export default SearchResults;
