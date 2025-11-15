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
    url: 'https://github.com/tuousername',
    icon: 'Github',
  },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/enea-frontera-b97048268',
    icon: 'Linkedin',
  },
  {
    platform: 'twitter',
    url: 'https://twitter.com/tuousername',
    icon: 'Twitter',
  },
  {
    platform: 'email',
    url: 'mailto:Enea.alice.it@gmail.com',
    icon: 'Mail',
  },
];

// Tech Stack - Organized by category
export const TECH_STACK: TechStack[] = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'Next.js', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'TypeScript', proficiency: 'expert', yearsOfExperience: 4 },
      { name: 'Angular', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'Ionic', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'TailwindCSS', proficiency: 'advanced', yearsOfExperience: 2 },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'Express', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'Business Central/AL', proficiency: 'expert', yearsOfExperience: 3 },
      { name: 'PostgreSQL', proficiency: 'intermediate', yearsOfExperience: 2 },
    ],
  },
  {
    category: 'Cloud',
    technologies: [
      { name: 'AWS', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'Vercel', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'Azure', proficiency: 'intermediate', yearsOfExperience: 1 },
    ],
  },
  {
    category: 'DevOps',
    technologies: [
      { name: 'Docker', proficiency: 'intermediate', yearsOfExperience: 2 },
      { name: 'GitHub Actions', proficiency: 'advanced', yearsOfExperience: 2 },
      { name: 'CI/CD', proficiency: 'intermediate', yearsOfExperience: 2 },
    ],
  },
  {
    category: 'AI/ML',
    technologies: [
      { name: 'OpenAI API', proficiency: 'intermediate', yearsOfExperience: 1 },
      { name: 'LangChain', proficiency: 'learning' },
      { name: 'Prompt Engineering', proficiency: 'intermediate', yearsOfExperience: 1 },
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
    demoUrl: '/presentations/ticket-management/presentation.pptx',
    featured: true,
    year: 2024,
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