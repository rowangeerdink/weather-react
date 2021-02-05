import React from "react";
import "./WeatherToday.css";

export default function WeatherToday() {
  return (
    <div className="WeatherToday">
      <h1 id="city">Haarlem</h1>
      <p className="DateTimeToday" id="date-time">
        Monday 18 January 15:00
      </p>
      <p id="weatherIcon">❄️</p>
      <p>
        <span className="TemperatureToday" id="temperature">
          1
        </span>
        <span id="celcius"> °C</span>
      </p>
    </div>
  );
}
