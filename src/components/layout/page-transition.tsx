// src/components/layout/page-transition.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import { navItems } from './header'; // Assuming navItems are exported from header.tsx

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [direction, setDirection] = useState<'left' | 'right' | 'none'>('none');
  const [hasMounted, setHasMounted] = useState(false);
  const previousPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (previousPathnameRef.current !== null) {
      const previousIndex = navItems.findIndex(item => item.href === previousPathnameRef.current);
      const currentIndex = navItems.findIndex(item => item.href === pathname);

      if (previousIndex !== -1 && currentIndex !== -1) {
        if (currentIndex > previousIndex) {
          setDirection('right'); // Sliding new page from the right
        } else if (currentIndex < previousIndex) {
          setDirection('left'); // Sliding new page from the left
        } else {
          setDirection('none'); // No slide for same index (e.g., refresh)
        }
      } else {
        setDirection('none'); // Default if path not in nav or first load
      }
    }
    previousPathnameRef.current = pathname;
  }, [pathname]);

  const pageVariants = {
    initialPage: {
      x: direction === 'right' ? '100%' : direction === 'left' ? '-100%' : '0%',
      opacity: 0,
      position: 'absolute' as 'absolute', // Keep exiting page in flow
      width: '100%',
    },
    animatePage: {
      x: '0%',
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
      position: 'relative' as 'relative', // New page takes space
    },
    exitPage: {
      x: direction === 'right' ? '-100%' : direction === 'left' ? '100%' : '0%',
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
      position: 'absolute' as 'absolute', // Keep exiting page in flow
      width: '100%',
    },
  };
  
  if (!hasMounted) {
    return (
      <div style={{ position: 'relative', width: '100%' }} suppressHydrationWarning>
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }} suppressHydrationWarning>
      <AnimatePresence 
        mode="wait" 
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={pathname}
          initial="initialPage"
          animate="animatePage"
          exit="exitPage"
          variants={pageVariants}
          className="w-full" // let content define height, ensure it takes full width
          suppressHydrationWarning
        >
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
