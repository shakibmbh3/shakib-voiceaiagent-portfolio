import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-2xl font-bold text-slate-900 tracking-tight"
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          Shakib<span className="text-emerald-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-emerald-600 transition-colors cursor-pointer"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Book Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 font-medium hover:text-emerald-600 cursor-pointer"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
             <a 
                href="#contact"
                className="text-emerald-600 font-bold cursor-pointer"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Book Call
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};