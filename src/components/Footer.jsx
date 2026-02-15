import React from "react";
import "../styles/global.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a href="https://github.com/darshan75462020-eng" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dharshan-gangadhar75/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:dharshanofll@gmail.com">Email</a>
        </div>
        
        <div className="footer-info">
          <p>© {currentYear} <span className="highlight">Dharshan</span>. Built with React & Node.js ⚡</p>
          <p className="footer-motto">Turning ideas into AI-powered reality.</p>
        </div>

        <a href="#hero" className="scroll-top">↑</a>
      </div>
    </footer>
  );
}

export default Footer;