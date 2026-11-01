import Link from "next/link";
import type { Project } from "../../lib/projects";
import ExperienceAction from "./experience/ExperienceAction";
import "./project-evidence.css";

export default function ProjectCaseStudy({ project }: { project: Project }) {
  return <main id="main" tabIndex={-1} className="project-case container">
    <Link href="/work" className="back-link">← All selected work</Link>
    <p className="eyebrow">{project.category}</p><h1>{project.name}</h1><p className="project-case-lead">{project.headline}</p>
    <p className="project-case-summary">{project.summary}</p>
    <dl className="project-case-facts"><div><dt>Contribution</dt><dd>{project.role}</dd></div><div><dt>Delivery</dt><dd>Production website / platform</dd></div><div><dt>Public project</dt><dd><a href={project.url} target="_blank" rel="noopener noreferrer">{project.domain} ↗</a></dd></div></dl>
    {project.metrics.length > 0 && <dl className="project-evidence-metrics project-case-metrics">{project.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>}
    <div className="project-case-story">{[{ title: "The context", copy: project.context }, { title: "Our contribution", copy: project.delivery }, { title: "What was delivered", copy: project.outcome }, { title: "What this means for your project", copy: project.lesson }].map((item, index) => <section key={item.title}><span className="eyebrow">0{index + 1}</span><div><h2>{item.title}</h2><p>{item.copy}</p></div></section>)}</div>
    <aside className="project-case-evidence" aria-label="Project evidence notes"><h2>Project notes</h2><p>{project.evidenceNote}</p></aside>
    <section className="project-case-next"><p className="eyebrow">YOUR NEXT STEP</p><h2>What needs to work<br /><span>better for you?</span></h2><p>Bring the problem, the current workflow or the idea. We will agree what a useful first improvement would look like.</p><ExperienceAction panel="enquiry" className="button button-primary" startingPoint={`I would like to discuss a project inspired by the ${project.name} project.`}>Discuss your project ↗</ExperienceAction><Link href="/work">All selected work ↗</Link></section>
  </main>;
}
