import ProjectCard from '@/components/molecules/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <h1 className="mb-10 text-5xl font-bold lg:text-6xl">My projects</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        {projects.map(project => (
          <div className="w-fit rounded-lg bg-stone-800 p-4 lg:px-8">
            <ProjectCard key={project.slug} project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
