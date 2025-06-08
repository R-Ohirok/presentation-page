import { ProjectType } from '@/types/ProjectType';
import Technology from '@/components/atoms/Technology';
import Link from 'next/link';
import { getTechnologyDetails } from '@/utils/getTechnologyDetails';

type Props = {
  project: ProjectType;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flex max-w-lg cursor-default flex-col items-center gap-4 rounded-lg border border-transparent bg-gray-900 p-4 transition duration-300 hover:scale-105 hover:border-white lg:col-span-full lg:max-w-5xl lg:flex-row lg:gap-6">
      <Link href={`/projects/${project.slug}`}>
        <img
          src={project.image}
          alt={project.name}
          className="border border-zinc-500 lg:max-w-lg"
        />
      </Link>
      <div className="flex h-full flex-col justify-start gap-2">
        <div className="flex flex-col gap-2">
          <Link href={`/projects/${project.slug}`}>
            <h2 className="text-3xl font-bold lg:text-4xl">{project.name}</h2>
          </Link>
          <p className="text-zinc-300">{project.info}</p>
        </div>

        <div className="flex w-fit flex-wrap gap-2 rounded-lg bg-neutral-700 px-2 py-1">
          {project.technologies.map(technology => (
            <Technology
              key={technology}
              technology={getTechnologyDetails(technology)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
