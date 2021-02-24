import "./App.css";
import React from "react";
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App(props) {
  return (
    <div className="container">
      <div className="weather-container weather-app">
        <Weather defaultCity="Haarlem" />
      </div>
      <Footer />
    </div>
  );
}
