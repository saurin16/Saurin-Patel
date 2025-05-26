
import React from 'react';
import { HeartIcon, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-portfolio-slate text-sm">
              © {new Date().getFullYear()} Saurin Patel. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/saurin16" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-slate hover:text-portfolio-light transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/psaurin/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-slate hover:text-portfolio-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:spatel213@hawk.iit.edu" 
              className="text-portfolio-slate hover:text-portfolio-light transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0">
            <p className="text-sm text-portfolio-slate flex items-center">
              Designed & Built with 
              <HeartIcon className="h-4 w-4 text-portfolio-light mx-1" /> 
              by Saurin Patel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
