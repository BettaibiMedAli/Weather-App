import React, {useState} from "react";
import axios from "axios";

function App() {

  //const url = "https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=1816332cf252fd99de28d21bf4818164"
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>65°F</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">60°F</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind speed</p>
          </div> 
        </div>

      </div>
    </div>
  );
}

export default App;
