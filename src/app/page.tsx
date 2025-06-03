import Technology from '@/components/atoms/Technology';
import ProjectCard from '@/components/molecules/ProjectCard';
import { ProjectType } from '@/types/ProjectType';
import { TechnologyType } from '@/types/TechnologyType';
import { getTechnologyDetails } from '@/utils/getTechnologyDetails';

const technologies: TechnologyType[] = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next',
  'Redux Toolkit',
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

const project: ProjectType = {
  slug: 'phoneCatalog',
  image: '/main.png',
  name: 'Phone Catalog',
  info: 'А website specialising in the sale of gadgets. Various technologies were used, among which the main ones were React and Redux toolkit. The Atomic Design methodology was used. The ability to communicate with the server using the RESTful API and save data to local storage was implemented. The website is adapted for use on devices with different resolutions.',
  technologies: [
    {
      name: 'HTML',
      description: 'Defines the structure and content of web pages',
    },
    { name: 'CSS', description: 'Styles the appearance of web pages' },
    {
      name: 'JS',
      description: 'Adds interactivity and dynamic behavior to websites',
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 p-3 md:p-6 max-w-5xl mx-auto">
      <div className="flex items-center bg-stone-800 rounded-lg p-2">
        <div className="w-[25%] aspect-square rounded-full overflow-hidden border-2 md:border-3 lg:border-4 border-white">
          <img
            src="/me.jpg"
            alt="Roman Ohirok"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="ml-4 md:ml-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
            Roman Ohirok
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl text-gray-300 mt-2">
            Frontend developer
          </h2>
        </div>
      </div>

      <section className="flex flex-col gap-4 bg-stone-800 rounded-lg p-2">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
            About me
          </h2>
          <hr className="mt-2 border-t-2 border-gray-500 w-[100%] md:mb-2" />
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
          <ul className="list-disc list-inside space-y-2">
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
          <span className="blur-xs hover:blur-none transition duration-300 cursor-pointer">
            since childhood, I have wanted to connect my life with computer
            technology and work in the IT sphere, and right now I am one step
            away from realising this dream.
          </span>
        </p>
      </section>

      <section className="flex flex-col gap-4 bg-stone-800 rounded-lg p-2">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Technologies that I used
          </h2>
          <hr className="mt-2 border-t-2 border-gray-500 w-[100%] md:mb-2" />
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

      <section className="flex flex-col gap-4 bg-stone-800 rounded-lg p-2">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Additional information
          </h2>
          <hr className="mt-2 border-t-2 border-gray-500 w-[100%] md:mb-2" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            Language skills:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="ml-2">English: Intermediate</li>
            <li className="ml-2">Ukrainian: Fruent</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            Education:
          </h3>
          <p className="ml-7 mb-1">
            <b>Bachelor’s degree in Computer Engineering</b>{' '}
          </p>
          <p className="ml-7 text-sm text-gray-300">
            Vinnytsia National Technical University (2020-2024)
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-4 bg-stone-800 rounded-lg p-2">
        <div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Latest project
          </h2>
          <hr className="mt-2 border-t-2 border-gray-500 w-[100%] md:mb-2" />
        </div>
        <div className="m-auto">
          <ProjectCard key={project.name} project={project} />
        </div>
      </section>
    </div>
  );
}
