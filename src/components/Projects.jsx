import { ExternalLink, Github } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Lab 1: HTML & CSS Reminders",
    description:
      "Introduction aux fondamentaux du développement web avec HTML5 et CSS3. Création de pages web structurées et stylisées.",
    techStack: ["HTML", "CSS"],
    github: "https://github.com/yassermecheri-commits/caw-labs/tree/main/lab1/Tp1",
  },
  {
    id: 2,
    title: "Lab 2: Git & GitHub",
    description:
      "Maîtrise du contrôle de version avec Git. Collaboration et gestion de code source avec GitHub.",
    techStack: ["Git", "HTML", "CSS"],
    github: "https://github.com/yassermecheri-commits/caw-labs/blob/main/README.md",
  },
  {
    id: 3,
    title: "Lab 3: Node.js & NPM",
    description:
      "Introduction à l'environnement Node.js et gestion des packages avec NPM. Scripts et automatisation.",
    techStack: ["JavaScript", "Node.js", "NPM"],
    github: "https://github.com/yassermecheri-commits/caw-labs/tree/main/Lab3",
  },
  {
    id: 4,
    title: "Lab 5: React Components",
    description:
      "Création de composants React réutilisables avec Vite. Comprendre le cycle de vie et les props.",
    techStack: ["React", "Vite", "JavaScript"],
    github: "https://github.com/yassermecheri-commits/caw-labs/tree/main/Lab5-ReactJS",
  },
  {
    id: 5,
    title: "Lab 7: Kanban Board",
    description:
      "Application de gestion de tâches style Kanban avec drag-and-drop. State management avec React Hooks.",
    techStack: ["React", "Vite", "CSS"],
    github:
      "https://github.com/yassermecheri-commits/caw-labs/tree/main/lab7/kanban-board",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Project <span>Showcase</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={styles.card}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.index}>{project.id}</div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <Github size={20} />
                </a>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <a
            href="https://github.com/yassermecheri-commits/caw-labs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.allLabs}
          >
            <Github size={20} />
            Voir tous les Labs sur GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
