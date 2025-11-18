'use client';

import React, { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current) return;

    // Page enter animation
    const timeline = gsap.timeline();

    timeline
      .set(containerRef.current, { opacity: 0, y: 20 })
      .set(overlayRef.current, { scaleY: 1, transformOrigin: 'bottom' })
      .to(overlayRef.current, {
        scaleY: 0,
        duration: 0.6,
        ease: 'power3.inOut',
      })
      .to(
        containerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.3'
      );

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      {/* Page transition overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 pointer-events-none"
        style={{ transformOrigin: 'bottom', transform: 'scaleY(0)' }}
      />

      {/* Page content */}
      <div ref={containerRef}>{children}</div>
    </>
  );
};

export default PageTransition;
