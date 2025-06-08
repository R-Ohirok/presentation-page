import Technology from '@/components/atoms/Technology';
import { getTechnologyDetails } from '@/utils/getTechnologyDetails';
import { getProjectBySlug } from '@/utils/getProjectDetails';
import ProductImageSlider from '@/components/molecules/projectImagesSlider';
import Link from 'next/link';

type Params = Promise<{ slug: string }>;

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  return (
    <div className="mx-auto max-w-5xl p-3 md:p-6">
      {project ? (
        <div className="flex flex-col gap-y-4 rounded-lg bg-stone-800 p-4 md:gap-y-6 md:p-6 lg:gap-y-8 lg:p-8">
          <h1 className="mb-2 text-5xl font-bold md:mb-4 lg:mb-6 lg:text-6xl">
            {project.name}
          </h1>

          <ProductImageSlider images={project.images} />

          <p className="text-lg lg:text-2xl">{project.info}</p>

          <section className="flex flex-col gap-y-1 md:gap-y-2 lg:gap-y-4">
            <div>
              <h2 className="text-xl font-bold md:text-3xl lg:text-4xl">
                About
              </h2>
              <hr className="mt-2 w-[100%] border-t-2 border-gray-500 md:mb-2" />
            </div>

            {project.description.map(section => (
              <div key={section.title} className="mb-1 md:mb-2 lg:mb-4">
                <h4 className="mb-1 text-lg font-bold underline md:mb-2 md:text-xl">
                  {section.title}
                </h4>

                <ul className="list-none space-y-2">
                  {section.text.map(paragraph => (
                    <li key={paragraph} className="text-gray-400">
                      {paragraph}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="flex flex-col gap-y-2 md:gap-y-3 lg:gap-y-4">
            <div>
              <h2 className="text-xl font-bold md:text-3xl lg:text-4xl">
                Technologies used
              </h2>
              <hr className="mt-2 w-[100%] border-t-2 border-gray-500 md:mb-2" />
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map(technology => (
                <Technology
                  key={technology}
                  technology={getTechnologyDetails(technology)}
                />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-y-1 md:gap-y-2 lg:gap-y-4">
            <div>
              <h2 className="text-xl font-bold md:text-3xl lg:text-4xl">
                Links
              </h2>
              <hr className="mt-2 w-[100%] border-t-2 border-gray-500 md:mb-2" />
            </div>
            <div className="flex gap-2 md:gap-4 lg:gap-6">
              <Link
                href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-300 after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full md:text-lg lg:text-xl"
              >
                GitHub
              </Link>

              <Link
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-300 after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full md:text-lg lg:text-xl"
              >
                Demo
              </Link>
            </div>
          </section>
        </div>
      ) : (
        <div>project not found</div>
      )}
    </div>
  );
}
