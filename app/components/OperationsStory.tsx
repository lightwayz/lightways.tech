import Image from "next/image";
import WorkflowComparison from "./experience/WorkflowComparison";
export default function OperationsStory() {
  return (
    <article className="operations-story" aria-labelledby="operations-story-title">
      <div className="operations-intro">
        <p className="eyebrow">A PRACTICAL POSSIBILITY</p>
        <h3 id="operations-story-title">Give everyday work<br />a clearer way forward.</h3>
        <p>When requests, tasks and follow-ups are scattered, people spend time finding the next step. A focused workflow can make responsibilities easier to understand and progress easier to follow.</p>
      </div>
      <figure className="brand-story-art">
        <Image src="/images/business/lightways-clear-path.webp" alt="Scattered yellow light strands joining into a clear path towards an open horizon." width={1600} height={900} sizes="(max-width: 800px) 90vw, (max-width: 1500px) 80vw, 1230px" />
        <figcaption>From complexity to clarity. Original conceptual artwork for Lightways.Tech.</figcaption>
      </figure>
      <figure className="workflow-illustration">
        <div className="workflow-label"><span className="signal-dot" /> ILLUSTRATIVE WORKFLOW</div>
        <ol className="workflow-stages">
          <li><span className="micro-label">01 / CAPTURE</span><h4>Bring requests together</h4><p>A clear starting point for incoming work.</p></li>
          <li><span className="micro-label">02 / ORGANISE</span><h4>Make the next step clear</h4><p>Identify the task, responsibility and status.</p></li>
          <li><span className="micro-label">03 / FOLLOW THROUGH</span><h4>Keep people in control</h4><p>Review progress and approve the next action.</p></li>
        </ol>
        <figcaption>Concept illustration of a possible workflow. The solution and scope are defined with each customer.</figcaption>
      </figure>
      <WorkflowComparison />
      <div className="operations-outlook">
        <h4>Start with the work. Build around the people.</h4>
        <p>Your first priority might be enquiries, appointments, reporting or another repetitive process. We map how it works today, agree what would make it better and identify a manageable first improvement.</p>
        <p>The aim is less administrative friction, clearer responsibilities and more capacity for the work that matters. We agree relevant measures at the start and review the evidence together as your needs evolve.</p>
        <a href="#contact" className="text-link">Discuss your operational challenges <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  );
}
