import { Heart, Github, Linkedin, Mail, ArrowUp, Instagram, Facebook } from "lucide-react"; // 1. Ajoutez Instagram et Facebook ici
import styles from "./Footer.module.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.scrollWrapper}>
          <button onClick={scrollToTop} className={styles.scrollButton} aria-label="Back to top">
            <ArrowUp size={24} />
          </button>
        </div>

        <div className={styles.topRow}>
          
          <div className={styles.brandSection}>
            <h2 className={styles.brandName}>Yasser Mecheri</h2>
            <p className={styles.brandTitle}>Full Stack Developer & Software Engineer</p>
          </div>

          
          <nav className={styles.navLinks}>
            <a href="#hero">Home</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Expérience</a>
            <a href="#skills">Skills</a>
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact</a>
          </nav>

          
          <div className={styles.socialIcons}>
            <a href="https://github.com/yassermecheri-commits" target="_blank" rel="noreferrer">
              <Github size={20} />
            </a>
            
            
         <a href="https://www.facebook.com/share/17ucLBC7iV/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
          <Facebook size={20} />
         </a>

            
            <a href="https://www.instagram.com/yasser__luka?igsh=MXRqcmR3NWEzdTcxNw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
              <Instagram size={20} />
            </a>
            
            <a href="mailto:yasser.mecheri@univ-constantine2.dz">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.text}>
            Made with <Heart className={styles.heart} /> by Yasser Mecheri • © 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;