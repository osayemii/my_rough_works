import '../styles/Technology.css';

export default function Technology() {
  const technologies = [
    {
      id: 1,
      icon: '☀️',
      title: 'Eco-Drive Solar Power',
      description: 'Never change a battery again. Our Eco-Drive technology converts any light source into energy, powering watches for months even in complete darkness.',
      features: ['Light-powered charging', '6-month power reserve', 'Perpetual calendar', 'Water resistant'],
      category: 'Power'
    },
    {
      id: 2,
      icon: '⚙️',
      title: 'Automatic Mechanical Movement',
      description: 'Powered by the natural motion of your wrist. Swiss and Japanese precision calibers with hand-finished movements and COSC certification.',
      features: ['Self-winding mechanism', '40+ hour power reserve', 'Swiss/Japanese calibers', 'COSC certified'],
      category: 'Movement'
    },
    {
      id: 3,
      icon: '📱',
      title: 'Smart Connectivity',
      description: 'Seamlessly sync with your smartphone. Track fitness, receive notifications, and access GPS navigation while maintaining luxury aesthetics.',
      features: ['Bluetooth 5.0 sync', 'Heart rate monitoring', 'GPS tracking', 'App integration'],
      category: 'Connectivity'
    },
    {
      id: 4,
      icon: '💎',
      title: 'Sapphire Crystal',
      description: 'Virtually scratch-proof sapphire crystal with anti-reflective coating. Used in all luxury models for ultimate durability and clarity.',
      features: ['9 Mohs hardness', 'Anti-reflective coating', 'Crystal clear visibility', 'Lifetime durability'],
      category: 'Materials'
    },
    {
      id: 5,
      icon: '🌊',
      title: 'Water Resistance',
      description: 'Professional-grade water resistance from 100m to 1000m. Tested under extreme conditions for diving and water sports.',
      features: ['100m-1000m rating', 'Screw-down crown', 'Helium escape valve', 'ISO 6425 certified'],
      category: 'Durability'
    },
    {
      id: 6,
      icon: '✨',
      title: 'Luminescent Technology',
      description: 'Super-LumiNova and Tritium gas tubes provide exceptional low-light visibility. Charge in seconds, glow for hours.',
      features: ['Super-LumiNova coating', 'Tritium gas tubes', '12+ hour glow', 'Quick charge'],
      category: 'Visibility'
    }
  ];

  return (
    <div className="technology-page">
      <div className="technology-container">
        <div className="technology-header">
          <h1 className="technology-title">Our Watch Technology</h1>
          <p className="technology-intro">
            At Alberto Watch Company, we blend centuries-old craftsmanship with cutting-edge innovation. 
            Each timepiece represents the perfect fusion of traditional watchmaking artistry and modern 
            technological excellence.
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map((tech) => (
            <div key={tech.id} className="tech-card">
              <div className="tech-icon-wrapper">
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-category">{tech.category}</span>
              </div>
              <h3 className="tech-title">{tech.title}</h3>
              <p className="tech-description">{tech.description}</p>
              <ul className="tech-features">
                {tech.features.map((feature, index) => (
                  <li key={index} className="tech-feature-item">
                    <span className="tech-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="tech-glow"></div>
            </div>
          ))}
        </div>

        <div className="technology-footer">
          <div className="tech-stats">
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">Years of Innovation</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Patents Filed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Quality Testing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
