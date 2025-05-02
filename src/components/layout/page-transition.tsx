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
      x: 0, // Slide to the center
      transition: {
        duration: 0.4, // Adjust duration for smoothness
        ease: 'easeOut', // Use easeOut for entry
      },
    },
    exit: {
      opacity: 0,
      x: '-100%', // Slide off-screen to the left
      transition: {
        duration: 0.3, // Adjust duration for smoothness
        ease: 'easeIn', // Use easeIn for exit
      },
    },
  };

  // Render children directly until mounted to avoid hydration mismatch
  if (!hasMounted) {
    // Ensure the main tag is present for initial render to match server structure
    return <main className="flex-grow container mx-auto px-4 py-8">{children}</main>;
  }

  // The outer div provides relative positioning context and prevents layout shifts.
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}> {/* Added overflow hidden */}
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
