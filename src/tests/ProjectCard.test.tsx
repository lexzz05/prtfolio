import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolio';

describe('ProjectCard', () => {
  it('shows the project title and a working details link', () => {
    render(<MemoryRouter><ProjectCard project={projects[0]} /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'ParkEase' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view details/i })).toHaveAttribute('href', '/projects/parkease');
  });
});
