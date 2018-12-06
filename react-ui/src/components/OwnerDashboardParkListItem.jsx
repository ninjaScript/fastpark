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

const OwnerDashboardParkListItem = ({ park, handleDelete }) => {
  return (
    
    <div>
    <Card className="parkCard">
      <CardImg top width="100%" src={park.image} />
      <CardBody>
        <CardTitle>{park.title}</CardTitle>
        <CardSubtitle>{park.description}</CardSubtitle>
        <CardText>{""}</CardText>
        <CardText>{"Area : "}{park.location}</CardText>
        <CardText>{"Time : From "}{park.startTime}{" To "}{park.endTime}</CardText>
        <Button color="danger" onClick = {()=>{handleDelete(park._id)}}>Delete</Button>
      </CardBody>
    </Card>
  </div>

  );
};
export default OwnerDashboardParkListItem;
