import React, { useState, useEffect, useRef } from 'react';
import { Code2, Database, Wrench, Heart, Monitor, Server, Palette, Users } from 'lucide-react';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Monitor,
      color: 'from-primary to-purple-600',
      skills: [
        { name: 'HTML5', level: 95,  icon: '🌐' },
        { name: 'CSS3', level: 90,  icon: '🎨' },
        { name: 'JavaScript', level: 92,  icon: '⚡' },
        { name: 'React', level: 88,  icon: '⚛️' },
        { name: 'Tailwind CSS', level: 85, icon: '💨' },
        
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-secondary to-pink-600',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 83, icon: '🚂' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'MySQL', level: 75,  icon: '🐬' },
        { name: 'REST APIs', level: 88, icon: '🔌' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-accent to-cyan-600',
      skills: [
        { name: 'Git', level: 90, experience: '3 years', icon: '📦' },
        { name: 'GitHub', level: 88, experience: '3 years', icon: '🐙' },
        { name: 'VS Code', level: 95, experience: '3 years', icon: '💻' },
        { name: 'Figma', level: 70, experience: '1 year', icon: '🎨' },
        { name: 'Postman', level: 85, experience: '2 years', icon: '📮' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Problem Solving', level: 92, experience: 'Expert', icon: '🧩' },
        { name: 'Team Collaboration', level: 88, experience: 'Advanced', icon: '🤝' },
        { name: 'Communication', level: 85, experience: 'Advanced', icon: '💬' },
        { name: 'Time Management', level: 90, experience: 'Expert', icon: '⏰' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.dataset.skillId;
            if (!animatedSkills.includes(skillId)) {
              setAnimatedSkills(prev => [...prev, skillId]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = sectionRef.current?.querySelectorAll('.skill-item');
    skillElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getLevelLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 className="text-primary" size={40} />
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-textSecondary text-lg">Technologies and tools I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            
            return (
              <div
                key={catIndex}
                className="glass p-8 rounded-2xl border-t-4 border-primary card-hover animate-scale-in"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-textPrimary">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => {
                    const skillId = `${catIndex}-${skillIndex}`;
                    const isAnimated = animatedSkills.includes(skillId);
                    
                    return (
                      <div
                        key={skillIndex}
                        data-skill-id={skillId}
                        className="skill-item"
                        onMouseEnter={() => setHoveredSkill(skillId)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill Name and Level */}
                        <div className="flex items-center justify-between gap-3 p-3 bg-cardBg/30 rounded-lg hover:bg-cardBg/50 transition-all duration-300 group">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 bg-gradient-to-br ${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                              <span className="text-xl">{skill.icon}</span>
                            </div>
                            <span className="font-semibold text-textPrimary">{skill.name}</span>
                          </div>
                          <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                        </div>

                        {/* Experience (shown on hover) */}
                        {/* {hoveredSkill === skillId && (
                          <div className="mt-2 text-sm text-textSecondary animate-fade-in">
                            Experience: {skill.experience}
                          </div>
                        )} */}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-2xl inline-block">
            <div className="flex items-center gap-4 justify-center mb-4">
              <Heart className="text-secondary" size={32} />
              <p className="text-xl font-semibold text-textPrimary">
                Always Learning, Always Growing
              </p>
            </div>
            <p className="text-textSecondary max-w-2xl">
              I believe in continuous learning and staying updated with the latest technologies. 
              Currently exploring DevOps and Cloud Computing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
