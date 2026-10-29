import Arrow from "./Arrow";
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-art" aria-hidden="true">
        <div className="hero-orbit orbit-a" />
        <div className="hero-orbit orbit-b" />
        <div className="hero-orbit orbit-c" />
        <div className="hero-light" />
      </div>
      <div className="container hero-content">
        <p className="eyebrow">
          <span className="signal-dot" /> INDEPENDENT THINKING. HUMAN PROGRESS.
        </p>
        <h1>
          We Build
          <br />
          <span>Intelligent Systems</span>
          <br />
          For Human Progress.
        </h1>
        <div className="hero-bottom">
          <div>
            <p className="hero-description">
              Human-centric AI. Thoughtful engineering.
              <br className="desktop-break" /> Technology with people at its
              heart.
            </p>
            <div className="button-group">
              <a href="#contact" className="button button-primary">
                Start a conversation <Arrow />
              </a>
              <a href="#services" className="button button-outline">
                Explore our expertise <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-note">
            <span className="micro-label">OUR NEXT CHAPTER</span>
            <a href="#padi">
              PADI <span>Personal assistance, reimagined.</span>
              <Arrow />
            </a>
            <small>A product vision. Not yet launched.</small>
          </div>
        </div>
        <div className="hero-footnote">
          <span>HUMAN INSIGHT × INTELLIGENT SYSTEMS</span>
          <a href="#philosophy">
            SCROLL TO DISCOVER <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
