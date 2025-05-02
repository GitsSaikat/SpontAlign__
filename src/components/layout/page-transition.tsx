'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const variants = {
    initial: {
      opacity: 0,
      x: '100%', // Start off-screen to the right
    },
    animate: {
      opacity: 1,
      x: 0, // Slide in to the center
    },
    exit: {
      opacity: 0,
      x: '-100%', // Slide out to the left
      position: 'absolute', // Keep exiting element in flow briefly
      width: '100%', // Prevent layout shift
      top: 0, // Ensure it stays positioned correctly during exit
    },
  };

  return (
    // Added relative positioning to the outer container for AnimatePresence context
    <div style={{ position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname} // Key change triggers animation
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3, ease: 'easeInOut' }} // Faster transition duration
          // Removed inline style, relying on variants
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
