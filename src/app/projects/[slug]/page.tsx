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
    <div className="p-3 md:p-6 max-w-5xl mx-auto">
      {project ? (
        <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 bg-stone-800 rounded-lg p-4 md:p-6 lg:p-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-2 md:mb-4 lg:mb-6">
            {project.name}
          </h1>

          <ProductImageSlider images={project.images} />

          <p className="text-lg lg:text-2xl">{project.info}</p>

          <section className="flex flex-col gap-y-1 md:gap-y-2 lg:gap-y-4">
            <div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
                About
              </h2>
              <hr className="mt-2 border-t-2 border-gray-500 w-[100%] md:mb-2" />
            </div>

            {project.description.map(section => (
              <div key={section.title} className="mb-1 md:mb-2 lg:mb-4">
                <h4 className="text-lg md:text-xl underline font-bold mb-1 md:mb-2">
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
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
                Technologies used
              </h2>
              <hr className="mt-2 border-t-2 border-gray-500 w-[100%] md:mb-2" />
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
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
                Links
              </h2>
              <hr className="mt-2 border-t-2 border-gray-500 w-[100%] md:mb-2" />
            </div>
            <div className="flex gap-2 md:gap-4 lg:gap-6">
              <Link
                href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="relative md:text-lg lg:text-xl text-gray-300 after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                GitHub
              </Link>

              <Link
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative md:text-lg lg:text-xl text-gray-300 after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
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
