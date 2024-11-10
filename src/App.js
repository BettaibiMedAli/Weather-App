import React, {useState} from "react";
import axios from "axios";
import { Search } from "./Search";
import { WeatherInfo } from "./WeatherInfo";

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
      <Search location = {location} setLocation = {setLocation} error = {error} searchLocation = {searchLocation} />
      <WeatherInfo data = {data} />
    </div>
  );
}

export default App;
