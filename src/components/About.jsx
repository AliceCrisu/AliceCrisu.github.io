import { fonts, spacing, borders, lineHeights } from '../theme';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

const About = () => {
  const skills = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with focus on user experience and accessibility"
    },
    {
      icon: "📱",
      title: "Mobile Design",
      description: "Designing responsive mobile applications that work seamlessly across different devices and platforms"
    },
    {
      icon: "🎭",
      title: "Branding",
      description: "Developing cohesive brand identities that communicate values and resonate with target audiences"
    },
    {
      icon: "🔍",
      title: "User Research",
      description: "Conducting user interviews and testing to inform design decisions with real user insights"
    }
  ];

  return (
    <>
      <SectionTitle id="about" subtitle="introduction" title="About Me" />

      <section className="w-full bg-white" style={{ paddingBottom: spacing.sectionBottom }}>
        <div className="bg-black" style={{ padding: spacing.contentPadding }}>
          {/* Photo and Text */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[clamp(24px,2vw,40px)]">
            {/* Photo */}
            <div
              className="w-full md:w-[320px] h-[240px] md:h-[320px] flex-shrink-0 overflow-hidden mx-auto md:mx-0 border-2 md:border-[length:var(--border-thick)] border-white"
              style={{
                '--border-thick': borders.thick
              }}
            >
              <img
                src="/me.jpg"
                alt="About me"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col justify-center gap-4 md:gap-5">
              <h3
                className={`font-${fonts.families.anton.toLowerCase()} text-white text-center md:text-left uppercase`}
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  letterSpacing: '0.02em',
                  lineHeight: '1'
                }}
              >
                Hi, 
              </h3>
              <p
                className={`font-${fonts.families.montserrat.toLowerCase()} text-white text-center md:text-left`}
                style={{
                  fontSize: fonts.sizes.body.fontSize,
                  letterSpacing: fonts.sizes.body.letterSpacing,
                  lineHeight: '1.8'
                }}
              >
                I'm Alice, a UI/UX designer who loves helping people through thoughtful, human-centered design. With a background in philosophy, I focus on asking the right questions and creating solutions that make sense for both users and businesses. I've worked across B2B and B2C projects, from complex workflows to intuitive consumer experiences.
              </p>
              <p
                className={`font-${fonts.families.montserrat.toLowerCase()} text-white text-center md:text-left`}
                style={{
                  fontSize: fonts.sizes.body.fontSize,
                  letterSpacing: fonts.sizes.body.letterSpacing,
                  lineHeight: '1.8'
                }}
              >
                When I'm not designing, I'm usually on my motorcycle—clearing my head and finding new perspectives. Curious, collaborative, and always up for meaningful ideas—let's talk.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
       
        </div>
      </section>
    </>
  );
};

export default About;
