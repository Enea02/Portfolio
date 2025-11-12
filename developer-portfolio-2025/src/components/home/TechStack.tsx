'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TECH_STACK } from '@/lib/constants';
import { getProficiencyColor } from '@/lib/utils';

export const TechStack: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="gradient-text">Tech Stack 2025</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Tecnologie moderne con cui costruisco soluzioni scalabili, performanti e innovative
          </motion.p>
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TECH_STACK.map((stack, index) => (
            <motion.div key={index} variants={itemVariants}>
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
                      <div
                        key={techIndex}
                        className="group relative"
                      >
                        <Badge variant="primary" className="cursor-pointer">
                          {tech.name}
                        </Badge>
                        
                        {/* Tooltip on hover */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                          <div className={`w-2 h-2 rounded-full ${getProficiencyColor(tech.proficiency)} inline-block mr-1`} />
                          {tech.proficiency}
                          {tech.yearsOfExperience && ` • ${tech.yearsOfExperience}+ anni`}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Livello di competenza:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['expert', 'advanced', 'intermediate', 'learning'].map((level) => (
              <div key={level} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${getProficiencyColor(level)}`} />
                <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                  {level === 'expert' && 'Esperto'}
                  {level === 'advanced' && 'Avanzato'}
                  {level === 'intermediate' && 'Intermedio'}
                  {level === 'learning' && 'In apprendimento'}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
