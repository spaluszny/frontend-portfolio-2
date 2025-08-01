'use client';
import { useTheme } from "next-themes";
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      className="hidden md:sticky md:top-10 md:right-20 hover:pointer" 
      onClick={toggleTheme}
      suppressHydrationWarning={true}
    >
      <Sun className='h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden hover:cursor-pointer' />
      <Moon className='hidden h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:block hover:cursor-pointer' />
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}