import "./WeatherCard.css";
import { useContext } from "react";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../context/CurrentTemperatureUnitContext";
import React from "react";
function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  function getTemp() {
    if (currentTemperatureUnit === "F") {
      return `${weatherData.temp.F} ° F`;
    } else {
      return `${weatherData.temp.C} ° C`;
    }
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{getTemp()}</p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"}time ${
          weatherOption?.condition || ""
        }${weatherOption?.condition ? " weather" : "weather"}`}
        className="weather-card__image"
      />
    </section>
  );
}
export default WeatherCard;
