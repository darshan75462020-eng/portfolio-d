import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      {/* Added a glass-card wrapper for depth */}
      <div className="about-card fade-in show">
        <div className="about-container">
          <h2>About Me</h2>
          <p>
            I’m a <strong>Computer Science</strong> student passionate about building real, working software and continuously improving my technical skills.
             I enjoy turning ideas into practical projects — from developing Java applications like a banking system to building and deploying my own portfolio website with a connected backend.
            Currently, I’m focused on strengthening my skills in Java, Python, and AI-related technologies while exploring modern web development tools.
             I actively experiment, debug, deploy, and refine my projects rather than just learning theory, because I believe real growth comes from building.
            I’m looking for <strong>opportunities </strong> where I can apply my skills, learn from experienced developers, and grow into a strong software engineer — whether through internships, collaborative projects, or entry-level roles.
            Beyond coding, I’m someone who keeps learning, keeps improving, and doesn’t give up easily when things break — I fix them.
            I build modern web applications and explore AI-powered solutions. 
            Passionate about <strong>clean UI</strong>, <strong>scalable backend systems</strong>, 
            and creating meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;