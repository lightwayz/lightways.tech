import StoryImage from "./StoryImage";
const principles = [
  [
    "People before complexity",
    "Start with the people using the system, including those who are too often left out.",
  ],
  [
    "Clarity before scale",
    "Make the purpose, assumptions and tradeoffs understandable before expanding the solution.",
  ],
  [
    "Trust by design",
    "Treat privacy, security and reliability as design responsibilities from the beginning.",
  ],
];
export default function Capabilities() {
  return (
    <section id="capabilities" className="section principles">
      <div className="container">
        <div className="section-topline">
          <p className="eyebrow">03 / WHAT GUIDES US</p>
          <span className="micro-label">AMBITION, WITH INTENTION</span>
        </div>
        <div className="principles-grid">
          {principles.map(([title, body], index) => (
            <article key={title}>
              <span className="principle-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="inclusive-service">
          <h3>Respect is part of the service.</h3>
          <p>People deserve the same care and professional respect, regardless of race, nationality or where they live. We design around real circumstances: the devices people use, the connections they rely on and the ways they access information.</p>
          <p>That commitment means plain language, accessible experiences, clear pricing and responsible handling of information. At the start of an engagement, we confirm the language, time-zone arrangements, payment options and support availability we can provide. You should know what to expect before you commit.</p>
        </div>
        <StoryImage name="clarity-and-trust" />
      </div>
    </section>
  );
}
