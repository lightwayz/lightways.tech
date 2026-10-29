"use client";
import { useState, type CSSProperties } from "react";

export default function WorkflowComparison() {
  const [reveal, setReveal] = useState(50);
  return <figure className="workflow-comparison" aria-labelledby="comparison-title">
    <div className="comparison-heading"><p className="eyebrow">EXPLORE THE DIFFERENCE</p><h4 id="comparison-title">From scattered to organised.</h4><p>Reveal two ways of viewing the same fictional work. Your own workflow would be explored and scoped with you.</p></div>
    <div className="comparison-stage" style={{ "--reveal-edge": `${100 - reveal}%` } as CSSProperties} aria-hidden="true">
      <div className="comparison-scattered"><span className="comparison-view-label">SCATTERED</span><div className="sample-note note-one"><small>INBOX / DEMO-01</small><strong>New enquiry</strong><span>Who is following up?</span></div><div className="sample-note note-two"><small>NOTES / DEMO-02</small><strong>Prepare a summary</strong><span>Find the latest inputs.</span></div><div className="sample-note note-three"><small>CHAT / DEMO-03</small><strong>Review next step</strong><span>Where is the current status?</span></div></div>
      <div className="comparison-organised"><span className="comparison-view-label">ORGANISED</span><div className="sample-table"><div className="sample-table-head"><span>Sample work</span><span>Next step</span></div><div><strong>DEMO-01 / Enquiry</strong><span>Assign responsibility</span></div><div><strong>DEMO-02 / Summary</strong><span>Review inputs</span></div><div><strong>DEMO-03 / Review</strong><span>Confirm next action</span></div></div></div>
      <div className="comparison-divider"><span>↔</span></div>
    </div>
    <figcaption><label htmlFor="workflow-reveal">Reveal the organised view <span>{reveal}%</span></label><input id="workflow-reveal" type="range" min="0" max="100" step="1" value={reveal} aria-valuetext={`${reveal} percent organised view`} onChange={event => { const value = Number(event.target.value); if (Number.isFinite(value)) setReveal(Math.max(0, Math.min(100, value))); }} />
      <div className="comparison-actions"><button type="button" onClick={() => setReveal(0)}>Show scattered</button><button type="button" onClick={() => setReveal(100)}>Show organised</button></div>
      <p>Illustrative comparison with fictional records. The organised view makes the next action explicit; it does not claim a measured customer result.</p>
      <noscript><p className="comparison-no-script">The illustration shows a split view. Scattered work sits in separate messages and notes; organised work lists each request with a clear next action.</p></noscript>
    </figcaption>
  </figure>;
}
