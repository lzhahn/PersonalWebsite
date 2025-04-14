'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in ms
}

export default function FadeInSection({ 
  children, 
  className = '', 
  delay = 0 
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // When the element enters the viewport
      if (entries[0].isIntersecting) {
        // Add a delay if specified
        if (delay) {
          setTimeout(() => setIsVisible(true), delay);
        } else {
          setIsVisible(true);
        }
        // Once it's visible, no need to observe anymore
        if (domRef.current) observer.unobserve(domRef.current);
      }
    });
    
    const currentRef = domRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay, domRef]);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}