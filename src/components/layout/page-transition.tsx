'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      x: '100%', // Start off-screen to the right
    },
    animate: {
      opacity: 1,
      x: 0, // Slide in to the center
      transition: { duration: 0.5, ease: 'easeInOut' }, // Faster transition
    },
    exit: {
      opacity: 0,
      x: '-100%', // Slide out to the left
      position: 'absolute', // Keep exiting element in flow briefly
      width: '100%', // Prevent layout shift
      top: 0, // Ensure it stays positioned correctly during exit
      transition: { duration: 0.3, ease: 'easeInOut' }, // Slightly faster exit
    },
  };

  // Render children directly until mounted to avoid hydration mismatch
  if (!hasMounted) {
    return <main className="flex-grow container mx-auto px-4 py-8">{children}</main>;
  }

  // The outer div provides relative positioning context for the exiting element.
  return (
    <div style={{ position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname} // Key change triggers animation
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          // Apply suppressHydrationWarning here as well, although useEffect should handle the core issue
          suppressHydrationWarning
        >
          {/* Wrap children in the main tag to match layout structure */}
           <main className="flex-grow container mx-auto px-4 py-8">
              {children}
           </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
