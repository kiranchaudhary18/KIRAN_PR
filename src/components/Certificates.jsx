import React, { useState, useEffect, useRef } from 'react';
import { Award, ChevronLeft, ChevronRight, ExternalLink, Calendar, Shield } from 'lucide-react';

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const certificates = [
    {
      title: 'Github Copilot Fundamentals',
      organization: 'Microsoft',
      date: 'May 2025',
      credentialId: 'META-REACT-2025-12345',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224760/certificate_of_GitHub_Copilot_pjxglv.png',
      url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0ODc2IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODM1ODA3M184NzEyNDE4MTc0NzU2MjQ0NTIzOC5wbmciLCJ1c2VybmFtZSI6IktpcmFuIERla2FsaXlhIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7867%2FGitHub%2520Copilot%2520Fundamentals%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1517034816217588204&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVLy8PDU%2FLc0xOjEqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAY0cM2D8AAAA%3D'
    },
    {
      title: 'Introduction to the Basics of Azure Services',
      organization: 'Simplilearn',
      date: 'June 2025',
      credentialId: 'UDEMY-FS-2023-67890',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224746/certificate_azura_mfkobw.png',
      url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIyMDEwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODU0NzAzOF84OTE3Mjc3MTc1MTI4NDU4NzQ1NC5wbmciLCJ1c2VybmFtZSI6IktpcmFuIERla2FsaXlhIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4621%2FIntroduction%2520to%2520the%2520Basics%2520of%2520Azure%2520Services%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1517034816217588204&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd0rNsfRNCk9OjEqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAzYiQqT8AAAA%3D'
    },
    {
      title: 'REST API(intermediate)',
      organization: 'Hackerrank',
      date: 'June 2025',
      credentialId: 'FCC-JS-2023-54321',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224907/rest_i_gryttf.png',
      url: 'https://www.hackerrank.com/certificates/336e9e30d1bc'
    },
    {
      title: 'Frontend Developer React',
      organization: 'Hackerrank',
      date: 'May 2023',
      credentialId: 'GOOGLE-UX-2023-11111',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224906/react1_s6l27g.png',
      url: 'https://www.hackerrank.com/certificates/6a08e4739a24'
    },
    {
      title: 'Problem Solving(intermediate)',
      organization: 'Hackerrank',
      date: 'June 2025',
      credentialId: 'AWS-CLOUD-2023-22222',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224853/problem_xt51ff.png',
      url: 'https://www.hackerrank.com/certificates/52db091725a0'
    },
    {
      title: 'Node.js(intermediate)',
      organization: 'Hackerrank',
      date: 'june 2025',
      credentialId: 'IBM-NODE-2023-33333',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224826/node_i_xdltyx.png',
      url: 'https://www.hackerrank.com/certificates/bc8256b8aaf8'
    },
    {
      title: 'Javascript(intermediate)',
      organization: 'Hackerrank',
      date: 'May 2025',
      credentialId: 'IBM-NODE-2023-33333',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752324572/js_min860.png',
      url: 'https://www.hackerrank.com/certificates/1100a182ae95'
    },
     {
      title: 'SQL(Advanced)',
      organization: 'Hackerrank',
      date: 'june 2025',
      credentialId: 'IBM-NODE-2023-33333',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224944/sql_a_cih5pj.png',
      url: 'https://www.hackerrank.com/certificates/15a8ed10bbba?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate'
    },
     {
      title: 'SQL(intermediate)',
      organization: 'Hackerrank',
      date: 'June 2025',
      credentialId: 'IBM-NODE-2023-33333',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224945/sql_i_yb8fht.png',
      url: 'https://www.hackerrank.com/certificates/77bed77fbb66'
    },
     {
      title: 'CSS(Basic)',
      organization: 'Hackerrank',
      date: 'May 2025',
      credentialId: 'IBM-NODE-2023-33333',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224788/Hacker_renk_css_certificate_ivyhoj.png',
      url: 'https://www.hackerrank.com/certificates/398aceec5054'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Get visible certificates (current, previous, next)
  const getVisibleCertificates = () => {
    const prev = (currentSlide - 1 + certificates.length) % certificates.length;
    const next = (currentSlide + 1) % certificates.length;
    return [prev, currentSlide, next];
  };

  return (
    <section id="certificates" className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="text-primary" size={40} />
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>
          <p className="text-textSecondary text-lg">Professional credentials and learning milestones</p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Certificates Slider */}
          <div className="relative h-[450px] flex items-center justify-center">
            {getVisibleCertificates().map((certIndex, position) => {
              const cert = certificates[certIndex];
              const isCenter = position === 1;
              const offset = (position - 1) * 350;
              
              return (
                <div
                  key={certIndex}
                  className={`absolute transition-all duration-500 ease-out ${
                    isCenter ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    transform: `translateX(${offset}px) scale(${isCenter ? 1 : 0.8})`,
                    opacity: isCenter ? 1 : 0.5
                  }}
                >
                  <div className="w-80 glass rounded-2xl overflow-hidden shadow-xl card-hover">
                    {/* Certificate Image/Icon */}
                    <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-8xl relative overflow-hidden">
                      {typeof cert.image === 'string' && cert.image.startsWith('http') ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        cert.image
                      )}
                      <div className="absolute top-4 right-4">
                        <Shield className="text-accent" size={32} />
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-textPrimary line-clamp-2">
                        {cert.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Award size={18} />
                        <p className="text-sm">{cert.organization}</p>
                      </div>

                      <div className="flex items-center gap-2 text-textSecondary text-sm">
                        <Calendar size={16} />
                        <p>{cert.date}</p>
                      </div>

                      <div className="pt-3 border-t border-primary/20">
                        <p className="text-xs text-textSecondary mb-3">
                          Credential ID: <span className="font-mono text-accent">{cert.credentialId}</span>
                        </p>
                        
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ripple w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                        >
                          <ExternalLink size={18} />
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-4 glass rounded-full text-textPrimary hover:text-primary hover:scale-110 transition-all"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-4 glass rounded-full text-textPrimary hover:text-primary hover:scale-110 transition-all"
            aria-label="Next certificate"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? 'w-8 h-3 bg-gradient-to-r from-primary to-secondary rounded-full'
                  : 'w-3 h-3 bg-textSecondary/30 rounded-full hover:bg-textSecondary/50'
              }`}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>

        {/* Certificate Counter */}
        <div className="text-center mt-8">
          <p className="text-textSecondary">
            Showing <span className="text-primary font-bold">{currentSlide + 1}</span> of{' '}
            <span className="text-primary font-bold">{certificates.length}</span> certificates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
