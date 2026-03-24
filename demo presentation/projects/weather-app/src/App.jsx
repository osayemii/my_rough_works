import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import UnitToggle from './components/UnitToggle'
import { fetchCurrentWeather, fetchForecast } from './utils/weatherAPI'
import { saveRecentSearch } from './utils/storage'
import './styles/App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [unit, setUnit] = useState('celsius') // 'celsius' or 'fahrenheit'

  const searchWeather = async (city) => {
    if (!city.trim()) return

    setLoading(true)
    setError(null)

    try {
      const [currentData, forecastData] = await Promise.all([
        fetchCurrentWeather(city),
        fetchForecast(city),
      ])

      setWeather(currentData)
      setForecast(forecastData)
      saveRecentSearch(city)
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data')
      setWeather(null)
      setForecast(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Try to get user's location on mount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY || 'demo_key'}&units=metric`
            )
            if (response.ok) {
              const data = await response.json()
              searchWeather(data.name)
            }
          } catch (err) {
            console.error('Error getting location:', err)
          }
        },
        () => {
          // User denied location or error occurred
          console.log('Location access denied')
        }
      )
    }
  }, [])

  const convertTemperature = (temp) => {
    if (unit === 'fahrenheit') {
      return Math.round((temp * 9) / 5 + 32)
    }
    return Math.round(temp)
  }

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Weather App</h1>
          <p className="app-subtitle">Get real-time weather information</p>
        </header>

        <SearchBar onSearch={searchWeather} loading={loading} />
        <UnitToggle unit={unit} onUnitChange={setUnit} />

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {weather && !loading && (
          <>
            <CurrentWeather
              weather={weather}
              convertTemp={convertTemperature}
              unit={unit}
            />
            {forecast && (
              <Forecast
                forecast={forecast}
                convertTemp={convertTemperature}
                unit={unit}
              />
            )}
          </>
        )}

        {!weather && !loading && !error && (
          <div className="welcome-message">
            <p>Search for a city to get started!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App



