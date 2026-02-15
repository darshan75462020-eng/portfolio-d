import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
