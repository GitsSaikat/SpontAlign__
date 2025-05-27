
'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingHeadingProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  cursorClassName?: string;
  loopDelay?: number; // Delay in ms before the loop restarts
}

const TypingHeading: React.FC<TypingHeadingProps> = ({
  text,
  className,
  typingSpeed = 70,
  cursorClassName = 'inline-block w-1 h-full bg-current ml-1 animate-pulse',
  loopDelay = 2000, // Default 2 seconds delay before restart
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (text.length === 0) {
      setDisplayedText('');
      return; // No typing if text is empty
    }

    let charIndex = 0;
    let currentText = '';
    let typingIntervalId: NodeJS.Timeout;
    let restartTimeoutId: NodeJS.Timeout;

    const type = () => {
      if (charIndex < text.length) {
        currentText += text.charAt(charIndex);
        setDisplayedText(currentText);
        charIndex++;
        typingIntervalId = setTimeout(type, typingSpeed);
      } else {
        // Text fully typed, schedule a restart
        restartTimeoutId = setTimeout(() => {
          charIndex = 0;
          currentText = '';
          setDisplayedText(''); // Clear the text to start over
          type(); // Start typing again
        }, loopDelay);
      }
    };

    // Start the typing effect
    // Initial clear for cases where text prop might change
    setDisplayedText('');
    type();

    // Cleanup function
    return () => {
      clearTimeout(typingIntervalId);
      clearTimeout(restartTimeoutId);
    };
  }, [text, typingSpeed, loopDelay]); // Rerun effect if text, speed, or loopDelay changes

  return (
    <h1 className={className}>
      {displayedText.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`} // Add index to key for repeating characters
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: index * (typingSpeed / 2000) }}
        >
          {char}
        </motion.span>
      ))}
      {(displayedText.length < text.length || (displayedText.length === text.length && text.length > 0)) && (
        <span
          className={cursorClassName}
          style={{ height: '1em', verticalAlign: 'bottom' }}
        ></span>
      )}
    </h1>
  );
};

export default TypingHeading;
