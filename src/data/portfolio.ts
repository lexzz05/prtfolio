import type { Project, SkillGroup } from '../types';

export const profile = {
  name: 'Ananthalekshmi K',
  role: 'BCA Student · Aspiring Frontend Developer',
  location: 'Kerala, India',
  intro:
    'I enjoy turning ideas into useful, accessible web experiences. I work with modern frontend technologies and build practical applications that solve everyday problems.',
  about:
    'I am a Bachelor of Computer Applications student with an interest in web development and software engineering. I enjoy learning how applications work from interface to database, solving problems, and improving my skills by building projects.',
  goal: 'My goal is to grow as a frontend developer and contribute to user-friendly, reliable software products.',
  email: 'ananthalekshmikrish@gmail.com',
  github: 'https://github.com/lexzz05',
  linkedin: 'https://www.linkedin.com/in/ananthalekshmi-k',
};

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend', skills: ['PHP', 'Python', 'Node.js (learning)'] },
  { title: 'Database', skills: ['MySQL', 'SQL'] },
  { title: 'Tools & Concepts', skills: ['Git', 'GitHub', 'Vite', 'Responsive Design', 'REST APIs'] },
];

export const projects: Project[] = [
  {
    id: 'parkease',
    title: 'ParkEase',
    category: 'Web Application',
    summary: 'An online parking slot booking platform that helps customers find and reserve parking spaces.',
    problem: 'Finding available parking can take time. ParkEase brings slot discovery, booking, and booking management into one web application.',
    contribution: 'Worked on the PHP and MySQL application, customer and owner workflows, booking pages, and interface styling.',
    features: ['Customer, owner, and admin modules', 'Slot listing and booking management', 'Booking approval and cancellation statuses', 'Payment workflow and booking history'],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'PHPMailer'],
  },
  {
    id: 'user-management-dashboard',
    title: 'User Management Dashboard',
    category: 'Dashboard',
    summary: 'A React and TypeScript dashboard for browsing, searching, filtering, and viewing user information from an API.',
    problem: 'A long user list is difficult to explore without search, sorting, filtering, and a clear detail view.',
    contribution: 'Planned reusable React components and dashboard features including API data display, search, sorting, and user details.',
    features: ['Fetch users from JSONPlaceholder API', 'Search by name, username, and email', 'Sort and filter user records', 'Dedicated user detail view'],
    technologies: ['React', 'TypeScript', 'Vite', 'Axios', 'React Router', 'CSS'],
  },
  {
    id: 'accessible-learning-platform',
    title: 'Accessible Learning Platform',
    category: 'Accessibility',
    summary: 'A Django-based educational application concept designed with accessibility support for visually impaired students.',
    problem: 'Learning platforms should make educational content easier to access for students with different interaction needs.',
    contribution: 'Worked on the project concept, role-based modules, and voice-interaction/accessibility requirements.',
    features: ['Student, faculty, and admin modules', 'Voice input concept using browser speech recognition', 'Accessible learning content and notes', 'Role-based application workflow'],
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Web Speech API'],
  },
];

export const education = [
  {
    period: '2023 – 2026',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Ilahia College of Arts and Science, Pezhakkapilly',
    description: 'Coursework includes programming, databases, software engineering, and web development.',
  },
  {
    period: 'Previous education',
    title: 'Higher Secondary / School Education',
    institution: 'Parama Bhattara Kendriya Vidyalayam, Vadayampady',
    description: 'Foundational education.',
  },
];
