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

            <div className="flex items-center justify-center flex-wrap gap-3 md:gap-[clamp(24px,2vw,40px)]">
              <a
                href="mailto:crisu.alice@gmail.com"
                className={`font-${fonts.families.anton.toLowerCase()} text-white hover:text-white/70 transition-colors uppercase`}
                style={{
                  fontSize: fonts.sizes.link.fontSize,
                  letterSpacing: fonts.sizes.link.letterSpacing
                }}
              >
                Email
              </a>
              <span className="text-white/35 hidden md:inline">|</span>
              <a
                href="https://www.linkedin.com/in/alicecrisu/"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-${fonts.families.anton.toLowerCase()} text-white hover:text-white/70 transition-colors uppercase`}
                style={{
                  fontSize: fonts.sizes.link.fontSize,
                  letterSpacing: fonts.sizes.link.letterSpacing
                }}
              >
                LinkedIn
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
