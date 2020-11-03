import React, { useState } from "react";
const api = {
  key: "6d166f93fb026db121fbff85c172a0d9",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() { 
  
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [unit, setUnit] = useState('imperial');

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
    });
  }
} 
  
  return (

    <div className="app">
      
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
        </div>
        {(typeof weather.main != "undefined") ? (

          <div>
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>         

        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)} °c         
          </div>

         <label>

            <div className="classes.Radio">

            <label>
                        <input
                            type="radio"
                            name="units"                            
                            checked={unit === "imperial"}
                            value="imperial"
                            onChange={(e) => setUnit(e.target.value)}
                            />
                        Fahreheit
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="units"
                         
                            checked={unit === "metric"}
                            value="metric"
                            onChange={(e) => setUnit(e.target.value)} 
                            />
                        Celsius
                    </label> 

                    <button className="classes.Radio" type="submit">Get Forecast</button>

                    </div>
                </label>

          <div className="weather">{weather.weather[0].main}</div>
        </div>
        </div>
        ) : ('')}

      </main>

      </div>     

      

  
  );      
  }

export default App;