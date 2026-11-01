import Link from "next/link";
import { projects } from "../../lib/projects";
import "./project-evidence.css";

export function ProjectCards() {
  return <div className="project-evidence-grid">{projects.map(project => <article key={project.slug} className="project-evidence-card">
    <div className="project-evidence-identity" aria-hidden="true"><span>{project.mark}</span><small>{project.domain}</small></div>
    <div className="project-evidence-body">
      <p className="eyebrow">{project.category}</p>
      <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
      <p>{project.summary}</p>
      <dl className="project-evidence-role"><dt>Our role</dt><dd>{project.role}</dd></dl>
      {project.metrics.length > 0 && <dl className="project-evidence-metrics">{project.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>}
      <div className="project-evidence-actions"><Link href={`/work/${project.slug}`}>Explore the project <span aria-hidden="true">↗</span></Link><a href={project.url} target="_blank" rel="noopener noreferrer">View live website <span aria-hidden="true">↗</span></a></div>
      {project.metrics.length > 0 && <p className="project-evidence-note">Lightways-reported use, 31 October 2026. Ticket volume spans issuance, sales and receipt.</p>}
    </div>
  </article>)}</div>;
}

export default function ProjectEvidence() {
  return <section id="work" className="section project-evidence" aria-labelledby="project-evidence-title"><div className="container">
    <div className="section-topline"><p className="eyebrow">SELECTED WORK</p><span className="micro-label">BUILT. DEPLOYED. IN USE.</span></div>
    <div className="section-intro"><h2 id="project-evidence-title">The work should<br /><span>speak for itself.</span></h2><p>From event ticketing to professional services: projects we have built from scratch and delivered to production. Explore the work, the contribution and the evidence behind it.</p></div>
    <ProjectCards />
    <div className="project-evidence-principle"><h3>Delivery is where trust begins.</h3><p>Our standard is useful software, a considered handover and a clear path for maintenance and future change. We discuss scope, responsibilities and capacity with each client, then build around the people who will use the product.</p><Link href="/work">See our project notes <span aria-hidden="true">↗</span></Link></div>
  </div></section>;
}
