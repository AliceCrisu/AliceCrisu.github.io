import { fonts, spacing, lineHeights } from '../theme';
import { useState } from 'react';

const Hero = ({ lightOn, handleLightbulbClick }) => {
  const [ideaText, setIdeaText] = useState('');

  const handleSendIdea = () => {
    if (ideaText.trim()) {
      // For now, just log it - you can add email functionality later
      console.log('User idea:', ideaText);
      alert(`Thanks for sharing! Your idea: "${ideaText}"`);
      setIdeaText('');
    }
  };

  return (
    <section id="home" className="w-full flex flex-col min-h-screen md:h-[92vh]" style={{ height: undefined }}>
      {/* Title Area */}
      <div className="w-full bg-white flex flex-col items-center gap-4 sm:gap-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-6 md:py-0" style={{ paddingBottom: spacing.sectionVertical }}>
        <p
          className={`font-${fonts.families.inter.toLowerCase()} ${fonts.weights.medium} text-black uppercase text-center`}
          style={{
            fontSize: fonts.sizes.heroSubtitle.fontSize,
            letterSpacing: fonts.sizes.heroSubtitle.letterSpacing,
            marginRight: fonts.sizes.heroSubtitle.marginRight,
            lineHeight: lineHeights.tight
          }}
        >
          alice
        </p>
        <h1
          className={`font-${fonts.families.inter.toLowerCase()} ${fonts.weights.extrabold} text-black uppercase text-center`}
          style={{
            fontSize: fonts.sizes.title.fontSize,
            letterSpacing: fonts.sizes.title.letterSpacing,
            marginRight: fonts.sizes.title.marginRight,
            lineHeight: lineHeights.tight
          }}
        >
          UI/UX DESIGNER
        </h1>
      </div>

      {/* Hero Content Area */}
      <div className={`flex-1 w-full flex overflow-hidden relative transition-colors duration-500 min-h-[600px] md:min-h-0 ${lightOn ? 'bg-[#d4d4d4]' : 'bg-black'}`}>
        <div className="flex-1 flex flex-col relative" style={{ zIndex: 1 }}>
          {/* Lightbulb area */}
          <div className="absolute left-1/2 md:right-[16%] md:left-auto lg:right-[15%] -translate-x-1/2 md:translate-x-0 flex flex-col items-center z-10 pt-8 sm:pt-8 md:pt-10 lg:pt-10 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 top-[-45px] sm:top-[-45px] md:top-[-52px]">
            <div className="relative" style={{ zIndex: 2 }}>
              {/* Halo effect */}
              {lightOn && (
                <>
                  {/* Main large halo */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-500"
                    style={{
                      width: '200vw',
                      height: '200vh',
                      background: 'radial-gradient(ellipse 60% 65% at 50% 45%, rgba(255,252,245,0.35) 0%, rgba(255,250,235,0.28) 8%, rgba(255,248,225,0.22) 15%, rgba(245,245,230,0.16) 25%, rgba(235,235,220,0.12) 35%, rgba(225,225,215,0.08) 45%, rgba(215,215,210,0.04) 55%, rgba(210,210,205,0.02) 65%, transparent 100%)',
                      filter: 'blur(100px)',
                      borderRadius: '50%',
                      zIndex: 3
                    }}
                  />
                  {/* Middle glow layer */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-500"
                    style={{
                      width: '120vw',
                      height: '120vh',
                      background: 'radial-gradient(ellipse 50% 55% at 50% 45%, rgba(255,252,245,0.3) 0%, rgba(255,250,240,0.2) 20%, rgba(255,248,230,0.12) 40%, rgba(245,245,235,0.06) 60%, transparent 85%)',
                      filter: 'blur(70px)',
                      borderRadius: '50%',
                      zIndex: 3
                    }}
                  />
                  {/* Inner brighter glow */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-500"
                    style={{
                      width: '60vw',
                      height: '60vh',
                      background: 'radial-gradient(circle, rgba(255,252,245,0.4) 0%, rgba(255,250,240,0.25) 25%, rgba(255,248,230,0.12) 50%, transparent 75%)',
                      filter: 'blur(50px)',
                      borderRadius: '50%',
                      zIndex: 3
                    }}
                  />
                </>
              )}
              <div
                className="relative cursor-pointer inline-block w-28 sm:w-32 md:w-32 lg:w-40 xl:w-42 2xl:w-60"
                onClick={handleLightbulbClick}
                style={{ zIndex: 4 }}
              >
                <img
                  src="/off.png"
                  alt="Lightbulb off"
                  className="w-full h-auto block transition-opacity duration-500"
                  style={{
                    imageRendering: 'auto',
                    opacity: lightOn ? 0 : 1
                  }}
                />
                <img
                  src="/on.png"
                  alt="Lightbulb on"
                  className="w-full h-auto absolute top-0 left-0 transition-opacity duration-500"
                  style={{
                    imageRendering: 'auto',
                    opacity: lightOn ? 1 : 0
                  }}
                />
              </div>
            </div>
          </div>

          {/* Magazine-style content area */}
          <div className="absolute left-0 right-0 top-[48%] md:top-1/2 -translate-y-1/2 px-6 md:px-0" style={{ zIndex: 5 }}>
            {/* Shared Title Container - Exact same position for both modes */}
            <div className={`absolute left-6 md:left-12 lg:left-24 max-w-[90%] md:max-w-[50vw] lg:max-w-[55vw] -top-8 sm:-top-5 md:-top-6 lg:-top-6 text-left transition-all duration-300 ${lightOn ? 'translate-x-4 md:translate-x-0' : 'translate-x-0'}`}>
              <div>
                {!lightOn ? (
                  <h2
                    className="font-inter leading-tight uppercase text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.45rem] 2xl:text-[3.5rem] font-black mb-3 sm:mb-2 md:mb-2 lg:mb-2.5"
                    style={{
                      letterSpacing: '-0.02em',
                      color: '#f5f5f5',
                      lineHeight: '1.1'
                    }}
                  >
                    Let's Turn Sparks Into Solutions
                  </h2>
                ) : (
                  <h2
                    className="font-inter leading-tight uppercase text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.2rem] xl:text-[2.45rem] 2xl:text-[3.5rem] font-black mb-3 sm:mb-2 md:mb-1.5 lg:mb-2 max-w-[280px] sm:max-w-none"
                    style={{
                      letterSpacing: '-0.02em',
                      color: '#000000',
                      lineHeight: '1.1'
                    }}
                  >
                    Now let's make your idea shine
                  </h2>
                )}
              </div>
            </div>

            {/* Content below title */}
            <div className={`absolute left-6 md:left-12 lg:left-24 max-w-[90%] md:max-w-[50vw] lg:max-w-[55vw] top-14 sm:top-14 md:top-16 lg:top-[4.5rem] xl:top-[4rem] 2xl:top-[5.5rem] text-left transition-all duration-300 ${lightOn ? 'translate-x-4 md:translate-x-0' : 'translate-x-0'}`}>
              {!lightOn ? (
                // DARK MODE CONTENT
                <div>
                  <p
                    className="font-inter mb-4 sm:mb-4 md:mb-4 lg:mb-5 max-w-full lg:max-w-[90%] text-[0.875rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[0.85rem] xl:text-[0.945rem] 2xl:text-[1.35rem]"
                    style={{
                      letterSpacing: '0.01em',
                      color: '#d4d4d4',
                      fontWeight: '400',
                      lineHeight: '1.6'
                    }}
                  >
                    I bring structure and clarity to complex ideas, designing intuitive experiences that help people navigate products with ease. My work blends UX strategy and clean UI to create interfaces that simply make sense.
                  </p>
                  <p
                    className="font-inter text-[0.8rem] sm:text-[0.85rem] md:text-[0.85rem] lg:text-[0.7rem] xl:text-[0.77rem] 2xl:text-[1.1rem]"
                    style={{
                      letterSpacing: '0.02em',
                      color: '#b8b8b8',
                      fontWeight: '400',
                      lineHeight: '1.5'
                    }}
                  >
                    Ready to switch perspectives? <span style={{ fontWeight: '700' }}>Click</span> on the light bulb.
                  </p>
                </div>
              ) : (
                // LIGHT ON MODE CONTENT
                <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[560px] 2xl:max-w-[800px]">
                  <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    <div className="flex items-stretch">
                        <input
                          type="text"
                          placeholder="What's your idea?"
                          value={ideaText}
                          onChange={(e) => setIdeaText(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSendIdea()}
                          className="font-inter border-2 border-black bg-white text-black flex-1 focus:outline-none focus:ring-2 focus:ring-black transition-all text-[0.9rem] sm:text-[0.95rem] md:text-[0.95rem] lg:text-[1.15rem] xl:text-[0.875rem] 2xl:text-[1.25rem] py-2 px-3 sm:py-2.5 sm:px-4 md:py-3 md:px-4 lg:py-4 lg:px-5"
                          style={{
                            letterSpacing: '0.01em',
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            minWidth: 0
                          }}
                        />
                        <button
                          onClick={handleSendIdea}
                          className="bg-black text-white hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center border-2 border-l-0 border-black py-2 px-3 sm:py-2.5 sm:px-4 md:py-3 md:px-4 lg:py-4 lg:px-5"
                          style={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0
                          }}
                          aria-label="Send"
                        >
                          <svg
                            className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                          </svg>
                        </button>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center mb-8 gap-3 sm:gap-4">
                    <a
                      href="https://www.linkedin.com/in/alicecrisu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                      style={{
                        color: '#000000'
                      }}
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href="mailto:crisu.alice@gmail.com"
                      className="hover:opacity-70 transition-opacity"
                      style={{
                        color: '#000000'
                      }}
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Editorial highlights - Centered underneath the bulb (only in light mode) */}
          {lightOn && (
            <div className="absolute left-20 top-[78%] md:top-[65%] md:left-auto md:right-[16%] lg:right-[15%]" style={{
              maxWidth: 'min(90vw, 600px)'
            }}>
                    <h3
                      className="font-inter mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 uppercase text-[0.8rem] sm:text-[1.1rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[1.96rem] 2xl:text-[2.8rem] font-black max-w-[180px] sm:max-w-none"
                      style={{
                        letterSpacing: '0.01em',
                        color: '#000000',
                        lineHeight: '1.2'
                      }}
                    >
                      What you'll find here
                    </h3>
                    <ul className="space-y-1 sm:space-y-1.5 md:space-y-1.5 lg:space-y-2">
                      <li
                        className="font-inter text-[0.65rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[0.875rem] 2xl:text-[1.25rem] relative pl-[1.2em]"
                        style={{
                          color: '#000000',
                          fontWeight: '400',
                          lineHeight: '1.4'
                        }}
                      >
                        <span style={{ position: 'absolute', left: '0', color: '#000000' }}>•</span>
                        Smarter fitness through wearables
                      </li>
                      <li
                        className="font-inter text-[0.65rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[0.875rem] 2xl:text-[1.25rem] relative pl-[1.2em]"
                        style={{
                          color: '#000000',
                          fontWeight: '400',
                          lineHeight: '1.4'
                        }}
                      >
                        <span style={{ position: 'absolute', left: '0', color: '#000000' }}>•</span>
                        An enterpise SaaS, redesigned
                      </li>
                      <li
                        className="font-inter text-[0.65rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[0.875rem] 2xl:text-[1.25rem] relative pl-[1.2em]"
                        style={{
                          color: '#000000',
                          fontWeight: '400',
                          lineHeight: '1.4'
                        }}
                      >
                        <span style={{ position: 'absolute', left: '0', color: '#000000' }}>•</span>
                        A UX designer excited about what we can build next.
                      </li>
                    </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
