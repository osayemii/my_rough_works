const STORAGE_KEY = 'weather-app-recent-searches'

export const saveRecentSearch = (city) => {
  try {
    const recent = getRecentSearches()
    const updated = [city, ...recent.filter((c) => c !== city)].slice(0, 5)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  } catch (error) {
    console.error('Error saving recent search:', error)
  }
}

export const getRecentSearches = () => {
  try {
    const recent = localStorage.getItem(STORAGE_KEY)
    return recent ? JSON.parse(recent) : []
  } catch (error) {
    console.error('Error loading recent searches:', error)
    return []
  }
}



