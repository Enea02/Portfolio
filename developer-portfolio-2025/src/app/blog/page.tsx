'use client';



import React from 'react';

import { motion } from 'framer-motion';

import { MessageCircle, Sparkles, Zap, Shield } from 'lucide-react';

import { ChatBot } from '@/components/chat/ChatBot';

import { Card, CardContent } from '@/components/ui/Card';

import { useTranslation } from 'react-i18next';



export default function ChatPage() {

  const { t } = useTranslation();


  const features = [

    {

      icon: Sparkles,

      title: t('aiAssistant.page.featureAiPowered'),

      description: t('aiAssistant.page.featureAiPoweredDesc'),

    },

    {

      icon: Zap,

      title: t('aiAssistant.page.featureInstantResponses'),

      description: t('aiAssistant.page.featureInstantResponsesDesc'),

    },

    {

      icon: Shield,

      title: t('aiAssistant.page.featureAlwaysAvailable'),

      description: t('aiAssistant.page.featureAlwaysAvailableDesc'),

    },

  ];

 

  return (

    <div className="py-20">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        {/* Header */}

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          className="text-center mb-12"

        >

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mb-6">

            <MessageCircle className="w-8 h-8 text-white" />

          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">

            <span className="gradient-text">{t('aiAssistant.page.title')}</span>

          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">

            {t('aiAssistant.page.description')}

          </p>

        </motion.div>

 

        {/* Features */}

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.1 }}

          className="grid grid-cols-3 gap-4 mb-8"

        >

          {features.map((feature, index) => (

            <Card key={index} className="text-center">

              <CardContent className="p-4">

                <feature.icon className="w-6 h-6 mx-auto mb-2 text-primary-500" />

                <h3 className="font-semibold text-sm text-gray-900 dark:text-white">

                  {feature.title}

                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400">

                  {feature.description}

                </p>

              </CardContent>

            </Card>

          ))}

        </motion.div>

 

        {/* ChatBot */}

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.2 }}

        >

          <ChatBot />

        </motion.div>

 

        {/* Disclaimer */}

        <motion.p

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 0.3 }}

          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6"

        >

          {t('aiAssistant.page.disclaimer')}

        </motion.p>

      </div>

    </div>

  );

}