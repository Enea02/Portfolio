'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FEATURED_PROJECTS } from '@/lib/constants';
import type { Project } from '@/types';
import { useTranslation } from 'react-i18next';

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tutti', emoji: '📁' },
    { id: 'ai', label: 'AI/ML', emoji: '🤖' },
    { id: 'cloud', label: 'Cloud', emoji: '☁️' },
    { id: 'fullstack', label: 'Full-Stack', emoji: '⚡' },
    { id: 'web', label: 'Web', emoji: '🌐' },
    { id: 'mobile', label: 'Mobile', emoji: '📱' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('projects.title1')} <span className="gradient-text">{t('projects.title2')}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'primary' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="gap-2"
            >
              <span>{category.emoji}</span>
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 dark:text-gray-400">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'progetto trovato' : 'progetti trovati'}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Nessun progetto trovato in questa categoria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// Project Card Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { t } = useTranslation();
  return (
    <Card className="h-full flex flex-col hover-glow">
      {/* Project Header with Image */}
      <div className="relative h-56 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-t-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl opacity-20">
            {project.category === 'ai' && '🤖'}
            {project.category === 'cloud' && '☁️'}
            {project.category === 'fullstack' && '⚡'}
            {project.category === 'web' && '🌐'}
            {project.category === 'mobile' && '📱'}
          </span>
        </div>
        
        {/* Category & Year Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <Badge variant="primary" className="backdrop-blur-sm">
            {project.category.toUpperCase()}
          </Badge>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <Calendar className="h-3 w-3 text-gray-600 dark:text-gray-400" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {project.year}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <CardHeader>
        <CardTitle>{t(project.title)}</CardTitle>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {t(project.longDescription)}
        </p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-6 space-y-2">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Risultati Principali:
          </p>
          {project.highlights.map((highlight, idx) => (
            <p key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              {t(highlight)}
            </p>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" className="w-full gap-2">
                <Github className="h-4 w-4" />
                Vedi Codice
              </Button>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="primary" className="w-full gap-2">
                <ExternalLink className="h-4 w-4" />
                Demo Live
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
