import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "React.js", "Express.js"]
    },
    {
      title: "Backend Development",
      skills: ["Flask", "Django", "Node.js", "FastAPI"]
    },
    {
      title: "AI & ML",
      skills: ["TensorFlow", "PyTorch", "Keras", "OpenCV"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "AWS", "Docker", "Terraform", "Kubernetes", "CI/CD"]
    },
    {
      title: "Other Skills",
      skills: ["Object Oriented Programming", "Unix/Linux", "TCP/IP", "DBMS", "Shell Scripting"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-content">
          <div className="skills-text">
            <p>
              With a strong foundation in various programming languages and technologies, 
              I've developed expertise across the full stack. My focus lies in creating efficient, 
              scalable, and user-friendly applications while continuously expanding my knowledge.
            </p>
          </div>
          
          <div className="skills-categories">
            {skillCategories.map((category, index) => (
              <div className="skill-category" key={index}>
                <h3 className="category-title">{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span className="skill-tag" key={skillIndex}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;