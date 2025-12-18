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
          <div className="flex flex-col md:flex-row mb-4 md:mb-8 gap-4 md:gap-[clamp(24px,2vw,40px)]">
            {/* Photo */}
            <div
              className="w-full md:w-[400px] h-[300px] md:h-[400px] flex-shrink-0 overflow-hidden mx-auto md:mx-0 border-2 md:border-[length:var(--border-thick)] border-white"
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
            <div className="flex-1 flex flex-col justify-center gap-5 md:gap-6">
              <p
                className={`font-${fonts.families.montserrat.toLowerCase()} text-white text-center md:text-left`}
                style={{
                  fontSize: fonts.sizes.body.fontSize,
                  letterSpacing: fonts.sizes.body.letterSpacing,
                  lineHeight: '1.8'
                }}
              >
                I'm a 26-year-old UI/UX designer who genuinely loves what I do—helping people through thoughtful design.
              </p>
              <p
                className={`font-${fonts.families.montserrat.toLowerCase()} text-white text-center md:text-left`}
                style={{
                  fontSize: fonts.sizes.body.fontSize,
                  letterSpacing: fonts.sizes.body.letterSpacing,
                  lineHeight: '1.8'
                }}
              >
                My background in philosophy might seem unexpected, but it's become one of my greatest assets. It taught me to ask better questions, challenge assumptions, and look beyond the surface. In UX, that translates into designs that don't just look good—they make sense for both users and businesses.
              </p>
              <p
                className={`font-${fonts.families.montserrat.toLowerCase()} text-white text-center md:text-left`}
                style={{
                  fontSize: fonts.sizes.body.fontSize,
                  letterSpacing: fonts.sizes.body.letterSpacing,
                  lineHeight: '1.8'
                }}
              >
                I've worked across B2B and B2C projects, which means I understand how different audiences think, what drives their decisions, and how to create experiences that serve diverse needs. Whether it's simplifying complex enterprise workflows or crafting delightful consumer-facing interfaces, I approach every challenge with curiosity and empathy.
              </p>
              <p
                className={`font-${fonts.families.montserrat.toLowerCase()} text-white text-center md:text-left`}
                style={{
                  fontSize: fonts.sizes.body.fontSize,
                  letterSpacing: fonts.sizes.body.letterSpacing,
                  lineHeight: '1.8'
                }}
              >
                Outside of design, you'll find me on my motorcycle, exploring new roads and clearing my head. I'm also someone who thrives in conversation—discussing ideas, sharing plans, and learning from the people around me. I believe the best solutions come from collaboration, not isolation.
              </p>
              <p
                className={`font-${fonts.families.montserrat.toLowerCase()} text-white text-center md:text-left`}
                style={{
                  fontSize: fonts.sizes.body.fontSize,
                  letterSpacing: fonts.sizes.body.letterSpacing,
                  lineHeight: '1.8'
                }}
              >
                If you're looking for a designer who combines strategic thinking with genuine care for users, let's talk.
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
