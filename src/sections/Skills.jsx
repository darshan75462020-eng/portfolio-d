import { useEffect, useState } from "react";
import skills from "../data/skills";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <div key={index} className="skill-group">
            <h3>{group.category}</h3>

            {group.items.map((skill, i) => (
              <div key={i} className="skill-item">
                <span>{skill.name}</span>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: animate ? `${skill.level}%` : "0%",
                    }}
                    aria-label={`${skill.name} proficiency ${skill.level}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
