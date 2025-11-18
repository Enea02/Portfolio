'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FEATURED_PROJECTS } from '@/lib/constants';
import { useTranslation } from 'react-i18next';
import { useGSAP } from '@/hooks/useGSAP';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const FeaturedProjects: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger animations
  useGSAP(
    () => {
      // Animate title with split text effect
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animate description
      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animate project cards with advanced stagger
      const projectCards: Element[] = gridRef.current !== null ? Array.from(gridRef.current.children) as Element[] : [];
      gsap.from(projectCards, {
        opacity: 0,
        y: 80,
        scale: 0.85,
        rotateX: 15,
        duration: 1,
        stagger: {
          amount: 0.8,
          from: 'start',
          ease: 'power2.out',
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Add advanced hover effects to project cards
      projectCards.forEach((card: Element, index: number) => {
        const imageContainer = card.querySelector('.project-image');
        const emoji = card.querySelector('.project-emoji');
        const categoryBadge = card.querySelector('.category-badge');
        const cardLinks = card.querySelectorAll('.project-link');

        // Card hover effect
        card.addEventListener('mouseenter', function(this: HTMLElement) {
          gsap.to(this, {
            y: -15,
            scale: 1.03,
            duration: 0.4,
            ease: 'power2.out',
          });

          // Animate image container
          gsap.to(imageContainer, {
            scale: 1.1,
            duration: 0.4,
            ease: 'power2.out',
          });

          // Animate emoji
          gsap.to(emoji, {
            scale: 1.2,
            rotation: 10,
            duration: 0.4,
            ease: 'back.out(1.7)',
          });

          // Animate category badge
          gsap.to(categoryBadge, {
            scale: 1.1,
            duration: 0.3,
            ease: 'back.out(1.5)',
          });

          // Animate links
          gsap.to(cardLinks, {
            x: 5,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', function(this: HTMLElement) {
          gsap.to(this, {
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
          });

          gsap.to(imageContainer, {
            scale: 1,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
          });

          gsap.to(emoji, {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
          });

          gsap.to(categoryBadge, {
            scale: 1,
            duration: 0.4,
            ease: 'elastic.out(1, 0.5)',
          });

          gsap.to(cardLinks, {
            x: 0,
            duration: 0.4,
            ease: 'power2.out',
          });
        });

        // 3D tilt effect on mouse move
        card.addEventListener('mousemove', function(this: HTMLElement, e: Event) {
          const event = e as MouseEvent;
          const rect = this.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5;
          const rotateY = ((x - centerX) / centerX) * 5;

          gsap.to(this, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 1000,
          });
        });

        card.addEventListener('mouseleave', function(this: HTMLElement) {
          gsap.to(this, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
          });
        });
      });

      // Animate button
      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      // Button magnetic effect
      const buttonElement = buttonRef.current !== null ? buttonRef.current.querySelector('a') : null;
      if (buttonElement) {
        buttonElement.addEventListener('mousemove', function(this: HTMLElement, e: MouseEvent) {
          const rect = this.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(this, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        buttonElement.addEventListener('mouseleave', function(this: HTMLElement) {
          gsap.to(this, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
          });
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.featuredProjectsTitle')}{' '}
            <span className="gradient-text">{t('home.featuredProjectsTitleHighlight')}</span>
          </h2>
          <p
            ref={descriptionRef}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t('home.featuredProjectsDescription')}
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12"
          style={{ perspective: '1000px' }}
        >
          {FEATURED_PROJECTS.map((project, index) => (
            <div key={project.id}>
              <Card className="h-full flex flex-col group">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-t-xl overflow-hidden project-image">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-20 project-emoji">
                      {project.category === 'ai' && '🤖'}
                      {project.category === 'cloud' && '☁️'}
                      {project.category === 'fullstack' && '⚡'}
                      {project.category === 'web' && '🌐'}
                      {project.category === 'mobile' && '📱'}
                    </span>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="primary" className="backdrop-blur-sm category-badge">
                      {project.category.toUpperCase()}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{t(project.title)}</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {t(project.description)}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-4 space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <p
                        key={idx}
                        className="text-xs text-gray-600 dark:text-gray-400 flex items-center"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {t(highlight)}
                      </p>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors project-link"
                      >
                        <Github className="h-4 w-4" />
                        {t('home.code')}
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors project-link"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t('home.demo')}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div ref={buttonRef} className="text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline" className="group">
              {t('home.viewAllProjects')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
