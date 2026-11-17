import { useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { profile, skillGroups, projects, education } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';


const filters = ['All', 'React', 'PHP', 'Python', 'MySQL'];

export function HomePage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = useMemo(() => activeFilter === 'All' ? projects : projects.filter((project) => project.technologies.some((technology) => technology.toLowerCase() === activeFilter.toLowerCase())), [activeFilter]);

  return (
    <>
      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> Open to learning and opportunities</div>
          <p className="hero-kicker">HELLO, I'M</p>
          <h1>{profile.name}<span className="accent-text"></span></h1>
          <h2>{profile.role}</h2>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>Get in touch <Mail size={17} /></a>
          </div>
          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Profile portrait">
          <div className="portrait-orbit" />
          <div className="profile-portrait-frame">
            <img
              className="profile-portrait"
              src={new URL('../assets/profile-photo.jpg', import.meta.url).href}
              alt="Portrait of Ananthalekshmi K"
            />
          </div>
          <div className="portrait-caption"><Sparkles size={15} /> Developer in progress</div>
        </div>
        <a className="scroll-cue" href="#about"><ArrowDown size={15} /> Scroll to explore</a>
      </section>

      <section className="section container" id="about">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious mind. Practical builder." description="A quick introduction to who I am and what motivates me." />
        <div className="about-grid">
          <div className="about-copy"><p>{profile.about}</p><p>{profile.goal}</p><a className="text-link" href={`mailto:${profile.email}`}>Let's connect <ArrowRight size={16} /></a></div>
          <div className="about-note"><span className="note-icon"><Sparkles size={20} /></span><h3>My approach</h3><p>Learn by building, keep the user in mind, and improve a little with every project.</p><div className="note-line"><span>Based in</span><strong>{profile.location}</strong></div><div className="note-line"><span>Focus</span><strong>Frontend development</strong></div></div>
        </div>
      </section>

      <section className="section section-soft" id="skills"><div className="container"><SectionHeading eyebrow="WHAT I WORK WITH" title="Skills & technologies" description="Tools and technologies I have studied and used in projects." /><div className="skills-grid">{skillGroups.map((group) => <article className="skill-card" key={group.title}><h3>{group.title}</h3><div className="tag-list">{group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></article>)}</div></div></section>

      <section className="section container" id="projects"><SectionHeading eyebrow="SELECTED WORK" title="Projects that I've explored" description="A selection of academic and practice projects. Open a project to see its purpose, contribution, features, and stack." /><div className="filter-row" aria-label="Filter projects by technology">{filters.map((filter) => <button type="button" key={filter} className={`filter-button ${activeFilter === filter ? 'active' : ''}`} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>)}</div><div className="projects-grid">{filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>{filteredProjects.length === 0 && <p className="empty-state">No projects found for this technology.</p>}</section>

      <section className="section section-soft" id="education"><div className="container"><SectionHeading eyebrow="MY LEARNING PATH" title="Education" description="My academic background and learning journey." /><div className="timeline">{education.map((item) => <article className="timeline-item" key={item.title}><div className="timeline-marker" /><div className="timeline-content"><span className="timeline-period">{item.period}</span><h3>{item.title}</h3><h4>{item.institution}</h4><p>{item.description}</p></div></article>)}</div></div></section>

      <section className="section container contact-section" id="contact"><div className="contact-panel"><div><span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span><h2>Let's build something<br /><span className="accent-text">meaningful.</span></h2><p>I'm happy to connect, learn, and discuss opportunities.</p></div><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <Mail size={17} /></a><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={16} /></a><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile <ArrowUpRight size={16} /></a></div></div></section>
    </>
  );
}
