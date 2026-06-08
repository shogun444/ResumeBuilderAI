'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export default function ClassyThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-36 h-8 bg-neutral-200/50 dark:bg-neutral-800/50 rounded-full animate-pulse border border-neutral-200 dark:border-neutral-800" />
    );
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = currentTheme === 'dark';

  return (
    <div className="relative flex items-center bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/50 p-1 rounded-full w-fit">
      {/* Sliding Active Highlight */}
      <motion.div
        className="absolute bg-white dark:bg-neutral-800 shadow-sm rounded-full h-6"
        initial={false}
        animate={{
          left: isDark ? 'calc(50% + 2px)' : '4px',
          width: 'calc(50% - 6px)',
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      />

      {/* Light Button */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setTheme('light')}
        className={`relative z-10 flex items-center justify-center gap-1.5 px-3.5 py-0.5 text-xs font-semibold rounded-full transition-colors duration-200 select-none ${
          !isDark
            ? 'text-neutral-900'
            : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
        }`}
        style={{ width: '4.25rem' }}
      >
        <Sun className="h-3.5 w-3.5" />
        <span>Light</span>
      </motion.button>

      {/* Dark Button */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setTheme('dark')}
        className={`relative z-10 flex items-center justify-center gap-1.5 px-3.5 py-0.5 text-xs font-semibold rounded-full transition-colors duration-200 select-none ${
          isDark
            ? 'text-neutral-100'
            : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300'
        }`}
        style={{ width: '4.25rem' }}
      >
        <Moon className="h-3.5 w-3.5" />
        <span>Dark</span>
      </motion.button>
    </div>
  );
}
