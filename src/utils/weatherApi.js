import { checkResponse } from "./api";

export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkResponse);
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;

  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };

  result.type = getWeatherTypeF(result.temp.F);

  return result;
};

const getWeatherTypeF = (tempF) => {
  if (tempF > 86) {
    return "hot";
  } else if (tempF >= 66 && tempF < 86) {
    return "warm";
  } else {
    return "cold";
  }
};
