# Weather App

Real-time weather information application that displays current conditions and forecasts. Integrates with weather APIs to provide accurate data for any location.

## Features

- 🌍 Search for weather by city name
- 🌡️ Display current weather conditions (temperature, humidity, wind speed, description)
- 📅 Show weather forecast for the next 5 days
- 🎨 Display weather icons representing current conditions
- 📍 Auto-detect user location (optional, with permission)
- 🌡️ Temperature unit toggle (Celsius/Fahrenheit)
- 📝 Recent searches stored in local storage
- ⚡ Loading states while fetching data
- ❌ Graceful error handling with user-friendly messages

## Tech Stack

- React 18.2.0
- JavaScript (ES6+)
- Vite 5.0.8
- CSS3
- OpenWeatherMap API
- Fetch API

## Setup Instructions

1. **Get API Key:**
   - Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
   - The free tier allows 60 calls per minute

2. **Configure API Key:**
   - Create a `.env` file in the project root:
   ```
   VITE_API_KEY=your_api_key_here
   ```

3. **Navigate to the project directory:**
```bash
cd projects/weather-app
```

4. **Install dependencies:**
```bash
npm install
```

5. **Start the development server:**
```bash
npm run dev
```

6. **Open your browser** and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx        # City search input
│   │   ├── CurrentWeather.jsx   # Current conditions display
│   │   ├── Forecast.jsx         # 5-day forecast
│   │   └── UnitToggle.jsx       # C/F temperature toggle
│   ├── utils/
│   │   ├── weatherAPI.js        # API integration
│   │   └── storage.js           # Recent searches storage
│   ├── config.js                # API configuration
│   ├── styles/
│   │   ├── index.css            # Global styles
│   │   └── App.css              # App styles
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point
├── .env                         # API key (create this)
├── index.html
├── package.json
└── vite.config.js
```

## Usage

1. **Search for weather**: Enter a city name in the search bar and click "Search" or press Enter
2. **View current weather**: See temperature, humidity, wind speed, and more
3. **Check forecast**: Scroll down to see the 5-day forecast
4. **Toggle units**: Click °C or °F to switch temperature units
5. **Recent searches**: Click on recent search buttons to quickly search again

## API Configuration

The app uses OpenWeatherMap API. Make sure to:
- Sign up for a free account
- Get your API key
- Add it to the `.env` file as `VITE_API_KEY`

**Note**: Without a valid API key, the app will show demo data or error messages.

## Features in Detail

### Auto Location Detection
On first load, the app will try to detect your location (with permission) and show weather for your current location.

### Recent Searches
Your last 5 searches are saved in local storage and displayed as quick-access buttons.

### Responsive Design
The app is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

### Error Handling
The app gracefully handles API errors, network issues, and invalid city names with user-friendly error messages.



