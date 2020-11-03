import React, { Component } from 'react';
import { render } from "react-dom";
// import GoogleMap from './location/GoogleMap';


class LocationResults extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                <h4>Using geolocation JavaScript API in react</h4>
                {/* <GoogleMap/> */}
            </div>
        );
    }
}


render(<LocationResults />, document.getElementById('root'));
