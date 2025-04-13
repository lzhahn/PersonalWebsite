import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, subtitle, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="text-3xl font-bold mb-4 dark:text-white">{title}</h2>}
            {subtitle && <p className="text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
