import { getWeatherIcon } from '../utils/weatherAPI'
import './CurrentWeather.css'

const CurrentWeather = ({ weather, convertTemp, unit }) => {
  const iconUrl = getWeatherIcon(weather.weather[0].icon)
  const temp = convertTemp(weather.main.temp)
  const feelsLike = convertTemp(weather.main.feels_like)

  return (
    <div className="current-weather">
      <div className="weather-header">
        <div className="weather-location">
          <h2>{weather.name}</h2>
          <p className="weather-country">{weather.sys.country}</p>
        </div>
        <div className="weather-icon">
          <img src={iconUrl} alt={weather.weather[0].description} />
        </div>
      </div>

      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{temp}°</span>
          <span className="temp-unit">{unit === 'celsius' ? 'C' : 'F'}</span>
        </div>
        <p className="weather-description">
          {weather.weather[0].description.charAt(0).toUpperCase() +
            weather.weather[0].description.slice(1)}
        </p>
        <p className="feels-like">
          Feels like {feelsLike}°{unit === 'celsius' ? 'C' : 'F'}
        </p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{weather.wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{weather.main.pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Visibility</span>
          <span className="detail-value">
            {(weather.visibility / 1000).toFixed(1)} km
          </span>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather



