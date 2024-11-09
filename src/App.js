import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1816332cf252fd99de28d21bf4818164`;

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then(
        (response) => {
          setData(response.data);
          setError(null);
          console.log(response.data);
        }
      )
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.error("Location not found. Please enter a valid city name.");
          setError("Location not found. Please enter a valid city name.");
        } else {
          console.error("An error occurred. Please try again later.");
          setError("An error occurred. Please try again later.");
        }
      });
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input value={location} onChange={event => setLocation(event.target.value)} placeholder="Enter Location" onKeyPress={searchLocation}>
        </input>  {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °C </h1> : null }
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like} °C </p> : null }
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity} % </p> : null }
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.main ? <p className="bold">{data.wind.speed} MPH </p> : null }
              <p>Wind speed</p>
            </div> 
          </div>
        }
      </div>
    </div>
  );
}

export default App;
