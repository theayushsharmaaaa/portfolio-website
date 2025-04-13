import React, { useEffect, useRef } from 'react';
import '../styles/Stats.css';

const Stats = () => {
  const statsRefs = useRef([]);
  
  // Stats data - update these with your actual numbers
  const statsData = [
    { value: 2, label: 'Years of Experience' },
    { value: 12, label: 'Projects Completed' },
    { value: 7, label: 'Technologies Working on' },
    { value: 450, label: 'GitHub Commits' }
  ];
  
  useEffect(() => {
    // Ensure refs array is populated with the correct number of items
    statsRefs.current = statsRefs.current.slice(0, statsData.length);
    
    // Intersection Observer to trigger animation when elements are in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          animateCount(index);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    // Observe all stat elements
    statsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (statsRefs.current) {
        statsRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, [statsData]);
  
  // Function to animate counting up
  const animateCount = (index) => {
    const el = statsRefs.current[index];
    if (!el) return;
    
    const targetValue = statsData[index].value;
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      // Use easeOutQuart easing function
      const progress = 1 - Math.pow(1 - frame / totalFrames, 4);
      const currentValue = Math.round(targetValue * progress);
      
      if (el) {
        el.textContent = currentValue;
      }
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };
  
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">
              <span>+</span>
              <span 
                ref={el => statsRefs.current[index] = el} 
                className="counter" 
                data-index={index}
              >
                0
              </span>
            </div>
            <div className="stat-title">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;