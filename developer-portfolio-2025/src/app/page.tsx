import React from 'react';
import { Hero } from '@/components/home/Hero';
import { TechStack } from '@/components/home/TechStack';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
    </> 
  );
}
