import Arrow from "./Arrow";
import ExperienceAction from "./experience/ExperienceAction";
export default function CTA() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="eyebrow">LET’S START WITH A CONVERSATION</p>
        <div className="contact-grid">
          <h2>
            What could we
            <br />
            make <span>possible?</span>
          </h2>
          <div>
            <p>
              A problem to explore. An idea to challenge. A new possibility to
              discuss. We’d like to hear from you.
            </p>
            <a className="contact-email" href="mailto:admin@lightways.tech">
              admin@lightways.tech <Arrow />
            </a>
            <span className="contact-note">Opens your email app.</span>
            <ExperienceAction panel="enquiry">Prepare an enquiry ↗</ExperienceAction>
          </div>
        </div>
      </div>
    </section>
  );
}
