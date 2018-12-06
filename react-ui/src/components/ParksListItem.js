import React from "react";
import {
  Card,
  CardImg,
  CardBlock,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

// import { Card, CardBlock, Button, CardTitle, CardText, CardImg } from 'reactstrap';
// import mapCard from './mapCard'

const ParksListItem = ({ parkInfo }) => {
  var changeRoute = function() {
    console.log("test");
  };

  return (
   
    <div>
    <Card className="mapCardN">
      <CardImg top width="100%" src={parkInfo.image} />
      <CardBody>
        <CardTitle>{parkInfo.title}</CardTitle>
        <CardSubtitle>{parkInfo.description}</CardSubtitle>
        <CardText>{""}</CardText>
        <CardText>{"Area : "}{parkInfo.location}</CardText>
        <CardText>{"Time : From "}{parkInfo.startTime}{" To "}{parkInfo.endTime}</CardText>
        <CardText>{"Price : "}{parkInfo.price}</CardText>
        <Button color="primary">Book Now</Button>
      </CardBody>
    </Card>
  </div>
   
  );
};

export default ParksListItem;
