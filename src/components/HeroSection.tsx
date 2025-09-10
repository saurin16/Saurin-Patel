
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from "lucide-react";
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-portfolio-light mb-4 animate-fade-in">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-2 text-portfolio-lightest-slate animate-fade-in" style={{ animationDelay: '200ms' }}>
            Saurin Patel.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-portfolio-slate mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            I build intelligent solutions.
          </h2>
          <p className="text-lg text-portfolio-slate max-w-lg mb-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
            I'm a Software Developer and AI/ML Specialist passionate about AI/ML, backend systems, and full-stack engineering. I completed my M.S. in Computer Science from Illinois Institute of Technology.
          </p>
          <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-light">
            <img 
              src="/lovable-uploads/9c1eaee1-d09d-4ed5-a2c5-e1678c796eea.png" 
              alt="Saurin Patel" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-portfolio-light rounded-full z-[-1]"></div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-portfolio-light animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;
