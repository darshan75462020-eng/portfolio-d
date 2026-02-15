import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Hi, I'm <span className="highlight">Dharshan</span>
        </h1>
        <h2>Full Stack Developer | AI Enthusiast</h2>
        <p>
          I build modern web applications with React, Node.js and AI-powered solutions.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" download className="btn primary">
            Download Resume
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src="/profile.png" alt="Dharshan" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
