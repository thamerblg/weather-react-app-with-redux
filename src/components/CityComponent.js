import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import logo from "../icons/perfect-day.svg";
import { setCity } from "../store/actions/cityActions";
import { getData } from "../store/actions/dataActions";

const CityComponent = () => {
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    setCityName(cityName);
    dispatch(setCity(cityName));
  };

  useEffect(() => {
    dispatch(getData(cityName));
  }, [cityName, dispatch]);

  return (
    <>
      <img className="welcomeWeatherLogo" alt="logo-app" src={logo} />
      <span className="chooseCityLabel">Find Weather of your city</span>
      <form className="searchBox" onSubmit={submitForm}>
        <input
          onChange={(e) => setCityName(e.target.value)}
          placeholder="City"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default CityComponent;
