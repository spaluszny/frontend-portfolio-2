// components/TabManager.tsx
'use client';

import { useEffect } from 'react';

interface TabManagerProps {
  activeTitle: string;
  inactiveTitle: string;
}

export default function TabManager({ activeTitle, inactiveTitle }: TabManagerProps) {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = inactiveTitle;
      } else {
        document.title = activeTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeTitle, inactiveTitle]);

  return null; 
}
