import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../types';

type NavbarProps = { theme: Theme; onToggleTheme: () => void };
const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Education', to: '/#education' },
  { label: 'Contact', to: '/#contact' },
];

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">A</span><span>AK<span className="accent-text"></span></span>
        </NavLink>
        <button className="icon-button menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.label} href={link.to} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  );
}
