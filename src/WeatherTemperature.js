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

  if (unit === "celsius") {
    return (
      <div>
        <span className="WeatherTemperature">
          <strong>{Math.round(props.celsiusMax)}</strong> /{" "}
          <span className="minTemperature">
            {Math.round(props.celsiusMin)} <span className="unitSign">°C</span>
          </span>
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
          <strong>{Math.round(props.fahrenheitMax)}</strong> /{" "}
          <span className="minTemperature">
            {Math.round(props.fahrenheitMin)} <span className="unitSign">°F</span>
          </span>
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
