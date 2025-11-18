'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PERSONAL_INFO } from '@/lib/constants';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  const experiences = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      company: 'DSC Group',
      role: t('about.experiences.dsc.role'),
      period: '2025 - ' + t('about.experiences.present'),
      description: t('about.experiences.dsc.description'),
      technologies: ['Business Central', 'AL', 'Azure Functions', 'Freshdesk API', 'C#'],
      achievements: [
        t('about.experiences.dsc.achievement1'),
        t('about.experiences.dsc.achievement2'),
        t('about.experiences.dsc.achievement3')
      ]
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      company: 'DSC Group',
      role: t('about.experiences.internship.role'),
      period: '2025',
      description: t('about.experiences.internship.description'),
      technologies: ['Business Central', 'AL', 'Azure Functions', 'Freshdesk API', 'AI Integration'],
      achievements: [
        t('about.experiences.internship.achievement1'),
        t('about.experiences.internship.achievement2'),
        t('about.experiences.internship.achievement3')
      ]
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      company: 'Chef Express',
      role: t('about.experiences.chef.role'),
      period: '2022 - 2023',
      description: t('about.experiences.chef.description'),
      technologies: [],
      achievements: [
        t('about.experiences.chef.achievement1'),
        t('about.experiences.chef.achievement2')
      ]
    }
  ];

  const education = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      degree: t('about.education.bachelor.degree'),
      institution: t('about.education.bachelor.institution'),
      period: '2021 - 2025',
      description: t('about.education.bachelor.description')
    },
    {
      icon: <GraduationCap className="h-5 w-5" />,
      degree: t('about.education.diploma.degree'),
      institution: t('about.education.diploma.institution'),
      period: '2016 - 2021',
      description: t('about.education.diploma.description')
    }
  ];

  const certifications = [
    {
      icon: <Award className="h-5 w-5" />,
      name: 'ECDL',
      issuer: t('about.certifications.ecdl.issuer'),
      year: ''
    },
    {
      icon: <Award className="h-5 w-5" />,
      name: t('about.certifications.driverLicense.name'),
      issuer: t('about.certifications.driverLicense.issuer'),
      year: ''
    },
    {
      icon: <Award className="h-5 w-5" />,
      name: t('about.certifications.safety.name'),
      issuer: t('about.certifications.safety.issuer'),
      year: ''
    },
    {
      icon: <Award className="h-5 w-5" />,
      name: 'HACCP',
      issuer: t('about.certifications.haccp.issuer'),
      year: ''
    }
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
            {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('personal-info.bio')}
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle>{t('about.whoAmI')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }} />
              <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }} />
              <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: t('about.paragraph3') }} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('about.experienceTitle')} <span className="gradient-text">{t('about.experienceTitleHighlight')}</span>
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} hover>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        {exp.icon}
                      </div>
                      <div>
                        <CardTitle>{exp.role}</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {exp.company} • {exp.period}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {t('about.keyAchievements')}
                    </p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-green-500 mr-2 mt-0.5">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="gradient-text">{t('about.educationTitle')}</span>
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400">
                        {edu.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {edu.period}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="gradient-text">{t('about.certificationsTitle')}</span>
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
                        {cert.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {cert.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
