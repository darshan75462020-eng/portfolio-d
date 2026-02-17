import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard"; // Make sure the path to your ProjectCard file is correct

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">
          Exploring the intersection of Full-Stack development and Artificial Intelligence.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          /* We pass the project data as a 'prop' to the ProjectCard component */
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
}