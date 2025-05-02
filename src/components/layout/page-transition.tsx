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
      y: '50px', // Start slightly below the final position
    },
    animate: {
      opacity: 1,
      y: 0, // Slide up to the final position
      transition: {
        duration: 0.5, // Animation duration for entering page
        ease: 'easeInOut',
        // No explicit delay needed here if mode="wait" and exit duration provide the pause
      },
    },
    exit: {
      opacity: 0,
      // Optional: Add a slight downward movement on exit if desired
      // y: '20px',
      transition: {
        duration: 0.3, // Duration for the disappearing animation (acts as the pause)
        ease: 'easeInOut',
      },
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
