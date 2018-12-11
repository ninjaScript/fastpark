
import React, { Component } from 'react';
import "../style/Home.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Form,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import marketing from "../style/marketing.png";
import graph from "../style/graph.png";
import seo from "../style/seo.png";
import calendar from "../style/calendar.png";
import world from "../style/world.png";
import Tech from "../style/Tech.png";



class WhySection extends Component {
    render() {
        return (
          <Card className="card2" style={{width: "100%", backgroundColor: "#f4f4f4", height: "900px"}}>
                        <CardBody className="headBoard">
                            <CardTitle align="center">
                                                                                        <h1 id="mission">How we're different</h1>
                                                                <h1 style={{color: "#b43932", marginBottom: "50px"}} id="mission">Performance, Easy Implementation & Reliability</h1>
                            
                            </CardTitle>
                                <CardTitle component="p" className="arrange" align="center">
                                    <div className="mainOrg">
                                        <div className="org1">
                                            <div className="p5">
                                            <h3 id="mission3">Incomparable Marketing</h3>
                                            <p>Once you show your parking feature in our app your guaranteed to increase your Business revenue and with more slots it will increase your profit    </p>
                                                <img src={marketing} className="organize1"/>
                                            </div>
                                            <div className="p5">
                                            <h3 id="mission3">Easy Implementation</h3>
                                            <p>With the help of our Team for each parking lot you want to rent it out, set up is simple. A quick approval process means parking owner can start earning within 24 hours.</p>
                                                <img className="organize1" src={graph} />
                                            </div>
                                            <div className="p5">
                                            <h3 id="mission3">Search Engine Optimisation</h3>
                                            <p>Boost your organic search performance with Croud’s unique model, which enables smarter, more effective strategies</p>
                                            <img className="organize1" src={seo} />
                                            </div>
                                        </div>
                                        <div className="org2">
                                            <div className="p6">
                                            <h3 id="mission3">Content</h3>
                                            <p>Stand out with engaging and meaningful content that truly reflects your parking brand, plus be able to measure and prove the value of your content marketing</p>
                                                <img className="organize2" src={calendar} />
                                            </div>
                                            <div className="p6">
                                            <h3 id="mission3">International Recognition</h3>
                                            <p>Prioritizing your business with us is not only available locally but as well as in International aspect.</p>
                                                <img className="organize2" src={world} />
                                            </div>
                                            <div className="p6">
                                            <h3 id="mission3">Our Tech</h3>
                                            <p>With our proprietary tech that underpins our complete workflow, technology is not only integrated into the creative process, it enables it.</p>
                                                <img className="organize2" src={Tech} />
                                            </div>
                                        </div>
                                    </div>
                                </CardTitle>
                                <Button  style={{backgroundColor: "#b43932", marginLeft: "850px", marginTop: "100px", padding: "10px 20px"}} href = "/CustomerService">Find Out More</Button>
                        </CardBody>
                        
            </Card>
          );
        }
    }
  

  export default WhySection;
