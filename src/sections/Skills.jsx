import React from "react";
import { Code2, Terminal, Database, Cloud, Sparkles } from "lucide-react";
import "../styles/global.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "AI & Tools",
      icon: <Sparkles size={24} />,
      skills: ["Prompt Engineering", "ChatGPT API", "Git & GitHub", "Figma", "VS Code", "Gemini Pro", "Claude Opus", "Google Colab"],
    },
    {
      title: "Backend",
      icon: <Terminal size={24} />,
      skills: ["Node.js", "Java", "Python"],
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MySQL", "SQLite"],
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud size={24} />,
      skills: ["Vercel", "GitHub Pages", "Netlify", "Google Cloud Platform"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">A toolbox of modern technologies and AI-driven workflows.</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
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