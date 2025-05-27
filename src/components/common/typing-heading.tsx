'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingHeadingProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  cursorClassName?: string;
}

const TypingHeading: React.FC<TypingHeadingProps> = ({
  text,
  className,
  typingSpeed = 100,
  cursorClassName = 'inline-block w-1 h-full bg-current ml-1 animate-pulse',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
        // Keep cursor blinking after typing is done
        setTimeout(() => {
            // Optionally hide cursor after some time
            // setShowCursor(false);
        }, 2000); // Blinks for 2 more seconds
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [text, typingSpeed]);

  // Cursor blink effect (can be also done with CSS animation)
  useEffect(() => {
    if (displayedText.length === text.length) {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    } else {
        setShowCursor(true); // Keep cursor solid while typing
    }
  }, [displayedText, text.length]);


  return (
    <h1 className={className}>
      {displayedText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: index * (typingSpeed / 2000) }}
        >
          {char}
        </motion.span>
      ))}
      {showCursor && displayedText.length < text.length && <span className={cursorClassName} style={{ height: '1em', verticalAlign: 'bottom' }}></span>}
      {showCursor && displayedText.length === text.length && <span className={cursorClassName} style={{ height: '1em', verticalAlign: 'bottom' }}></span>}
    </h1>
  );
};

export default TypingHeading;
