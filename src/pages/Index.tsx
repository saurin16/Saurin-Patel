
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CurrentProjectsSection from '@/components/CurrentProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import ChatbotSection from '@/components/ChatbotSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        {/* <ExperienceSection /> */}
        <ProjectsSection />
        <CurrentProjectsSection />
        <BlogSection />
        <ContactSection />
        <ChatbotSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
