import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.avatarContainer}>
          <img 
            src="/Yasser.png" 
            alt="Yasser Mecheri" 
            className={styles.avatar} 
          />
        </div>

        <h1 className={styles.title}>
          Hello, I am  <span className={styles.highlight}>Yasser</span>
        </h1>

        <p className={styles.subtitle}>
          Luca React Developer & UI Designer
        </p>

        {/* Le conteneur qui sera centré */}
        <div className={styles.buttonGroup}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work
          </a>
          <a href="#contact" className={styles.btnOutline}>
             Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;