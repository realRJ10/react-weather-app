import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Form from "./Form";
import City from "./City";
import Degree from "./Degree";
import Preds from "./Preds";
import Describe from "./Describe";
import Forecast from "./Forecast";

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
      date: "Sunday 17:22",
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
              <Preds
                Humidity={weatherData.humidity}
                Wind={Math.round(weatherData.wind)}
                Date={weatherData.date}
                Feels={weatherData.feel}
              />
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
