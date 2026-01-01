import { Heart } from "lucide-react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-4">
        <div className={styles.wrapper}>
          

          <p className={styles.text}>
            Fait avec <Heart className={styles.heart} /> par Yasser Mecheri © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
