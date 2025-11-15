'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ExternalLink, Linkedin, Heart, MessageCircle, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BlogPost } from '@/types';
import Link from 'next/link';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();

        if (data.success) {
          const foundPost = data.posts.find((p: BlogPost) => p.slug === slug);
          if (foundPost) {
            setPost(foundPost);
          } else {
            setError('Post non trovato');
          }
        } else {
          setError('Errore nel caricamento del post');
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Errore nel caricamento del post');
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
              <CardContent className="p-8 text-center">
                <p className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">
                  {error || 'Post non trovato'}
                </p>
                <Link href="/blog">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Torna al blog
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/blog">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Torna al blog
            </Button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Category */}
          <Badge variant="primary" className="mb-4">
            {post.category}
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              {post.author.image && (
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {post.author.name}
                </p>
              </div>
            </div>

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

          {/* Featured Image */}
          {post.imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 rounded-lg overflow-hidden"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}

          {/* Engagement Stats */}
          {(post.likes || post.comments || post.shares) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-6 items-center justify-center">
                    {post.likes !== undefined && post.likes > 0 && (
                      <div className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-red-500" />
                        <span className="font-semibold">{post.likes}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Likes</span>
                      </div>
                    )}
                    {post.comments !== undefined && post.comments > 0 && (
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5 text-blue-500" />
                        <span className="font-semibold">{post.comments}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Commenti</span>
                      </div>
                    )}
                    {post.shares !== undefined && post.shares > 0 && (
                      <div className="flex items-center gap-2">
                        <Share2 className="h-5 w-5 text-green-500" />
                        <span className="font-semibold">{post.shares}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Condivisioni</span>
                      </div>
                    )}
                    {post.linkedinUrl && (
                      <a
                        href={post.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto"
                      >
                        <Button variant="outline" size="sm">
                          <Linkedin className="mr-2 h-4 w-4" />
                          Vedi su LinkedIn
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-8"
          >
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-none">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  {post.author.image && (
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {post.author.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Informatico — Analista e Sviluppatore
                    </p>
                  </div>
                  {post.author.linkedinUrl && (
                    <a
                      href={post.author.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <Linkedin className="mr-2 h-4 w-4" />
                        Segui
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Leggi altri articoli
              </Button>
            </Link>
          </motion.div>
        </motion.article>
      </div>
    </div>
  );
}
