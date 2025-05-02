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
  // Default direction can be 'forward' or based on initial load logic if needed
  const [direction, setDirection] = useState<'forward' | 'backward' | 'default'>('forward');


  useEffect(() => {
    setHasMounted(true); // Component has mounted, safe to use browser APIs
  }, []);

  useEffect(() => {
    // Only run transition logic on the client after mount
    if (!hasMounted) return;

    if (previousPathnameRef.current === null) {
      // Initial load, set initial pathname
      previousPathnameRef.current = pathname;
      // Optionally set initial direction to 'default' or 'forward' based on desired first load behavior
      setDirection('forward'); // Example: Default initial load slides in from right
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
        setDirection('default'); // Same page or not in nav (uses forward logic)
      }
    } else {
      setDirection('default'); // Default if either path is not in primary nav (uses forward logic)
    }

    // Update previous pathname for next transition
    previousPathnameRef.current = pathname;

  }, [pathname, hasMounted]); // Depend on pathname and mount state


  // Define animation variants based on the determined direction
  const variants = {
    forward: { // Enter from RIGHT
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
      exit: { x: '-100%', opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }, // Exit to LEFT
    },
    backward: { // Enter from LEFT
      initial: { x: '-100%', opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
      exit: { x: '100%', opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }, // Exit to RIGHT
    },
    default: { // Fallback (same as forward)
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
      exit: { x: '-100%', opacity: 0, transition: { duration: 1, ease: 'easeInOut' } },
    },
  };

  // Select the correct animation variant
  const currentVariants = direction === 'backward' ? variants.backward : variants.forward; // Use forward for 'default' as well

  // Render children directly until mounted to avoid hydration mismatch on initial load
  if (!hasMounted) {
     // Avoid rendering AnimatePresence and motion.div on the server or before mount
     // Render structure that matches client-side to avoid layout shifts if possible
     return <div style={{ position: 'relative', width: '100%' }}><main className="flex-grow container mx-auto px-4 py-8">{children}</main></div>;
  }


  return (
    // The outer div provides relative positioning context and prevents layout shifts.
    // Ensure it takes full width and clips overflow.
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
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
          suppressHydrationWarning // Add suppressHydrationWarning
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
