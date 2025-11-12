'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

export const ProfilePhoto3D: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for mouse tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring configuration for smooth animations
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  // Handle mouse move for 3D effect
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        type: "spring",
        stiffness: 100
      }}
      className="flex justify-center items-center py-12"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          whileHover={{ scale: 1.05 }}
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        >
          {/* Glowing background effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400 via-secondary-400 to-primary-600 opacity-30 blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ transform: 'translateZ(-50px)' }}
          />

          {/* Main photo container */}
          <motion.div
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(50px)',
            }}
          >
            {/* Gradient overlay for aesthetic effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20 z-10 pointer-events-none" />

            {/* Photo */}
            <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
              {/* Placeholder - Replace with your actual image */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">E</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Add your photo</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Place image in /public/images/</p>
                </div>
              </div>
            </div>

            {/* Shine effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 opacity-0"
              whileHover={{ opacity: 1 }}
              style={{
                transform: 'translateZ(1px)',
              }}
            />
          </motion.div>

          {/* Floating particles around the photo */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary-400 dark:bg-primary-500"
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i % 2) * 80}%`,
                transform: 'translateZ(80px)',
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
