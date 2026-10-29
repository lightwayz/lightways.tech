"use client";
import { useEffect, useRef } from "react";
import { storedMotion } from "./events";

const threads = [
  "M -100 90 C 220 30 120 620 520 340 S 800 270 1010 300",
  "M -100 190 C 300 550 230 -80 540 320 S 800 310 1010 300",
  "M -100 320 C 170 -80 380 560 560 310 S 800 300 1010 300",
  "M -100 420 C 220 650 270 20 540 300 S 800 300 1010 300",
  "M -100 530 C 300 160 180 580 550 330 S 800 290 1010 300",
  "M -100 590 C 180 30 410 680 560 340 S 800 310 1010 300",
];
export default function YellowPath() {
  const artwork = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = artwork.current;
    const hero = node?.closest<HTMLElement>(".hero");
    if (!node || !hero) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, reduced = false, visible = true;
    function draw() {
      frame = 0;
      if (!node || !hero || !visible) return;
      const bounds = hero.getBoundingClientRect();
      const progress = reduced ? 0.65 : Math.min(1, Math.max(0, -bounds.top / Math.max(1, bounds.height * 0.75)));
      node.style.setProperty("--path-progress", String(progress));
    }
    function schedule() { if (!frame && visible) frame = window.requestAnimationFrame(draw); }
    function preference() { reduced = media.matches || storedMotion() === "reduced"; schedule(); }
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => { visible = entries[0]?.isIntersecting ?? true; schedule(); });
    observer?.observe(hero);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("lightways:motion", preference);
    window.addEventListener("storage", preference);
    media.addEventListener("change", preference);
    preference();
    return () => { if (frame) window.cancelAnimationFrame(frame); observer?.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); window.removeEventListener("lightways:motion", preference); window.removeEventListener("storage", preference); media.removeEventListener("change", preference); };
  }, []);
  return <div className="yellow-path-art" ref={artwork} aria-hidden="true"><svg viewBox="0 0 1000 650" fill="none" focusable="false">
    <g className="yellow-path-threads">{threads.map((d, index) => <path key={d} d={d} className={`yellow-thread yellow-thread-${index}`} />)}</g>
    <path className="yellow-path-spine" d="M 40 380 C 290 350 420 300 610 300 L 1010 300" pathLength="1" />
    <circle className="yellow-path-destination" cx="900" cy="300" r="6" />
  </svg></div>;
}
