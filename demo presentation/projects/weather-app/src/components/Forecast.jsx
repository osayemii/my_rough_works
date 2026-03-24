import { getWeatherIcon } from '../utils/weatherAPI'
import './Forecast.css'

const Forecast = ({ forecast, convertTemp, unit }) => {
  // Group forecast by day and get one entry per day
  const dailyForecast = []
  const seenDays = new Set()

  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000)
    const dayKey = date.toDateString()

    if (!seenDays.has(dayKey) && dailyForecast.length < 5) {
      seenDays.add(dayKey)
      dailyForecast.push({
        date: date,
        temp: item.main.temp,
        icon: item.weather[0].icon,
        description: item.weather[0].description,
      })
    }
  })

  const formatDate = (date) => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    if (date.toDateString() === today.toDateString()) {
      return 'Today'
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow'
    } else {
      return date.toLocaleDateString('en-US', { weekday: 'short' })
    }
  }

  return (
    <div className="forecast">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-list">
        {dailyForecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <div className="forecast-date">{formatDate(day.date)}</div>
            <div className="forecast-icon">
              <img
                src={getWeatherIcon(day.icon)}
                alt={day.description}
              />
            </div>
            <div className="forecast-temp">
              {convertTemp(day.temp)}°{unit === 'celsius' ? 'C' : 'F'}
            </div>
            <div className="forecast-desc">{day.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast



