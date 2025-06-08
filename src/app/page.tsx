import Technology from '@/components/atoms/Technology';
import ProjectCard from '@/components/molecules/ProjectCard';
import { projects } from '@/data/projects';
import { TechnologyType } from '@/types/TechnologyType';
import { getTechnologyDetails } from '@/utils/getTechnologyDetails';
import { Download } from 'lucide-react';

const technologies: TechnologyType[] = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next',
  'Redux Toolkit',
  'React Router',
  'Fetch',
  'REST API',
  'BEM',
  'SCSS',
  'Tailwind',
  'Bulma',
  'Radix UI',
  'Swiper',
  'Git',
  'Vite',
  'ESLint',
  'Prettier',
];

export default function Home() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-y-4 p-3 md:gap-y-6 md:p-6 lg:gap-y-8">
      <div className="flex items-center rounded-lg bg-stone-800 p-2">
        <div className="aspect-square w-[25%] overflow-hidden rounded-full border-2 border-white md:border-3 lg:border-4">
          <img
            src="/me.jpg"
            alt="Roman Ohirok"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="ml-4 md:ml-8">
          <h1 className="text-2xl font-bold tracking-wide uppercase md:text-4xl lg:text-5xl">
            Roman Ohirok
          </h1>
          <h2 className="mt-2 mb-1 text-xl text-gray-300 md:mb-2 md:text-3xl lg:text-4xl">
            Frontend developer
          </h2>
          <a
            href="/files/CV-Roman_Ohirok-FE_developer.pdf"
            download
            className="flex items-center gap-2 text-gray-300 transition duration-300 hover:text-blue-500"
          >
            <Download />
            <p>Download CV</p>
          </a>
        </div>
      </div>

      <section className="flex flex-col gap-4 rounded-lg bg-stone-800 p-2">
        <div>
          <h2 className="text-xl font-bold md:text-3xl lg:text-4xl">
            About me
          </h2>
          <hr className="mt-2 w-[100%] border-t-2 border-gray-500 md:mb-2" />
        </div>
        <p>
          I'm a <strong>Frontend Developer</strong> developer with a deep
          knowledge of modern web technologies, including <strong>React</strong>
          , <strong>JavaScript</strong>, <strong>HTML</strong>,{' '}
          <strong>CSS</strong>, <strong>Redux Toolkit</strong> and many other.
          My expertise lies in creating dynamic, responsive user interfaces and
          delivering clean, maintainable code.
        </p>
        <p>
          I have a <b>bachelor's degree in computer engineering</b>, which has
          provided me with a deep understanding of how computers work - from
          hardware fundamentals to high-level programming concepts. This
          experience helps me write optimised, efficient code and better
          understand system-level behaviour.
        </p>
        <div>
          In my recent work, I have focused on:
          <ul className="list-inside list-disc space-y-2">
            <li>Building web interfaces based on pre-built designs.</li>
            <li>
              Using React hooks like useState and useEffect to manage component
              state and lifecycle.
            </li>
            <li>
              Implement conditional rendering and memoisation to improve
              performance.
            </li>
            <li>
              Using RESTful API and working with URL parameters with React
              Router.
            </li>
            <li>
              Integrating third-party libraries such as Bulma and Radix UI to
              speed up development.
            </li>
          </ul>
        </div>
        <p>
          I'm committed to continuous learning and regularly explore new
          frameworks, tools, and programming technologies to stay up-to-date
          with the ever-evolving front-end. Apart from writing code, I enjoy
          contributing to the visual and interactive side of web applications,
          ensuring a seamless user experience.
        </p>
        <p>
          I believe that great software is created not only through skill, but
          also through curiosity, clarity, and collaboration between different
          specialists.
        </p>
        <p>
          <b className="text-lg">An interesting fact about me: </b>
          <span className="cursor-pointer blur-xs transition duration-300 hover:blur-none">
            since childhood, I have wanted to connect my life with computer
            technology and work in the IT sphere, and right now I am one step
            away from realising this dream.
          </span>
        </p>
      </section>

      <section className="flex flex-col gap-4 rounded-lg bg-stone-800 p-2">
        <div>
          <h2 className="text-xl font-bold md:text-3xl lg:text-4xl">
            Technologies that I used
          </h2>
          <hr className="mt-2 w-[100%] border-t-2 border-gray-500 md:mb-2" />
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map(technology => (
            <Technology
              key={technology}
              technology={getTechnologyDetails(technology)}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-lg bg-stone-800 p-2">
        <div>
          <h2 className="text-xl font-bold md:text-3xl lg:text-4xl">
            Additional information
          </h2>
          <hr className="mt-2 w-[100%] border-t-2 border-gray-500 md:mb-2" />
        </div>
        <div>
          <h3 className="text-lg font-bold md:text-xl lg:text-2xl">
            Language skills:
          </h3>
          <ul className="list-inside list-disc space-y-2">
            <li className="ml-2">English: Intermediate</li>
            <li className="ml-2">Ukrainian: Fruent</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold md:text-xl lg:text-2xl">
            Education:
          </h3>
          <p className="mb-1 ml-7">
            <b>Bachelor’s degree in Computer Engineering</b>{' '}
          </p>
          <p className="ml-7 text-sm text-gray-300">
            Vinnytsia National Technical University (2020-2024)
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-lg bg-stone-800 p-2">
        <div>
          <h2 className="text-xl font-bold md:text-3xl lg:text-4xl">
            Latest project
          </h2>
          <hr className="mt-2 w-[100%] border-t-2 border-gray-500 md:mb-2" />
        </div>
        <div className="m-auto">
          <ProjectCard key={projects[0].name} project={projects[0]} />
        </div>
      </section>
    </div>
  );
}
