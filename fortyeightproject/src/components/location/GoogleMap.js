import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../../App.css';
require ('dotenv').config();


const mapStyles = {
  width: '100vw',
  height: '100vw'
};

class GetLocation extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "React"
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        console.log("Latitutde is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
    });
}

  render() {
    return (
      <div>
        <h3>Allow location access by the browser and you'll see your location!</h3> 
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          centerAroundCurrentLocation={true}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'Your location'}
        />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE
})(GetLocation);