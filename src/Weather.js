import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Form from "./Form";
import City from "./City";
import Degree from "./Degree";
import Describe from "./Describe";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      feel: response.data.main.feels_like,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <Form />
          <div className="row">
            <City Name={weatherData.city} />
            <div className="col-6">
              <Degree Temp={Math.round(weatherData.temperature)} />
              <Describe Weather={weatherData.description} />
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <h3 id="time">
                    <FormattedDate date={weatherData.date} />
                  </h3>
                </li>
                <li>
                  <h3>
                    Humidity: <span id="humidity">{weatherData.humidity} </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Wind speed:{" "}
                    <span id="speed">{Math.round(weatherData.wind)}</span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Feels like: <span id="feel"> {weatherData.feel}</span>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
          <Forecast />
          <script src="src/index.js"></script>
        </div>
      </div>
    );
  } else {
    const apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(forecastUrl).then(handleResponse);
    return "loading...";
  }
}
