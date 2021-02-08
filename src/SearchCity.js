import React from "react";
import "./SearchCity.css";

export default function SearchCity() {
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

              <div className="col-4 ">
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
}
