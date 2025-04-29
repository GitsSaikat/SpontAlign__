'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Placeholder image URLs - replace with actual user-uploaded images later
const placeholderImages = [
  'https://picsum.photos/seed/spont1/1920/1080',
  'https://picsum.photos/seed/spont2/1080/1920',
  'https://picsum.photos/seed/spont3/1200/800',
];

// Component for a single background element (image or shape)
const BackgroundElement: React.FC<{
  src?: string;
  shape?: 'rect' | 'circle' | 'triangle';
  className?: string;
  style?: React.CSSProperties;
}> = ({ src, shape, className, style }) => {
  const baseClasses = 'absolute opacity-10 dark:opacity-5 mix-blend-multiply dark:mix-blend-lighten pointer-events-none';

  if (src) {
    return (
      <Image
        src={src}
        alt="Background Element"
        layout="fill"
        objectFit="cover"
        className={cn(baseClasses, className)}
        style={style}
        quality={50} // Lower quality for background images
      />
    );
  }

  if (shape === 'rect') {
    return (
      <div
        className={cn(baseClasses, 'bg-primary/50 dark:bg-primary/30', className)}
        style={style}
      ></div>
    );
  }

  if (shape === 'circle') {
    return (
      <div
        className={cn(baseClasses, 'bg-accent/50 dark:bg-accent/30 rounded-full', className)}
        style={style}
      ></div>
    );
  }

    if (shape === 'triangle') {
    return (
      <div
        className={cn(baseClasses, 'w-0 h-0 border-l-[50px] border-l-transparent border-b-[100px] border-b-secondary/50 dark:border-b-secondary/30 border-r-[50px] border-r-transparent', className)}
        style={style}
      ></div>
    );
  }


  return null;
};

export function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (backgroundRef.current) {
        const rect = backgroundRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5; // Center origin
        const y = (event.clientY - rect.top) / rect.height - 0.5; // Center origin
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax effect calculation
  const calculateTransform = (depth: number) => {
    // Adjust multiplier for desired parallax intensity
    const parallaxMultiplier = depth * 5;
    const translateX = -mousePosition.x * parallaxMultiplier;
    const translateY = -mousePosition.y * parallaxMultiplier;
    return `translate(${translateX}px, ${translateY}px)`;
  };

  // TODO: Add functionality to allow users to upload/select images
  // For now, using placeholders

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 z-0 overflow-hidden bg-background"
      aria-hidden="true"
    >
      {/* Layer 1 - Deepest */}
      <BackgroundElement
        src={placeholderImages[0]}
        className="blur-sm"
        style={{ transform: calculateTransform(1) }} // Minimal parallax
      />
      <BackgroundElement
        shape="rect"
        className="w-1/3 h-1/2 top-1/4 left-10 rotate-[-15deg] blur-lg"
         style={{ transform: calculateTransform(1.5) }}
      />


      {/* Layer 2 - Middle */}
       <BackgroundElement
        src={placeholderImages[1]}
        className="w-1/4 h-3/4 top-10 right-20 opacity-15 dark:opacity-10 blur-xs"
        style={{ transform: calculateTransform(3) }} // Medium parallax
      />
       <BackgroundElement
        shape="circle"
        className="w-40 h-40 bottom-20 left-1/4"
        style={{ transform: calculateTransform(3.5) }}
      />

      {/* Layer 3 - Closest */}
       <BackgroundElement
        src={placeholderImages[2]}
        className="w-1/5 h-1/3 bottom-5 right-1/3 opacity-20 dark:opacity-15"
         style={{ transform: calculateTransform(5) }} // Max parallax
      />
       <BackgroundElement
        shape="triangle"
        className="w-24 h-24 top-20 right-1/4 rotate-[30deg] opacity-5 dark:opacity-3"
        style={{ transform: calculateTransform(5.5) }}
      />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30"></div>
    </div>
  );
}