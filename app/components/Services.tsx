import Arrow from "./Arrow";
import OperationsStory from "./OperationsStory";
import ClearPath from "./experience/ClearPath";
import ServiceSpotlights from "./experience/ServiceSpotlights";
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
const offers = [
  {
    title: "Simplify my work",
    copy: "Start with one workflow that takes more effort than it should. We examine how it works today, agree what needs to improve and propose a focused solution.",
    deliverables: ["A clear view of the problem and its constraints", "A scoped improvement using suitable tools or custom software", "Handover guidance and agreed measures of success"],
  },
  {
    title: "Build my digital foundation",
    copy: "Give your customers and team a clearer way to interact with your business through a purposeful website or a focused business application.",
    deliverables: ["A customer journey built around a real need", "Accessible interfaces and appropriate integrations", "Maintainable software with a documented handover"],
  },
  {
    title: "Keep it working",
    copy: "Plan for what happens after delivery. Agree the maintenance, troubleshooting and improvements your business needs as the system is used.",
    deliverables: ["Defined support hours, responsibilities and response expectations", "An agreed approach to updates and ongoing costs", "A prioritised improvement plan informed by feedback"],
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
            Your business needs tools that help people get things done.
            We connect thoughtful engineering with practical improvements,
            starting with the work you need to make easier.
          </p>
        </div>
        <ClearPath />
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" id={`expertise-${service.number}`} tabIndex={-1} key={service.number}>
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
        <div className="business-offers" aria-labelledby="business-offers-title">
          <div className="business-offers-intro">
            <p className="eyebrow">HOW WE CAN HELP</p>
            <h3 id="business-offers-title">Less friction. More room to move forward.</h3>
            <p>You can begin with one problem. We agree the scope, price, delivery milestones and acceptance criteria before implementation, so you know what you are paying for and how we will judge the result together.</p>
          </div>
          <ServiceSpotlights>{offers.map((offer) => <article key={offer.title}>
            <h4>{offer.title}</h4><p>{offer.copy}</p>
            <ul>{offer.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>)}</ServiceSpotlights>
          <p className="engagement-note">The right solution depends on your circumstances. Any third-party subscriptions, data access, training and support commitments are discussed as part of your proposal. AI is considered where it is useful, with human review where the work calls for it.</p>
        </div>
        <OperationsStory />
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
