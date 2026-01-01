import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    title: "Outils",
    skills: [
      { name: "Vite", level: 85 },
      { name: "Git", level: 80 },
      { name: "NPM", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Skills & <span>Technologies</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div key={category.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{category.title}</h3>

              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skill}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>
                        {skill.level}%
                      </span>
                    </div>

                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
