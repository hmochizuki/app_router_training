import axios from "axios";

type Location = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

type Condition = {
  text: string;
  icon: string;
  code: number;
};

type Current = {
  condition: Condition;
};

const weatherAxios = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  headers: {
    "content-type": "application/json",
  },
  params: {
    key: process.env.WEATHER_API_KEY,
  },
});

export const getCurrentWeather = async (q: string) => {
  return await weatherAxios.get<{ location: Location; current: Current }>(
    `current.json?q=${q}`
  );
};
