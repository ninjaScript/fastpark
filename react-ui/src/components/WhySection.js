
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
          <Card className="card2" style={{width: "100%", backgroundColor: "#f4f4f4", height: "1000px"}}>
                        <CardBody className="headBoard">
                            <CardTitle align="center">
                                                                                        <h1 id="mission">We Offer Exellence</h1>
                                                                <h1 style={{color: "#b43932"}} id="mission">Performance, Easy Implementation & Reliability</h1>
                            
                            </CardTitle>
                                <CardTitle component="p" className="arrange" align="center">
                                    <div className="mainOrg">
                                        <div className="org1">
                                            <div className="p5">
                                            <h2 id="mission3">Performance</h2>
                                            <p>Earn more revenue through competitive advertising, relevant ads, and consistent coverage for all ad placements.</p>
                                                <img src={marketing} className="organize1"/>
                                            </div>
                                            <div className="p5">
                                            <h2 id="mission3">Easy Implementation</h2>
                                            <p>With the help of our Team for each product, set up is simple. A quick approval process means publishers can start earning within 24 hours.</p>
                                                <img className="organize1" src={graph} />
                                            </div>
                                            <div className="p5">
                                            <h2 id="mission3">On and Off Page Monitization</h2>
                                            <p>Our diversified service helps our advertisers monetize when users are on the page as well as after they leave their site.</p>
                                            <img className="organize1" src={seo} />
                                            </div>
                                        </div>
                                        <div className="org2">
                                            <div className="p6">
                                            <h2 id="mission3">Service</h2>
                                            <p>With dedicated ninjaScript Team, advertisers get the highest level of service to ensure their account are properly 
                                                optimized to receive the highest quality.</p>
                                                <img className="organize2" src={calendar} />
                                            </div>
                                            <div className="p6">
                                            <h2 id="mission3">Service</h2>
                                            <p>With dedicated ninjaScript Team, advertisers get the highest level of service to ensure their account are properly 
                                                optimized to receive the highest quality.</p>
                                                <img className="organize2" src={world} />
                                            </div>
                                            <div className="p6">
                                            <h2 id="mission3">Service</h2>
                                            <p>With dedicated ninjaScript Team, advertisers get the highest level of service to ensure their account are properly 
                                                optimized to receive the highest quality.</p>
                                                <img className="organize2" src={Tech} />
                                            </div>
                                            




                                        </div>
                                    </div>
                                </CardTitle>
                        </CardBody>
                    <div class="tech-slideshow1">
                        <div class="mover-3"></div>
                        <div class="mover-4"></div>
                 </div>
       </Card>
          );
        }
    }
  

  export default WhySection;
