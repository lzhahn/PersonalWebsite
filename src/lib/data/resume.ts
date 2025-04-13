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
    title: 'Senior Software Engineer',
    company: 'Tech Company',
    location: 'San Francisco, CA',
    startDate: '2021-06',
    endDate: null,
    description: [
      'Led development of key features for the company\'s flagship product',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines that reduced deployment time by 40%'
    ]
  },
  {
    id: 'exp-2',
    title: 'Software Engineer',
    company: 'Startup Inc.',
    location: 'San Francisco, CA',
    startDate: '2018-03',
    endDate: '2021-05',
    description: [
      'Developed and maintained web applications using React and Node.js',
      'Collaborated with product managers to define and implement new features',
      'Optimized database queries resulting in 30% performance improvement'
    ]
  },
  {
    id: 'exp-3',
    title: 'Junior Developer',
    company: 'Small Agency',
    location: 'San Francisco, CA',
    startDate: '2016-09',
    endDate: '2018-02',
    description: [
      'Built responsive websites for various clients',
      'Implemented front-end designs using HTML, CSS, and JavaScript',
      'Participated in client meetings and requirement gathering'
    ]
  }
];

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California',
    location: 'Berkeley, CA',
    startDate: '2012-09',
    endDate: '2016-05',
    description: 'Graduated with honors. Focused on software engineering and web development.'
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'Redux']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Netlify']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
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
