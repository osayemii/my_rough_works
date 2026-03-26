import { useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);
  const socialLinks = [
    { name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/osayemii' },
    { name: 'Twitter', icon: FiTwitter, url: 'https://x.com/OsayemiD010' },
    { name: 'Email', icon: FiMail, url: 'mailto:osayemidanniel@gmail.com' },
  ];

  useEffect(() => {
    // Scroll animations removed
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content-simple">
          <h3>Let's Connect</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>
          <div className="social-links-grid">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target={social.name === 'Email' ? '_self' : '_blank'}
                  rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
                  className="social-link"
                  aria-label={social.name}
                >
                  <IconComponent />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
