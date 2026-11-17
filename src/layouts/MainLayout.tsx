
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import type { Theme } from '../types';

type MainLayoutProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function MainLayout({ theme, onToggleTheme }: MainLayoutProps) {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      [
        '.hero-copy',
        '.hero-visual',
        '.section-heading',
        '.about-copy',
        '.about-note',
        '.skill-card',
        '.project-card',
        '.timeline-item',
        '.contact-panel',
        '.detail-block',
        '.detail-aside',
        '.not-found',
      ].join(',')
    );

    // Respect users who prefer reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => {
        element.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -45px 0px',
      }
    );

    elements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      element.style.setProperty(
        '--reveal-delay',
        `${Math.min(index % 4, 3) * 90}ms`
      );
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
                 