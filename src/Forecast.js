import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row forecast-row">
      <div className="col">
        <h5>Tomorrow</h5>
        <i class="fas fa-cloud-showers-heavy weather-image"></i>
        <p>9°C</p>
      </div>

      <div className="col">
        <h5>Tuesday</h5>
        <i class="fas fa-cloud weather-image"></i>
        <p>11°C</p>
      </div>

      <div className="col">
        <h5>Wednesday</h5>
        <i class="fas fa-cloud-sun-rain weather-image"></i>
        <p>10°C</p>
      </div>

      <div className="col">
        <h5>Thursday</h5>
        <i class="fas fa-cloud weather-image"></i>
        <p>8°C</p>
      </div>

      <div className="col">
        <h5>Friday</h5>
        <i class="fas fa-cloud-sun weather-image"></i>
        <p>12°C</p>
      </div>
    </div>
  );
}
