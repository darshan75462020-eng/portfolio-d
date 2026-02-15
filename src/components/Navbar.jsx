import React from "react";
import "../styles/global.css";

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo">
          Dharshan<span className="logo-dot">.</span>
        </div>

        {/* Central Navigation Links */}
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Theme Toggle Button */}
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <span className="toggle-icon">☀️ Light</span>
          ) : (
            <span className="toggle-icon">🌙 Dark</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;