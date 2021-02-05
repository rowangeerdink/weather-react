import "./App.css";
import React from "react";
import "./Styles.css";
import WeatherToday from "./WeatherToday";
import SearchCity from "./SearchCity";
import WeatherDescription from "./WeatherDescription";
import Footer from "./Footer";
import Forecast from "./Forecast";

//import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-container weather-app">
        <div className="row">
          <div className="col-6 col-md-5 offset-md-12">
            <WeatherToday />
          </div>
          <div className="col-6 col-md-7 offset-md-12">
            <SearchCity />
            <WeatherDescription />
          </div>
        </div>
        <div className="row" id="forecast-row">
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
