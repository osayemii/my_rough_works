import { useState, useEffect } from 'react'
import { getRecentSearches } from '../utils/storage'
import './SearchBar.css'

const SearchBar = ({ onSearch, loading }) => {
  const [city, setCity] = useState('')
  const [recentSearches, setRecentSearches] = useState([])

  useEffect(() => {
    setRecentSearches(getRecentSearches())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim() && !loading) {
      onSearch(city.trim())
    }
  }

  const handleRecentClick = (recentCity) => {
    setCity(recentCity)
    onSearch(recentCity)
  }

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="search-btn" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {recentSearches.length > 0 && (
        <div className="recent-searches">
          <p className="recent-label">Recent searches:</p>
          <div className="recent-buttons">
            {recentSearches.map((recentCity, index) => (
              <button
                key={index}
                className="recent-btn"
                onClick={() => handleRecentClick(recentCity)}
                disabled={loading}
              >
                {recentCity}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar



