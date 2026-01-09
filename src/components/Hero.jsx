import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Sparkles, Briefcase, Award, Code2, Terminal, Trophy } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Explorer'
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1CPyIkqdZCBqrM33VJAOdI8GIz5SS-U65/view?usp=drive_link', '_blank');
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-20"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-primary/30 rounded-full float-shape" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-4 border-secondary/30 rotate-45 float-shape" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 border-4 border-accent/30 float-shape" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full float-shape" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rotate-45 float-shape" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Greeting */}
        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
          <Sparkles className="text-primary animate-pulse" size={20} />
          <p className="text-textSecondary text-lg">Hello, I'm</p>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-down">
          <span className="gradient-text">Kiran Dekaliya</span>
        </h1>

        {/* Typing Animation */}
        <div className="h-16 mb-8 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-textPrimary">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-12 animate-fade-in leading-relaxed">
          Crafting elegant solutions to complex problems. Passionate about creating beautiful, 
          functional, and user-centric digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button
            onClick={scrollToProjects}
            className="btn-ripple px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Sparkles size={20} />
            Explore My Work
          </button>
          <button
            onClick={handleDownloadResume}
            className="btn-ripple px-8 py-4 border-2 border-primary text-textPrimary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 animate-fade-in">
          {[
            { number: '10+', label: 'Projects Done', icon: Briefcase },
            { number: '10+', label: 'Certificates', icon: Award },
            { number: '10+', label: 'Technologies', icon: Code2 },            { number: '5+', label: 'Hackathons', icon: Trophy },            { number: '130+', label: 'Leetcode Que', icon: Terminal },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
            <div key={index} className="glass p-6 rounded-lg card-hover">
              <div className="flex justify-center mb-3">
                <Icon className="text-primary" size={28} />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-textSecondary text-sm">{stat.label}</p>
            </div>
          );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-textSecondary" size={32} />
      </div>
    </section>
  );
};

export default Hero;
