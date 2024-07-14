import "./WeatherCard.css";
import rectangle from "../../assets/rectangle.png";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import React, { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData?.temp?.[currentTemperatureUnit] || 999;
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {" "}
        {temp} &deg; {currentTemperatureUnit}{" "}
      </p>
      <img
        src={rectangle}
        alt="weather background image"
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
