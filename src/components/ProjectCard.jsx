function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech-stack">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.live} className="btn-secondary">Live</a>
        <a href={project.github} className="btn-secondary">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;
