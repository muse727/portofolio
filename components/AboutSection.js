import styles from './AboutSection.module.css';
import ProfileCard from './ProfileCard'; // Import komponen yang baru kita buat
import ShinyText from './ShinyText';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    // Kita gunakan id "project" sesuai rencana sebelumnya
    <section id="project" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        
        {/* === BAGIAN KIRI (Teks) === */}
        <div className={styles.leftColumn}>
          <ShinyText text="About Me" className={styles.title} />
          <ScrollReveal textClassName={styles.description}>
            I'm a freelance Webdesigner and Photographer based in Jakarta, Indonesia. 
            I specialize in creating modern, responsive, and user-friendly websites. 
            My passion lies in blending clean design with fluid functionality to deliver an exceptional digital experience.
          </ScrollReveal>
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