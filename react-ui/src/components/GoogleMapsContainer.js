import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
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

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //hides or shows the infowindow
      activeMarker: {}, //shows the active marker onclick
      selectedPlace: {} // shows the infowindow to the selectedplace marker
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  componentDidMount() {}
  onMarkerClick = (props, marker, e) => {
    console.log("pppppppp", props);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    const style = {
      width: "100%"
    };

    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={10}
        initialCenter={{ lat: 31.953158, lng: 35.950359 }}
      >
        {this.props.parks.map(park => {
          return (
            <Marker
              onClick={this.onMarkerClick}
              title={park.title}
              image={park.image}
              description={park.description}
              startTime={park.startTime}
              endTime={park.endTime}
              price={park.price}
              location={park.location}
              position={{ lat: park.lat, lng: park.long }}
            />
          );
        })}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onMapClick}
        >
          <Card className="mapC">
            <CardImg
              top
              width="200px"
              height="75px"
              src={this.state.selectedPlace.image}
            />
            <CardBody>
              <CardSubtitle>{this.state.selectedPlace.title}</CardSubtitle>
              <CardText>{this.state.selectedPlace.description}</CardText>
              <CardText>{this.state.selectedPlace.location}</CardText>
              <CardText>{this.state.selectedPlace.startTime}</CardText>
              <CardText>{this.state.selectedPlace.endTime}</CardText>
              <CardText>{this.state.selectedPlace.price}</CardText>
              <Button>Book</Button>
            </CardBody>
          </Card>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ""
})(GoogleMapsContainer);
