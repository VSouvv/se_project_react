import sunny from "../../assets/sunny.png";
import "./WeatherCard.css";

function WeatherCard() {
  return (
    <section className="weather__card">
      <h1 className="weather__card-text">75 &deg; F</h1>
      <img className="weather__card-img" src={sunny} alt="sunny" />
    </section>
  );
}

export default WeatherCard;
