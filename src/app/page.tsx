import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import CertificatesSection from '../components/CertificatesSection';
import HobbiesSection from '../components/HobbiesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 text-slate-100 relative selection:bg-gold-500 selection:text-navy-950">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero / Home Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Education Section */}
      <EducationSection />

      {/* Skills & AI Tools Section */}
      <SkillsSection />

      {/* Certificates & Achievements Section */}
      <CertificatesSection />

      {/* Hobbies & Sports Section */}
      <HobbiesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
