"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image'; // <-- ERRORNYA DI SINI, IMPORT INI KURANG
import styles from './Navbar.module.css';

export default function Navbar() {
  // State untuk tahu apakah halaman sedang di-scroll atau tidak
  const [isScrolled, setIsScrolled] = useState(false);
  // State untuk membuka/menutup menu di mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 50px dari atas, set isScrolled jadi true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Tambahkan event listener saat komponen dimuat
    window.addEventListener('scroll', handleScroll);

    // Hapus event listener saat komponen dibongkar (penting!)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Class akan berubah dinamis berdasarkan state isScrolled
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navContent}>
        <div className={styles.logo}>
          <a href="#"> {/* Logo harus bisa diklik */}
            <Image
              src="/images/muth.png" // Pastikan path ini benar
              alt="Muth Logo"
              width={60} // Ukuran bisa disesuaikan
              height={60}
              priority // Bagus untuk logo agar dimuat lebih dulu
            />
          </a>
        </div>

        {/* Menu untuk Desktop */}
        <ul className={styles.desktopMenu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Tombol Hamburger untuk Mobile */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </nav>

      {/* Menu untuk Mobile (muncul saat hamburger di-klik) */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#project" onClick={toggleMenu}>Project</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}