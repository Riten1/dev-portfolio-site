"use client";
import React, { useEffect, useState } from "react";
import { CardWrapper } from "../CardWrapper";
import axios from "axios";
import { IWeatherData } from "@/@types/weather";
import { p } from "motion/react-client";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const coordinatesBaseUrl = process.env.NEXT_PUBLIC_COORDINATES_WEATHER_BASE_URL;
const weatherDataBaseUrl = process.env.NEXT_PUBLIC_WEATHER_DATA_BASE_URL;
export const LocationCard = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData>();
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${coordinatesBaseUrl}direct`, {
        params: {
          q: "Pokhara, Nepal",
          limit: 1,
          appid: API_KEY,
        },
      });
      const { lat, lon } = response.data[0];

      const weatherResponse = await axios.get(`${weatherDataBaseUrl}/weather`, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: "metric",
        },
      });
      setWeatherData(weatherResponse.data);
    })();
  }, []);
  return (
    <CardWrapper
      className="bg-teal-400 text-white w-full"
      onClick={() => {
        window.open(
          `https://www.google.com/maps/place/Pokhara/@28.2296977,83.8742169,26101m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3995937bbf0376ff:0xf6cf823b25802164!8m2!3d28.2095831!4d83.9855674!16zL20vMDQwZHgz?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D`
        );
      }}
    >
      <div className="p-4 h-full flex flex-col justify-between">
        <div className="flex gap-2">
          {weatherData?.weather[0]?.main === "Clear" ? (
            <p className="text-2xl">☀️</p>
          ) : weatherData?.weather[0]?.main === "Rain" ? (
            <p className="text-2xl">🌧️</p>
          ) : weatherData?.weather[0]?.main === "Clouds" ? (
            <p className="text-2xl">☁️</p>
          ) : (
            <p className="text-2xl">🌪️</p>
          )}
          <div className="text-2xl">
            {weatherData?.main?.temp.toFixed(0)} &deg;C
          </div>
        </div>
        <div>
          <p className="text-sm font-medium">
            {weatherData?.name}, {weatherData?.sys?.country}
          </p>
          <p className="text-xs opacity-80">{weatherData?.timezone}</p>
          <p className="text-xs opacity-60">
            {weatherData?.coord?.lon}&deg; S, {weatherData?.coord?.lat}&deg; E
          </p>
        </div>
        <p className="text-xs opacity-80">Click to open maps</p>
      </div>
    </CardWrapper>
  );
};
