import { useEffect, useRef } from 'react';

/**
 * Custom hook to add animations when elements enter the viewport
 * @param {Object} options - Intersection Observer options
 * @param {String} animationClass - CSS class to add when element is visible
 * @returns {Array} - [ref, isVisible] - Reference to attach to element and visibility state
 */
const useAnimationOnScroll = (options = {}, animationClass = 'visible') => {
  const elementRef = useRef(null);
  const observerRef = useRef(null);
  
  useEffect(() => {
    const currentElement = elementRef.current;
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when element enters viewport
          entry.target.classList.add(animationClass);
          
          // Stop observing once animation is triggered
          observerRef.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, ...options });
    
    if (currentElement) {
      observerRef.current.observe(currentElement);
    }
    
    return () => {
      if (currentElement && observerRef.current) {
        observerRef.current.unobserve(currentElement);
      }
    };
  }, [animationClass, options]);
  
  return elementRef;
};

export default useAnimationOnScroll;