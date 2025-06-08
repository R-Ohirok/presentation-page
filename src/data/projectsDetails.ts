import { projectsDetailsType } from '@/types/projectsDetailsType';

export const projectsDetails: projectsDetailsType[] = [
  {
    slug: 'niceGadgets',
    images: [
      '/projectsImg/niceGadgets/main.png',
      '/projectsImg/niceGadgets/phoneCatalog.png',
      '/projectsImg/niceGadgets/accessoriesCatalog.png',
      '/projectsImg/niceGadgets/productDetails.png',
      '/projectsImg/niceGadgets/favourites.png',
      '/projectsImg/niceGadgets/cart.png',
    ],
    name: 'Nice Gadgets',
    info: 'A modern web-site for selling gadgets built with React + TypeScript, following the Atomic Design methodology.',
    technologies: [
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Redux Toolkit',
      'React Router',
      'Fetch',
      'REST API',
      'Radix UI',
      'Swiper',
      'Git',
      'Vite',
      'ESLint',
      'Prettier',
    ],
    description: [
      {
        title: 'Project Overview',
        text: [
          'This is a modern e-commerce application built with a focus on component reusability and scalability.',
          'The project features a clean user interface, dynamic product pages, persistent favorites and cart functionality, and interactive UI elements.',
          'The app follows Atomic Design, breaking components down into atoms, molecules, organisms, templates, and pages — which promotes consistency and scalability.',
        ],
      },
      {
        title: 'Navigation & UI',
        text: [
          'Sticky header with logo, category links, cart, and favorites.',
          'Smooth scroll-to-top button.',
          'All hover effects are smoothly animated.',
          'Product images scale up on hover for better interactivity.',
          'Custom 404 page (NotFoundPage) for invalid routes.',
        ],
      },
      {
        title: 'Home Page Features',
        text: [
          'Contains a responsive image slider that autoplays every 5 seconds.',
          'Hot Prices section highlights products with the highest discounts.',
          'Brand New section showcases new arrivals without discounts, sorted by price.',
          'Shop by Category section lets users navigate directly to Phones, Tablets, or Accessories.',
        ],
      },
      {
        title: 'Catalog Pages',
        text: [
          'Includes three main product categories: Phones, Tablets, and Accessories, each accessible via dedicated routes (/phones, /tablets, /accessories).',
        ],
      },
      {
        title: 'Product Details Page',
        text: [
          'Dynamic route: /product/:productId.',
          'Features a product gallery, detailed description, and selected tech specs.',
          'Includes a “You may also like” section showing random related items.',
          '“Back” button simulates browser navigation.',
          'Displays a "Product not found" message for invalid product IDs.',
        ],
      },
      {
        title: 'Favorites',
        text: [
          'Users can add or remove products from their favorites using a heart icon.',
          'Favorites are persisted in localStorage, and the total count is shown in the sticky header.',
        ],
      },
      {
        title: 'Shopping Cart',
        text: [
          'Items can be added from either the product card or detailed product view.',
          'Users can modify quantities or remove products entirely.',
          'The cart is saved to localStorage, and totals are automatically calculated (price × quantity).',
        ],
      },
    ],
    gitHub: 'https://github.com/div-ine-Coders/product_catalog',
    demoLink: 'https://produtcatalog.netlify.app/#/',
  },
  {
    slug: 'myBike',
    images: [
      '/projectsImg/myBike/main.png',
      '/projectsImg/myBike/compareBikes.png',
      '/projectsImg/myBike/details.png',
      '/projectsImg/myBike/contacts.png',
    ],
    name: 'My Bike',
    info: 'А landing page specialising in the sale of bicycles. It was developed using HTML and CSS technologies.',
    technologies: ['HTML5', 'CSS3', 'SCSS', 'BEM', 'Git', 'ESLint', 'Prettier'],
    description: [
      {
        title: 'Project Overview',
        text: [
          'This is a responsive landing page for the MyBike brand, which specializes in selling high-quality bicycles.',
          'The website was developed using semantic HTML and modular SCSS, following the BEM methodology for better scalability and maintainability.',
          'The layout strictly follows the Figma design, ensuring visual consistency across devices and screen sizes.',
        ],
      },
      {
        title: 'Navigation & UI',
        text: [
          'Responsive hamburger menu for tablets and mobile devices.',
          'Sticky header with logo and navigation links to Home, About Us, Compare Bikes, Details, and Contacts.',
          'All hover states (buttons, images, links) include smooth transition effects for better UX.',
          'Modal navigation menu overlays the screen on smaller viewports.',
        ],
      },
      {
        title: 'Home Page Features',
        text: [
          'Hero section with a large product image and CTA headline ("Take the Streets").',
          'Introductory “Move Free” section explaining the benefits of the bikes.',
          '“Compare Bikes” section displaying multiple models with pricing and visual comparison.',
          '“The Details” section showcases key features such as Auto Unlock, Range & Integrated System, and Hydraulic Disc Brakes using images and descriptions.',
          'Contact form with styled inputs for name, email, and message, allowing users to get in touch.',
        ],
      },
      {
        title: 'Responsiveness',
        text: [
          'Fully responsive layout adapted for desktop (1260px), tablet (744px), and mobile (375px) breakpoints.',
          'Grid and flex layouts adapt content to smaller screens without losing structure or readability.',
          'Images and text blocks stack vertically on smaller viewports to ensure accessibility and readability.',
        ],
      },
      {
        title: 'Development Methodology',
        text: [
          'Structured using BEM (Block Element Modifier) naming convention for CSS classes.',
          'SCSS (SASS) used to organize and modularize styles via partials and nesting.',
        ],
      },
    ],
    gitHub: 'https://github.com/R-Ohirok/my-bike_landing',
    demoLink: 'https://r-ohirok.github.io/my-bike_landing/',
  },
  {
    slug: 'toDo',
    images: [
      '/projectsImg/toDo/main.png',
      '/projectsImg/toDo/listToDo.png',
      '/projectsImg/toDo/activeTodos.png',
      '/projectsImg/toDo/completedTodos.png',
    ],
    name: 'toDo app',
    info: 'A full-featured Todo application using the REST API created with React.',
    technologies: [
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Fetch',
      'REST API',
      'Bulma',
      'Git',
      'Vite',
      'ESLint',
      'Prettier',
    ],
    description: [
      {
        title: 'Project Overview',
        text: [
          'This is a full-featured Todo application that integrates with an external API and provides real-time UI feedback.',
          'The app supports creating, updating, editing, deleting, and filtering todos with a focus on user experience and responsive design.',
          'Robust error handling and optimistic UI updates ensure smooth interactions and reliable state management.',
        ],
      },
      {
        title: 'Adding Todos',
        text: [
          'Users can add new todos using a form with an input field that auto-focuses.',
          'A trimmed version of the title is sent to the API upon submission.',
          'A temporary todo with a loading state appears immediately, ensuring instant feedback.',
          'On success, the todo is added to the list and the input field is cleared and re-focused.',
          'On failure, the todo is not added, and a persistent error notification is shown.',
          'Empty submissions are prevented with a warning notification: "Title should not be empty".',
        ],
      },
      {
        title: 'Todo Filtering',
        text: [
          'Todos can be filtered by status: All (default), Active, and Completed.',
          'The current filter is visually indicated using a selected class for clear UX feedback.',
          'Filters dynamically update the visible todos without requiring page reloads.',
        ],
      },
      {
        title: 'Deleting Todos',
        text: [
          'Users can delete individual todos with real-time loading indicators.',
          'Upon success, the todo is removed from the list.',
          'Failures display a notification: "Unable to delete a todo".',
          'Completed todos can be deleted in bulk via the "Clear completed" button.',
          'Each deletion is handled in parallel, allowing partial success and targeted error messages.',
        ],
      },
      {
        title: 'Toggling Todo Status',
        text: [
          'Each todo item includes a checkbox to toggle its completed status.',
          'UI shows a loading overlay during the API update process.',
          'Changes are only confirmed after a successful API response.',
          'Failures revert the UI and trigger an error notification: "Unable to update a todo".',
          'A global toggleAll checkbox allows bulk status changes across all todos.',
          'Only todos needing updates are sent to the API, ensuring performance and responsiveness.',
        ],
      },
      {
        title: 'Editing Todos',
        text: [
          'Double-clicking a todo opens an inline input for editing the title.',
          'Changes are saved on Enter or when the input loses focus (onBlur).',
          'Pressing Escape or submitting an unchanged title cancels the edit.',
          'Submitting an empty title deletes the todo.',
          'Edits show a loading indicator while communicating with the API.',
        ],
      },
      {
        title: 'Error Notifications',
        text: [
          'All API failures trigger real-time error notifications at the bottom of the screen.',
          'Notifications are automatically dismissed after 3 seconds or manually via a close button.',
          'Before any new request is sent, existing error notifications are cleared.',
          'This system ensures users receive clear feedback without being overwhelmed.',
        ],
      },
    ],
    gitHub: 'https://github.com/R-Ohirok/todo-app',
    demoLink: 'https://todoapp-roman.netlify.app/',
  },
  {
    slug: 'presentationPage',
    images: [
      '/projectsImg/presentationPage/main.png',
      '/projectsImg/presentationPage/projects.png',
      '/projectsImg/presentationPage/projectDetails.png',
      '/projectsImg/presentationPage/contacts.png',
    ],
    name: 'Presentation Page',
    info: 'A personal portfolio website of a frontend developer, created to showcase skills, experience, and completed projects.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Next',
      'Tailwind',
      'Swiper',
      'Git',
      'Prettier',
    ],
    description: [
      {
        title: 'Project Overview',
        text: [
          'This is a personal portfolio website of a frontend developer designed to showcase skills, experience, and completed projects.',
          'The site is structured using reusable components and follows responsive design principles.',
          'It includes separate pages for the homepage, projects, project details, and contacts.',
        ],
      },
      {
        title: 'Navigation & UI',
        text: [
          'Sticky navigation bar with active link highlighting.',
          'Smooth scrolling across sections.',
          'All buttons and interactive elements feature hover animations.',
        ],
      },
      {
        title: 'Home Page Features',
        text: [
          'Profile section with photo, title, and downloadable CV link.',
          '“About Me” section describes background, skills, and technologies used.',
          'Showcase of technologies in a styled tag-like layout.',
          'Contains information about the last completed project.',
        ],
      },
      {
        title: 'Projects Page',
        text: [
          'Displays a list of completed projects with preview cards.',
          'Each card links to a detailed project view.',
        ],
      },
      {
        title: 'Project Details Page',
        text: [
          'Route format: /projects/:projectId.',
          'Contains extended information about the selected project.',
          'Includes technologies used, key features, and links (e.g. GitHub, live demo).',
        ],
      },
      {
        title: 'Contacts Page',
        text: [
          'Features a contact form with fields for name, email, and message.',
          'Includes links to social media (e.g. Telegram, LinkedIn, GitHub).',
        ],
      },
    ],
    gitHub: 'https://github.com/R-Ohirok/presentation-page',
    demoLink: 'https://presentation-page-roman-ohirok.netlify.app/',
  },
];
