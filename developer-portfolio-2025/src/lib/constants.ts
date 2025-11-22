import { Project, TechStack, SocialLink } from '@/types'; 
import { useTranslation } from 'react-i18next';

// Personal Information - CUSTOMIZE THIS!
export const PERSONAL_INFO = {
  
  name: 'personal-info.name',
  role: 'personal-info.role',
  tagline: 'personal-info.tagline',
  bio: 'personal-info.bio',
  email:'personal-info.email',
  location: 'personal-info.location',
  availability: 'personal-info.availability',
};

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/EneaFro',
    icon: 'Github',
  },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/enea-frontera-b97048268',
    icon: 'Linkedin',
  },
  {
    platform: 'email',
    url: 'mailto:enea.alice.it@gmail.com',
    icon: 'Mail',
  },
];

// Tech Stack - Organized by category
export const TECH_STACK: TechStack[] = [
  {
    category: 'Programming',
    technologies: [
      { name: 'C#', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'JavaScript', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'Python', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'Java', proficiency: 'intermediate', yearsOfExperience: 2 },
      { name: 'C', proficiency: 'intermediate', yearsOfExperience: 3 },
      { name: 'TypeScript', proficiency: 'intermediate', yearsOfExperience: 0.5 },
      { name: 'AL', proficiency: 'intermediate', yearsOfExperience: 1 },
    ],
  },
  {
    category: 'Web Development',
    technologies: [
      { name: 'HTML/CSS', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'Node.js', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'Next.js', proficiency: 'advanced', yearsOfExperience: 0.5 },
      { name: 'TailwindCSS', proficiency: 'advanced', yearsOfExperience: 0.5 },
      { name: 'ASP.NET', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'Bootstrap', proficiency: 'intermediate', yearsOfExperience: 1 },
      
    ],
  },
  {
    category: 'Database',
    technologies: [
      { name: 'MySQL', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'SQLite', proficiency: 'intermediate', yearsOfExperience: 2 },
    ],
  },
  {
    category: 'Cloud & Enterprise',
    technologies: [
      { name: 'Business Central/AL', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'Azure', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'API', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'Dynamics NAV', proficiency: 'intermediate', yearsOfExperience: 1 },
    ],
  },
  {
    category: 'IoT & Electronics',
    technologies: [
      { name: 'Arduino', proficiency: 'advanced', yearsOfExperience: 4 },
      { name: 'KiCad (PCB Design)', proficiency: 'intermediate', yearsOfExperience: 3 },
      { name: 'LabVIEW', proficiency: 'intermediate', yearsOfExperience: 2 },
    ],
  },
  {
    category: 'Tools & Methodologies',
    technologies: [
      { name: 'Git/GitHub', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'UML', proficiency: 'intermediate', yearsOfExperience: 2 },
      { name: 'Vibe Coding', proficiency: 'intermediate', yearsOfExperience: 0.5 },
      { name: 'DevOps', proficiency: 'intermediate', yearsOfExperience: 1 },
    ],
  },
];

// Featured Projects - CUSTOMIZE THESE!
export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'bc-ticket-management',
    title: 'home.projects.ticketManagement.title',
    description: 'home.projects.ticketManagement.description',
    longDescription: 'home.projects.ticketManagement.description',
    category: 'fullstack',
    tags: [
      'Business Central',
      'Freshdesk',
      'Azure Functions',
      'AL',
      'C#',
      'PowerPoint (demo)'
    ],
    highlights: [
      'home.projects.ticketManagement.highlight1',
      'home.projects.ticketManagement.highlight2'
    ],
    githubUrl: '',
    demoUrl: '/presentations/ticket-management/Frontera Enea Presentazione Laurea.pptx',
    featured: true,
    year: 2024,
    imageUrl: '/images/projects/bc-ticket-management.png',
  },
  {
    id: 'car-rent',
    title: 'home.projects.carRent.title',
    description: 'home.projects.carRent.description',
    longDescription: 'home.projects.carRent.description',
    category: 'web',
    tags: [
      'Next.js',
      'Tailwind',
      'PostgreSQL',
      'Stripe',
      'TypeScript'
    ],
    highlights: [
      'home.projects.carRent.highlight1',
      'home.projects.carRent.highlight2'
    ],
    githubUrl: '',
    demoUrl: '',
    featured: true,
    year: 2024,
    imageUrl: '/images/projects/car-rent.png',
  },
  {
    id: 'smart-parking',
    title: 'home.projects.smartParking.title',
    description: 'home.projects.smartParking.description',
    longDescription: 'home.projects.smartParking.description',
    category: 'mobile',
    tags: [
      'Node.js',
      'MQTT',
      'React Native / Flutter',
      'PostgreSQL',
      'Realtime'
    ],
    highlights: [
      'home.projects.smartParking.highlight1',
      'home.projects.smartParking.highlight2'
    ],
    githubUrl: '',
    demoUrl: '',
    featured: true,
    year: 2024,
    imageUrl: '/images/projects/smart-parking.png',
  },
];

// Navigation Menu
// src/lib/constants.ts
export const NAV_LINKS = [
  { href: '/', label: 'nav.home' },
  { href: '/about', label: 'nav.about' },
  { href: '/projects', label: 'nav.projects' },
  { href: '/blog', label: 'nav.blog' },
  { href: '/contact', label: 'nav.contact' },
];


// Call to Actions
export const CTA_PRIMARY = 'const.cta_primary';
export const CTA_SECONDARY = 'const.cta_secondary';
export const CTA_CONTACT = 'const.cta_contact';