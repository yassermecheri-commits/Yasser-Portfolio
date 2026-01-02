import { useForm, ValidationError } from '@formspree/react';
import { Mail, Send, Github, MapPin } from "lucide-react";
import styles from "./Contact.module.css";

function Contact() {
 
  const [state, handleSubmit] = useForm("xbdllqor");

  
  if (state.succeeded) {
    return (
      <section id="contact" className={styles.section}>
        <div className={styles.successBox}>
          <p>Merci pour votre message ! Je vous répondrai très prochainement.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container mx-auto px-4">
        <div className={styles.header}>
          <h2 className={styles.title}>
             Contact<span className={styles.highlight}> Me</span>
          </h2>
        </div>

        <div className={styles.grid}>
        
          <div>
  <h3 className={styles.infoTitle}>Work With Me!</h3>
  <div className={styles.infoList}>
    

    <div className={styles.infoCard}>
      <div className={styles.iconBox}><Mail size={20} /></div>
      <div>
        <p className={styles.infoLabel}>Email</p>
        <p className={styles.infoValue}>yasser.mecheri@univ-constantine2.dz</p>
      </div>
    </div>


    <div className={styles.infoCard}>
          <div className={styles.iconBox}><MapPin size={20} /></div>
             <div>
        <p className={styles.infoLabel}>Location</p>
        <p className={styles.infoValue}>Constantine, Algeria</p>
             </div>
          </div>

        </div>
    </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">Nom</label>
              <input id="name" type="text" name="name" className={styles.input} required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" className={styles.input} required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} className={styles.textarea} required />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button type="submit" disabled={state.submitting} className={styles.submit}>
              <Send size={20} />
              {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;