import React from 'react';
import './App.css';
import GoogleMap from './components/location/GoogleMap';
import Weather from './components/Weather';
import Zomato from './components/Zomato/Zomato';
import './components/Weather.css';
require ('dotenv').config();

function App() {
  return (
    <div>
      <Weather />
      <GoogleMap />
      {/* <Zomato /> */}
    </div>
  );
}

export default App;
