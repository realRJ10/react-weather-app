import React from "react";

export default function Preds(props) {
  return (
    <ul>
      <li>
        <h3 id="time">{props.Date}</h3>
      </li>
      <li>
        <h3>
          Humidity: <span id="humidity">{props.Humidity} </span>
        </h3>
      </li>
      <li>
        <h3>
          Wind speed: <span id="speed"> {props.Wind}</span>
        </h3>
      </li>
      <li>
        <h3>
          Feels like: <span id="feel"> {props.Feels}</span>
        </h3>
      </li>
    </ul>
  );
}
