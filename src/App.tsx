import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useTheme } from './hooks/useTheme';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  return <Routes><Route element={<MainLayout theme={theme} onToggleTheme={toggleTheme} />}><Route path="/" element={<HomePage />} /><Route path="/projects/:projectId" element={<ProjectDetailsPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes>;
}

export default function App() {
  return <BrowserRouter><AppContent /></BrowserRouter>;
}
