import { fonts, borders, lineHeights } from '../theme';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="w-full h-[390px] overflow-hidden relative bg-cover bg-center cursor-pointer transition-transform hover:scale-[1.02] border-4 md:border-[12px] border-white"
      style={{
        backgroundImage: `url(${project.backgroundImage})`,
        '--border-thick': borders.thick
      }}
      onClick={onClick}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-6 py-6 md:py-8 flex flex-col gap-3">
        <h3
          className={`font-${fonts.families.anton.toLowerCase()} text-white font-bold uppercase`}
          style={{
            fontSize: 'clamp(20px, 2vw, 28px)',
            letterSpacing: '0.05em',
            lineHeight: lineHeights.tight
          }}
        >
          {project.name}
        </h3>
        <p
          className={`font-${fonts.families.montserrat.toLowerCase()} text-white`}
          style={{
            fontSize: fonts.sizes.small.fontSize,
            letterSpacing: fonts.sizes.small.letterSpacing,
            lineHeight: lineHeights.tight
          }}
        >
          {project.summary}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
