import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import "../styles/global.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-socials">
          <a 
            href="https://github.com/darshan75462020-eng" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/dharshan-gangadhar75/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:dharshanofll@gmail.com" aria-label="Email">
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>
        
        <div className="footer-info">
          <p>© {currentYear} <span className="highlight">Dharshan</span>. Built with React & Node.js ⚡</p>
          <p className="footer-motto">Turning ideas into AI-powered reality.</p>
        </div>

        <button onClick={scrollToTop} className="scroll-top" aria-label="Scroll to top">
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;