import React from "react";

export default function Degree(props) {
  return (
    <h2>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        id="icon"
        width="85px"
        alt={props.Weather}
      />
      <span id="temp">{props.Temp}</span>
      <small id="degree">°C|°F</small>
    </h2>
  );
}
