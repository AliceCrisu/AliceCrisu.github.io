import { fonts, spacing, borders, lineHeights } from '../theme';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <>
      <SectionTitle id="contact" subtitle="let's talk" title="Contact Me" />

      <section className="w-full bg-white" style={{ paddingBottom: spacing.sectionBottom }}>
        <div className="bg-black flex flex-col" style={{ padding: spacing.contentPadding, gap: spacing.largeGap }}>
          {/* Contact Info */}
          <div className="flex flex-col items-center gap-6">
            <p
              className={`font-${fonts.families.montserrat.toLowerCase()} text-white text-center`}
              style={{
                fontSize: 'clamp(14px, 1.2vw, 18px)',
                letterSpacing: fonts.sizes.body.letterSpacing,
                lineHeight: lineHeights.relaxed
              }}
            >
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/alicecrisu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="mailto:crisu.alice@gmail.com"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="Email"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-black p-4 md:p-8 max-w-[800px] mx-auto w-full"
          >
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  className={`font-${fonts.families.montserrat.toLowerCase()} text-white ${fonts.weights.medium}`}
                  style={{ fontSize: fonts.sizes.small.fontSize }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={`w-full px-4 py-3 font-${fonts.families.montserrat.toLowerCase()} border md:border-[length:var(--border-medium)] border-black bg-white text-black placeholder:text-black/50`}
                  style={{
                    fontSize: fonts.sizes.small.fontSize,
                    '--border-medium': borders.medium
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className={`font-${fonts.families.montserrat.toLowerCase()} text-white ${fonts.weights.medium}`}
                  style={{ fontSize: fonts.sizes.small.fontSize }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 font-${fonts.families.montserrat.toLowerCase()} border md:border-[length:var(--border-medium)] border-black bg-white text-black placeholder:text-black/50`}
                  style={{
                    fontSize: fonts.sizes.small.fontSize,
                    '--border-medium': borders.medium
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className={`font-${fonts.families.montserrat.toLowerCase()} text-white ${fonts.weights.medium}`}
                  style={{ fontSize: fonts.sizes.small.fontSize }}
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className={`w-full px-4 py-3 font-${fonts.families.montserrat.toLowerCase()} border md:border-[length:var(--border-medium)] border-black bg-white text-black placeholder:text-black/50`}
                  style={{
                    fontSize: fonts.sizes.small.fontSize,
                    '--border-medium': borders.medium
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className={`font-${fonts.families.montserrat.toLowerCase()} text-white ${fonts.weights.medium}`}
                  style={{ fontSize: fonts.sizes.small.fontSize }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project or inquiry..."
                  rows="6"
                  className={`w-full px-4 py-3 font-${fonts.families.montserrat.toLowerCase()} resize-none border md:border-[length:var(--border-medium)] border-black bg-white text-black placeholder:text-black/50`}
                  style={{
                    fontSize: fonts.sizes.small.fontSize,
                    '--border-medium': borders.medium
                  }}
                />
              </div>

              <button
                type="submit"
                className={`bg-white text-black font-${fonts.families.anton.toLowerCase()} uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors self-start border md:border-[length:var(--border-medium)] border-white`}
                style={{
                  fontSize: fonts.sizes.button.fontSize,
                  letterSpacing: fonts.sizes.button.letterSpacing,
                  '--border-medium': borders.medium
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
