import React from "react";

import {
  Table,
  Button
} from "reactstrap";
export default class AdmainDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  changeCodeState(){
      this.props.changeCodeState(this.props.data._id, this.props.data.available)
  }
  render() {
    return (
      <tr>
        <th scope="row">{this.props.count +""}</th>
        <td>{this.props.data.code}</td>
        <td>{this.props.data.discount}</td>
        <td>{this.props.data.startDate}</td>
        <td>{this.props.data.endDate}</td>
        <td>{this.props.data.available +" "}</td>
        <td>
            <Button color="info" 
             onClick = {this.changeCodeState.bind(this)}
            >
              available
            </Button>
        </td>
      </tr>
    )
  }

}