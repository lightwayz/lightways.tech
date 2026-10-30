import Arrow from "./Arrow";
import YellowPath from "./experience/YellowPath";
import BrandIntroduction from "./experience/BrandIntroduction";
import "./experience/brand-introduction.css";
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <BrandIntroduction />
      <div className="hero-art" aria-hidden="true">
        <YellowPath />
      </div>
      <div className="container hero-content">
        <p className="eyebrow">
          <span className="signal-dot" /> INDEPENDENT THINKING. HUMAN PROGRESS.
        </p>
        <div className="hero-opening-message">
          <p className="hero-opening-statement">Your business is more than its systems. It is <span>people</span> serving customers, making decisions and moving ideas forward.</p>
          <p>When everyday work becomes harder than it should, technology should help clear the way. Lightways brings human understanding and thoughtful engineering together to simplify work, connect what matters and build useful digital products.</p>
          <p className="hero-opening-method">Understand the need. Build what helps. Improve together.</p>
        </div>
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
              <a href="#clear-path" className="clear-path-invitation">Find your clear path <span aria-hidden="true">↘</span></a>
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
