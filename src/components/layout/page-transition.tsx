'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Key change triggers animation
        initial={{ opacity: 0, y: 15 }} // Start slightly down and faded out
        animate={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
        exit={{ opacity: 0, y: -15 }} // Exit slightly up and faded out
        transition={{ duration: 0.25, ease: 'easeInOut' }} // Adjust duration/easing as needed
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
