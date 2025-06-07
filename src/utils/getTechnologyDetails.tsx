import { TechnologyDetailsType } from '@/types/TechnologyDetailsType';

export const getTechnologyDetails = (
  techName: string,
): TechnologyDetailsType => {
  const normalized = techName
    .trim()
    .toLowerCase()
    .replace(/\s|[-()]/g, '');

  const techMap: Record<string, TechnologyDetailsType> = {
    javascript: {
      name: 'JavaScript',
      description: 'Adds interactivity and dynamic behavior to websites',
    },
    typescript: {
      name: 'TypeScript',
      description:
        'Provides static typing to JavaScript for safer and scalable code',
    },
    react: {
      name: 'React',
      description: 'Builds dynamic user interfaces using components',
    },
    reduxtoolkit: {
      name: 'Redux Toolkit',
      description: 'Manages application state efficiently in React apps',
    },
    html5: {
      name: 'HTML5',
      description: 'Defines the structure and content of modern web pages',
    },
    css3: {
      name: 'CSS3',
      description:
        'Styles web content with modern layout and animation features',
    },
    scss: {
      name: 'SCSS',
      description: 'Extends CSS with variables, nesting, and functions',
    },
    bem: {
      name: 'BEM',
      description: 'Provides a naming convention for writing maintainable CSS',
    },
    reactrouter: {
      name: 'React Router',
      description:
        'Used for building multi-page applications and handling client-side routing',
    },
    fetch: {
      name: 'Fetch',
      description: 'Performs HTTP requests to communicate with APIs',
    },
    restapi: {
      name: 'REST API',
      description:
        'Defines standards for building and interacting with web services',
    },
    git: {
      name: 'Git',
      description: 'Tracks changes in source code during development',
    },
    vite: {
      name: 'Vite',
      description: 'Builds and serves modern frontend projects fast',
    },
    eslint: {
      name: 'ESLint',
      description:
        'Lints JavaScript/TypeScript code to ensure quality and consistency',
    },
    prettier: {
      name: 'Prettier',
      description: 'Formats code automatically for consistent style',
    },
    next: {
      name: 'Next.js',
      description:
        'React framework for server-side rendering and static site generation',
    },
    tailwind: {
      name: 'Tailwind',
      description: 'Utility-first CSS framework for rapid UI development',
    },
    bulma: {
      name: 'Bulma',
      description: 'Modern CSS framework based on Flexbox',
    },
    radixui: {
      name: 'Radix UI',
      description:
        'Unstyled accessible UI primitives for building design systems',
    },
    swiper: {
      name: 'Swiper',
      description: 'Library for modern mobile touch sliders and carousels',
    },
  };

  return techMap[normalized];
};
