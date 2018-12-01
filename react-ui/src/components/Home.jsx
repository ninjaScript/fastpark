import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, ControlLabel, Form, FormGroup, Button, FormControl} from 'react-bootstrap';
import '../style/Home.css';

export default class Home extends Component {
    render(){
      return (
        <Grid>
          <Jumbotron>
     <h3>Choose your Park anywhere any time .</h3>
     <label for="inputEmail4">Where</label>
     <input type="text" className="form-control"
           name="Street Name" />
         <Form inline>
                <label for="inputEmail3">Start</label>
               
              
                <label for="inputPassword4" id="EndL">End</label>
                
         </Form>
         <Form inline>
         <input type="text" class="form-control" id="Start" placeholder="Start"/>
         <input type="text" class="form-control" id="End" placeholder="End"/>
         </Form>
  <p>
    <Button bsStyle="primary">Search</Button>
  </p>
</Jumbotron>;    
        </Grid>
         
        )
    }
}