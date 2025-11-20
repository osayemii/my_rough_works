import { useState, useEffect } from 'react';
import '../styles/Ticker.css';

export default function Ticker() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState('Fetching location...');
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Get visitor count from localStorage
    const count = localStorage.getItem('visitorsCount') || 0;
    setVisitorCount(parseInt(count));

    // Get location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const { latitude, longitude } = pos.coords;
            const res = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await res.json();
            setLocation(`${data.city || 'Unknown'}, ${data.countryName || 'Unknown'}`);
          } catch (error) {
            setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
          }
        },
        () => setLocation('Location access denied')
      );
    } else {
      setLocation('Geolocation not supported');
    }
  }, []);

  const tickerItems = [
    { icon: '🕒', text: time.toLocaleString() },
    { icon: '📍', text: location },
    { icon: '👥', text: `Visitors: ${visitorCount.toLocaleString()}` },
    { icon: '⌚', text: 'Luxury Timepieces Since 1985' },
    { icon: '💎', text: 'Premium Watch Collection' },
    { icon: '✨', text: 'Expert Craftsmanship & Service' },
    { icon: '🏆', text: 'Award-Winning Quality' },
    { icon: '🌍', text: 'Worldwide Shipping Available' }
  ];

  return (
    <div className="ticker-container">
      <div className="ticker-content">
        {tickerItems.map((item, index) => (
          <span key={index} className="ticker-item">
            <span className="ticker-icon">{item.icon}</span>
            <span className="ticker-text">{item.text}</span>
            <span className="ticker-separator">•</span>
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {tickerItems.map((item, index) => (
          <span key={`dup-${index}`} className="ticker-item">
            <span className="ticker-icon">{item.icon}</span>
            <span className="ticker-text">{item.text}</span>
            <span className="ticker-separator">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
