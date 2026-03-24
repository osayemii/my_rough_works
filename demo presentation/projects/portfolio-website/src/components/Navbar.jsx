import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand" onClick={() => scrollToSection('hero')}>
            Portfolio
          </div>
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <button onClick={() => scrollToSection('hero')}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills')}>Skills</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



