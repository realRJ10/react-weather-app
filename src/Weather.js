import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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

  function search() {
    const apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(forecastUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <div className="mb-3">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Type the city"
                    id="input"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  id="button"
                  className="btn"
                />
              </div>
              <div className="col-2">
                <input
                  type="button"
                  value="Current"
                  id="current"
                  className="btn"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <Forecast />
          <script src="src/index.js"></script>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
