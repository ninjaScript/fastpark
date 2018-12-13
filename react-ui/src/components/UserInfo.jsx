import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container} from 'reactstrap';
import PropTypes from 'prop-types';
import "../style/Home.css";
import hello from "../style/hello.png";
import line from "../style/line.png";

class UserInfo extends React.Component{
  constructor(props) {
    super(props)
    
  }


  render() {
    console.log(this.props)
      return (
              <Card style={{height: "550px"}}>
                <div className="imgdiv1" >
                  <img className="userImage"  src={this.props.user.imgUrl} alt="User Image" />
                    </div>
                  <Col className="usercard">
                      <CardBody>
                          <img src={hello} width="100px" height="100px"/>
                            <CardTitle><span className="im">I'm</span><span className="myName"><b>{this.props.user.name}</b></span></CardTitle>
                            <CardSubtitle style={{marginTop: "-10px"}}>{"Software engineer"}</CardSubtitle>
                          <img src={line} style={{marginTop: "-90px", marginLeft: "-90px"}}/>
                        <div style={{marginTop: "-80px"}} >
                          <CardSubtitle><b>Plate number</b><p  id="info">{this.props.user.plateNumber}</p ></CardSubtitle>
                          <CardSubtitle><b>Email</b> <p  id="info">{this.props.user.email}</p ></CardSubtitle>
                          <CardSubtitle><b>Phone Number</b><p  id="info">{this.props.user.phoneNumber}</p ></CardSubtitle>
                          <button className="edit" href="#">Edit</button>
                        </div>
                      </CardBody>
                        <div className="mediaBar" style={{backgroundColor: "#b43932", marginTop: "100px", marginLeft: "-395px"}}>
                        <div style={{marginLeft: "300px", padding: "20px"}}>
                            <a className="iconTo"  href="#"><i className="fa fa-star fa-lg"></i></a>
                            <a className="iconTo" href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a className="iconTo" href="#"><i className="fa fa-instagram fa-lg"></i></a>
                            <a className="iconTo" href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a className="iconTo" href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                        </div>
                        </div>
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
  form: PropTypes.bool
}


const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
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
  widths: PropTypes.array,
}



export default UserInfo;