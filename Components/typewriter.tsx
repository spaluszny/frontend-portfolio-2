
'use client';
import React, { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, speed = 100 }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('\u00A0'); // Non-breaking space placeholder

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

export default TypeWriter;