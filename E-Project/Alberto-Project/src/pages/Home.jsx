import '../styles/Home.css';
import homeImage from '/images/float.png';

export default function Home() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = sectionId;
    }
  }

  return (
    <div id="home">
      <section className="hero">
        {/* Left Section - Text and Buttons */}
        <div className="hero-left">
          <div className="hero-content">
            <h1>Alberto Watch Company Since 1985</h1>
            <p>Discover the finest watches with unmatched craftsmanship.</p>
            <div className="buttons">
              <a href="#products" className="btn btn1" onClick={(e) => { e.preventDefault(); handleScroll('products'); }}>
                Explore Collection <span><svg height="20" width="20" viewBox="0 0 344 384" xmlns="http://www.w3.org/2000/svg">
                  <path d="m171 21l170 171l-170 171l-30-30l119-120H0v-42h260L141 51z" fill="currentColor" />
                </svg></span>
              </a>
              <a href="#contact-us" className="btn btn2" onClick={(e) => { e.preventDefault(); handleScroll('contact-us'); }}>
                Get In Touch <span><svg height="20" width="20" viewBox="0 0 344 384" xmlns="http://www.w3.org/2000/svg">
                  <path d="m171 21l170 171l-170 171l-30-30l119-120H0v-42h260L141 51z" fill="currentColor" />
                </svg></span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Image Layers */}
        <div className="hero-right">
          <div className="layer-box">
            <img src={homeImage} alt='Watch Image' />
          </div>
        </div>
      </section>
    </div>
  );
}


