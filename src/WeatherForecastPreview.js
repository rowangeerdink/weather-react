import React from "react";

export default function WeatherForecastPreview9(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
    hours = `0${hours}`;}
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}`;
  }

  return (
    <div className="col day">
      <h5 className="time">{hours()}</h5>
      <p className="forecastTemperature">{temperature()} </p>
    </div>
  );
}
