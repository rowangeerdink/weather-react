import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="row top-row">
        <div className="col-md-6 weather-today ">
          <h1 className="city"> {props.defaultCity} </h1>
          <p className="DateTimeToday">
            <FormattedDate date={weatherData.date} />{" "}
          </p>
          <p className="weatherIcon">❄️</p>
          <p>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="celcius"> °C</span>
          </p>
        </div>

        <div className="col-md-6 search-description ">
          <div className="row">
            <form>
              <input
                type="search"
                placeholder="Search City"
                className="form-control search-form"
                autoComplete="off"
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
    const apiKey = "12087b5c6e656cb621cae20a854dfb64";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
