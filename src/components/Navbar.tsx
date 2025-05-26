
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    // { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-portfolio-navy/90 backdrop-blur-md py-3 shadow-lg' : 'py-5'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-portfolio-light font-bold text-2xl">
          SP
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'text-portfolio-slate hover:text-portfolio-light transition-colors',
                'animate-fade-in',
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-portfolio-light mr-1">{i + 1}.</span>
              {item.name}
            </a>
          ))}
          {/* <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Resume
          </a> */}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-portfolio-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-portfolio-navy shadow-xl z-50 transform transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-portfolio-light"
            onClick={() => setIsMenuOpen(false)}
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-4 text-portfolio-light text-lg"
            >
              <span className="text-portfolio-light mr-2">{i + 1}.</span>
              {item.name}
            </a>
          ))}
          {/* <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 btn-primary"
          >
            Resume
          </a> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
