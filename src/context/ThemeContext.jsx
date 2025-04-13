import React, { createContext, useState, useEffect } from 'react';

// Create theme context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check if user has a saved preference in localStorage
  const savedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(savedTheme === 'light' ? false : true);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update localStorage and apply theme class whenever theme changes
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDarkMode]);

  // Provide theme context to children components
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};