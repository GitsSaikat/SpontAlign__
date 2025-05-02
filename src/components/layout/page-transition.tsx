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
    setHasMounted(true); // Component has mounted, safe to use browser APIs
  }, []);


  useEffect(() => {
    // Only run transition logic on the client after mount
    if (!hasMounted) return;

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
        setDirection('forward'); // Moving right in nav -> Enter from RIGHT
      } else if (currentIndex < previousIndex) {
        setDirection('backward'); // Moving left in nav -> Enter from LEFT
      } else {
        setDirection('default'); // Same page or not in nav
      }
    } else {
      setDirection('default'); // Default if either path is not in primary nav
    }

    // Update previous pathname for next transition
    previousPathnameRef.current = pathname;

  }, [pathname, hasMounted]); // Depend on pathname and mount state


  // Define animation variants based on the determined direction
  // - Forward (move right in nav): New page slides in from RIGHT, Old page slides out to LEFT
  // - Backward (move left in nav): New page slides in from LEFT, Old page slides out to RIGHT
  const variants = {
    forward: { // Slides in from RIGHT
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }, // 1s duration
      exit: { x: '-100%', opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }, // Exit to LEFT
    },
    backward: { // Slides in from LEFT
      initial: { x: '-100%', opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }, // 1s duration
      exit: { x: '100%', opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }, // Exit to RIGHT
    },
    default: { // Fallback (simple fade or default slide LTR)
      initial: { x: '100%', opacity: 0 }, // Default enter from right
      animate: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }, // 1s duration
      exit: { x: '-100%', opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }, // Default exit to left
    },
  };

  // Select the correct animation variant
  const currentVariants = variants[direction];

  // Render children directly until mounted to avoid hydration mismatch on initial load
  if (!hasMounted) {
     // Avoid rendering AnimatePresence and motion.div on the server or before mount
    return <main className="flex-grow container mx-auto px-4 py-8">{children}</main>;
  }

  return (
    // The outer div provides relative positioning context and prevents layout shifts.
    // Added overflow: 'hidden' to ensure content is clipped during transition.
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatePresence
        mode="wait" // Ensures exit animation completes before enter animation starts
        initial={false} // Don't animate initial component mount
      >
        <motion.div
          key={pathname} // Key change triggers animation
          initial="initial"
          animate="animate"
          exit="exit"
          variants={currentVariants}
          // Applying suppressHydrationWarning here just in case, although the !hasMounted check should prevent issues
          suppressHydrationWarning
        >
          {/* Wrap children in the main tag to maintain layout structure */}
           <main className="flex-grow container mx-auto px-4 py-8">
              {children}
           </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
