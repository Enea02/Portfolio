'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PERSONAL_INFO } from '@/lib/constants';

export default function AboutPage() {
  const experiences = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      company: 'La tua azienda attuale',
      role: 'Senior Full-Stack Developer',
      period: '2023 - Presente',
      description: 'Sviluppo di applicazioni enterprise con focus su AI integration, cloud architecture e DevOps practices.',
      technologies: ['React', 'Node.js', 'AWS', 'OpenAI API', 'Docker'],
      achievements: [
        'Implementato sistema di AI chatbot che ha ridotto i ticket di supporto del 40%',
        'Migrato infrastruttura legacy su architettura cloud-native (AWS)',
        'Mentoring di 3 junior developers'
      ]
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      company: 'Azienda precedente',
      role: 'Full-Stack Developer',
      period: '2021 - 2023',
      description: 'Sviluppo di soluzioni ERP personalizzate con Business Central/AL e applicazioni web moderne.',
      technologies: ['Angular', 'TypeScript', 'Business Central', 'Azure', 'Ionic'],
      achievements: [
        'Sviluppato 15+ estensioni Business Central per automazione processi',
        'Creato app mobile cross-platform per gestione magazzino',
        'Ottimizzato performance applicazioni del 60%'
      ]
    }
  ];

  const education = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      degree: 'Laurea in Informatica / Ingegneria del Software',
      institution: 'Università / Istituto',
      period: '2017 - 2021',
      description: 'Focus su sviluppo software, algoritmi, database e architetture distribuite'
    }
  ];

  const certifications = [
    {
      icon: <Award className="h-5 w-5" />,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2024'
    },
    {
      icon: <Award className="h-5 w-5" />,
      name: 'Microsoft Certified: Azure Developer',
      issuer: 'Microsoft',
      year: '2023'
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
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {PERSONAL_INFO.bio}
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
              <CardTitle>Chi sono</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Sono un <strong>Full-Stack Developer</strong> appassionato di tecnologie innovative, con particolare 
                focus su <strong>Intelligenza Artificiale</strong>, <strong>Cloud Computing</strong> e <strong>pratiche DevOps</strong>. 
                La mia esperienza spazia dallo sviluppo frontend con framework moderni come React e Angular, 
                al backend con Node.js, fino all'integrazione di sistemi enterprise come Business Central.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Negli ultimi anni mi sono specializzato nell'integrazione di <strong>Large Language Models (LLM)</strong> 
                e tecnologie AI nelle applicazioni business, creando soluzioni che automatizzano processi complessi 
                e migliorano l'esperienza utente. Credo fortemente nell'importanza di scrivere codice pulito, 
                testabile e manutenibile, seguendo best practices e design patterns consolidati.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Quando non programmo, mi piace rimanere aggiornato sulle ultime tendenze tech, 
                contribuire a progetti open source e condividere conoscenze attraverso blog posts e mentoring.
              </p>
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
            Esperienza <span className="gradient-text">Professionale</span>
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
                      Key Achievements:
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
              <span className="gradient-text">Formazione</span>
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
              <span className="gradient-text">Certificazioni</span>
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
