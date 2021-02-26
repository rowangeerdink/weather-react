import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheitMax() {
    return (props.celsiusMax * 9) / 5 + 32;
  }

  function fahrenheitMin() {
    return (props.celsiusMin * 9) / 5 +32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="WeatherTemperature">
          <strong>{Math.round(props.celsiusMax)}</strong> /{" "}
          {Math.round(props.celsiusMin)} °C
        </span>
        <span className="unit">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="WeatherTemperature">
          <strong>{Math.round(fahrenheitMax())}</strong> /{" "}
          {Math.round(fahrenheitMin())} °F
        </span>
        <span className="unit">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F{" "}
        </span>
      </div>
    );
  }
}
