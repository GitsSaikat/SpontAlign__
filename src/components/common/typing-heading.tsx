
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
  typingSpeed = 70,
  cursorClassName = 'inline-block w-1 h-full bg-current ml-1 animate-pulse',
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    if (text.length === 0) {
      return; // No typing if text is empty
    }

    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [text, typingSpeed]);

  return (
    <h1 className={className}>
      {displayedText.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: index * (typingSpeed / 2000) }} // Slight delay per char for smoother appearance
        >
          {char}
        </motion.span>
      ))}
      {/* Show cursor if typing is in progress OR if typing is complete and text was not empty.
          The 'animate-pulse' class handles the blinking. */}
      {(displayedText.length < text.length || (displayedText.length === text.length && text.length > 0)) && (
        <span
          className={cursorClassName}
          style={{ height: '1em', verticalAlign: 'bottom' }} // Ensures cursor height matches text
        ></span>
      )}
    </h1>
  );
};

export default TypingHeading;
