import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: 'twitter',
    },
  ]

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Navigation</h3>
            <nav className="footer-nav">
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleScroll(link.id)}
                      className="footer-link"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className={`social-icon ${social.icon}`}>
                    {social.icon === 'github' && 'G'}
                    {social.icon === 'linkedin' && 'L'}
                    {social.icon === 'twitter' && 'T'}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Osayemi Daniel</h3>
            <p className="footer-description">
              Software Developer & UI Engineer
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Osayemi Daniel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

