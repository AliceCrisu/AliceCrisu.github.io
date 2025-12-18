import { fonts, borders, lineHeights } from '../theme';

const SkillCard = ({ icon, title, description }) => {
  return (
    <div
      className="bg-white p-4 md:p-6 flex flex-col gap-3 border-2 md:border-[length:var(--border-thick)] border-white"
      style={{
        '--border-thick': borders.thick
      }}
    >
      <div className="text-4xl">{icon}</div>
      <h3
        className={`font-${fonts.families.anton.toLowerCase()} text-black uppercase`}
        style={{
          fontSize: fonts.sizes.subheading.fontSize,
          letterSpacing: fonts.sizes.subheading.letterSpacing,
          lineHeight: lineHeights.tight
        }}
      >
        {title}
      </h3>
      <p
        className={`font-${fonts.families.montserrat.toLowerCase()} text-black`}
        style={{
          fontSize: fonts.sizes.tiny.fontSize,
          letterSpacing: fonts.sizes.tiny.letterSpacing,
          lineHeight: lineHeights.normal
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
