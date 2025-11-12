import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = true,
  glass = false 
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  const glassStyles = glass ? 'glass-card' : 'bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border';
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

  return (
    <div className={cn(baseStyles, glassStyles, hoverStyles, className)}>
      {children}
    </div>
  );
};

// Card sub-components for better composition
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return (
    <h3 className={cn('text-xl font-bold text-gray-900 dark:text-white', className)}>
      {children}
    </h3>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={cn('text-gray-600 dark:text-gray-400', className)}>
      {children}
    </div>
  );
};
