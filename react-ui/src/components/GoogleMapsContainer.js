import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import { Card, CardImg, CardText, CardBody,Form,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

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
              name={park.title}
              position={{ lat: park.lat, lng: park.long }}
            />
          );
        })}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onMapClick}
        >
        
         
        <Card class="mapC">
        <CardImg top width="200px" height="75px" src="#" />
        <CardBody>
          <CardSubtitle>Park description</CardSubtitle>
          <CardText>Some quick example</CardText>
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
