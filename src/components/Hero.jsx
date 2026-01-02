import { Eye, Send } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section  id="hero" className={styles.hero}>
      <div className={styles.container}>
        
       
        <div className={`${styles.leftColumn} animate-fade-up`}>
          <div className={`${styles.avatarContainer} animate-float`}>
            <div className={styles.avatarWrapper}>
              <img 
                src="/Yasser.png" 
                alt="Yasser Mecheri" 
                className={styles.avatarImage}
              />
            </div>
            <div className={styles.statusBadge}>
              Available
            </div>
          </div>
        </div>

       
        <div className={`${styles.centerColumn} animate-fade-up`}>
          <p className={styles.greeting}>
            Hi, I am 
          </p>
          <h1 className={styles.name}>
            Yasser
          </h1>
          <p className={styles.subtitle}>
            Luca React Developer & UI Designer
          </p>

         
          <p className={styles.description}>
            Passionate software engineering student crafting scalable full-stack and mobile solutions 
            using Flutter, Django, React, and MySQL, with experience in IoT and AI-driven applications.
          </p>

          <div className={styles.buttonGroup}>
            <a href="#projects" className={styles.btnPrimary}>
              <Eye size={18} />
              View My Work
            </a>
            <a href="#contact" className={styles.btnOutline}>
              <Send size={18} />
              Contact Me
            </a>
          </div>
        </div>

        
        <div className={`${styles.rightColumn} animate-slide-in-right`}>
          <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
              <div className={styles.windowDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <span className={styles.fileName}>developer.ts</span>
            </div>
            <pre className={styles.codeContent}>
              <code>
                <span className={styles.keyword}>const</span>{" "}
                <span className={styles.variable}>developer</span>{" "}
                <span className={styles.bracket}>=</span>{" "}
                <span className={styles.bracket}>{"{"}</span>
                {"\n"}
                {"  "}<span className={styles.property}>name</span>:{" "}
                <span className={styles.string}>"Yasser Mecheri"</span>,
                {"\n"}
                {"  "}<span className={styles.property}>role</span>:{" "}
                <span className={styles.string}>"React Developer"</span>,
                {"\n"}
                {"  "}<span className={styles.property}>skills</span>:{" "}
                <span className={styles.bracket}>[</span>
                <span className={styles.string}>"React"</span>,{" "}
                <span className={styles.string}>"Vite"</span>
                <span className={styles.bracket}>]</span>,
                {"\n"}
                {"  "}<span className={styles.property}>education</span>:{" "}
                <span className={styles.string}>"Master STIC"</span>,
                {"\n"}
                {"  "}<span className={styles.property}>passion</span>:{" "}
                <span className={styles.string}>"Building solutions"</span>
                {"\n"}
                <span className={styles.bracket}>{"}"}</span>;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;