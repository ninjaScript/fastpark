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

const OwnerDashboardParkListItem = ({ park }) => {
  return (
    <div className="parkCard">
      <Card color="grey" className="mapCard">
        <CardImg src={`${park.image}`} alt="Card image cap" />
        <CardBody>
          <CardTitle>{park.title}</CardTitle>
          <CardSubtitle>{park.description}</CardSubtitle>
          <CardText>{park.location}</CardText>
          <CardText>{park.startTime}</CardText>
          <CardText>{park.endTime}</CardText>
          <CardText>{park.price}</CardText>
          <Button color="danger">Remove</Button>
        </CardBody>
      </Card>
    </div>
  );
};
export default OwnerDashboardParkListItem;
