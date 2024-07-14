export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;

  result.temp = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };

  result.typeF = getWeatherTypeF(result.temp.F);
  result.typeC = getWeatherTypeC(result.temp.C);

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

const getWeatherTypeC = (tempC) => {
  if (tempC > 30) {
    return "hot";
  } else if (tempC >= 19 && tempC < 30) {
    return "warm";
  } else {
    return "cold";
  }
};
