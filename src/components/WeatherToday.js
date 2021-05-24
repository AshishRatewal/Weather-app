import React, { useState, useEffect } from "react";
import axios from "axios";
const WeatherToday = () => {
  const [searchCity, setSearchCity] = useState("chhachhrauli");
  const APIkey = "69ea186130e1fec118fcc795ac180f7e";
  const blankObj = {
    city: {
      name: "",
    },
    list: [
      {
        main: {
          feels_like: "",
          temp: "",
          temp_max: "",
          temp_min: "",
          humidity: "",
          pressure: "",
        },
        weather: [
          {
            icon: "",
          },
        ],
      },
    ],
  };
  const errorObj = {
    city: {
      name: "not found!",
    },
    list: [
      {
        main: {
          feels_like: "",
          temp: "",
          temp_max: "",
          temp_min: "",
          humidity: "",
          pressure: "",
        },
        weather: [
          {
            icon: "",
          },
        ],
      },
    ],
  };
  const [apiData, setApiData] = useState(blankObj);

  const callingApi = async (searchedValue) => {
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${searchedValue}&appid=${APIkey}`
      )
      .then((res) => {
        console.log("Response", res.data);
        setApiData(res.data);
      })
      .catch((err) => {
        console.log("Error =>", err);
        setApiData(errorObj);
      });
  };
  useEffect(() => {
    callingApi(searchCity);
  }, [searchCity]);

  const { city } = apiData && apiData;
  const { name } = city;
  const { list } = apiData && apiData;
  const { main } = list[0];
  const { weather } = list[0];
  const { icon } = weather[0];
  const { feels_like, temp, temp_max, temp_min, humidity, pressure } = main;
  const tempCelcius = (temp == "" ? 0 : temp - 274.15).toFixed(2);
  const feelsLike = (feels_like == "" ? 0 : feels_like - 274.15).toFixed(2);
  const tempHigh = (temp_max == "" ? 0 : temp_max - 274.15).toFixed(2);
  const lowTemp = (temp_min == "" ? 0 : temp_min - 274.15).toFixed(2);

  const getSearchCity = (e) => {
    const { value } = e.target;
    setSearchCity(value);
  };

  return (
    <>
      <div className="container p-0 mb-4 text-light">
        <div class="row g-3">
          <div class="col-12">
            <input
              type="search"
              class="form-control"
              placeholder="Search..."
              onChange={getSearchCity}
            />
          </div>
        </div>
      </div>
      <div class="card bg-light mb-5">
        <div class="card-body">
          <div className="row">
            <div className="row">
              <div className="col-12">
                <p>Current Weather</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-12">
                  <p className="fw-bolder">
                    {name == "" ? "loading..." : name}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>
                    <img
                      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                      alt="weather image"
                    />
                  </p>
                </div>
                <div className="col-6">
                  <h1>{tempCelcius} deg</h1>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <p>
                Fell like <span className="fw-bolder">{feelsLike}</span> deg
              </p>
              <div className="row">
                <div className="col-6">HUmidity</div>
                <div className="col-6">{humidity}%</div>
              </div>
              <div className="row">
                <div className="col-6">Tempature Min</div>
                <div className="col-6">{lowTemp}</div>
              </div>
              <div className="row">
                <div className="col-6">Tempature Max</div>
                <div className="col-6">{tempHigh}</div>
              </div>
              <div className="row">
                <div className="col-6">presser</div>
                <div className="col-6">{pressure}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card bg-light text-center">
        <div class="card-body">
          <div className="row">
            <div className="col-md-2 col-sm-4 col-6">
              <p>sat</p>
              <h5>image</h5>
              <p>clear</p>
              <p>36/27 deg</p>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
              <p>sat</p>
              <h5>image</h5>
              <p>clear</p>
              <p>36/27 deg</p>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
              <p>sat</p>
              <h5>image</h5>
              <p>clear</p>
              <p>36/27 deg</p>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
              <p>sat</p>
              <h5>image</h5>
              <p>clear</p>
              <p>36/27 deg</p>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
              <p>sat</p>
              <h5>image</h5>
              <p>clear</p>
              <p>36/27 deg</p>
            </div>
            <div className="col-md-2 col-sm-4 col-6">
              <p>sat</p>
              <h5>image</h5>
              <p>clear</p>
              <p>36/27 deg</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherToday;
