import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      date: "Monday 18 January 15:00",
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div row top-row>
        <div className="col-md-6 weather-today ">
          <h1 className="city">{weatherData.city}</h1>
    <p className="DateTimeToday">{weatherData.date}</p>
          <p id="weatherIcon">❄️</p>
          <p>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span id="celcius"> °C</span>
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
                <li className="description text-capitalize">{weatherData.description}</li>
                <li className="feels-like">{Math.round(weatherData.feelsLike)} °C</li>
                <li className="windspeed">{Math.round(weatherData.wind)} Km/H</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "12087b5c6e656cb621cae20a854dfb64";
    let unit = "metric";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
