// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Jumbotron, Grid, ControlLabel, Form, FormGroup, Button, FormControl} from 'react-bootstrap';
// import '../style/Home.css';

// class signUp extends Component {

//     render(){
//       return (
//           <div>
//               <h1>hiii</h1>
//           </div>
//       )
//     }
// }

// // <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
// //   Launch demo modal
// // </button>

// // <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
// //   <div class="modal-dialog" role="document">
// //     <div class="modal-content">
// //       <div class="modal-header">
// //         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
// //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
// //           <span aria-hidden="true">&times;</span>
// //         </button>
// //       </div>
// //       <div class="modal-body">
// //         ...
// //       </div>
// //       <div class="modal-footer">
// //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
// //         <button type="button" class="btn btn-primary">Save changes</button>
// //       </div>
// //     </div>
// //   </div>
// // </div>

// //       )
// //     }
// // }

// export default SignUp;

import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const signUp = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default signUp;
