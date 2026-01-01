import { ArrowRight, Calendar } from "lucide-react";
import styles from "./Blogs.module.css";

const blogs = [
  {
    id: 1,
    title: "Les bienfaits du sport sur la productivité",
    category: "Sport",
    date: "15 Décembre 2025",
    excerpt:
      "Découvrez comment une routine sportive régulière peut améliorer votre concentration et votre efficacité au travail en tant que développeur.",
    image: "🏃‍♂️",
  },
  {
    id: 2,
    title: "Mon voyage à travers l'Algérie",
    category: "Voyage",
    date: "28 Novembre 2025",
    excerpt:
      "Récit de mon aventure à travers les plus beaux paysages d'Algérie: du Sahara aux côtes méditerranéennes.",
    image: "✈️",
  },
];

function Blogs() {
  return (
    <section id="blogs" className={styles.section}>
      <div className="container mx-auto px-4">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Mes <span className={styles.highlight}>Blogs</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <article key={blog.id} className={styles.card}>
              <div className={styles.image}>{blog.image}</div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>{blog.category}</span>
                  <div className={styles.date}>
                    <Calendar size={16} />
                    {blog.date}
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{blog.title}</h3>

                <p className={styles.excerpt}>{blog.excerpt}</p>

            
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
