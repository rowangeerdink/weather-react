import React from "react";
import "./WeatherForecastPreview.css";


export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  function fahrenheit() {
    let fahrenheit = Math.round((props.data.main.temp * 9) / 5 + 32);
    return `${fahrenheit}°F`;
  }

  if (props.unit === "celsius") {
    return (
      <div className="col day">
        <h5 className="time">{hours()}</h5>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={[props.data.main.temp]}
        />
        <p className="forecastTemperature"> {temperature()} </p>
      </div>
    );
  } else {
    return (
      <div className="col day">
        <h5 className="time">{hours()}</h5>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={[props.data.main.temp]}
        />
        <p className="forecastTemperature" unit={props.unit}>
          {fahrenheit()}
        </p>
      </div>
    );
  }
}
