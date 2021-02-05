import React from "react";
import "./SearchCity.css";

export default function SearchCity() {
  return (
    <div className="search-city" id="search-city-form">
      <form>
        <div className="row">
          <div className="col-12">
            <input
              type="search"
              placeholder="Search City"
              className="form-control"
              id="search-text-input"
              autoComplete="off"
            />
          </div>

          <div className="row id=button-row">
            <div className="col">
              <input
                type="submit"
                value="Search"
                className="search-button"
                id="search-button"
              />
            </div>

            <div className="col">
              <button
                value="My Location"
                type="button"
                className="current-location-button"
                id="current-location-button"
              >
                Current Location
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
