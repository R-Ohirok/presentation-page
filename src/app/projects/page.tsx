import ProjectCard from '@/components/molecules/ProjectCard';

const projects = [
  {
    slug: 'phoneCatalog',
    image: '/main.png',
    name: 'Phone Catalog',
    info: 'А website specialising in the sale of gadgets. Various technologies were used, among which the main ones were React and Redux toolkit. The Atomic Design methodology was used. The ability to communicate with the server using the RESTful API and save data to local storage was implemented. The website is adapted for use on devices with different resolutions.',
    technologies: [
      { name: 'HTML', description: 'for site structure' },
      { name: 'CSS', description: 'for site design' },
      { name: 'JS', description: 'for user interaction' },
    ],
  },
  {
    slug: 'phoneCatalog',
    image: '/main.png',
    name: 'Phone Catalog',
    info: 'А website specialising in the sale of gadgets. Various technologies were used, among which the main ones were React and Redux toolkit. The Atomic Design methodology was used. The ability to communicate with the server using the RESTful API and save data to local storage was implemented. The website is adapted for use on devices with different resolutions.',
    technologies: [
      { name: 'HTML', description: 'for site structure' },
      { name: 'CSS', description: 'for site design' },
      { name: 'JS', description: 'for user interaction' },
    ],
  },
  {
    slug: 'phoneCatalog',
    image: '/main.png',
    name: 'Phone Catalog',
    info: 'А website specialising in the sale of gadgets. Various technologies were used, among which the main ones were React and Redux toolkit. The Atomic Design methodology was used. The ability to communicate with the server using the RESTful API and save data to local storage was implemented. The website is adapted for use on devices with different resolutions.',
    technologies: [
      { name: 'HTML', description: 'for site structure' },
      { name: 'CSS', description: 'for site design' },
      { name: 'JS', description: 'for user interaction' },
    ],
  },
  {
    slug: 'phoneCatalog',
    image: '/main.png',
    name: 'Phone Catalog',
    info: 'А website specialising in the sale of gadgets. Various technologies were used, among which the main ones were React and Redux toolkit. The Atomic Design methodology was used. The ability to communicate with the server using the RESTful API and save data to local storage was implemented. The website is adapted for use on devices with different resolutions.',
    technologies: [
      { name: 'HTML', description: 'for site structure' },
      { name: 'CSS', description: 'for site design' },
      { name: 'JS', description: 'for user interaction' },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <h1 className="text-5xl lg:text-6xl font-bold mb-10">My projects</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
