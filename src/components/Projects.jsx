import { spacing } from '../theme';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projectData';

const Projects = ({ openProject }) => {
  const gridProjects = projects.slice(0, Math.min(4, projects.length - 1));
  const fullWidthProject = projects.length > 1 ? projects[projects.length - 1] : null;

  return (
    <>
      <SectionTitle id="projects" subtitle="highlights" title="Projects" />

      <section className="w-full bg-white" style={{ paddingBottom: spacing.sectionBottom }}>
        <div className="bg-black flex flex-col gap-4 md:gap-8" style={{ padding: spacing.contentPadding }}>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {gridProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openProject(project)}
              />
            ))}
          </div>

          {/* Full Width Project */}
          {fullWidthProject && (
            <ProjectCard
              project={fullWidthProject}
              onClick={() => openProject(fullWidthProject)}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
