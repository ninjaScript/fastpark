import React from 'react';
import { Card, CardImg, CardText, CardBody,Form,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../style/Home.css';
const CardHome = (props) => {
  return (
    <div>
      <Card id= "homecard">
        <h4>Choose your Park anywhere any time .</h4>
        <CardBody>
        <label for="Where" >Where</label>
        <input type="text" className="form-control" placeholder="Street Name" />
        <Form inline>
        <label for="inputEmail3" id="StartL">Start</label>    
        <label for="inputPassword4" id="EndL">End</label>    
        </Form>
        <Form inline>
        <input type="text" class="form-control" id="Start" placeholder="Start"/>
        <input type="text" class="form-control" id="End" placeholder="End"/>
        </Form>

        <Button color="primary" id="btn" href="/searchresults">Search</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardHome;
