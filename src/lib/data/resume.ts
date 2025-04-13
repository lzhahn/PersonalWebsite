export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null; // null means "Present"
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Software Engineer II',
    company: 'AWS, Amazon',
    location: 'Seattle, WA',
    startDate: '2023-01',
    endDate: null,
    description: [
      'Developed a front-end application to facilitate and oversee individual course registrations',
      'Designed a Full-Stack Checkout system using AWS Lambdas and AppSync GraphQL',
      'Reduced barriers to purchase leading to a 325% month over month gain in purchases',
      'Developed a platform where students can buy educational packages to enroll in premium courses',
      'Created three purchasing tiers that boosted quarterly revenue by over $250,000',
      'Integrated six API endpoints to streamline the assignment of unique training sessions'
    ]
  },
  {
    id: 'exp-2',
    title: 'Software Engineer',
    company: 'AWS, Amazon',
    location: 'Seattle, WA',
    startDate: '2023-04',
    endDate: '2023-01',
    description: [
      'Delivered over 500+ digital AWS trainings to upscale our customers\' knowledge',
      'Established API contracts, enabling efficient processing of thousands of data points per second',
      'Trained three engineers to quickly onboard onto feature work within EC2 enabled services',
      'Collaborated with Quality Assurance to define detailed acceptance tests with verification steps',
      'Designed a detailed multi-step launch strategy to deploy eight back end and four front end services'
    ]
  },
  {
    id: 'exp-3',
    title: 'Software Engineer',
    company: 'Woot Inc., Amazon',
    location: 'Seattle, WA',
    startDate: '2021-07',
    endDate: '2023-04',
    description: [
      'Integrated lightweight GraphQL Supergraph infrastructure into an existing monolithic ecosystem',
      'Migrated 10,000s of active users with no downtime to Serverless Lambda Infrastructure',
      'Reduced latency of customer experience by 60% leveraging serverless infrastructure',
      'Designed monitoring dashboards to reduce average issue time to resolution by 50%',
      'Facilitated communication between teams to shift from .NET EC2 instances to Typescript Lambdas'
    ]
  },
  {
    id: 'exp-4',
    title: 'Lead Organizer/Treasurer',
    company: 'Launchpad Mentorship Program',
    location: 'West Lafayette, IN',
    startDate: '2020-07',
    endDate: '2021-05',
    description: [
      'Scheduled large-scale meetings with experts and mentees to align on growth goals and mentorship fit',
      'Conducted in-depth candidate interviews for mentorship roles',
      'Monitored 30+ mentor-mentee relationships to drive progress in mentee-led projects',
      'Established a sponsor network to fund mentee projects through cloud credit allocations'
    ]
  }
];

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'B.S. in Computer Science',
    institution: 'Purdue University',
    location: 'West Lafayette, IN',
    startDate: '2017-09',
    endDate: '2021-05',
    description: 'Focused on software engineering and system design.'
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'C#', 'SQL', 'HTML', 'CSS', 'GraphQL', 'Bash']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js', 'Django', 'AWS AppSync']
  },
  {
    category: 'AWS Services',
    items: ['Lambda', 'API Gateway', 'CloudFront', 'Bedrock', 'DynamoDB', 'CloudWatch', 'EC2']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'DynamoDB']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'AWS', 'Ollama', 'Node']
  },
  {
    category: 'Languages',
    items: ['English (Fluent)', 'Mandarin Chinese (Intermediate)']
  }
];

// Functions to get resume data
export function getAllExperiences(): Experience[] {
  return experiences;
}

export function getAllEducation(): Education[] {
  return education;
}

export function getAllSkills(): Skill[] {
  return skills;
}
