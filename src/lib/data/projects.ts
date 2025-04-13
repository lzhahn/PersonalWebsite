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
    title: 'AWS Skillbuilder Checkout Modernization',
    description: 'Designed and implemented a full-stack checkout system using AWS Lambdas and AppSync GraphQL that reduced barriers to purchase, leading to a 325% month-over-month gain in purchases.',
    imageSrc: '/images/projects/checkout-system.jpg',
    tags: ['AWS Lambda', 'AppSync', 'GraphQL', 'TypeScript', 'DynamoDB']
  },
  {
    id: 'project-2',
    title: 'AWS Cloud Institute',
    description: 'Developed a platform enabling students to purchase educational packages for premium courses. Created three purchasing tiers that boosted quarterly revenue by over $250,000.',
    imageSrc: '/images/projects/cloud-institute.jpg',
    tags: ['AWS', 'TypeScript', 'React', 'CloudWatch', 'CloudTrail']
  },
  {
    id: 'project-3',
    title: 'Woot Modernization',
    description: 'Integrated lightweight GraphQL Supergraph infrastructure into an existing monolithic ecosystem, migrating 10,000s of active users with no downtime to Serverless Lambda Infrastructure.',
    imageSrc: '/images/projects/woot-modernization.jpg',
    tags: ['GraphQL', 'AWS Lambda', 'TypeScript', 'Serverless']
  },
  {
    id: 'project-4',
    title: 'Internal Admin Training Management',
    description: 'Developed a front-end application to facilitate and oversee individual course registrations. Integrated six API endpoints to streamline the assignment of unique training sessions.',
    imageSrc: '/images/projects/training-management.jpg',
    tags: ['React', 'TypeScript', 'API Integration', 'AWS']
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
