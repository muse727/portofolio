// app/page.js
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import CurvedLoop from '@/components/CurvedLoop';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CurvedLoop 
        marqueeText="✦ Available For Work ✦ Let's Collaborate"
        speed={1.5}
        curveAmount={100} // Atur tingkat kelengkungan di sini
        interactive={true}
      />
      <AboutSection />
      <ExperienceSection />
      <div id="contact" style={{ height: '100vh', backgroundColor: '#000', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Contact Section</h2>
      </div>
    </main>
  );
}