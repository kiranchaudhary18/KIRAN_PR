import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Calendar, TrendingUp } from 'lucide-react';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'CodingGita × Rai University Ahmedabad',
    duration: '2024 - Ongoing',
    grade: 'CGPA: 9.30/10',
    achievements: [
      'Currently in 4th Semester',
      'Building solid foundation in core technologies',
      'Active participation in hands-on projects'
    ]
  },
  {
    degree: 'Higher Secondary Education (HSC) - Science',
    institution: 'Shri Swastik Higher Secondary School, Palanpur',
    duration: '2022 - 2024',
    grade: 'Percentile Rank: 69.17',
    achievements: [
      'Focused approach during higher secondary education',
      'Strong foundation in Mathematics and Computer Science',
      'Completed with solid academic performance'
    ]
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Shri T.D.Shah Vidhyalay, Palanpur',
    duration: '2020 - 2022',
    grade: 'Percentile Rank: 84.17',
    achievements: [
      'Strong academic foundation',
      'Consistent performance throughout the year',
      'Demonstrated dedication and focus in studies'
    ]
  }
];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('.education-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="text-primary" size={40} />
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Education Journey</span>
          </h2>
          <p className="text-textSecondary text-lg">Academic achievements and learning milestones</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block timeline-line"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems.includes(index);
              
              return (
                <div
                  key={index}
                  data-index={index}
                  className={`education-item relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass p-6 rounded-2xl card-hover border-l-4 border-primary">
                      {/* Degree */}
                      <h3 className="text-xl font-bold text-textPrimary mb-2">
                        {edu.degree}
                      </h3>
                      
                      {/* Institution */}
                      <p className="text-primary font-semibold mb-3 flex items-center gap-2">
                        <GraduationCap size={18} />
                        {edu.institution}
                      </p>

                      {/* Duration and Grade */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-textSecondary text-sm">
                          <Calendar size={16} />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full">
                            <span className="text-primary font-semibold text-sm">{edu.grade}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-textSecondary text-sm">
                            <TrendingUp className="text-accent flex-shrink-0 mt-1" size={16} />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className="relative">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-darkBg animate-pulse-slow"></div>
                      <div className="absolute inset-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full blur-md opacity-50"></div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass px-8 py-4 rounded-full">
            <Award className="text-accent" size={24} />
            <p className="text-textPrimary font-semibold">
              Continuous Learner | Always Seeking Growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
