import React from "react";
// Change line 3 to:
import "../styles/global.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "AI & Tools",
      skills: ["Prompt Engineering", "ChatGPT API", "Git & GitHub", "Vercel"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Python"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title fade-in show">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card fade-in show">
            <h3>{category.title}</h3>
            <div className="skill-items">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-pill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;