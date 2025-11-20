import { useState, useEffect } from 'react';
import '../styles/StoreLocator.css';

const stores = [
  { 
    id: 1, 
    name: "Manhattan Flagship", 
    address: "123 Luxury Ave, New York, NY 10001", 
    phone: "(212) 555-0101", 
    hours: "Mon–Sat: 10AM–8PM",
    email: "manhattan@albertowatches.com",
    features: ["Full Service Center", "Vintage Collection", "Private Viewing Rooms", "Parking Available"],
    distance: null
  },
  { 
    id: 2, 
    name: "Beverly Hills", 
    address: "456 Rodeo Dr, Beverly Hills, CA 90210", 
    phone: "(310) 555-0202", 
    hours: "Mon–Sun: 11AM–7PM",
    email: "beverlyhills@albertowatches.com",
    features: ["Luxury Boutique", "Custom Fitting", "VIP Lounge", "Valet Service"],
    distance: null
  },
  { 
    id: 3, 
    name: "Miami Design District", 
    address: "789 NE 39th St, Miami, FL 33137", 
    phone: "(305) 555-0303", 
    hours: "Tue–Sat: 10AM–6PM",
    email: "miami@albertowatches.com",
    features: ["Smart Watch Collection", "Beach-Ready Styles", "Express Service", "Designer Collaborations"],
    distance: null
  }
];

export default function StoreLocator() {
  const [userLocation, setUserLocation] = useState(null);
  const [userCity, setUserCity] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
          
          try {
            const res = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await res.json();
            setUserCity(`${data.city || 'Unknown'}, ${data.countryName || 'Unknown'}`);
          } catch (error) {
            setUserCity('Location detected');
          }
        },
        () => {
          setUserLocation("Location access denied");
          setUserCity(null);
        }
      );
    }
  }, []);

  const handleGetDirections = (store) => {
    const address = encodeURIComponent(store.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <div className="store-locator-page">
      <div className="store-locator-container">
        <div className="store-locator-header">
          <h1 className="store-locator-title">Find a Store Near You</h1>
          <p className="store-locator-intro">
            Visit one of our flagship locations to experience our collection in person. 
            Our expert staff is ready to assist you with finding the perfect timepiece.
          </p>
          {userLocation && (
            <div className="user-location-badge">
              <span className="location-icon">📍</span>
              <div>
                <strong>Your Location:</strong>
                <p>{userCity || userLocation}</p>
              </div>
            </div>
          )}
        </div>

        <div className="stores-grid">
          {stores.map(store => (
            <div 
              key={store.id} 
              className={`store-card ${selectedStore === store.id ? 'selected' : ''}`}
              onClick={() => setSelectedStore(selectedStore === store.id ? null : store.id)}
            >
              <div className="store-card-header">
                <h3 className="store-name">{store.name}</h3>
                <span className="store-badge">Flagship</span>
              </div>
              
              <div className="store-info">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <strong>Address:</strong>
                    <p>{store.address}</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <strong>Phone:</strong>
                    <p><a href={`tel:${store.phone}`}>{store.phone}</a></p>
                  </div>
                </div>
                
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <strong>Email:</strong>
                    <p><a href={`mailto:${store.email}`}>{store.email}</a></p>
                  </div>
                </div>
                
                <div className="info-item">
                  <span className="info-icon">🕐</span>
                  <div>
                    <strong>Hours:</strong>
                    <p>{store.hours}</p>
                  </div>
                </div>
              </div>

              <div className="store-features">
                <strong>Store Features:</strong>
                <ul>
                  {store.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>

              <button 
                className="directions-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleGetDirections(store);
                }}
              >
                Get Directions
              </button>
            </div>
          ))}
        </div>

        <div className="map-section">
          <h2 className="map-title">Store Locations Map</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <p>Interactive Map Coming Soon</p>
              <p className="map-subtitle">Google Maps Integration</p>
            </div>
          </div>
        </div>

        <div className="store-locator-footer">
          <div className="contact-info">
            <h3>Need Help Finding a Store?</h3>
            <p>Call us at <a href="tel:+15551234567">+1 (555) 123-4567</a> or email <a href="mailto:info@albertowatches.com">info@albertowatches.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
