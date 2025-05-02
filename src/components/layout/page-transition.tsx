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
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Key change triggers animation
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3, ease: 'easeInOut' }} // Faster transition duration
        style={{ position: 'relative' }} // Needed for positioning exiting element
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
