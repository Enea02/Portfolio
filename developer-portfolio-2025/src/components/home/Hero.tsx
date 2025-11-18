'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PERSONAL_INFO, CTA_PRIMARY, CTA_SECONDARY, SOCIAL_LINKS } from '@/lib/constants';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { ProfilePhoto3D } from './ProfilePhoto3D';
import { useGSAP, fadeIn, staggerIn, scaleIn } from '@/hooks/useGSAP';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const socialsRef = useRef<HTMLDivElement | null>(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const photoRef = useRef(null);

  // GSAP animations
  useGSAP(
    () => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate background blobs
      gsap.to(blob1Ref.current, {
        y: -20,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(blob2Ref.current, {
        y: 20,
        x: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Entrance animations
      timeline
        .from(greetingRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
        })
        .from(
          nameRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.4'
        )
        .from(
          roleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          taglineRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          socialsRef.current !== null ? Array.from(socialsRef.current.children) as Element[] : [],
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        )
        .from(
          photoRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: 'back.out(1.2)',
          },
          0
        );

      // Add magnetic effect to buttons
      const buttons = ctaRef.current !== null ? ctaRef.current.querySelectorAll('a') : null;
      buttons?.forEach((button: Element) => {
        button.addEventListener('mouseenter', function(this: HTMLElement) {
          gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        button.addEventListener('mouseleave', function(this: HTMLElement) {
          gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'elastic.out(1, 0.3)',
          });
        });

        button.addEventListener('mousemove', function(this: HTMLElement, e: Event) {
          const mouseEvent = e as MouseEvent;
          const rect = this.getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left - rect.width / 2;
          const y = mouseEvent.clientY - rect.top - rect.height / 2;

          gsap.to(this, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        button.addEventListener('mouseleave', function(this: HTMLElement) {
          gsap.to(this, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
          });
        });
      });

      // Add hover effect to social icons
      const socialIcons = socialsRef.current !== null ? socialsRef.current.querySelectorAll('a') : null;
      socialIcons?.forEach((icon: Element) => {
        icon.addEventListener('mouseenter', function(this: HTMLElement) {
          gsap.to(this, {
            y: -5,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        icon.addEventListener('mouseleave', function(this: HTMLElement) {
          gsap.to(this, {
            y: 0,
            duration: 0.3,
            ease: 'elastic.out(1, 0.5)',
          });
        });
      });
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-dark-bg dark:to-gray-900" />
        <div
          ref={blob1Ref}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50"
        />
        <div
          ref={blob2Ref}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Animated greeting */}
              <div ref={greetingRef}>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                  {t('hero.greeting')}
                </p>
              </div>

              {/* Name with gradient */}
              <h1
                ref={nameRef}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="gradient-text">{t('personal-info.name')}</span>
              </h1>

              {/* Role */}
              <h2
                ref={roleRef}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
              >
                {t('personal-info.role')}
              </h2>

              {/* Tagline */}
              <p
                ref={taglineRef}
                className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8"
              >
                {t('personal-info.tagline')}
              </p>

              {/* CTA Buttons */}
              <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
              >
                <Link href="/projects">
                  <Button size="lg" className="group">
                    {t('const.cta_primary')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="/resume.pdf" download>
                  <Button variant="outline" size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    {t('const.cta_secondary')}
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div
                ref={socialsRef}
                className="flex justify-center lg:justify-start gap-4"
              >
                {SOCIAL_LINKS.slice(0, 2).map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                    aria-label={social.platform}
                  >
                    {social.icon === 'Github' && <Github className="h-6 w-6" />}
                    {social.icon === 'Linkedin' && <Linkedin className="h-6 w-6" />}
                  </a>
                ))}
              </div>
            </div>

            {/* Right column - 3D Photo */}
            <div ref={photoRef} className="order-1 lg:order-2">
              <ProfilePhoto3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
