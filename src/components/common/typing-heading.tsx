
'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
// Removed motion import as it's no longer used for individual characters

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
  // Updated default cursor class to use a sharper blink and w-0.5 for ~2px width
  cursorClassName = 'inline-block w-0.5 bg-current ml-1 animate-blink',
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
      {displayedText}
      {/* Cursor is visible while typing or when typing is complete before loop */}
      {(displayedText.length < text.length || (displayedText.length === text.length && text.length > 0)) && (
        <span
          className={cursorClassName}
          style={{ height: '1em', verticalAlign: 'bottom' }}
          // The animation (e.g., animate-blink) is handled by the CSS class
        ></span>
      )}
    </h1>
  );
};

export default TypingHeading;
