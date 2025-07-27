// components/Hero.js
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import styles from './Hero.module.css';
import LightRays from './LightRays';

export default function Hero() {
 const sectionRef = useRef(null);

 useEffect(() => {
  const intro = sectionRef.current.querySelector(`.${styles.introText}`);
  const title1 = sectionRef.current.querySelector(`.${styles.title}`);
  const title2 = sectionRef.current.querySelector(`.${styles.titleOutline}`);
  const image = sectionRef.current.querySelector(`.${styles.imageWrapper}`);

  gsap.set([intro, title1, title2, image], { opacity: 0 });
  gsap.to(intro, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
  gsap.to(title1, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.4 });
  gsap.to(title2, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 });
  gsap.to(image, { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.8 });
 }, []);

 return (
  <section ref={sectionRef} className={styles.heroSection}>
   <div className={styles.backgroundCanvas}>
    <LightRays
     raysOrigin="top-center"
     raysColor="#ffffff"
     mouseInfluence={0.1}
     lightSpread={0.8}
    />
   </div>

   <div className={styles.contentContainer}>
    <p className={styles.introText}>
     👋, my name is Mustafa and I am a freelance
    </p>

    <div style={{ position: 'relative' }}>
     <h1 className={styles.title}>Webdesigner</h1>
     <div className={styles.imageWrapper}>
      <Image
       className={styles.profileImage}
       src="/images/IMG_0529.PNG"
       alt="Foto Profil"
       width={256}
       height={341} /* Increased height to match CSS */
       priority
      />
     </div>
     <h2 className={`${styles.title} ${styles.titleOutline}`}>
      Photographer
     </h2>
    </div>

    {/* Updated location structure */}
    <div className={styles.locationContainer}>
     <span>South Jakarta</span>
     <span>Indonesia</span>
    </div>
   </div>
  </section>
 );
}