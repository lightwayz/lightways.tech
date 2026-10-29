import HumanSignal from "./experience/HumanSignal";
export default function Philosophy() {
  return (
    <section id="philosophy" className="section philosophy">
      <div className="container">
        <div className="section-topline">
          <p className="eyebrow">01 / OUR PHILOSOPHY</p>
          <span className="micro-label">THE WAY WE SEE IT</span>
        </div>
        <div className="philosophy-grid">
          <h2>
            Ideas are easy.
            <br />
            Execution is common.
            <br />
            <span>Intelligence is rare.</span>
          </h2>
          <div className="philosophy-copy">
            <p className="lead">That’s where Lightways lives.</p>
            <p>
              We build technology to reduce your workload, respect your
              circumstances and give you more room to move forward.
            </p>
            <p>
              Our starting point is human: understand the problem, question the
              assumptions, then choose the technology. Progress matters when it
              makes a meaningful difference to people.
            </p>
            <p>
              For a business, that means making everyday work easier to manage:
              understanding what slows people down, improving the systems around
              them and helping the team use those improvements with confidence.
              Our ambition is lasting usefulness, from the first practical change
              to the next stage of your business.
            </p>
            <a href="#process" className="text-link">
              Discover our approach <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        <HumanSignal />
      </div>
    </section>
  );
}
