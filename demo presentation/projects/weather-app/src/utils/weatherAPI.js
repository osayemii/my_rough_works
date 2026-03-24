import { API_KEY, API_BASE_URL } from '../config'

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    )

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check the spelling.')
      }
      throw new Error('Failed to fetch weather data')
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export const fetchForecast = async (city) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch forecast data')
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}



