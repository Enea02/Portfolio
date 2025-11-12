'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function BlogPage() {
  // Sample blog posts - replace with real data from CMS or markdown files
  const blogPosts = [
    {
      id: '1',
      title: 'Integrating GPT-4 into Production Applications: Lessons Learned',
      excerpt: 'Best practices e pattern architetturali per integrare Large Language Models in applicazioni enterprise...',
      publishedAt: '2024-11-01',
      readingTime: 8,
      tags: ['AI', 'GPT-4', 'Best Practices', 'Architecture'],
      category: 'AI/ML'
    },
    {
      id: '2',
      title: 'From Monolith to Microservices: A Cloud Migration Journey',
      excerpt: 'Come abbiamo migrato un\'applicazione legacy su architettura cloud-native con zero downtime...',
      publishedAt: '2024-10-15',
      readingTime: 12,
      tags: ['Cloud', 'AWS', 'Microservices', 'DevOps'],
      category: 'Cloud'
    },
    {
      id: '3',
      title: 'React Server Components: The Future of Web Development?',
      excerpt: 'Analisi approfondita delle nuove React Server Components e come cambieranno il modo di sviluppare...',
      publishedAt: '2024-09-28',
      readingTime: 10,
      tags: ['React', 'Next.js', 'Frontend', 'Performance'],
      category: 'Frontend'
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pensieri, tutorial e approfondimenti su sviluppo software, AI e tecnologie moderne
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="group">
                <CardHeader>
                  {/* Category Badge */}
                  <Badge variant="primary" className="mb-3 w-fit">
                    {post.category}
                  </Badge>
                  
                  <CardTitle className="text-2xl group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  
                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString('it-IT', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readingTime} min di lettura
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto"
                  >
                    Leggi l'articolo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-none">
            <CardContent className="p-8">
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                🚀 Più contenuti in arrivo
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Sto lavorando su nuovi articoli tecnici. Torna presto per aggiornamenti!
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Note about implementation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
        >
          <p className="text-sm text-blue-700 dark:text-blue-300">
            <strong>💡 Nota per l'implementazione:</strong> Questa è una pagina placeholder. 
            Puoi integrarla con un CMS headless (Contentful, Sanity) o usare markdown files 
            con next-mdx-remote per i tuoi post reali.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
