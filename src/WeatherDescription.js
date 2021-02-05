import React from "react";
import "./WeatherDescription.css";

export default function WeatherDescription() {
  return (
    <div className="row description">
      <div className="col-12 col-md-8 offset-md-12" id="overview">
        <ul>
          <li id="description">Chance off snow</li>
          <li id="feels-like">Feels like: -2°C</li>
          <li id="windspeed">windspeed: 10 Km/h</li>
        </ul>
      </div>
    </div>
  );
}
