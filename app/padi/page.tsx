import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "../components/Arrow";
import CTA from "../components/CTA";
export const metadata: Metadata = {
  title: "PADI — A Personal Assistant, Planned Around People",
  description:
    "PADI is Lightways.Tech’s planned personal assistant, intended to help reduce everyday workload. Development has not started; features and launch timing are undecided.",
  alternates: { canonical: "/padi" },
  twitter: {
    card: "summary_large_image",
    title: "PADI — A planned personal assistant",
    description:
      "Less workload. More room for life. Development has not started.",
    images: ["/padi-social-card.png"],
  },
  openGraph: {
    title: "PADI — Less workload. More room for life.",
    description:
      "A planned personal assistant from Lightways.Tech. Development has not started.",
    url: "/padi",
    images: [
      {
        url: "/padi-social-card.png",
        width: 1200,
        height: 630,
        alt: "PADI — A planned personal assistant. Not yet built or launched.",
      },
    ],
  },
};
const questions = [
  [
    "Can I use PADI today?",
    "No. PADI is at the planning stage and development has not started. There is no app to download or service to sign up for yet.",
  ],
  [
    "What is PADI intended to do?",
    "The vision is a personal assistant that helps reduce everyday workload. Specific tasks, capabilities and limits will be defined and tested during product development.",
  ],
  [
    "When will PADI launch?",
    "A launch date has not been announced. We’ll share confirmed information as planning and development progress.",
  ],
  [
    "What technology is planned?",
    "A Flutter and Dart mobile app with a Python FastAPI backend is planned. Hosting has not been chosen, and the architecture may evolve as requirements become clearer.",
  ],
  [
    "Will PADI always be available?",
    "Availability, reliability and support commitments have not been defined. The vision of convenient assistance is an ambition, not a current service guarantee.",
  ],
];
export default function Padi() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="product-hero">
        <div className="container">
          <Link href="/" className="back-link">
            ← Back to Lightways
          </Link>
          <div className="product-hero-grid">
            <div>
              <p className="eyebrow">A LIGHTWAYS.TECH PRODUCT VISION</p>
              <span className="status-badge">
                <span className="signal-dot" /> UPCOMING · NOT YET BUILT
              </span>
              <h1>
                Less workload.
                <br />
                More room
                <br />
                for <span>life.</span>
              </h1>
              <p className="lead">Meet PADI, our planned personal assistant.</p>
              <p>
                Everyday demands can leave little room for what matters. We’re
                exploring how a personal assistant could help lighten that load,
                with people’s needs shaping the product from the start.
              </p>
              <a className="button button-primary" href="#padi-status">
                Where we are today <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="product-art" aria-hidden="true">
              <div className="padi-ring ring-one" />
              <div className="padi-ring ring-two" />
              <div className="padi-ring ring-three" />
              <span>
                PADI<span>↗</span>
              </span>
              <small>AN IDEA WITH PEOPLE AT ITS HEART.</small>
            </div>
          </div>
        </div>
      </section>
      <section id="padi-status" className="section product-status">
        <div className="container">
          <div className="section-topline">
            <p className="eyebrow">THE PRODUCT, HONESTLY</p>
            <span className="micro-label">PLANNING COMES FIRST</span>
          </div>
          <div className="product-status-grid">
            <div>
              <h2>
                A clear vision.
                <br />
                <span className="text-muted">A deliberate beginning.</span>
              </h2>
              <p>
                PADI is an upcoming product, not an available service.
                Development has not started. We’re defining the problem and the
                first useful version before making commitments about features or
                launch.
              </p>
            </div>
            <dl>
              <div>
                <dt>Current stage</dt>
                <dd>Planning · Development not started</dd>
              </div>
              <div>
                <dt>Planned mobile app</dt>
                <dd>Flutter + Dart</dd>
              </div>
              <div>
                <dt>Planned backend</dt>
                <dd>Python + FastAPI</dd>
              </div>
              <div>
                <dt>Hosting & launch timing</dt>
                <dd>Not yet decided</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section className="section product-questions">
        <div className="container">
          <div className="section-topline">
            <p className="eyebrow">A FEW EARLY QUESTIONS</p>
          </div>
          <div className="questions-grid">
            <h2>
              Curiosity
              <br />
              is a <span>good start.</span>
            </h2>
            <div>
              {questions.map(([question, answer]) => (
                <details className="faq-item" key={question}>
                  <summary>
                    {question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="product-next container">
        <p>Have a perspective on everyday workload or personal assistance?</p>
        <a
          href="mailto:admin@lightways.tech?subject=PADI%20product%20vision"
          className="text-link"
        >
          Share your perspective <Arrow />
        </a>
      </section>
      <CTA />
    </main>
  );
}
