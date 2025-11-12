// Core types for the portfolio application

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'ai' | 'cloud' | 'devops' | 'fullstack';
  year: number;
  highlights: string[];
}

export interface TechStack {
  category: 'Frontend' | 'Backend' | 'DevOps' | 'AI/ML' | 'Cloud' | 'Database';
  technologies: Technology[];
}

export interface Technology {
  name: string;
  icon?: string;
  proficiency: 'expert' | 'advanced' | 'intermediate' | 'learning';
  yearsOfExperience?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  readingTime: number;
  imageUrl?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'medium' | 'dev';
  url: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
