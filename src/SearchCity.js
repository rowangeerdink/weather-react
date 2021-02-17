import React, {useState} from "react";
import "./SearchCity.css";
import axios from "axios";

export default function SearchCity() {
const [ready, setReady] = useState("false");
const [temperature, setTemperature] = useState("null");
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setReady("true");
  }

  if (ready){
  return (
    <div>
      <form>
        <div className="row">
          <div className="col ">
            <input
              type="search"
              placeholder="Search City"
              className="form-control search-form"
              autoComplete="off"
            />

            <div className="row">
              <div className="col-2 ">
                <input type="submit" value="Search" className="search-button" />
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
          </div>
        </div>
      </form>
    </div>
  );
  } else {
    const apiKey = "12087b5c6e656cb621cae20a854dfb64";
  let unit = "metric";
  let city = "Haarlem";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
  }
}

