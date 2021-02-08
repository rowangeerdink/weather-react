import "./App.css";
import React from "react";
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherToday from "./WeatherToday";
import SearchCity from "./SearchCity";
import WeatherDescription from "./WeatherDescription";
import Footer from "./Footer";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="container">
      <div className="weather-container weather-app">
        <div className="row top-row ">
          <div className="col-md-6">
            <WeatherToday />
          </div>
          <div className="col-md-6 . offset earch-city">
            <SearchCity />
            <WeatherDescription />
          </div>
        </div>
        <div>
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
