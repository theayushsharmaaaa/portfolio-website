import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <h3 className="footer-title">Ayush Sharma</h3>
              <p>
                A passionate Full Stack Developer and AI Enthusiast focused on creating impactful solutions through code.
              </p>
              <div className="footer-social">
                <a href="https://github.com/theayushsharmaaaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/theayushsharmaaaa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com/theayushsharmaaaa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="mailto:theayushsharmaaaa@gmail.com" aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h3 className="footer-title">Quick Links</h3>
              <ul>
                <li><a href="#home"><i className="fas fa-chevron-right"></i> Home</a></li>
                <li><a href="#about"><i className="fas fa-chevron-right"></i> About</a></li>
                <li><a href="#skills"><i className="fas fa-chevron-right"></i> Skills</a></li>
                <li><a href="#experience"><i className="fas fa-chevron-right"></i> Experience</a></li>
                <li><a href="#projects"><i className="fas fa-chevron-right"></i> Projects</a></li>
                <li><a href="#contact"><i className="fas fa-chevron-right"></i> Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h3 className="footer-title">Contact</h3>
              <p className="contact-item">
                <i className="fas fa-envelope"></i> theayushsharmaaaa@gmail.com
              </p>
              <p className="contact-item">
                <i className="fas fa-phone"></i> +91 82358 53952
              </p>
              <p className="contact-item">
                <i className="fas fa-map-marker-alt"></i> Mohali, Punjab, India
              </p>
              <p className="contact-item">
                <i className="fas fa-briefcase"></i> Open for new opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>&copy; {currentYear} Ayush Sharma. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;