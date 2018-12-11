import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';


class UserInfo extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
      return (
            <Col sm="12">
              <Card body>
              <div className="imgdiv">
              <img className="userimg"  src={this.props.user.imgUrl} alt="User Image" />
              </div>
              <div className="usercard">
              <CardBody>
                <CardTitle>Name: {this.props.user.name}</CardTitle>
                <CardSubtitle>Location:{this.props.user.location}</CardSubtitle>
                <CardText><h5>Description:</h5> {this.props.user.descr}</CardText>
                <CardLink href="#">Edit</CardLink>
              </CardBody>
              </div>
              </Card>
              </Col>
            
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