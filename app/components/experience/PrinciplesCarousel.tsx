"use client";
import { useRef, useState } from "react";
const principles = [
  ["People before complexity", "Start with the people using the system, including those who are too often left out."],
  ["Clarity before scale", "Make the purpose, assumptions and tradeoffs understandable before expanding the solution."],
  ["Trust by design", "Treat privacy, security and reliability as design responsibilities from the beginning."],
];
export default function PrinciplesCarousel() {
  const [index, setIndex] = useState(0);
  const slides = useRef<HTMLDivElement>(null);
  function go(next: number) {
    const target = Math.max(0, Math.min(principles.length - 1, next));
    setIndex(target);
    const reduced = document.documentElement.dataset.motion === "reduced" || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    slides.current?.scrollTo({ left: target * slides.current.clientWidth, behavior: reduced ? "instant" : "smooth" });
  }
  return <section className="principles-carousel" aria-label="Lightways principles" aria-roledescription="carousel">
    <p className="micro-label">WHAT GUIDES US</p>
    <div className="principles-slides" ref={slides} tabIndex={0} aria-label="Principle slides. Use left and right arrows to browse." onScroll={() => {
      const node = slides.current;
      if (node?.clientWidth) setIndex(Math.max(0, Math.min(principles.length - 1, Math.round(node.scrollLeft / node.clientWidth))));
    }} onKeyDown={event => {
      if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        go(event.key === "Home" ? 0 : event.key === "End" ? principles.length - 1 : index + (event.key === "ArrowRight" ? 1 : -1));
      }
    }}>{principles.map(([title, copy], position) => <article key={title} aria-roledescription="slide" aria-label={`${position + 1} of ${principles.length}`} aria-hidden={position !== index}><h3>{title}</h3><p>{copy}</p></article>)}</div>
    <div className="carousel-controls"><button type="button" aria-label="Previous principle" disabled={index === 0} onClick={() => go(index - 1)}>←</button><span role="status" aria-live="polite" aria-atomic="true">{index + 1} / {principles.length}</span><button type="button" aria-label="Next principle" disabled={index === principles.length - 1} onClick={() => go(index + 1)}>→</button></div>
  </section>;
}
