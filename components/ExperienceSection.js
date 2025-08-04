"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'; // <-- 1. PASTIKAN IMPORT INI ADA
import styles from './ExperienceSection.module.css';
import Hyperspeed from './Hyperspeed';
import { hyperspeedPresets } from './hyperspeedPresets';

// 2. SEMUA IMPORT DARI 'react-icons' DIHAPUS

gsap.registerPlugin(ScrollTrigger);

// --- DATA KAMU DITARUH DI SINI ---
const experiences = [
  { year: '2025', title: 'Web Developer & Creative Media', duration: 'Current' },
  { year: '2024', title: 'Teacher & Creative Media', duration: 'Full Year' },
  { year: '2023', title: 'Customer Service', company: 'HP Store', duration: 'Full Year' }
];

const educations = [
  { year: 'Current', school: 'Universitas Indraprasta PGRI', major: 'Teknik Informatika' },
  { year: '2023', school: 'SMK IT Daarul Abror', major: 'Lulusan' }
];

// 3. ARRAY SKILLS DIUBAH UNTUK MENGGUNAKAN PATH GAMBAR
// Pastikan nama file di "src" sama dengan nama file yang kamu simpan di folder public/icons
const skills = [
  { name: 'Photoshop', icon: '/icons/photoshop.svg' },
  { name: 'Premiere Pro', icon: '/icons/adobepremierepro.svg' },
  { name: 'Canva', icon: '/icons/canva.svg' },
  { name: 'Wordpress', icon: '/icons/wordpress.svg' },
  { name: 'Elementor', icon: '/icons/elementor.svg' },
  { name: 'Lightroom', icon: '/icons/adobelightroom.svg' },
  { name: 'Laravel', icon: '/icons/laravel.svg' },
];


export default function ExperienceSection() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const sectionEl = sectionRef.current;
    
    // Animasi GSAP untuk bento box
    const boxes = sectionEl.querySelectorAll(`.${styles.bentoBox}`);
    gsap.fromTo(boxes, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      }
    );
    
    // Efek cahaya saat hover
    boxes.forEach(box => {
      box.addEventListener('mousemove', e => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        box.style.setProperty('--mouse-x', `${x}px`);
        box.style.setProperty('--mouse-y', `${y}px`);
      });
    });
    
  }, []);

  return (
    <section ref={sectionRef} id="experience" className={styles.expSection}>
      <div className={styles.background}>
        <Hyperspeed effectOptions={hyperspeedPresets.two} />
      </div>
      
      <div className={styles.bentoGrid}>
        
        {/* Kolom Experience */}
        <div className={`${styles.bentoBox} ${styles.experience}`}>
          <h3 className={styles.title}>Experience</h3>
          <div className={styles.expList}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.expItem}>
                <div className={styles.expYear}>{exp.year}</div>
                <div className={styles.expDetails}>
                  <h4>{exp.title}</h4>
                  <p>{exp.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Education */}
        <div className={`${styles.bentoBox} ${styles.education}`}>
          <h3 className={styles.title}>Education</h3>
          <div className={styles.eduList}>
            {educations.map((edu, index) => (
              <div key={index} className={styles.eduItem}>
                <h4>{edu.school}</h4>
                <p>{edu.major} - {edu.year}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Kolom Expertise/Skills */}
        <div className={`${styles.bentoBox} ${styles.expertise}`}>
          <h3 className={styles.title}>Expertise</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                {/* 4. TAMPILKAN IKON MENGGUNAKAN KOMPONEN <Image> */}
                  <div className={styles.skillIconContainer}>
                <Image src={skill.icon} alt={`${skill.name} icon`} width={40} height={40} />
                 </div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}