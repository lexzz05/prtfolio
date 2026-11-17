import { ArrowLeft, ArrowUpRight, CheckCircle2, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/portfolio';

export function ProjectDetailsPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <section className="container not-found"><h1>Project not found</h1><p>The project may have been moved or the link is incorrect.</p><Link className="button button-primary" to="/">Back to portfolio</Link></section>;
  }

  return <section className="section container detail-page"><Link className="back-link" to="/"><ArrowLeft size={16} /> Back to all projects</Link><span className="eyebrow">{project.category}</span><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p><div className="detail-grid"><article className="detail-main"><div className="detail-block"><h2>Problem / purpose</h2><p>{project.problem}</p></div><div className="detail-block"><h2>My contribution</h2><p>{project.contribution}</p></div><div className="detail-block"><h2>Key features</h2><ul className="feature-list">{project.features.map((feature) => <li key={feature}><CheckCircle2 size={17} />{feature}</li>)}</ul></div></article><aside className="detail-aside"><h3>Technology stack</h3><div className="tag-list">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>{project.githubUrl && <a className="button button-secondary full-button" href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={17} /> View GitHub <ArrowUpRight size={15} /></a>}{project.demoUrl && <a className="button button-primary full-button" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}<p className="aside-note">Add your actual repository and demo URLs in <code>src/data/portfolio.ts</code> when they are ready.</p></aside></div></section>;
}
