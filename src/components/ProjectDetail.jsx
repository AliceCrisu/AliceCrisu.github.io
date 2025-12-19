import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { fonts, spacing, lineHeights, zIndex, borders } from '../theme';
import { projects } from '../data/projectData';

const ProjectDetail = ({ project, onClose, onSwitchProject }) => {
  const [showFullText, setShowFullText] = useState(true);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Track window resize for mobile image switching
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load markdown content for the project (different file based on toggle)
  useEffect(() => {
    if (project?.id) {
      setLoading(true);
      const filename = showFullText ? 'content.md' : 'content-compact.md';
      fetch(`/projects/${project.id}/${filename}`)
        .then(res => {
          if (!res.ok) throw new Error('Not found');
          return res.text();
        })
        .then(text => {
          setMarkdownContent(text);
          setLoading(false);
        })
        .catch(() => {
          // Fallback to summary if no markdown file
          setMarkdownContent('');
          setLoading(false);
        });
    }
  }, [project?.id, showFullText]);

  // Text color based on project
  const isLightBg = false; // Always dark background now
  const textColor = 'text-white';
  const textColorMuted = 'text-white/90';

  // Custom components for ReactMarkdown
  const markdownComponents = {
    h1: ({ children }) => (
      <h1
        className={`font-${fonts.families.anton.toLowerCase()} font-bold ${textColor} uppercase mb-6 mt-12 first:mt-0`}
        style={{
          fontSize: fonts.sizes.heading.fontSize,
          letterSpacing: fonts.sizes.heading.letterSpacing,
          lineHeight: lineHeights.tight
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className={`font-${fonts.families.anton.toLowerCase()} font-bold ${textColor} uppercase mb-6 mt-16 first:mt-0`}
        style={{
          fontSize: fonts.sizes.heading.fontSize,
          letterSpacing: fonts.sizes.heading.letterSpacing,
          lineHeight: 'clamp(1.3, 1.2 + 0.1vw, 1.095)'
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={`font-${fonts.families.anton.toLowerCase()} font-bold ${textColorMuted} uppercase mt-8 mb-3`}
        style={{
          fontSize: fonts.sizes.subheading.fontSize,
          letterSpacing: fonts.sizes.subheading.letterSpacing,
          lineHeight: lineHeights.tight
        }}
      >
        {children}
      </h3>
    ),
    p: ({ children, node }) => {
      // Check if paragraph contains only images with #side
      const childArray = Array.isArray(children) ? children : [children];
      const hasSideImages = childArray.some(child =>
        child?.props?.src?.includes('#side')
      );

      if (hasSideImages) {
        return (
          <div className="flex flex-wrap justify-center gap-4 my-10 clear-both">
            {children}
          </div>
        );
      }

      return (
        <p
          className={`font-${fonts.families.montserrat.toLowerCase()} ${textColor} mb-8`}
          style={{
            fontSize: fonts.sizes.body.fontSize,
            letterSpacing: fonts.sizes.body.letterSpacing,
            lineHeight: '1.8'
          }}
        >
          {children}
        </p>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    a: ({ href, children }) => (
      <a
        href={href}
        target={() => scrollToSection('contact')}
        rel=" "
        className="underline hover:opacity-70 transition-opacity"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className={`font-${fonts.families.montserrat.toLowerCase()} ${textColor} list-disc list-inside mb-8 space-y-3`}
        style={{ fontSize: fonts.sizes.body.fontSize, lineHeight: '1.8' }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className={`font-${fonts.families.montserrat.toLowerCase()} ${textColor} list-decimal list-inside mb-8 space-y-3`}
        style={{ fontSize: fonts.sizes.body.fontSize, lineHeight: '1.8' }}
      >
        {children}
      </ol>
    ),
    li: ({ children }) => <li>{children}</li>,
    img: ({ src, alt }) => {
      const isRight = src?.includes('#right');
      const isLeft = src?.includes('#left');
      const isTiny = src?.includes('#tiny');
      const isSmall = src?.includes('#small');
      const isSide = src?.includes('#side');
      const cleanSrc = src?.replace(/#(right|left|tiny|small|side)/g, '');
      const isThisProject = project?.id === 'this';
      const borderClass = isThisProject ? 'border-2 border-white' : '';

      // Tiny image - very small, inline
      if (isTiny) {
        return (
          <div className="flex justify-center my-6 clear-both">
            <div
              className={`relative max-w-[120px] overflow-hidden cursor-pointer group ${borderClass}`}
              onClick={() => setZoomedImage(cleanSrc)}
            >
              <img
                src={cleanSrc}
                alt={alt || ''}
                className="w-full h-auto rounded shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        );
      }

      // Small image - slightly larger than tiny
      if (isSmall) {
        return (
          <div className="flex justify-center my-6 clear-both">
            <div
              className={`relative max-w-[200px] overflow-hidden cursor-pointer group ${borderClass}`}
              onClick={() => setZoomedImage(cleanSrc)}
            >
              <img
                src={cleanSrc}
                alt={alt || ''}
                className="w-full h-auto rounded shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        );
      }

      // Side by side images - displayed inline
      if (isSide) {
        return (
          <div
            className={`inline-block w-[48%] mx-[1%] cursor-pointer group ${borderClass}`}
            onClick={() => setZoomedImage(cleanSrc)}
          >
            <img
              src={cleanSrc}
              alt={alt || ''}
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        );
      }

      if (isRight || isLeft) {
        return (
          <div
            className={`${isRight ? 'float-right ml-6 mb-4' : 'float-left mr-6 mb-4'} w-[20%] max-w-[180px] cursor-pointer group ${borderClass}`}
            onClick={() => setZoomedImage(cleanSrc)}
          >
            <img
              src={cleanSrc}
              alt={alt || ''}
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        );
      }

      return (
        <div className="flex justify-center my-10 clear-both">
          <div
            className={`relative w-full max-w-[900px] overflow-hidden cursor-pointer group ${borderClass}`}
            onClick={() => setZoomedImage(cleanSrc)}
          >
            <img
              src={cleanSrc}
              alt={alt || ''}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
              <span className={`font-${fonts.families.anton.toLowerCase()} text-white text-lg uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                Click to zoom
              </span>
            </div>
          </div>
        </div>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-white/30 pl-6 my-6 italic text-white/80">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-white/10 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    hr: () => <hr className="border-white/20 my-10" />,
  };

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-white overflow-y-auto"
      style={{ zIndex: zIndex.projectOverlay }}
    >
      {/* Sticky Header Bar */}
      <div
        className="sticky top-0 bg-white z-10 px-4 md:px-[clamp(24px,2vw,40px)] py-4 md:py-6 md:pl-[calc(clamp(24px,2vw,40px)+80px)] md:pr-[calc(clamp(24px,2vw,40px)+80px)] border-b border-black/10"
      >
        <div className="flex items-center justify-between gap-4">
          {/* Back Button - Left */}
          <button
            onClick={onClose}
            className={`bg-black text-white px-4 md:px-6 py-2 md:py-3 font-${fonts.families.anton.toLowerCase()} uppercase hover:bg-white hover:text-black transition-colors border md:border-[length:var(--border-medium)] border-black shrink-0`}
            style={{
              fontSize: fonts.sizes.button.fontSize,
              letterSpacing: fonts.sizes.button.letterSpacing,
              '--border-medium': borders.medium
            }}
          >
            ← Back
          </button>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Toggle - Right */}
          <div className="flex shrink-0 border md:border-[length:var(--border-medium)] border-black" style={{ '--border-medium': borders.medium }}>
            <button
              onClick={() => setShowFullText(false)}
              className={`px-3 md:px-4 py-2 md:py-3 font-${fonts.families.anton.toLowerCase()} uppercase transition-all ${!showFullText ? 'bg-black text-white shadow-inner' : 'bg-white text-black hover:bg-black/10'}`}
              style={{
                fontSize: fonts.sizes.button.fontSize,
                letterSpacing: fonts.sizes.button.letterSpacing,
                boxShadow: !showFullText ? 'inset 0 2px 8px rgba(0,0,0,0.3)' : 'none'
              }}
            >
              Short
            </button>
            <button
              onClick={() => setShowFullText(true)}
              className={`px-3 md:px-4 py-2 md:py-3 font-${fonts.families.anton.toLowerCase()} uppercase transition-all border-l md:border-l-[length:var(--border-medium)] border-black ${showFullText ? 'bg-black text-white' : 'bg-white text-black hover:bg-black/10'}`}
              style={{
                fontSize: fonts.sizes.button.fontSize,
                letterSpacing: fonts.sizes.button.letterSpacing,
                '--border-medium': borders.medium,
                boxShadow: showFullText ? 'inset 0 2px 8px rgba(0,0,0,0.3)' : 'none'
              }}
            >
              Detailed
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full px-4 md:px-[clamp(24px,2vw,40px)] py-[clamp(24px,2vw,40px)] md:pl-[calc(clamp(24px,2vw,40px)+80px)] md:pr-[calc(clamp(24px,2vw,40px)+80px)] pb-20 md:pb-[clamp(24px,2vw,40px)]"
      >

        {/* Project Title - Outside black container */}
        <div className="w-full flex justify-center mb-4 md:mb-6">
          <h1
            className={`font-${fonts.families.anton.toLowerCase()} font-bold text-black uppercase text-center`}
            style={{
              fontSize: 'clamp(36px, 7vw, 80px)',
              letterSpacing: 'clamp(2px, 0.4vw, 5px)',
              lineHeight: '1'
            }}
          >
            {project.name}
          </h1>
        </div>

        {/* Project Details - Duration, Role, Team */}
        <div className="w-full flex justify-center mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {project.duration && (
              <div className="flex items-center gap-2">
                <span className={`font-${fonts.families.anton.toLowerCase()} text-black/50 uppercase text-sm`}>Duration:</span>
                <span className={`font-${fonts.families.montserrat.toLowerCase()} text-black font-medium`}>{project.duration}</span>
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2">
                <span className={`font-${fonts.families.anton.toLowerCase()} text-black/50 uppercase text-sm`}>Role:</span>
                <span className={`font-${fonts.families.montserrat.toLowerCase()} text-black font-medium`}>{project.role}</span>
              </div>
            )}
            {project.team && (
              <div className="flex items-center gap-2">
                <span className={`font-${fonts.families.anton.toLowerCase()} text-black/50 uppercase text-sm`}>Team:</span>
                <span className={`font-${fonts.families.montserrat.toLowerCase()} text-black font-medium`}>{project.team}</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="w-full bg-white flex justify-center relative" style={{ paddingBottom: spacing.sectionBottom }}>
          <div className="w-full max-w-[1600px] py-6 md:py-12 lg:py-16 relative bg-black overflow-hidden" style={{ padding: 'clamp(1.5rem, 4vw, 7rem)' }}>
            {/* Hero Image Stack - Vista Aero alt-tab style */}
            <div className="w-full relative mb-8 md:mb-16 py-6 md:py-12 overflow-visible touch-pan-y">
              {(() => {
                // Special case for "this" project - lightbulb in document flow
                if (project.id === 'this') {
                  return (
                    <div className="flex justify-end" style={{ marginTop: '-140px', marginRight: '15%' }}>
                      <div className="relative">
                        {/* Main large halo */}
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                          style={{
                            width: '300vw',
                            height: '300vh',
                            background: 'radial-gradient(ellipse 70% 75% at 50% 45%, rgba(255,252,245,0.4) 0%, rgba(255,250,235,0.32) 8%, rgba(255,248,225,0.25) 15%, rgba(245,245,230,0.18) 25%, rgba(235,235,220,0.14) 35%, rgba(225,225,215,0.1) 45%, rgba(215,215,210,0.06) 55%, rgba(210,210,205,0.03) 65%, transparent 100%)',
                            filter: 'blur(120px)',
                            borderRadius: '50%',
                            zIndex: 3
                          }}
                        />
                        {/* Middle glow layer */}
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                          style={{
                            width: '180vw',
                            height: '180vh',
                            background: 'radial-gradient(ellipse 60% 65% at 50% 45%, rgba(255,252,245,0.35) 0%, rgba(255,250,240,0.25) 20%, rgba(255,248,230,0.15) 40%, rgba(245,245,235,0.08) 60%, transparent 85%)',
                            filter: 'blur(90px)',
                            borderRadius: '50%',
                            zIndex: 3
                          }}
                        />
                        {/* Inner brighter glow */}
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                          style={{
                            width: '100vw',
                            height: '100vh',
                            background: 'radial-gradient(circle, rgba(255,252,245,0.45) 0%, rgba(255,250,240,0.3) 25%, rgba(255,248,230,0.15) 50%, transparent 75%)',
                            filter: 'blur(70px)',
                            borderRadius: '50%',
                            zIndex: 3
                          }}
                        />
                        <div
                          className="relative inline-block w-24 sm:w-28 md:w-32 lg:w-40 xl:w-42 2xl:w-60"
                          style={{ zIndex: 4 }}
                        >
                          <img
                            src="/on.png"
                            alt="Lightbulb on"
                            className="w-full h-auto block"
                            style={{ imageRendering: 'auto' }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                }

                // Only use heroImage and galleryImages (not backgroundImage)
                const heroImg = project.heroImage || null;
                const galleryImgs = project.galleryImages || [];
                const allImages = [heroImg, ...galleryImgs].filter(Boolean).slice(0, 7);
                const total = allImages.length;

                if (total === 0) return null;

                // Single image - no carousel, just display it
                if (total === 1) {
                  return (
                    <div className="flex justify-center">
                      <img
                        src={allImages[0]}
                        alt={project.name}
                        className="rounded-lg shadow-2xl cursor-pointer max-w-full"
                        style={{
                          maxWidth: 'clamp(300px, 70vw, 800px)',
                          maxHeight: 'clamp(250px, 50vw, 500px)',
                          width: 'auto',
                          height: 'auto',
                        }}
                        onClick={() => setZoomedImage(allImages[0])}
                      />
                    </div>
                  );
                }

                // Calculate wrapped position (so images appear on both sides)
                const getWrappedPosition = (index, activeIndex, total) => {
                  let pos = index - activeIndex;
                  // Wrap around for circular display
                  if (pos > total / 2) pos -= total;
                  if (pos < -total / 2) pos += total;
                  return pos;
                };

                return (
                  <>
                    {/* Left Arrow */}
                    <button
                      onClick={() => setActiveCardIndex((prev) => (prev - 1 + total) % total)}
                      className="absolute left-1 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center text-white/70 hover:text-white active:text-white transition-colors z-20 bg-black/30 md:bg-transparent rounded-full"
                      style={{ fontSize: 'clamp(24px, 4vw, 56px)' }}
                    >
                      ‹
                    </button>

                    <div
                      className="flex justify-center items-center px-12 md:px-0"
                      style={{ perspective: '800px', minHeight: 'clamp(250px, 50vw, 500px)' }}
                    >
                      {allImages.map((img, index) => {
                        const position = getWrappedPosition(index, activeCardIndex, total);
                        const isActive = position === 0;

                        // Responsive values - more fanned out for mobile app screenshots
                        const xOffset = position * 75;
                        const zOffset = Math.abs(position) * -150;
                        const yRotate = position * -30;
                        const brightness = isActive ? 1 : 0.5;
                        // Show fewer on mobile
                        const visible = Math.abs(position) <= 2;

                        if (!visible) return null;

                        return (
                          <div
                            key={index}
                            className="absolute cursor-pointer transition-all duration-500 ease-out flex items-center justify-center"
                            style={{
                              transform: `translateX(${xOffset}%) translateZ(${zOffset}px) rotateY(${yRotate}deg)`,
                              zIndex: isActive ? 100 : 50 - Math.abs(position),
                              filter: `brightness(${brightness})`,
                              transformStyle: 'preserve-3d',
                            }}
                            onClick={() => {
                              if (isActive) {
                                setZoomedImage(img);
                              } else {
                                setActiveCardIndex(index);
                              }
                            }}
                          >
                            <img
                              src={img}
                              alt={`${project.name} ${index + 1}`}
                              className="rounded-lg shadow-2xl"
                              style={{
                                maxWidth: 'clamp(200px, 55vw, 550px)',
                                maxHeight: 'clamp(200px, 45vw, 450px)',
                                width: 'auto',
                                height: 'auto',
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* Right Arrow */}
                    <button
                      onClick={() => setActiveCardIndex((prev) => (prev + 1) % total)}
                      className="absolute right-1 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 flex items-center justify-center text-white/70 hover:text-white active:text-white transition-colors z-20 bg-black/30 md:bg-transparent rounded-full"
                      style={{ fontSize: 'clamp(24px, 4vw, 56px)' }}
                    >
                      ›
                    </button>
                  </>
                );
              })()}
            </div>
            {/* Project Content - Short or Detailed */}
            {loading ? (
              <div className={`font-${fonts.families.montserrat.toLowerCase()} ${isLightBg ? 'text-black/50' : 'text-white/50'}`}>
                Loading...
              </div>
            ) : markdownContent ? (
              <ReactMarkdown components={markdownComponents}>
                {markdownContent}
              </ReactMarkdown>
            ) : (
              // Fallback if no markdown file
              <div className="mb-10">
                <p
                  className={`font-${fonts.families.montserrat.toLowerCase()} ${textColor}`}
                  style={{
                    fontSize: fonts.sizes.body.fontSize,
                    letterSpacing: fonts.sizes.body.letterSpacing,
                    lineHeight: lineHeights.relaxed
                  }}
                >
                  {project.summary}
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Other Projects Section */}
        <div className="w-full bg-white flex justify-center" style={{ paddingBottom: spacing.sectionBottom }}>
          <div className="w-full max-w-[1600px] px-8 py-12 md:px-20 md:py-16">
            {(() => {
              const otherProjects = projects.filter((p) => p.id !== project.id);
              const leftProject = otherProjects[0];
              const rightProject = otherProjects[1];

              return (
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                  {/* Left Side - Contact CTA */}
                  <div className="flex-1 text-center md:text-left">
                    <h2
                      className={`font-${fonts.families.anton.toLowerCase()} font-bold text-black uppercase mb-3`}
                      style={{
                        fontSize: 'clamp(18px, 2.5vw, 28px)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Like What You See?
                    </h2>
                    <p
                      className={`font-${fonts.families.montserrat.toLowerCase()} text-black/70 mb-4`}
                      style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}
                    >
                      Let's work together on your next project
                    </p>
                    <button
                      onClick={() => {
                        onClose();
                        // Small delay to allow overlay to close, then scroll to contact
                        setTimeout(() => {
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                      className={`bg-black text-white px-6 py-3 font-${fonts.families.anton.toLowerCase()} uppercase hover:bg-white hover:text-black transition-colors border-2 border-black`}
                      style={{
                        fontSize: fonts.sizes.button.fontSize,
                        letterSpacing: fonts.sizes.button.letterSpacing,
                      }}
                    >
                      Get In Touch
                    </button>
                  </div>

                  {/* Right Side - Other Projects */}
                  <div className="flex flex-col items-center md:items-end gap-4">
                    <h2
                      className={`font-${fonts.families.anton.toLowerCase()} font-bold text-black uppercase`}
                      style={{
                        fontSize: 'clamp(16px, 2vw, 24px)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Other Projects
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {leftProject && (
                        <div
                          className="relative w-[240px] h-[150px] overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] border-4 border-black bg-cover bg-center"
                          style={{ backgroundImage: `url(${isMobile && leftProject.backgroundImageMobile ? leftProject.backgroundImageMobile : leftProject.backgroundImage})` }}
                          onClick={() => onSwitchProject && onSwitchProject(leftProject)}
                        >
                          <div className="absolute inset-0 bg-black/30" />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-3 py-2">
                            <h3
                              className={`font-${fonts.families.anton.toLowerCase()} text-white font-bold uppercase`}
                              style={{
                                fontSize: 'clamp(12px, 1.2vw, 14px)',
                                letterSpacing: '0.03em',
                              }}
                            >
                              {leftProject.name}
                            </h3>
                          </div>
                        </div>
                      )}
                      {rightProject && (
                        <div
                          className="relative w-[240px] h-[150px] overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] border-4 border-black bg-cover bg-center"
                          style={{ backgroundImage: `url(${isMobile && rightProject.backgroundImageMobile ? rightProject.backgroundImageMobile : rightProject.backgroundImage})` }}
                          onClick={() => onSwitchProject && onSwitchProject(rightProject)}
                        >
                          <div className="absolute inset-0 bg-black/30" />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-3 py-2">
                            <h3
                              className={`font-${fonts.families.anton.toLowerCase()} text-white font-bold uppercase`}
                              style={{
                                fontSize: 'clamp(12px, 1.2vw, 14px)',
                                letterSpacing: '0.03em',
                              }}
                            >
                              {rightProject.name}
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          style={{ zIndex: zIndex.projectOverlay + 10 }}
          onClick={() => setZoomedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-white/70 transition-colors"
            onClick={() => setZoomedImage(null)}
          >
            ×
          </button>
          <img
            src={zoomedImage}
            alt="Zoomed view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
