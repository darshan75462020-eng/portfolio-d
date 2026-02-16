import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h1 className="fade-in show">
          Hi, I'm <span className="highlight">Dharshan</span>
        </h1>
        <h2 className="fade-in show">Full Stack Developer | AI Enthusiast</h2>
        <p className="fade-in show">
          I build modern web applications with AI-powered solutions and intelligence.
        </p>

        <div className="hero-buttons fade-in show">
          {/* Updated class names to match global.css */}
          <a href="/resume.pdf" download className="btn-primary">
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-right fade-in show">
        <div className="profile-img-container">
          {/* Add your actual image path here */}
          <img src="/profile.png" alt="Dharshan" className="profile-img" />
          
          {/* Decorative background glow behind the image */}
          <div className="img-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;