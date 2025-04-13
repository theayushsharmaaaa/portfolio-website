import React from 'react';
import '../styles/About.css';
import profilephoto from '../assets/images/profilephoto.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              {/* Replace with another image of yourself */}
              <img src={profilephoto} alt="Ayush Sharma" />
            </div>
          </div>
          
          <div className="about-text">
            <h3>I'm Ayush, A Full Stack Developer &amp; AI Enthusiast</h3>
            <p>
              I'm passionate about creating impactful solutions through code. With a strong foundation in both frontend and backend technologies, I specialize in building responsive, user-friendly applications that solve real-world problems.
            </p>
            <p>
              Currently pursuing my B.Tech in Computer Science &amp; Artificial Intelligence at Plaksha University, I'm constantly exploring new technologies and methodologies to enhance my skills and knowledge.
            </p>
            <p>
              As a General Secretary at the Student Council and an Outreach Lead at the Finance Cell, I've developed strong leadership and teamwork abilities alongside my technical skills.
            </p>
            
            <div className="personal-info">
              <div className="info-item">
                <span className="info-title">Name:</span>
                <span className="info-value">Ayush Sharma</span>
              </div>
              <div className="info-item">
                <span className="info-title">Email:</span>
                <span className="info-value">theayushsharmaaaa@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-title">Location:</span>
                <span className="info-value">Mohali, Punjab, India</span>
              </div>
              <div className="info-item">
                <span className="info-title">Availability:</span>
                <span className="info-value">Open for Internships</span>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="https://drive.google.com/uc?export=view&id=1f1D_xe2p7YGGry4jXLbXTzmBThsCRppJ" className="btn btn-primary" download>Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;