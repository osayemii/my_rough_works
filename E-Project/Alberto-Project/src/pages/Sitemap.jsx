import '../styles/Sitemap.css';

export default function Sitemap() {
  const handleClick = (e, path) => {
    e.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mainLinks = [
    { name: "Home", path: "#home", icon: "🏠" },
    { name: "Products", path: "#products", icon: "⌚" },
    { name: "Technology", path: "#technology", icon: "⚙️" },
    { name: "Store Locator", path: "#store-locator", icon: "📍" },
    { name: "Support", path: "#support", icon: "🛡️" },
    { name: "Gallery", path: "#gallery", icon: "📸" },
    { name: "About Us", path: "#about-us", icon: "ℹ️" },
    { name: "Contact Us", path: "#contact-us", icon: "✉️" }
  ];

  const productCategories = [
    { name: "Vintage Collection", path: "#products", icon: "🕰️" },
    { name: "Luxury Collection", path: "#products", icon: "💎" },
    { name: "Smart Watches", path: "#products", icon: "📱" }
  ];

  const services = [
    { name: "Warranty & Repairs", path: "#support" },
    { name: "Service Price List", path: "#support" },
    { name: "FAQs", path: "#support" },
    { name: "Authentication", path: "#support" }
  ];

  const companyInfo = [
    { name: "Our Legacy", path: "#about-us" },
    { name: "What We Offer", path: "#about-us" },
    { name: "Contact Information", path: "#about-us" }
  ];

  return (
    <div className="sitemap-page">
      <div className="sitemap-container">
        <div className="sitemap-header">
          <h1 className="sitemap-title">Sitemap</h1>
          <p className="sitemap-intro">
            Navigate through our website easily. Find all pages and sections organized for your convenience.
          </p>
        </div>

        <div className="sitemap-content">
          <div className="sitemap-section">
            <h2 className="section-heading">
              <span className="section-icon">🧭</span>
              Main Navigation
            </h2>
            <div className="sitemap-grid">
              {mainLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.path}
                  className="sitemap-link-card"
                  onClick={(e) => handleClick(e, link.path)}
                >
                  <span className="link-icon">{link.icon}</span>
                  <span className="link-name">{link.name}</span>
                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="sitemap-section">
            <h2 className="section-heading">
              <span className="section-icon">⌚</span>
              Product Categories
            </h2>
            <div className="sitemap-grid">
              {productCategories.map((category, i) => (
                <a
                  key={i}
                  href={category.path}
                  className="sitemap-link-card"
                  onClick={(e) => handleClick(e, category.path)}
                >
                  <span className="link-icon">{category.icon}</span>
                  <span className="link-name">{category.name}</span>
                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="sitemap-section">
            <h2 className="section-heading">
              <span className="section-icon">🛠️</span>
              Services & Support
            </h2>
            <div className="sitemap-list">
              {services.map((service, i) => (
                <a
                  key={i}
                  href={service.path}
                  className="sitemap-list-item"
                  onClick={(e) => handleClick(e, service.path)}
                >
                  <span className="list-check">✓</span>
                  {service.name}
                  <span className="list-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="sitemap-section">
            <h2 className="section-heading">
              <span className="section-icon">ℹ️</span>
              Company Information
            </h2>
            <div className="sitemap-list">
              {companyInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.path}
                  className="sitemap-list-item"
                  onClick={(e) => handleClick(e, info.path)}
                >
                  <span className="list-check">✓</span>
                  {info.name}
                  <span className="list-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="sitemap-footer">
          <div className="footer-content">
            <p className="copyright">
              © 2025 Alberto Watch Company. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#contact-us" onClick={(e) => handleClick(e, '#contact-us')}>Contact</a>
              <span>•</span>
              <a href="#support" onClick={(e) => handleClick(e, '#support')}>Support</a>
              <span>•</span>
              <a href="#about-us" onClick={(e) => handleClick(e, '#about-us')}>About</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
