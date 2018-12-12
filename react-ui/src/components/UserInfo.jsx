import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import "../style/Home.css";
import hello from "../style/hello.png";

class UserInfo extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
      return (
            
              <Card style={{height: "650px"}}>
              <div className="imgdiv1">
              <img className="userImage"  src={this.props.user.imgUrl} alt="User Image" />
              </div>
              <Col className="usercard">
              <CardBody>
                <img src={hello} width="100px" height="100px"/>
                <CardTitle><span className="im">I'm</span><span className="myName"><b>{this.props.user.name}</b></span></CardTitle>
                <CardSubtitle style={{marginTop: "-10px"}}>{this.props.user.job}</CardSubtitle>
                <CardSubtitle>Location:{this.props.user.location}</CardSubtitle>
                <CardText><h5>Description:</h5> {this.props.user.descr}</CardText>
                <CardLink href="#">Edit</CardLink>
              </CardBody>
              </Col>
              </Card>
              
            
      );
    }
};





Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}

Row.propTypes = {
  noGutters: PropTypes.bool,
  // see https://reactstrap.github.io/components/form Form Grid with Form Row
  form: PropTypes.bool
}


const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}



export default UserInfo;