'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ExternalLink, Linkedin } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BlogPost } from '@/types';
import Link from 'next/link';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();

        if (data.success) {
          setBlogPosts(data.posts);
        } else {
          setError('Failed to load posts');
        }
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

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

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
              <CardContent className="p-8">
                <p className="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">
                  Errore nel caricamento dei post
                </p>
                <p className="text-red-700 dark:text-red-300">
                  {error}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && !error && blogPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-none">
              <CardContent className="p-8">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  📝 Nessun post disponibile
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I post di LinkedIn non sono ancora stati sincronizzati.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Usa l'API <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">/api/posts/sync</code> per importare i post.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Blog Posts */}
        {!loading && !error && blogPosts.length > 0 && (
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
                      {post.linkedinUrl && (
                        <a
                          href={post.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <Linkedin className="h-4 w-4" />
                          Vedi su LinkedIn
                        </a>
                      )}
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

                    {/* Engagement Stats */}
                    {(post.likes || post.comments || post.shares) && (
                      <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                        {post.likes !== undefined && post.likes > 0 && (
                          <span>❤️ {post.likes}</span>
                        )}
                        {post.comments !== undefined && post.comments > 0 && (
                          <span>💬 {post.comments}</span>
                        )}
                        {post.shares !== undefined && post.shares > 0 && (
                          <span>🔄 {post.shares}</span>
                        )}
                      </div>
                    )}

                    {/* Read More Button */}
                    <div className="flex gap-3">
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="ghost"
                          className="group/btn p-0 h-auto"
                        >
                          Leggi l'articolo
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Coming Soon Message */}
        {!loading && !error && blogPosts.length > 0 && (
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
        )}
      </div>
    </div>
  );
}
