import React, { useState } from 'react';
import '../styles/Projects.css';
import defiImage from '../assets/images/defi.jpg';
import sortingImage from '../assets/images/sorting.jpg';
import malwareImage from '../assets/images/malware.jpg';
import portfolioImage from '../assets/images/portfolio.jpg';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Fraud Detection in Decentralized Finance",
      description: "Built a fraud detection model on 200K+ Bitcoin transactions, achieving 85%+ accuracy in detecting frauds. Applied GNNs and deep learning to detect fraud, improving risk assessment speed by 40% for blockchain security.",
      image: defiImage,
      tags: ["Deep Learning", "Graph Algorithms", "GNN", "GCN", "Blockchain"],
      category: "ai",
      github: "https://github.com/theayushsharmaaaa/deep-learning-project",
      live: "https://theayushsharmaaaa.com"
    },
    {
      title: "Sorting Algorithm Visualizer",
      description: "Developed a responsive web app to visualize Bubble, Insertion, Selection, Merge, and Quick Sort. Implemented interactive features for dynamic array generation, sorting speed adjustment, and algo selection.",
      image: sortingImage,
      tags: ["JavaScript", "HTML", "CSS", "Algorithms", "Visualization"],
      category: "web",
      github: "https://github.com/theayushsharmaaaa/sorting-algorithm-visualizer",
      live: "https://theayushsharmaaaa.github.io/sorting-algorithm-visualizer"
    },
    {
      title: "Malware Detection Model Using CNN-LSTM",
      description: "Engineered a CNN-LSTM model for detecting malware in PE files, achieving 99% precision and 0.86 F1-score. Performed EDA, data preprocessing, and hyperparameter tuning; deployed model using Flask on backend.",
      image: malwareImage,
      tags: ["Machine Learning", "CNN", "LSTM", "Flask", "Security"],
      category: "ai",
      github: "https://github.com/theayushsharmaaaa/malware-detection-cnn-lstm",
      live: "https://theayushsharmaaaa.com"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React, featuring dark/light mode, responsive design, and interactive UI elements. Implemented custom animations and smooth scrolling for an enhanced user experience.",
      image: portfolioImage,
      tags: ["React", "CSS", "JavaScript", "Responsive Design"],
      category: "web",
      github: "https://github.com/theayushsharmaaaa/portfolio-website",
      live: "https://ayushsharma.com"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Development
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI/ML
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <a href="https://github.com/theayushsharmaaaa" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;