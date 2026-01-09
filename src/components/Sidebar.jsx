import React, { useState, useEffect } from 'react';
import { Home, User, GraduationCap, Code2, Briefcase, Award, Mail, Github, Linkedin, Twitter, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'skills', icon: Code2, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'certificates', icon: Award, label: 'Certificates' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 glass rounded-lg text-textPrimary hover:text-primary transition-colors"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[280px] md:w-[100px] glass border-r border-primary/20 z-40 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full py-8 px-4">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/50">
              KD
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative w-full flex flex-col items-center py-4 px-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-textSecondary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-r-full animate-slide-right" />
                  )}
                  
                  <Icon size={24} className="mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                  
                  {/* Tooltip for desktop */}
                  <div className="absolute left-full ml-2 px-3 py-1 bg-cardBg rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                    {item.label}
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-3 pt-8 border-t border-primary/20">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
