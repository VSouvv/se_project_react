import "./WeatherCard.css";
import rectangle from "../../assets/rectangle.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp"> {weatherData.temp.F} &deg; F</p>
      <img
        src={rectangle}
        alt="weather background image"
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
