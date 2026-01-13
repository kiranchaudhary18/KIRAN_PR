import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter, FileText, Video, X } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [manuallyFlippedCards, setManuallyFlippedCards] = useState([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const sectionRef = useRef(null);
  const isTouchDevice = useRef(false);

  const filters = ['All', 'MERN', 'Other'];

  const openVideoModal = (videoUrl) => {
    // Open modal immediately
    setIsVideoModalOpen(true);
    setIsVideoLoading(true);
    
    // Convert Google Drive share link to embed link
    let embedUrl = videoUrl;

    // Google Drive file link -> preview embed
    if (videoUrl.includes('drive.google.com/file/d/')) {
      const fileId = videoUrl.match(/\/d\/(.+?)\//)?.[1] || videoUrl.split('/d/')[1]?.split('/')[0];
      embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    }

    // YouTube short link (youtu.be/ID) -> embed
    else if (videoUrl.includes('youtu.be/')) {
      const id = videoUrl.split('youtu.be/')[1].split(/[?&]/)[0];
      embedUrl = `https://www.youtube.com/embed/${id}`;
    }

    // YouTube watch link (youtube.com/watch?v=ID) -> embed
    else if (videoUrl.includes('youtube.com/watch')) {
      const match = videoUrl.match(/[?&]v=([^&]+)/);
      const id = match?.[1];
      if (id) embedUrl = `https://www.youtube.com/embed/${id}`;
    }

    // If the URL already looks like an embed or is a plain http(s) link, keep it.
    // Append autoplay for YouTube embeds so users see immediate playback if desired.
    if (embedUrl.includes('youtube.com/embed/') && !embedUrl.includes('autoplay')) {
      embedUrl = `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1`;
    }

    setCurrentVideoUrl(embedUrl);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoUrl('');
    setIsVideoLoading(false);
  };

  const projects = [
    {
      title: 'Tattoos_studio_website',
      category: 'MERN',
      description: 'Designed and developed a user-friendly platform where tattoo lovers can discover styles, find artists, and learn about tattoo care. Integrated a virtual preview feature to enhance decision-making.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767986231/Gemini_Generated_Image_tscffbtscffbtscf_as4mit.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', "Jwt"],
      liveUrl: 'https://tattoos-dreamers-studio.onrender.com/',
      codeUrl: 'https://github.com/kiranchaudhary18/tattoos_website',
      apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sAYX2P4dZ',
      demoVideoUrl: 'https://www.youtube.com/watch?v=iLgs_iYD_4c'
    },
    {
      title: 'MediConnect - HealthCare Plateform',
      category: 'MERN',
      description: 'Developed a role-based healthcare web application featuring separate dashboards for Doctors, Patients, and Students. Included real-time chat, appointment management, analytics, and an AI assistant to enhance user interaction and learning experience',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Jwt'],
      liveUrl: 'https://mediconnect-in.onrender.com/',
      codeUrl: 'https://github.com/kiranchaudhary18/MediConnect',
      apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sB3dVNTGX',
      demoVideoUrl: '#'
    },
    {
      title: 'Ecommerce-forever',
      category: 'MERN',
      description: 'A modern full-stack fashion e-commerce application featuring dynamic product filtering, responsive layouts, consistent image handling, and a complete product detail and cart flow.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767986615/Gemini_Generated_Image_h1dvxih1dvxih1dv_jd4a1i.png',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Jwt', 'Stripe', 'Razorpay'],
      liveUrl: 'https://forever-in.onrender.com/',
      codeUrl: 'https://github.com/kiranchaudhary18/Ecommerce-app',
      apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sBXVeFXoG',
      demoVideoUrl: 'https://youtu.be/d-qHYIlwKHE'
    },
    {
      title: 'GearGuard  - Hackathon Project',
      category: 'MERN',
      description: 'Designed a full-stack Maintenance ERP system with role-based access and Kanban/calendar workflows for efficient asset and maintenance management.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Jwt'],
      liveUrl: 'https://gearguard-qpbj.onrender.com/login',
      codeUrl: 'https://github.com/kiranchaudhary18/OdooXadani',
      apiDocsUrl: 'https://documenter.getpostman.com/view/39216531/2sBXVeGCzQ',
      demoVideoUrl: 'https://drive.google.com/file/d/1JetVrzQsU51tw1rL5dr11Vbtm0acdaT_/view?usp=sharing'
    },
    {
      title: 'Code Review & Bug Finder',
      category: 'MERN',
      description: 'AI-powered Code Review tool that detects bugs, security issues, and optimizes your code — with refactoring and full review history built using the MERN stack + Groq API.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      tech: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
      liveUrl: 'https://code-review-and-bug-finder-in-rx4a.onrender.com/',
      codeUrl: 'https://github.com/kiranchaudhary18/code_review_and_bug_finder'
    },
    {
      title: 'Habit-Tracker',
      category: 'In this use Supabase',
      description: 'A React app to search meals, Harry Potter characters, cocktails, and bank info using multiple public APIs — fast and dynamic UI.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop',
      tech: ['Next.js', 'MongoDB', 'Markdown', 'Auth0'],
      liveUrl: 'https://ai-habit-tracker-45qa.onrender.com',
      codeUrl: 'https://github.com/kiranchaudhary18/Habit_Tracker'
    },
    {
      title: 'API Explorer Hub',
      category: 'React',
      description: 'A React app to search meals, Harry Potter characters, cocktails, and bank info using multiple public APIs — fast and dynamic UI.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954845/AJfQ9KR4NI61mWhshnNJXFzO3caqqk2adqqAS92yby4OdTXLFhCxSAQuheOlv4NqOD2wztsWxtDtgTDfa_6Tpal95bCXZakF3A_cBoe8SiZmkYc4gu_lKUhkdUs2T8b9UkpAgQv3yC0GAEddvb87nSwSIqsAw7MwqBYEUjVnZsfL7znTuVUY_1_txupui_moedzc.png',
      tech: ['React', 'Express.js', 'REST API'],
      liveUrl: 'https://react-api-1.onrender.com/',
      codeUrl: 'https://github.com/kiranchaudhary18/React-API'
    },
    {
      title: 'Meme-generator',
      category: 'React',
      description: 'A meme generator that lets users upload or choose images, customize text styles, and download memes instantly.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1767985896/Screenshot_2026-01-10_004226_l5btua.png',
      tech: ['React', 'REST API', 'gemini api'],
      liveUrl: 'https://meme-generator-pi-sepia.vercel.app/',
      codeUrl: 'https://github.com/kiranchaudhary18/Meme-generator'
    },
    {
      title: 'YouPlayX',
      category: 'React',
      description: 'A Youtube clone in React with real time video search and playback using the YouTube API- clean and Responsive UI ',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753941530/Y19wYWQsd18yMDAsaF8zMDA_2_a1bkss.png',
      tech: ['React', 'REST API', 'Express'],
      liveUrl: 'https://youtube-com-1.onrender.com/',
      codeUrl: 'https://github.com/kiranchaudhary18/youtube.com'
    },
    {
      title: 'Cartoon NetWork',
      category: 'Clone',
      description: 'A fun and interactive website clone of the Cartoon Network homepage, built purely with HTML and CSS.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954396/cartton_evgbvg_1_i43ioq.png',
      tech: ['HTML', 'CSS'],
      liveUrl: 'https://cartoon-website-1.netlify.app/',
      codeUrl: 'https://github.com/kiranchaudhary18/youtube.com'
    },
    {
      title: 'DigiGold',
      category: 'Clone',
      description: 'A clean and modern landing page for a digital gold platform, designed to be fully responsive using HTML and CSS.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954556/digigold_tijeho_1_um7bq0.png',
      tech: ['HTML', 'CSS'],
      liveUrl: 'https://digigold-1.netlify.app/',
      codeUrl: 'https://github.com/kiranchaudhary18/digigold'
    },
    {
      title: 'CodingGita Clone in FIGMA',
      category: 'UI/UX',
      description: 'A UI/UX design prototype for a food delivery application, created with Figma to ensure a seamless user experience.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753956418/codinggita-logo_urbgxt_ocbtxz.png',
      tech: ['FIGMA'],
      liveUrl: 'https://www.figma.com/proto/E6bEiKGItd1H4CJyOPvKkQ/Food?page-id=0%3A1&node-id=37-360&starting-point-node-id=37%3A360&t=UH6IWR19sFSCTdtW-1',
      // codeUrl: 'https://github.com/kiranchaudhary18/digigold'
    }
  ];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else if (activeFilter === 'MERN') {
      setFilteredProjects(projects.filter(p => p.category === 'MERN'));
    } else if (activeFilter === 'Other') {
      setFilteredProjects(projects.filter(p => p.category !== 'MERN'));
    }
  }, [activeFilter]);

  const setFlip = (index, value) => {
    setFlippedCards(prev => {
      const has = prev.includes(index);
      if (value && !has) return [...prev, index];
      if (!value && has) return prev.filter(i => i !== index);
      return prev;
    });
  };

  useEffect(() => {
    // Robust touch detection
    const prefersNoHover = window.matchMedia('(hover: none)').matches;
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    isTouchDevice.current = prefersNoHover || hasTouch;

    if (!isTouchDevice.current) return;

    // Auto flip cards on scroll when they enter viewport (mobile)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.cardIndex);
          if (Number.isNaN(idx)) return;
          // Only auto-flip if user hasn't manually interacted with this card
          if (entry.isIntersecting && !manuallyFlippedCards.includes(idx)) {
            setFlip(idx, true);
            // Auto unflip after a short delay
            setTimeout(() => {
              // Only auto-unflip if still not manually flipped
              if (!manuallyFlippedCards.includes(idx)) {
                setFlip(idx, false);
              }
            }, 1400);
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -20% 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects, manuallyFlippedCards]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-textSecondary text-lg">Explore my recent work and creations</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                  : 'glass text-textSecondary hover:text-primary'
              }`}
            >
              <Filter size={18} />
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFlipped = flippedCards.includes(index);
            
            return (
              <div
                key={index}
                className="perspective-1000 h-96 animate-scale-in project-card"
                data-card-index={index}
                style={{ animationDelay: `${index * 0.1}s`, touchAction: 'manipulation' }}
                // Desktop hover
                onMouseEnter={() => setFlip(index, true)}
                onMouseLeave={() => setFlip(index, false)}
                // Pointer-based hover (covers touch + pen)
                onPointerOver={() => setFlip(index, true)}
                onPointerOut={() => setFlip(index, false)}
                onPointerMove={() => setFlip(index, true)}
                onPointerDown={() => setFlip(index, true)}
                onPointerUp={() => setFlip(index, false)}
                onPointerCancel={() => setFlip(index, false)}
                // Touch-specific (for older browsers)
                onTouchStart={() => setFlip(index, true)}
                onTouchEnd={() => setFlip(index, false)}
                onTouchCancel={() => setFlip(index, false)}
                // Fallback: toggle on tap for touch devices
                onClick={() => {
                  if (isTouchDevice.current) {
                    setFlip(index, !isFlipped);
                    // Mark this card as manually flipped
                    setManuallyFlippedCards(prev => {
                      if (!prev.includes(index)) {
                        return [...prev, index];
                      }
                      return prev;
                    });
                  }
                }}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute w-full h-full glass rounded-2xl overflow-hidden backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Project Image/Icon */}
                    <div className="h-2/3 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full text-6xl">📁</div>';
                        }}
                      />
                    </div>

                    {/* Project Title */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-textPrimary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">{project.category}</p>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-4 right-4 text-textSecondary text-sm animate-pulse">
                      <span className="hidden sm:inline">Hover to see details</span>
                      <span className="sm:hidden">Auto flip / Tap to view</span>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute w-full h-full glass rounded-2xl p-6 backface-hidden flex flex-col justify-between"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-textPrimary mb-3">
                        {project.title}
                      </h3>
                      <p className="text-textSecondary text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn-ripple py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 text-sm"
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn-ripple py-2 border-2 border-primary text-textPrimary rounded-lg font-semibold hover:bg-primary/10 transition-all flex items-center justify-center gap-2 text-sm"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </div>
                      {(project.apiDocsUrl || project.demoVideoUrl) && (
                        <div className="flex gap-2">
                          {project.apiDocsUrl && (
                            <a
                              href={project.apiDocsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 btn-ripple py-2 glass text-textPrimary rounded-lg font-semibold hover:bg-accent/10 transition-all flex items-center justify-center gap-2 text-sm"
                            >
                              <FileText size={16} />
                              API Docs
                            </a>
                          )}
                          {project.demoVideoUrl && (
                            <button
                              onClick={() => openVideoModal(project.demoVideoUrl)}
                              className="flex-1 btn-ripple py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 text-sm group"
                            >
                              <Video size={16} className="group-hover:scale-110 transition-transform" />
                              🎬 Watch Demo
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/kiranchaudhary18?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-textPrimary font-semibold hover:bg-primary/10 transition-all card-hover"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-5xl mx-4 bg-background rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all hover:scale-110 shadow-lg"
            >
              <X size={24} />
            </button>
            
            {/* Video Player */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/90 z-10">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mb-4"></div>
                    <p className="text-textPrimary font-semibold">Loading Video...</p>
                  </div>
                </div>
              )}
              <iframe
                src={currentVideoUrl}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Project Demo Video"
                onLoad={() => setIsVideoLoading(false)}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Projects;
