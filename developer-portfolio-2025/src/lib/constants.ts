import { Project, TechStack, SocialLink } from '@/types';
import { useTranslation } from 'react-i18next';

// Personal Information - CUSTOMIZE THIS!
export const PERSONAL_INFO = {
  
  name: 'personalinfo.name',
  role: 'personalinfo.role',
  tagline: 'personalinfo.tagline',
  bio: 'personalinfo.bio',
  email:'personalinfo.email',
  location: 'personalinfo.location',
  availability: 'personalinfo.availability',
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
    id: 'ai-chatbot',
    title: 'AI Assistant Platform',
    description: 'Piattaforma conversazionale con integrazione GPT-4 per automazione customer support',
    longDescription: `Sistema completo di chatbot AI con interfaccia React, backend Node.js e integrazione 
                      con OpenAI API. Include gestione conversazioni, memory persistente e analytics in tempo reale.`,
    tags: ['React', 'Node.js', 'OpenAI', 'TypeScript', 'Tailwind'],
    imageUrl: '/images/projects/ai-chatbot.jpg',
    githubUrl: 'https://github.com/tuousername/ai-assistant',
    demoUrl: 'https://ai-assistant-demo.vercel.app',
    featured: true,
    category: 'ai',
    year: 2024,
    highlights: [
      'Riduzione 40% ticket support',
      'Tempo risposta < 2 secondi',
      '95% customer satisfaction',
    ],
  },
  {
    id: 'business-central-integration',
    title: 'ERP Integration Suite',
    description: 'Suite di estensioni Business Central/AL per automazione processi aziendali',
    longDescription: `Pacchetto di moduli personalizzati per Business Central che automatizzano workflow 
                      complessi, integrano API esterne e forniscono dashboard analitiche avanzate.`,
    tags: ['Business Central', 'AL', 'Azure', 'API Integration'],
    imageUrl: '/images/projects/erp-suite.jpg',
    githubUrl: 'https://github.com/tuousername/bc-extensions',
    featured: true,
    category: 'fullstack',
    year: 2023,
    highlights: [
      'Automazione 80% processi manuali',
      'Integrazione 15+ API esterne',
      'Deployment su 50+ clienti',
    ],
  },
  {
    id: 'cloud-monitoring',
    title: 'Cloud Infrastructure Monitor',
    description: 'Dashboard real-time per monitoraggio infrastrutture cloud multi-provider',
    longDescription: `Applicazione Next.js con backend serverless che aggrega metriche da AWS, Azure e GCP. 
                      Include alerting intelligente, cost optimization e performance insights.`,
    tags: ['Next.js', 'AWS', 'Azure', 'Serverless', 'Charts'],
    imageUrl: '/images/projects/cloud-monitor.jpg',
    demoUrl: 'https://cloud-monitor-demo.vercel.app',
    featured: true,
    category: 'cloud',
    year: 2024,
    highlights: [
      'Supporto multi-cloud',
      'Alerting predittivo con ML',
      'Riduzione costi 25%',
    ],
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