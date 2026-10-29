import Arrow from "./Arrow";
const services = [
  {
    number: "01",
    title: "AI & intelligent systems",
    copy: "Exploring where AI can reduce repetitive effort, support decisions and make complex information more useful.",
    tags: ["Human-centric AI", "Automation", "Responsible design"],
  },
  {
    number: "02",
    title: "Digital products & platforms",
    copy: "Connecting thoughtful product design with clear architecture, accessible experiences and maintainable software.",
    tags: [
      "Product thinking",
      "Platform architecture",
      "Accessible interfaces",
    ],
  },
  {
    number: "03",
    title: "Research & innovation",
    copy: "Turning open questions into focused experiments. Testing the value of an idea before adding complexity or scaling it.",
    tags: ["Discovery", "Prototyping", "Validation"],
  },
];
export default function Services() {
  return (
    <section id="services" className="section expertise">
      <div className="container">
        <div className="section-topline">
          <p className="eyebrow">02 / OUR EXPERTISE</p>
          <span className="micro-label">FROM POSSIBILITY TO PURPOSE</span>
        </div>
        <div className="section-intro">
          <h2>
            Intelligence.
            <br />
            <span className="text-muted">Put to work.</span>
          </h2>
          <p>
            Our areas of focus bring people, products and systems together.
            Every conversation starts with what needs to improve.
          </p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <ul
                  className="tag-list"
                  aria-label={`${service.title} focus areas`}
                >
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <p>{service.copy}</p>
              <Arrow className="service-arrow" />
            </article>
          ))}
        </div>
        <p className="section-caption">
          Have a challenge in mind?{" "}
          <a href="#contact">
            Let’s explore it together <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </section>
  );
}
