import { useState, useEffect, useRef, useMemo } from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';

export default function Header() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('home');
  const hasMounted = useRef(false);

  const navItems = useMemo(() => [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'Technology', id: 'technology' },
    { name: 'Store Locator', id: 'store-locator' },
    { name: 'Support', id: 'support' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'About Us', id: 'about-us' },
    { name: 'Contact Us', id: 'contact-us' },
    { name: 'Sitemap', id: 'site-map' },
  ], []);

  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    const count = localStorage.getItem('visitorsCount') || 0;
    const newCount = parseInt(count) + 1;
    localStorage.setItem('visitorsCount', newCount);
    setVisitorCount(newCount);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveNavItem(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  //Block scroll if Mobile menu is opened
  useEffect(() => {
    const shouldBlockScroll = isMobileOpen;
    document.body.style.overflow = shouldBlockScroll ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [isMobileOpen]);

  // Scroll detection to set active nav item
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveNavItem(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  return (
    <header className="header">
      {/* Mobile backdrop overlay */}
      {isMobileOpen && (
        <div 
          className="mobile-backdrop"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div className={`container ${isMobileOpen ? 'nav-open' : ''}`}>

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>

        <div className='wrapper'>
          {/* Mobile menu icon */}
          <span
            className="mobile-icon"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? '✕' : '☰'}
          </span>

          {/* Navigation menu */}
          <nav className={`nav ${isMobileOpen ? 'nav-open' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.name}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={activeNavItem === item.id ? 'active' : ''}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visitor's count display*/}
          <div className="visitor">
            <svg height="20" width="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 226v32c128 192 384 192 512 0v-32C384 34 128 34 0 226zm256 144c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-200c0-8.3 1.7-16.1 4.3-23.6c-1.5-.1-2.8-.4-4.3-.4c-53 0-96 43-96 96s43 96 96 96s96-43 96-96c0-1.5-.4-2.8-.4-4.3c-7.4 2.6-15.3 4.3-23.6 4.3c-39.8 0-72-32.2-72-72z" fill="currentColor" />
            </svg><strong>{visitorCount.toLocaleString()}</strong>
          </div>
        </div>
      </div>
    </header>
  );
}


