'use client';

import { useEffect, useRef, MutableRefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGSAPOptions {
  scope?: MutableRefObject<HTMLElement | null>;
  dependencies?: any[];
  revertOnUpdate?: boolean;
}

/**
 * Custom hook for GSAP animations
 * Handles animation lifecycle and cleanup automatically
 */
export const useGSAP = (
  callback: (context: gsap.Context) => void | (() => void),
  options: UseGSAPOptions = {}
) => {
  const { scope, dependencies = [], revertOnUpdate = true } = options;

  useEffect(() => {
    const ctx = gsap.context((contextFromGSAP) => {
      callback(contextFromGSAP);
    }, scope?.current || undefined);

    return () => {
      if (revertOnUpdate) {
        ctx.revert();
      }
    };
  }, dependencies);
};

/**
 * Utility function to create fade-in animation
 */
export const fadeIn = (
  element: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) => {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    ...options,
  });
};

/**
 * Utility function to create slide-in animation
 */
export const slideIn = (
  element: gsap.TweenTarget,
  direction: 'left' | 'right' | 'up' | 'down' = 'up',
  options: gsap.TweenVars = {}
) => {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
  };

  return gsap.from(element, {
    ...directions[direction],
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    ...options,
  });
};

/**
 * Utility function to create scale animation
 */
export const scaleIn = (
  element: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
    ...options,
  });
};

/**
 * Utility function to create stagger animation
 */
export const staggerIn = (
  elements: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    ...options,
  });
};

/**
 * Utility function to create scroll-triggered animation
 */
export const scrollTriggerAnimation = (
  element: gsap.TweenTarget,
  options: gsap.TweenVars & { trigger?: gsap.DOMTarget } = {}
) => {
  const { trigger, ...tweenOptions } = options;

  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: (trigger || element) as gsap.DOMTarget,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
    ...tweenOptions,
  });
};

/**
 * Utility function to create text reveal animation
 */
export const textReveal = (
  element: gsap.TweenTarget,
  options: gsap.TweenVars = {}
) => {
  return gsap.from(element, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power2.out',
    stagger: {
      amount: 0.3,
      from: 'start',
    },
    ...options,
  });
};

/**
 * Utility function to create magnetic hover effect
 */
export const magneticEffect = (
  element: HTMLElement,
  strength: number = 0.3
) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

export default useGSAP;
