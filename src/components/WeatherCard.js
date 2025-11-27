import React from "react";

function WeatherCard({ weather }) {
  const {
    city,
    country,
    temperature,
    feelsLike,
    tempMin,
    tempMax,
    description,
    main,
    icon,
    humidity,
    pressure,
    windSpeed,
  } = weather;

  
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="weather-main">
        <div>
          <h2 className="weather-city">
            {city}, {country}
          </h2>
          <p className="weather-date">
            {new Date().toLocaleString()}
          </p>
          <p className="weather-main-text">{main}</p>
          <p className="weather-description">{description}</p>
        </div>

        <div className="weather-temp-block">
          <img src={iconUrl} alt={description} className="weather-icon" />
          <p className="weather-temp">{temperature}°C</p>
          <p className="weather-feels">
            Feels like {feelsLike}°C
          </p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Min</span>
          <span className="detail-value">{tempMin}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Max</span>
          <span className="detail-value">{tempMax}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind</span>
          <span className="detail-value">{windSpeed} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
