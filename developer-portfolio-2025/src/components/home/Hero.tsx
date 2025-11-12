'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { PERSONAL_INFO, CTA_PRIMARY, CTA_SECONDARY, SOCIAL_LINKS } from '@/lib/constants';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { ProfilePhoto3D } from './ProfilePhoto3D';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-dark-bg dark:to-gray-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }} />
      </div>
     

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Animated greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                  {t('hero.greeting')}
                </p>
              </motion.div>

              {/* Name with gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                <span className="gradient-text">{t('personalinfo.name')}</span>
              </motion.h1>

              {/* Role */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
              >
                {t('personalinfo.role')}
              </motion.h2>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8"
              >
                {t('personalinfo.tagline')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
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
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-center lg:justify-start gap-4"
              >
                {SOCIAL_LINKS.slice(0, 2).map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all hover:scale-110"
                    aria-label={social.platform}
                  >
                    {social.icon === 'Github' && <Github className="h-6 w-6" />}
                    {social.icon === 'Linkedin' && <Linkedin className="h-6 w-6" />}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right column - 3D Photo */}
            <div className="order-1 lg:order-2">
              <ProfilePhoto3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
