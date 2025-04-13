import React from 'react';
import '../styles/Experience.css';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Bluestock Fintech",
      location: "Remote",
      period: "Feb 2025 - Present",
      description: [
        "Leading the development of an IPO web application, integrating microservices and optimizing RESTful APIs.",
        "Designing and deploying AWS cloud infrastructure to enhance scalability and cut server downtime by 40%.",
        "Implementing CI/CD pipelines with Docker to streamline deployment and increase efficiency by 45%."
      ],
      skills: ["Backend Development", "REST APIs", "Flask", "API Testing", "GCP Deployment"]
    },
    {
      title: "Full-Stack Developer",
      company: "Dchimney Cafe",
      location: "Remote",
      period: "Sep 2024 - Present",
      description: [
        "Developed a fully functional website, increasing brand visibility by attracting 500+ visitors monthly.",
        "Implemented a booking and order management system, streamlining operations and reducing workload by 60%.",
        "Maintaining and updating the system, improving security and uptime to 99.9%, ensuring smooth functionality."
      ],
      skills: ["Full Stack Web Development", "Express.js", "MongoDB", "UI/UX", "Deployment"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                
                <div className="experience-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="meta-item">
                    <Briefcase size={16} />
                    <span>Full-time</span>
                  </div>
                </div>
                
                <div className="experience-description">
                  <ul>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{"--item-index": i}}>
                      {item}
                    </li>
                  ))} 
                  </ul>
                </div>
                
                <div className="experience-skills">
                  {exp.skills.map((skill, i) => (
                    <span className="skill-badge" key={i}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;