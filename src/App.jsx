import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import CursorTrail from './components/CursorTrail';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="dark">
      <div className="bg-darkBg min-h-screen text-textPrimary">
        <CursorTrail />
        <Sidebar />
        
        <main className="ml-0 md:ml-[100px] transition-all duration-300">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
