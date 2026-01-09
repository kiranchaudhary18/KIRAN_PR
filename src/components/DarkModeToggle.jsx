import React from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-8 right-8 z-50 p-3 glass rounded-full text-textPrimary hover:text-primary transition-all duration-300 hover:scale-110 shadow-lg"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
