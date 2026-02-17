import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        {/* New: Status Badge */}
        <div className="status-badge fade-in show">
          <span className="pulse-dot"></span>
          Available for New Projects
        </div>

        <h1 className="hero-title fade-in show">
          Designing the future with <span className="text-gradient">AI & Code.</span>
        </h1>
        
        <p className="hero-subtitle fade-in show">
          Hi, I'm <span className="highlight-text">Dharshan</span>. I build high-performance 
          full-stack applications with integrated artificial intelligence.
        </p>

        <div className="hero-buttons fade-in show">
          <a href="#contact" className="btn-primary">
            Start a Project
          </a>
          <a href="/resume.pdf" download className="btn-secondary">
            View Resume
          </a>
        </div>
      </div>

      <div className="hero-right fade-in show">
        <div className="profile-img-container">
          <img src="/profile.png" alt="Dharshan" className="profile-img" />
          <div className="img-glow"></div>
          {/* New: Floating decorative elements */}
          <div className="floating-card card-1">🚀 Full Stack</div>
          <div className="floating-card card-2">🤖 AI Agent</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;