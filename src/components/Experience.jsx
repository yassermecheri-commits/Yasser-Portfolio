import { Briefcase, Calendar } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    id: 1,
    company: "Entreprise NTIC",
    position: "Développeur Web Full Stack",
    period: "2020 - 2023",
    description:
      "Développement d'applications web modernes avec React et Node.js. Collaboration avec l'équipe design pour créer des interfaces utilisateur intuitives et responsives.",
  },
  {
    id: 2,
    company: "Entreprise Tech",
    position: "Développeur Frontend Junior",
    period: "2023 - 2025",
    description:
      "Création et maintenance de sites web dynamiques. Intégration de maquettes et optimisation des performances front-end. Travail en équipe agile.",
  },
];

function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container mx-auto px-4">
        <div className={styles.header}>
          <h2 className={styles.title}>
         Mon <span className={styles.highlight}>Expérience</span>
          </h2>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine} />

          {experiences.map((exp, index) => {
            const isReverse = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`${styles.item} ${
                  isReverse ? styles.reverse : ""
                }`}
              >
                <div className={styles.dot} />

                <div
                  className={`${styles.contentWrapper} ${
                    isReverse ? styles.paddingLeft : styles.paddingRight
                  }`}
                >
                  <div className={styles.card}>
                    <div
                      className={`${styles.period} ${
                        !isReverse ? styles.periodRight : ""
                      }`}
                    >
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className={styles.position}>{exp.position}</h3>

                    <div
                      className={`${styles.company} ${
                        !isReverse ? styles.companyRight : ""
                      }`}
                    >
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>

                    <p className={styles.description}>{exp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
