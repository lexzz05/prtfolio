import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

type ProjectCardProps = { project: Project };
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-top"><span className="project-category">{project.category}</span><span className="project-number">/{project.id === 'parkease' ? '01' : project.id === 'user-management-dashboard' ? '02' : '03'}</span></div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tag-list">{project.technologies.slice(0, 4).map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
      <div className="project-actions">
        <Link className="text-link" to={`/projects/${project.id}`}>View details <ArrowUpRight size={16} /></Link>
        {project.githubUrl && <a className="icon-link" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github size={17} /></a>}
      </div>
    </article>
  );
}
