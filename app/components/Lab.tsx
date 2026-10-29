import Link from "next/link";
import Arrow from "./Arrow";
export default function Lab() {
  return (
    <section id="lab" className="section lab">
      <div className="container">
        <div className="section-topline">
          <p className="eyebrow">05 / THE LIGHTWAYS LAB</p>
          <span className="micro-label">OUR IDEAS, IN MOTION</span>
        </div>
        <div className="section-intro">
          <h2>
            The next chapter
            <br />
            starts with <span>a question.</span>
          </h2>
          <p>
            The Lab is where we explore new possibilities. Our flagship product
            vision asks how personal assistance could help lighten everyday
            workload.
          </p>
        </div>
        <article id="padi" className="padi-feature">
          <div className="padi-visual" aria-hidden="true">
            <span className="padi-visual-label">LIGHTWAYS LAB / 001</span>
            <div className="padi-ring ring-one" />
            <div className="padi-ring ring-two" />
            <div className="padi-ring ring-three" />
            <span className="padi-logotype">
              PADI<span>↗</span>
            </span>
            <span className="padi-visual-caption">
              MORE SPACE FOR WHAT MATTERS.
            </span>
          </div>
          <div className="padi-feature-copy">
            <span className="status-badge">
              <span className="signal-dot" /> UPCOMING · PLANNING STAGE
            </span>
            <h3>
              Less workload.
              <br />
              More room for life.
            </h3>
            <p>
              PADI is our planned personal assistant, intended to help people
              manage everyday demands and reduce the effort of getting things
              done.
            </p>
            <p className="product-disclosure">
              Development has not started. The mobile app, features and
              availability are still being defined.
            </p>
            <Link className="text-link" href="/padi">
              Explore the PADI vision <Arrow />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
