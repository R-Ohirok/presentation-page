import ProjectCard from '@/components/molecules/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    
    <div className="p-6">
      <h1 className="text-5xl lg:text-6xl font-bold mb-10">My projects</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
