import { fonts, spacing, lineHeights } from '../theme';

const SectionTitle = ({ id, subtitle, title }) => {
  return (
    <section
      id={id}
      className="w-full bg-white flex flex-col items-center gap-4"
      style={{ paddingTop: spacing.sectionVertical, paddingBottom: spacing.sectionVertical }}
    >
      <p
        className={`font-${fonts.families.inter.toLowerCase()} ${fonts.weights.medium} text-black uppercase text-center`}
        style={{
          fontSize: fonts.sizes.subtitle.fontSize,
          letterSpacing: fonts.sizes.subtitle.letterSpacing,
          marginRight: fonts.sizes.subtitle.marginRight,
          lineHeight: lineHeights.tight
        }}
      >
        {subtitle}
      </p>
      <h2
        className={`font-${fonts.families.inter.toLowerCase()} ${fonts.weights.extrabold} text-black uppercase text-center`}
        style={{
          fontSize: fonts.sizes.title.fontSize,
          letterSpacing: fonts.sizes.title.letterSpacing,
          marginRight: fonts.sizes.title.marginRight,
          lineHeight: lineHeights.tight
        }}
      >
        {title}
      </h2>
    </section>
  );
};

export default SectionTitle;
