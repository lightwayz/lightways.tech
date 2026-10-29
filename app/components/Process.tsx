const stages = [
  [
    "Think",
    "Listen first. Understand the problem and define what a useful outcome would look like.",
  ],
  [
    "Design",
    "Make the idea tangible. Map the experience, test assumptions and identify the constraints.",
  ],
  [
    "Build",
    "Create with care. Keep the architecture focused and the experience understandable.",
  ],
  [
    "Evolve",
    "Learn from use. Improve with feedback and evidence, rather than assumptions.",
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
        <ol className="process-grid">
          {stages.map(([title, copy], index) => (
            <li key={title}>
              <span className="micro-label">0{index + 1}</span>
              <h3>
                {title}
                <span aria-hidden="true">↗</span>
              </h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
