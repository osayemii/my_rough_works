import { useState, useEffect } from 'react'
import Logo from './Logo'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 100

      // If at the top, set home as active
      if (scrollPosition < 200) {
        setActiveSection('home')
        return
      }

      const sections = navItems.map((item) => document.getElementById(item.id))

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScrollSpy)
    handleScrollSpy()

    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className="navbar-brand"
          onClick={() => handleScroll('home')}
          aria-label="Go to home"
        >
          <Logo />
          <span>Osayemi Daniel</span>
        </button>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

