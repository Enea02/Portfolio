'use client';

import React, { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TECH_STACK } from '@/lib/constants';
import { getProficiencyColor } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { useGSAP } from '@/hooks/useGSAP';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const TechStack: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const gridRef = useRef(null);
  const legendRef = useRef(null);

  // GSAP ScrollTrigger animations
  useGSAP(
    () => {
      // Animate title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
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

      // Animate cards with stagger
      const cards: Element[] = gridRef.current !== null ? Array.from(gridRef.current.children) as Element[] : [];
      gsap.from(cards, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          from: 'start',
        },
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Add hover effect to cards
      cards.forEach((card: Element) => {
        card.addEventListener('mouseenter', function(this: HTMLElement) {
          gsap.to(this, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', function(this: HTMLElement) {
          gsap.to(this, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: 'elastic.out(1, 0.5)',
          });
        });
      });

      // Animate badges inside cards with stagger
      const allBadges: Element[] = gridRef.current !== null ? Array.from(gridRef.current.querySelectorAll('.badge-animate')) as Element[] : [];
      gsap.from(allBadges, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: {
          amount: 1,
          from: 'start',
        },
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
        },
      });

      // Animate legend
      gsap.from(legendRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: legendRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animate legend items
      const legendItems: Element[] = legendRef.current !== null ? Array.from(legendRef.current.querySelectorAll('.legend-item')) as Element[] : [];
      gsap.from(legendItems, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: legendRef.current,
          start: 'top 90%',
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('home.techStackTitle')}</span>
          </h2>
          <p
            ref={descriptionRef}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {t('home.techStackDescription')}
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TECH_STACK.map((stack, index) => (
            <div key={index}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">
                      {stack.category === 'Frontend' && '⚛️'}
                      {stack.category === 'Backend' && '⚙️'}
                      {stack.category === 'Cloud' && '☁️'}
                      {stack.category === 'DevOps' && '🚀'}
                      {stack.category === 'AI/ML' && '🤖'}
                      {stack.category === 'Database' && '💾'}
                    </span>
                    {stack.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="group relative">
                        <Badge variant="primary" className="cursor-pointer badge-animate">
                          {tech.name}
                        </Badge>

                        {/* Tooltip on hover */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                          <div
                            className={`w-2 h-2 rounded-full ${getProficiencyColor(
                              tech.proficiency
                            )} inline-block mr-1`}
                          />
                          {t(`home.${tech.proficiency}`)}
                          {tech.yearsOfExperience &&
                            ` • ${tech.yearsOfExperience}+ ${t('home.yearsShort')}`}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div ref={legendRef} className="mt-12 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {t('home.proficiencyLevel')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['expert', 'advanced', 'intermediate', 'learning'].map((level) => (
              <div key={level} className="flex items-center gap-2 legend-item">
                <div className={`w-3 h-3 rounded-full ${getProficiencyColor(level)}`} />
                <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                  {t(`home.${level}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
