import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      minTemperature: response.data.main.temp_min,
      maxTemperature: response.data.main.temp_max,
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
    navigator.geolocation.getCurrentPosition(handleResponse);
  }

  if (ready) {
    return (
      <div>
        <div className="row top-row">
          <div className="col-md-6 weather-today ">
            <h1 className="city"> {weatherData.city} </h1>
            <p className="DateTimeToday">
              <FormattedDate date={weatherData.date} />
            </p>
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <div className="temperature">
              <WeatherTemperature
                celsiusMax={weatherData.maxTemperature}
                celsiusMin={weatherData.minTemperature}
                fahrenheitMax={(weatherData.maxTemperature * 9) / 5 + 32}
                fahrenheitMin={(weatherData.minTemperature * 9) / 5 + 32}
                unit="celsius"
                setUnit="fahrenheit"
              />
            </div>
          </div>

          <div className="col-md-6 search-description ">
            <div className="row search-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Search City"
                  className="form-control search-bar"
                  autoComplete="off"
                  onChange={handleCityChange}
                />

                <div className="row">
                  <div className="col-2 ">
                    <input
                      type="submit"
                      value="Search"
                      className="search-button"
                    />
                  </div>

                  <div className="col-4 current-location ">
                    <button
                      value="My Location"
                      type="button"
                      className="current-location-button"
                      onClick={currentLocation}
                    >
                      Current Location
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="row weather-description">
              <div className="col weather-description">
                <ul>
                  <li className="description text-capitalize">
                    {weatherData.description}
                  </li>
                  <li className="description feels-like">
                    {" "}
                    Feels like:{""} {Math.round(weatherData.feelsLike)} °C
                  </li>
                  <li className="description windspeed">
                    {" "}
                    Windspeed: {Math.round(weatherData.wind)} Km/H
                  </li>
                  <li className=" description sunrise"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Forecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
