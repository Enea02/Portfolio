'use client';

 

import React from 'react';

import { motion } from 'framer-motion';

import { MessageCircle, Sparkles, Zap, Shield } from 'lucide-react';

import { ChatBot } from '@/components/chat/ChatBot';

import { Card, CardContent } from '@/components/ui/Card';

 

export default function ChatPage() {

  const features = [

    {

      icon: Sparkles,

      title: 'AI-Powered',

      description: 'Powered by Claude AI',

    },

    {

      icon: Zap,

      title: 'Risposte Istantanee',

      description: 'Ottieni risposte immediate',

    },

    {

      icon: Shield,

      title: 'Sempre Disponibile',

      description: '24/7 a tua disposizione',

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

            <span className="gradient-text">AI Assistant</span>

          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">

            Chatta con il mio assistente AI per saperne di più sulle mie competenze,

            progetti e disponibilità per collaborazioni.

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

          Questo assistente utilizza intelligenza artificiale.

          Le risposte potrebbero non essere sempre accurate.

        </motion.p>

      </div>

    </div>

  );

}