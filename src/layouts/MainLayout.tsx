import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import type { Theme } from '../types';

type MainLayoutProps = { theme: Theme; onToggleTheme: () => void };
export function MainLayout({ theme, onToggleTheme }: MainLayoutProps) {
  return <><Navbar theme={theme} onToggleTheme={onToggleTheme} /><main><Outlet /></main><Footer /></>;
}
