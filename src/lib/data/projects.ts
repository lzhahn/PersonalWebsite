export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  link?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Personal Website',
    description: 'A responsive personal website built with Next.js and Tailwind CSS to showcase my work and experience.',
    imageSrc: '/images/projects/personal-website.jpg',
    link: 'https://github.com/yourusername/personal-website',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 'project-2',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with product management, cart functionality, and payment processing.',
    imageSrc: '/images/projects/ecommerce.jpg',
    link: 'https://github.com/yourusername/ecommerce',
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 'project-3',
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and deadlines with team collaboration features.',
    imageSrc: '/images/projects/task-app.jpg',
    link: 'https://github.com/yourusername/task-app',
    tags: ['Vue.js', 'Firebase', 'Vuetify']
  },
  {
    id: 'project-4',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current conditions and forecasts for multiple locations.',
    imageSrc: '/images/projects/weather-app.jpg',
    link: 'https://github.com/yourusername/weather-dashboard',
    tags: ['JavaScript', 'API Integration', 'CSS3']
  }
];

// Function to get all projects
export function getAllProjects(): Project[] {
  return projects;
}

// Function to get a project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
