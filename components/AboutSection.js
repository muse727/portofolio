import styles from './AboutSection.module.css';
import ProfileCard from './ProfileCard'; // Import komponen yang baru kita buat

export default function AboutSection() {
  return (
    // Kita gunakan id "project" sesuai rencana sebelumnya
    <section id="project" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        
        {/* === BAGIAN KIRI (Teks) === */}
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
            I'm a freelance Webdesigner and Photographer based in Jakarta, Indonesia. 
            I specialize in creating modern, responsive, and user-friendly websites. 
            My passion lies in blending clean design with fluid functionality to deliver an exceptional digital experience.
          </p>
          <p className={styles.description}>
            Let's create something amazing together!
          </p>
        </div>

        {/* === BAGIAN KANAN (Profile Card) === */}
        <div className={styles.rightColumn}>
          <ProfileCard
            name="Mustofa" // Ganti dengan namamu
            title="Webdesigner & Photographer" // Ganti dengan titelmu
            handle="muth" // Ganti dengan handle/username-mu
            status="Available for freelance"
            contactText="Contact Me"
            avatarUrl="/images/IMG_0529.PNG" // Pastikan path foto ini benar
            enableTilt={true}
          />
        </div>
        
      </div>
    </section>
  );
}