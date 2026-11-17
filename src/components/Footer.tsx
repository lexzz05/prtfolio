import { ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio';
export function Footer() {
  return <footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} {profile.name}. Built with React & TypeScript.</span><a href="#top" aria-label="Back to top">Back to top <ArrowUp size={14} /></a></div></footer>;
}
