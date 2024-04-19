import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h1>
          <strong>{props.data.city}</strong>
        </h1>
        <div className="col-6">
          <h2>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              id="icon"
              width="85px"
              alt="icon"
            />
            <span id="temp">{Math.round(props.data.temperature)}</span>
            <small id="degree">°C|°F</small>
          </h2>
          <h3 id="description">{props.data.description}</h3>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <h3 id="time">
                <FormattedDate date={props.data.date} />
              </h3>
            </li>
            <li>
              <h3>
                Humidity: <span id="humidity">{props.data.humidity} </span>
              </h3>
            </li>
            <li>
              <h3>
                Wind speed:{" "}
                <span id="speed">{Math.round(props.data.wind)}</span>
              </h3>
            </li>
            <li>
              <h3>
                Feels like: <span id="feel"> {props.data.feel}</span>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
