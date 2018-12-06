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
  if (park.userdetails.length > 0) {
    console.log("ddddd", park.userdetails);
    return (
      <div className="parkCard">
        <Card color="grey" className="mapCard">
          <CardImg src={`${park.image}`} alt="Card image cap" />
          <CardBody>
            <CardTitle>{park.title}</CardTitle>
            <CardSubtitle>{park.description}</CardSubtitle>
            <CardText>{park.location}</CardText>
            <CardText>UserName:{park.userdetails[0].name}</CardText>
            <CardText>PlateNumber:{park.userdetails[0].plateNumber}</CardText>
            <CardText>PhoneNumber{park.userdetails[0].phoneNumber}</CardText>
            <CardText>{park.startTime}</CardText>
            <CardText>{park.endTime}</CardText>
            <CardText>{park.price}</CardText>
            <Button color="danger">Remove</Button>
          </CardBody>
        </Card>
      </div>
    );
  } else {
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
  }
};
export default OwnerDashboardParkListItem;
