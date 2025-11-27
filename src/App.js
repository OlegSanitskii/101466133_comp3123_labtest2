import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_BASE_URL } from "./config";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("Toronto"); 
  const [queryCity, setQueryCity] = useState("Toronto"); 
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `${OPEN_WEATHER_BASE_URL}/weather`,
          {
            params: {
              q: queryCity,
              appid: OPEN_WEATHER_API_KEY,
              units: "metric", 
            },
          }
        );


        const data = response.data;
        setWeather({
          city: data.name,
          country: data.sys.country,
          temperature: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          tempMin: Math.round(data.main.temp_min),
          tempMax: Math.round(data.main.temp_max),
          description: data.weather[0].description,
          main: data.weather[0].main,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          windSpeed: data.wind.speed,
        });
      } catch (err) {
        console.error(err);
        setError("Could not fetch weather. Please check city name.");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [queryCity]); 


  const handleSearch = () => {
    if (!city.trim()) return;
    setQueryCity(city.trim());
  };

  return (
    <div className="app">
      <div className="app-overlay">
        <div className="weather-container">
          <h1 className="app-title">Weather Dashboard</h1>
          <SearchBar
            city={city}
            onCityChange={setCity}
            onSearch={handleSearch}
          />

          {loading && <p className="status-text">Loading...</p>}
          {error && <p className="status-text error">{error}</p>}

          {weather && !loading && !error && (
            <WeatherCard weather={weather} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
