import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleGoHome = () => {
    navigate('/');
    // Small delay to ensure navigation completes, then scroll to home
    setTimeout(() => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-number">404</div>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-message">
            Oops! The page you're looking for seems to have wandered off like a lost timepiece.
            Let us guide you back to our collection.
          </p>
          <div className="not-found-actions">
            <button className="not-found-button primary" onClick={handleGoHome}>
              Return Home
            </button>
            <button 
              className="not-found-button secondary" 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const gallerySection = document.getElementById('gallery');
                  if (gallerySection) {
                    gallerySection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            >
              Browse Gallery
            </button>
          </div>
          <div className="not-found-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleGoHome(); }}>Home</a>
            <a href="#products" onClick={(e) => { 
              e.preventDefault(); 
              navigate('/');
              setTimeout(() => {
                const section = document.getElementById('products');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}>Products</a>
            <a href="#gallery" onClick={(e) => { 
              e.preventDefault(); 
              navigate('/');
              setTimeout(() => {
                const section = document.getElementById('gallery');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}>Gallery</a>
            <a href="#about-us" onClick={(e) => { 
              e.preventDefault(); 
              navigate('/');
              setTimeout(() => {
                const section = document.getElementById('about-us');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}>About Us</a>
            <a href="#contact-us" onClick={(e) => { 
              e.preventDefault(); 
              navigate('/');
              setTimeout(() => {
                const section = document.getElementById('contact-us');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}>Contact</a>
          </div>
        </div>
        <div className="not-found-decoration">
          <div className="watch-icon">⌚</div>
        </div>
      </div>
    </div>
  );
}

