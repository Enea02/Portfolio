'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/image/Logo.png';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/lib/constants';
import { useTranslation } from 'react-i18next'; // ✅ aggiunto

const iconMap = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export const Footer: React.FC = () => {
  const { t } = useTranslation(); // ✅ inizializza le traduzioni
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="h-12 w-auto rounded-lg overflow-hidden flex items-center justify-center">
                <Image src={logo} alt="Logo" height={48} width={200} className="object-contain" priority />
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('personal-info.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm">{t('nav.about')}</Link></li>
              <li><Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm">{t('nav.projects')}</Link></li>
              <li><Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm">{t('nav.blog')}</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t('footer.connect')}
            </h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-border">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} {t('personal-info.name')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
