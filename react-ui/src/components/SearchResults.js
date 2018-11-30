import React from "react";
import ParksList from "./ParksList.js";
import GoogleMapsContainer from "./GoogleMapsContainer.js";
import { Grid, Col, Row } from "react-bootstrap";
const SearchResults = props => {
  return (
    <div>
      <Grid>
        <Row className="show-grid">
          <Col md={6} mdPush={6}>
            <GoogleMapsContainer />
          </Col>
          <Col md={6} mdPull={6}>
            <ParksList parks={[1, 2, 3]} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default SearchResults;
