import '../styles/About.css';

export default function About() {
  const milestones = [
    { year: '1985', title: 'Foundation', description: 'Alberto Moretti establishes the company in Milan, Italy' },
    { year: '1995', title: 'First US Store', description: 'Opens flagship location in New York City' },
    { year: '2005', title: 'Expansion', description: 'Expands to Beverly Hills and Miami locations' },
    { year: '2015', title: 'Innovation', description: 'Launches smart watch collection' },
    { year: '2025', title: 'Today', description: 'Serving collectors worldwide with 40+ years of excellence' }
  ];

  const values = [
    { icon: '🎯', title: 'Precision', description: 'Every timepiece is crafted with meticulous attention to detail' },
    { icon: '✨', title: 'Excellence', description: 'We maintain the highest standards in quality and service' },
    { icon: '🤝', title: 'Trust', description: 'Building lasting relationships with our customers' },
    { icon: '🔧', title: 'Expertise', description: 'Master watchmakers with decades of experience' }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About Alberto Watch Company</h1>
          <p className="about-intro">
            For over four decades, we have been dedicated to providing the finest timepieces 
            and exceptional service to watch enthusiasts and collectors worldwide.
          </p>
        </div>

        <div className="about-section legacy-section">
          <div className="section-content">
            <div className="section-icon">🏛️</div>
            <h2 className="section-title">Our Legacy</h2>
            <p className="section-text">
              Founded in <strong>1985</strong> by master watchmaker <em>Alberto Moretti</em> in Milan, Italy, 
              our journey began with a passion for precision and timeless design. What started as a small 
              boutique has grown into a globally recognized destination for luxury timepieces.
            </p>
            <p className="section-text">
              Today, we are proud to serve collectors and enthusiasts worldwide from our flagship stores 
              in New York, Los Angeles, and Miami. Our commitment to excellence and authenticity has 
              made us a trusted name in the watch industry.
            </p>
          </div>
        </div>

        <div className="milestones-section">
          <h2 className="milestones-title">Our Journey</h2>
          <div className="milestones-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-item">
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <h2 className="values-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section services-section">
          <div className="section-content">
            <div className="section-icon">⚙️</div>
            <h2 className="section-title">What We Offer</h2>
            <div className="services-grid">
              <div className="service-item">
                <span className="service-check">✓</span>
                <div>
                  <strong>Full-service watch repair & restoration</strong>
                  <p>Expert repair services for all watch types</p>
                </div>
              </div>
              <div className="service-item">
                <span className="service-check">✓</span>
                <div>
                  <strong>Authenticity appraisal for vintage pieces</strong>
                  <p>Professional authentication with certificates</p>
                </div>
              </div>
              <div className="service-item">
                <span className="service-check">✓</span>
                <div>
                  <strong>Curated selection of new luxury watches</strong>
                  <p>Handpicked collection from top brands</p>
                </div>
              </div>
              <div className="service-item">
                <span className="service-check">✓</span>
                <div>
                  <strong>Trade-in and consignment services</strong>
                  <p>Fair valuations and flexible options</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2 className="contact-section-title">Get in Touch</h2>
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <span className="contact-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p><a href="mailto:info@albertowatches.com">info@albertowatches.com</a></p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>123 Luxury Ave, New York, NY 10001</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">🕐</span>
              <div>
                <strong>Hours</strong>
                <p>Mon–Sat: 10AM–8PM | Sun: 12PM–6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
