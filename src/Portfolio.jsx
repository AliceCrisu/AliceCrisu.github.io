import { useState, useEffect } from 'react';
import { spacing } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

const Portfolio = () => {
  const [lightOn, setLightOn] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleLightbulbClick = () => {
    setLightOn(!lightOn);
  };

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const switchProject = (project) => {
    setSelectedProject(project);
    // Scroll to top of the project detail overlay
    const overlay = document.querySelector('.fixed.inset-0.bg-white.overflow-y-auto');
    if (overlay) {
      overlay.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Project Detail Overlay */}
      <ProjectDetail project={selectedProject} onClose={closeProject} onSwitchProject={switchProject} />

      {/* Main Content */}
      <div
        className="w-full relative"
        style={{
          padding: spacing.mainPadding,
          paddingLeft: isMobile ? '1.5rem' : `calc(${spacing.mainPadding} + ${spacing.navbarWidth})`,
          paddingRight: isMobile ? '1.5rem' : `calc(${spacing.mainPadding} + ${spacing.navbarWidth})`
        }}
      >
        {/* Sticky Navbar */}
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

        {/* Hero Section */}
        <Hero lightOn={lightOn} handleLightbulbClick={handleLightbulbClick} />

        {/* Projects Section */}
        <Projects openProject={openProject} />

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;
