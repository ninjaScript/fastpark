import React from "react";
// import Example from './signup';
import { Container, Row, Col } from 'reactstrap';

import { Card, CardImg, CardBlock, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  // import { Card, CardBlock, Button, CardTitle, CardText, CardImg } from 'reactstrap';
// import mapCard from './mapCard'


const ParksListItem = ({ parkInfo }) => {
  var changeRoute = function(){
    console.log("test");
  }

  return (
      <div className="mapCard">
        <Card color="grey" className="mapCard">
          <CardImg src={parkInfo.img} alt="Card image cap"  />
          <CardBody>
            <CardTitle>{parkInfo.name}</CardTitle>
            <CardSubtitle>here location</CardSubtitle>
            <CardText>{parkInfo.price} JD</CardText>
            {/* <Button color="primary" onclick ="console.log('The link was clicked.'); return false" className="px-4">Book Now</Button> */}
            <a className="bookButton" href="#/" class="btn btn-primary">Book Now</a>
          </CardBody>
        </Card>
 </div>

  );

};

export default ParksListItem;
