
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import { navItems } from './header'; // Import navItems to get the order

// Create a map for quick index lookup
const navItemPaths = navItems.map(item => item.href);
const pathIndexMap = new Map(navItemPaths.map((path, index) => [path, index]));

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);
  const previousPathnameRef = useRef<string | null>(null);
  const [direction, setDirection] = useState<'forward' | 'backward' | 'default'>('default');

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (previousPathnameRef.current === null) {
      // Initial load, no animation direction needed yet
      previousPathnameRef.current = pathname;
      return;
    }

    const previousIndex = pathIndexMap.get(previousPathnameRef.current);
    const currentIndex = pathIndexMap.get(pathname);

    // Determine direction based on nav order
    if (previousIndex !== undefined && currentIndex !== undefined) {
      if (currentIndex > previousIndex) {
        setDirection('forward'); // Moving right in nav
      } else if (currentIndex < previousIndex) {
        setDirection('backward'); // Moving left in nav
      } else {
        setDirection('default'); // Same page or not in nav
      }
    } else {
      setDirection('default'); // Default if either path is not in primary nav
    }

    // Update previous pathname for next transition
    previousPathnameRef.current = pathname;

  }, [pathname]);


  // Define animation variants based on user's request:
  // - Forward (right in nav): Slide in from RIGHT
  // - Backward (left in nav): Slide in from LEFT
  const variants = {
    forward: { // Slides in from RIGHT
      initial: { x: '100%', opacity: 0 }, // Start from right
      animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }, // 0.5s duration
      exit: { x: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } }, // 0.5s duration
    },
    backward: { // Slides in from LEFT
      initial: { x: '-100%', opacity: 0 }, // Start from left
      animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }, // 0.5s duration
      exit: { x: '100%', opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } }, // 0.5s duration
    },
    default: { // Fallback (e.g., simple slide LTR like original forward)
      initial: { x: '-100%', opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }, // 0.5s duration
      exit: { x: '100%', opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } }, // 0.5s duration
    },
  };

  // Render children directly until mounted to avoid hydration mismatch
  if (!hasMounted) {
    return <main className="flex-grow container mx-auto px-4 py-8">{children}</main>;
  }

  // Apply the correct animation variant based on the determined direction
  const currentVariants = variants[direction];

  return (
    // The outer div provides relative positioning context and prevents layout shifts.
    <div style={{ position: 'relative', overflowX: 'hidden' }}> {/* Prevent horizontal scrollbar during animation */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname} // Key change triggers animation
          initial="initial"
          animate="animate"
          exit="exit"
          variants={currentVariants}
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

