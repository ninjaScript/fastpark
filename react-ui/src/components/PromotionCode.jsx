import React from "react";
import RowTablePromo from "./RowTablePromo.jsx"
import $ from 'jquery';
import {
  Card,
  CardBody,
  Table,

  Button,
  Row,
  Col,
  Badge,
  Alert
} from "reactstrap";
export default class AdmainDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      code: '',
      discount: '',
      startDate: '',
      endDate: '',
      alertOpen: false
    }
  }

  componentDidMount() {
    this.getAllPromotion();
  }

  // function to get the value from the inputs
  handleOnChange(e) {
    let target = e.target;
    this.setState({ [target.name]: target.value });
    console.log(target.value);
  }

  // function to genreate promotion code
  sendPromotion() {
    $.ajax({
      url: "/add-promotion",
      type: "POST",
      data: JSON.stringify({
        code: this.state.code,
        discount: this.state.discount,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      }),
      contentType: "application/json",
      success: res => {
        if (res) {
          let promos = this.state.data;
          promos.push(res);
          this.setState({ data: promos, alertOpen: true, code: '', discount: '', startDate: '', endDate: '' });
        }
      },
      error: function (error) {
        console.error("Error", error);
      }
    });
  }

  // function to genreate promotion code
  getAllPromotion() {
    $.ajax({
      url: "/promotion",
      type: "GET",
      contentType: "application/json",
      success: res => {
        if (res) {
          console.log(res)
          this.setState({ data: res });
        }
      },
      error: function (error) {
        console.error("Error", error);
      }
    });
  }
 // function to update the availablity of  promotion code
  changeCodeState(id, available) {
    $.ajax({
      url: "/update-promotion",
      type: "POST",
      data: JSON.stringify({codeId: id, available: !available}),
      contentType: "application/json",
      success: res => {
        if (res) {
          console.log(res)
          if (res) {
            this.getAllPromotion();
          }
        }
      },
      error: function (error) {
        console.error("Error", error);
      }
    });
  }
  render() {
    return (
      <div style={{ margin: 20 }}>
        <Row >
          <Card outline color="info" style={{ width: "70%" }} >
            <h4>Genrate promotion code.</h4>
            <CardBody>
              <label>
                Code
               </label>
              <input
                type="text"
                className="form-control"
                name="code"
                value={this.state.code}
                placeholder="Code"
                onChange={this.handleOnChange.bind(this)}
              />
              <label>
                Discount
              </label>
              <input
                type="number"
                name="discount"
                value={this.state.discount}
                className="form-control"
                placeholder="Discount"
                onChange={this.handleOnChange.bind(this)}
              />

              <label>
                Start
              </label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={this.state.startDate}
                placeholder="start date"
                onChange={this.handleOnChange.bind(this)}
              />

              <label>
                End
              </label>
              <input
                type="date"
                name="endDate"
                value={this.state.endDate}
                className="form-control"
                placeholder="end date"
                onChange={this.handleOnChange.bind(this)}
              />
            </CardBody>
            <Button
              color="info"
              size="lg"
              block
              onClick={this.sendPromotion.bind(this)}
            >
              Genrate promotion code
            </Button>
          </Card>
        </Row>
        <Row>
          <Alert color="success" isOpen={this.state.alertOpen}>
            You added a new promotion code and it is available
          </Alert>
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Table striped style={{ width: "70%" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Code</th>
                <th>Discount</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Avilable</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map((promo, index) => (
                  <RowTablePromo data={promo} count={index + 1} changeCodeState = {this.changeCodeState.bind(this)} />
                ))
              }
            </tbody>
          </Table>
        </Row>
      </div>
    )
  }

}