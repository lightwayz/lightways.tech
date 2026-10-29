import ProcessIcon from "./ProcessIcon";
import ProcessFlow from "./experience/ProcessFlow";
import BeforeWeBegin from "./BeforeWeBegin";
const stages = [
  [
    "Think",
    "Listen to the people doing the work. Map the current process, identify the friction and agree a useful outcome. Establish a starting point so there is something meaningful to compare later.",
  ],
  [
    "Design",
    "Make the proposed change tangible. Test assumptions and consider devices, connectivity, accessibility and data needs. Agree the scope, price, milestones and acceptance criteria before implementation.",
  ],
  [
    "Build",
    "Build a focused solution and review it against the agreed requirements. Involve the people who will use it, document the handover and provide the training agreed for your project.",
  ],
  [
    "Evolve",
    "Review what happens in practice. Compare the result with the starting point, listen to feedback and prioritise the next improvement. Agree any ongoing support or additional work explicitly.",
  ],
];
export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-topline">
          <p className="eyebrow">04 / OUR APPROACH</p>
          <span className="micro-label">PROGRESS IS A PRACTICE</span>
        </div>
        <h2>
          Think. Design.
          <br />
          <span>Build. Evolve.</span>
        </h2>
        <ProcessFlow><ol className="process-grid">
          {stages.map(([title, copy], index) => (
            <li key={title}>
              <ProcessIcon stage={index} />
              <span className="micro-label">0{index + 1}</span>
              <h3>
                {title}
                <span aria-hidden="true">↗</span>
              </h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol></ProcessFlow>
        <div className="growth-story" aria-labelledby="growth-title">
          <div><p className="eyebrow">BUILT FOR WHAT COMES NEXT</p><h3 id="growth-title">Continuous improvement.<br />A stronger foundation for growth.</h3></div>
          <div>
            <p>A useful system should make sense to the people relying on it. We plan for a clear handover, ownership of the work and the support arrangements agreed with you. Your business should understand what it has, how it works and what it costs to maintain.</p>
            <p>As your needs change, we can review the evidence together: time spent on a task, missed follow-ups, avoidable errors or the ease of completing a customer journey. We choose measures relevant to your project and only claim improvements the evidence supports.</p>
            <p>Better systems can give your team more capacity to serve customers and pursue opportunities. Sustainable growth also depends on your market, people and decisions. Our role is to strengthen the way technology supports that work, one useful improvement at a time.</p>
            <a href="#contact" className="text-link">Tell us what is slowing you down <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <BeforeWeBegin />
      </div>
    </section>
  );
}
