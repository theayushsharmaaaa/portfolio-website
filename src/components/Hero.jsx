import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const roles = ['Full Stack Developer', 'Computer Science Student', 'AI/ML Enthusiast'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (typingRef.current) {
        if (isDeleting) {
          // Deleting text
          typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50; // Faster when deleting
        } else {
          // Typing text
          typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100; // Normal typing speed
        }

        // Switch between typing and deleting
        if (!isDeleting && charIndex === currentRole.length) {
          // Done typing, wait before deleting
          isDeleting = true;
          typingSpeed = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
          // Done deleting, move to next word
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }

      setTimeout(type, typingSpeed);
    };

    // Start the typing effect
    setTimeout(type, 1000);

    // Cleanup function
    return () => {
      clearTimeout(type);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-image">
          <div className="hero-image-container">
            {/* Replace with your profile picture */}
            <img src="src\assets\images\profilephoto.jpg" alt="Ayush Sharma" />
          </div>
        </div>
        <div className="hero-text">
          <p className="intro-text">HELLO THERE 👋</p>
          <h1>I'm Ayush Sharma</h1>
          <h2>I'm a <span ref={typingRef} className="typing"></span></h2>
          <p className="hero-description">
            A passionate developer focused on creating scalable & impactful solutions.
            Currently based in Punjab, India.
          </p>
          
          <div className="hero-info">
            <div className="hero-info-item">
              <span className="emoji">☕</span>
              <span>fueled by coffee</span>
            </div>
            <div className="hero-info-item">
              <span className="emoji">🌎</span>
              <span>based in India</span>
            </div>
            <div className="hero-info-item">
              <span className="emoji">💼</span>
              <span>Upcoming Software Development Intern at Bizom</span>
            </div>
            <div className="hero-info-item">
              <span className="emoji">📧</span>
              <span>theayushsharmaaaa@gmail.com</span>
            </div>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/theayushsharmaaaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/theayushsharmaaaa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:theayushsharmaaaa@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="https://instagram.com/theayusharmaaaa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </div>
          
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="https://drive.google.com/uc?export=view&id=1f1D_xe2p7YGGry4jXLbXTzmBThsCRppJ" className="btn btn-secondary" download>Download CV</a>
          </div>
        </div>
      </div>
      
      <div className="scroll-down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll Down</div>
      </div>
    </section>
  );
};

export default Hero;