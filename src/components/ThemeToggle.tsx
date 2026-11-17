import { Moon, Sun } from 'lucide-react';
import type { Theme } from '../types';

type ThemeToggleProps = { theme: Theme; onToggle: () => void };

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  return (
    <button className="icon-button" type="button" onClick={onToggle} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
