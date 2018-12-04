import React from "react";
import ParkPop from './ParkPop.jsx';
import { Card, CardImg, CardBlock, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import $ from "jquery";
import '../style/AddPark.css';


  class AddPark extends React.Component {
    componentDidMount() {
        $('#root').css("background", "white");
    }

render(){
  return (
      <div>
          <div class="parkP">
          <ParkPop />
          </div>
    <div className="parkCard">
      <Card color="grey" className="mapCard">
      
        <CardImg src='#' alt="Card image cap"  />
        <CardBody>
          <CardTitle>Title</CardTitle>
          <CardSubtitle>here location</CardSubtitle>
          <CardText>Price JD</CardText>
          <Button  color="danger">Remove</Button>
        </CardBody>
      </Card>
      </div>
      </div>
)
}
  }




export default AddPark;