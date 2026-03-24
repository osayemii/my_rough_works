import { useEffect, useRef } from 'react';
import TextType from './reactbits/TextType';
import Magnet from './reactbits/Magnet';
import './Hero.css';

const Hero = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Osayemi Daniel</span>
            <span className="role">
              <TextType 
                text={['Full Stack Developer', 'Graphic Designer', 'Software Engineer', 'Creative Thinker']} 
                typingSpeed={70} 
                deletingSpeed={40}
                pauseDuration={2000}
              />
            </span>
          </h1>
          <p className="hero-description">
            Building robust software and impactful designs that combine 
            technical rigor with creative excellence.
          </p>
          <div className="hero-buttons">
            <Magnet padding={20} magnetStrength={0.2}>
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
            </Magnet>
            <Magnet padding={20} magnetStrength={0.2}>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </Magnet>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
