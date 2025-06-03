import { ProjectType } from '@/types/ProjectType';
import Technology from '../atoms/Technology';
import Link from 'next/link';

type Props = {
  project: ProjectType;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:col-span-full max-w-lg lg:max-w-5xl bg-gray-900 p-4 cursor-default border border-transparent hover:border-white rounded-lg gap-4 lg:gap-6 hover:scale-105 transition duration-300">
      <Link href={`/projects/${project.slug}`}>
        <img
          src={project.image}
          alt={project.name}
          className="lg:max-w-lg border border-zinc-500"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <Link href={`/projects/${project.slug}`}>
          <h2 className="text-3xl lg:text-4xl font-bold">{project.name}</h2>
        </Link>
        <p className="text-zinc-300">{project.info}</p>
        <div className="flex gap-2 bg-neutral-700 w-min px-2 py-1 rounded-lg">
          {project.technologies.map(technology => (
            <Technology key={technology.name} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
}
