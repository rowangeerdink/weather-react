import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "12087b5c6e656cb621cae20a854dfb64";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function currentLocation() {
    let lat = "";
    let lon = "";
    let unit = "metric";
    let apiKey = "12087b5c6e656cb621cae20a854dfb64";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=position.coords.latitude&lon=position.coords.longitude&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="row top-row">
        <div className="col-md-6 weather-today ">
          <h1 className="city"> {weatherData.city} </h1>
          <p className="DateTimeToday">
            <FormattedDate date={weatherData.date} />
          </p>
          <img src={weatherData.iconUrl} alt={weatherData.description} />
          <div className="temperature">
            <WeatherTemperature celsius={weatherData.temperature} />
          </div>
        </div>

        <div className="col-md-6 search-description ">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search City"
                className="form-control search-form"
                autoComplete="off"
                onChange={handleCityChange}
              />

              <div className="row">
                <div className="col-2 ">
                  <input
                    type="submit"
                    value="Search"
                    className="search-button"
                    onClick={currentLocation}
                  />
                </div>

                <div className="col-4 current-location ">
                  <button
                    value="My Location"
                    type="button"
                    className="current-location-button"
                  >
                    Current Location
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="row weather-description">
            <div className="col">
              <ul>
                <li className="description text-capitalize">
                  {weatherData.description}
                </li>
                <li className="feels-like">
                  {Math.round(weatherData.feelsLike)} °C
                </li>
                <li className="windspeed">
                  {Math.round(weatherData.wind)} Km/H
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
