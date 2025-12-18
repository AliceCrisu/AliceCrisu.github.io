import { useState } from 'react';
import { fonts, lineHeights, zIndex } from '../theme';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Burger Button */}
      <button
        className="fixed bottom-4 right-4 md:hidden w-12 h-12 bg-black flex flex-col items-center justify-center gap-1.5 rounded-full shadow-lg"
        style={{ zIndex: zIndex.navbar + 1 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white md:hidden flex flex-col items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ zIndex: zIndex.navbar }}
      >
        <div className={`font-${fonts.families.anton.toLowerCase()} flex flex-col items-center gap-6`}>
          {['home', 'projects', 'about', 'contact'].map((section) => (
            <span
              key={section}
              className={`cursor-pointer transition-all text-3xl uppercase ${activeSection === section ? 'text-black font-bold' : 'text-black/35'}`}
              onClick={() => handleNavClick(section)}
            >
              {section}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed right-[clamp(12px,1vw,20px)] top-1/2 -translate-y-1/2 bg-white items-center justify-center px-6 py-8" style={{ zIndex: zIndex.navbar }}>
        <div className="h-auto w-auto flex items-center justify-center">
          <div
            className={`font-${fonts.families.anton.toLowerCase()} whitespace-nowrap [writing-mode:vertical-rl]`}
            style={{
              fontSize: fonts.sizes.nav.fontSize,
              letterSpacing: fonts.sizes.nav.letterSpacing,
              lineHeight: lineHeights.navbar
            }}
          >
            <span
              className={`cursor-pointer transition-all hover:opacity-100 ${activeSection === 'home' ? 'text-black font-bold' : 'text-black/35 font-light'}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </span>
            <span className="text-black/35"> | </span>
            <span
              className={`cursor-pointer transition-all hover:opacity-100 ${activeSection === 'projects' ? 'text-black font-bold' : 'text-black/35 font-light'}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </span>
            <span className="text-black/35"> | </span>
            <span
              className={`cursor-pointer transition-all hover:opacity-100 ${activeSection === 'about' ? 'text-black font-bold' : 'text-black/35 font-light'}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </span>
            <span className="text-black/35"> | </span>
            <span
              className={`cursor-pointer transition-all hover:opacity-100 ${activeSection === 'contact' ? 'text-black font-bold' : 'text-black/35 font-light'}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
