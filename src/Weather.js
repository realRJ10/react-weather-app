import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Form from "./Form";
import City from "./City";
import Degree from "./Degree";
import Preds from "./Preds";
import Describe from "./Describe";
import Forecast from "./Forecast";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <Form />
          <div className="row">
            <City Name="Paris" />
            <div className="col-6">
              <Degree Temp={temperature} />
              <Describe Weather="clear sky" />
            </div>
            <div className="col-6">
              <Preds
                Humidity="51 %"
                Wind="2.57 m/s"
                Date="Sunday 17:22"
                Feels="29 °C"
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
    let city = "Tehran";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(forecastUrl).then(handleResponse);
    return "loading...";
  }
}
