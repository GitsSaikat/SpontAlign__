'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
// Removed unused imports: useRef, navItems

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);
  // Removed unused state: direction
  // Removed unused ref: previousPathnameRef

  useEffect(() => {
    setHasMounted(true); // Component has mounted, safe to use browser APIs
  }, []);

  // Removed useEffect that calculated direction - no longer needed

  // Define animation variants for simple fade-out, pause, fade-in
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5, // Fade-in duration
        delay: 1,      // 1-second pause after exit completes
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3, // Fade-out duration
        ease: 'easeInOut',
      },
    },
  };


  // Avoid rendering AnimatePresence and motion.div on the server or before mount
  // Render structure that matches client-side to avoid layout shifts if possible
   if (!hasMounted) {
     return (
       // Use suppressHydrationWarning here because hasMounted logic causes server/client mismatch initially
       <div style={{ position: 'relative', width: '100%' }} suppressHydrationWarning>
         <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
       </div>
     );
   }


  return (
    // Outer div provides context and prevents layout shifts.
    // Use suppressHydrationWarning here because hasMounted logic causes server/client mismatch initially
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }} suppressHydrationWarning>
      <AnimatePresence
        mode="wait" // Ensures exit animation completes before enter animation starts
        initial={false} // Don't animate initial component mount
      >
        <motion.div
          key={pathname} // Key change triggers animation
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants} // Use the updated variants
          suppressHydrationWarning // Suppress warning here too, due to dynamic variants
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
