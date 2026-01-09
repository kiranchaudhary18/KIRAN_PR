import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Award, Code2, Users, BookOpen, Music, Gamepad2, Plane, Terminal } from 'lucide-react';

const About = () => {
  const [counters, setCounters] = useState({ experience: 0, projects: 0, technologies: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { key: 'projects', icon: Briefcase, end: 10, label: 'Projects Completed', suffix: '+' },
    { key: 'certificates', icon: Award, end: 10, label: 'Certificates', suffix: '+' },
    { key: 'technologies', icon: Code2, end: 10, label: 'Technologies', suffix: '+' },
    { key: 'leetcode que', icon: Terminal, end: 130, label: 'Leetcode Que', suffix: '+' }
  ];

  const interests = [
    // { icon: BookOpen, label: 'Reading', color: 'from-primary to-purple-600' },
    { icon: Music, label: 'Music', color: 'from-secondary to-pink-600' },
    { icon: Gamepad2, label: 'Gaming', color: 'from-accent to-cyan-600' },
    { emoji: '🏏', label: 'Cricket', color: 'from-green-500 to-blue-600' },
    { icon: Plane, label: 'Travel', color: 'from-primary to-secondary' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.end / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.end) {
          setCounters(prev => ({ ...prev, [stat.key]: stat.end }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [stat.key]: Math.floor(current) }));
        }
      }, 30);
    });
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Know Me Better</span>
          </h2>
          <p className="text-textSecondary text-lg">Discover my journey and passion</p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* About Text */}
          <div className="space-y-6 animate-slide-left">
            <p className="text-textSecondary text-lg leading-relaxed">
              Namaste! I'm <span className="text-primary font-semibold">Kiran Dekaliya</span>, a passionate Full Stack Developer
               with a love for creating elegant and efficient solutions. Currently pursuing B.Tech in Computer Science, I specialize
                in building responsive, user-friendly applications that make a difference.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed">
             My journey in tech started with curiosity about how things work on the web, and it has evolved into a passion where 
             I get to combine creativity with technical skills. I'm an active hackathon participant who thrives in competitive 
             coding environments, building innovative solutions under tight deadlines.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed">
             When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, competing 
             in hackathons, or sharing knowledge with the developer community. I'm always excited about new challenges and 
             opportunities to grow.
            </p>

            {/* Quick Skills Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Node.js', 'JavaScript', 'UI/UX', 'MongoDB', 'Tailwind CSS'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass rounded-full text-sm font-medium text-textPrimary hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass p-8 rounded-2xl card-hover text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-4xl font-bold gradient-text mb-2">
                  {counters[stat.key]}{stat.suffix}
                </h3>
                <p className="text-textSecondary text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Personal Interests */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 gradient-text">Personal Interests</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={index}
                  className="glass px-6 py-4 rounded-full flex items-center gap-3 card-hover group"
                >
                  <div className={`p-2 bg-gradient-to-br ${interest.color} rounded-full group-hover:scale-110 transition-transform`}>
                    {interest.emoji ? (
                      <span className="text-xl">{interest.emoji}</span>
                    ) : (
                      <Icon className="text-white" size={20} />
                    )}
                  </div>
                  <span className="font-medium text-textPrimary">{interest.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
