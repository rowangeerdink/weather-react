import "./App.css";
import React from "react";
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Footer from "./Footer";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="container">
      <div className="weather-container weather-app">
        <Weather defaultCity="Haarlem" />
        <div>
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
