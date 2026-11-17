export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  category: 'Web Application' | 'Dashboard' | 'Accessibility';
  summary: string;
  problem: string;
  contribution: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}
