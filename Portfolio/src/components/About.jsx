import { useEffect, useRef } from 'react';
import { FiUser } from 'react-icons/fi';
import Magnet from './reactbits/Magnet';
import './About.css';

const About = () => {

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              As a software engineer and designer, I specialize in building 
              high-performance applications with a premium aesthetic. I combine 
              technical expertise in enterprise systems with a strong eye for 
              branding and visual storytelling.
            </p>
            <div className="about-stats">
              <Magnet padding={15} magnetStrength={0.1}>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Project Delivered</p>
                </div>
              </Magnet>
              <Magnet padding={15} magnetStrength={0.1}>
                <div className="stat-item">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
              </Magnet>
              <Magnet padding={15} magnetStrength={0.1}>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </Magnet>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <FiUser style={{ fontSize: '8rem', opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
