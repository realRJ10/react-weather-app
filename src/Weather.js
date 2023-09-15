import React from "react";
import "./Weather.css";
import Form from "./Form";
import City from "./City";
import Degree from "./Degree";
import Preds from "./Preds";
import Describe from "./Describe";
import Coder from "./Coder";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <Form />
        <div className="row">
          <City Name="Paris" />
          <div className="col-6">
            <Degree Temp={19} />
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
}
