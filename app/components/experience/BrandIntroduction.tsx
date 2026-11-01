"use client";

import { useEffect, useRef, useState } from "react";
import { storedMotion } from "./events";

export default function BrandIntroduction() {
  const story = useRef<HTMLElement>(null);
  const [environment, setEnvironment] = useState({ inView: false, visible: false, reduced: true });

  useEffect(() => {
    const panel = story.current;
    if (!panel) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setEnvironment(previous => ({ ...previous, reduced: media.matches || storedMotion() === "reduced" }));
    const updateVisibility = () => setEnvironment(previous => ({ ...previous, visible: !document.hidden }));
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
      setEnvironment(previous => ({ ...previous, inView: entries.some(entry => entry.isIntersecting) }));
    }, { threshold: 0 });
    const updateFallback = () => {
      const bounds = panel.getBoundingClientRect();
      setEnvironment(previous => ({ ...previous, inView: bounds.bottom > 0 && bounds.top < window.innerHeight }));
    };
    observer?.observe(panel);
    if (!observer) {
      updateFallback();
      window.addEventListener("scroll", updateFallback, { passive: true });
      window.addEventListener("resize", updateFallback);
    }
    updateMotion();
    updateVisibility();
    media.addEventListener("change", updateMotion);
    window.addEventListener("lightways:motion", updateMotion);
    window.addEventListener("storage", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer?.disconnect();
      media.removeEventListener("change", updateMotion);
      window.removeEventListener("lightways:motion", updateMotion);
      window.removeEventListener("storage", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
      window.removeEventListener("scroll", updateFallback);
      window.removeEventListener("resize", updateFallback);
    };
  }, []);

  useEffect(() => {
    if (environment.reduced || typeof IntersectionObserver === "undefined") return;
    const copy = document.querySelector(".hero-opening-message");
    if (!copy) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      copy.querySelectorAll<HTMLElement>(":scope > p").forEach((line, index) => {
        if (typeof line.animate === "function") animations.push(line.animate(
          [{ opacity: .3, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 650, delay: index * 160, easing: "cubic-bezier(.2,.65,.3,1)", fill: "backwards" },
        ));
      });
    }, { threshold: .15 });
    observer.observe(copy);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); };
  }, [environment.reduced]);

  const running = environment.inView && environment.visible && !environment.reduced;
  return (
    <section ref={story} className="brand-introduction" data-motion={environment.reduced ? "reduced" : "auto"} data-playback={running ? "running" : "paused"} aria-labelledby="brand-introduction-title" aria-describedby="brand-introduction-description">
      <div className="brand-introduction-inner">
        <p className="eyebrow">LIGHTWAYS / TECHNOLOGY WITH PURPOSE</p>
        <h2 id="brand-introduction-title" className="brand-introduction-accessible">Lightways. Intelligent systems. Human progress.</h2>
        <p id="brand-introduction-description" className="brand-introduction-accessible">Behind every business challenge is a human need. Work becomes complicated. Progress shouldn’t have to. We understand the need. Build what helps. Improve together.</p>
        <svg className="brand-introduction-signal" viewBox="0 0 720 220" fill="none" aria-hidden="true">
          <g className="brand-introduction-paths" stroke="currentColor">
            <path d="M0 20C180 20 160 110 290 110H720" />
            <path d="M0 65C150 65 210 110 290 110H720" />
            <path d="M0 110H720" />
            <path d="M0 155C150 155 210 110 290 110H720" />
            <path d="M0 200C180 200 160 110 290 110H720" />
          </g>
          <path className="brand-introduction-connection" d="M290 110H700" stroke="currentColor" strokeWidth="3" pathLength="1" />
          <circle className="brand-introduction-point" cx="290" cy="110" r="9" fill="currentColor" />
          <circle className="brand-introduction-halo" cx="290" cy="110" r="22" stroke="currentColor" opacity=".35" />
        </svg>
        <div className="brand-introduction-scenes" aria-hidden="true">
          <p className="brand-introduction-scene scene-need">Behind every business challenge is a <span>human need.</span></p>
          <p className="brand-introduction-scene scene-complexity">Work becomes complicated.<br /><span>Progress shouldn’t have to.</span></p>
          <p className="brand-introduction-scene scene-clarity">We understand the need.<br /><span>Build what helps.</span> Improve together.</p>
          <div className="brand-introduction-scene scene-lightways"><img src="/icon.svg" width="80" height="80" alt="" /><p>Lightways.<br /><span>Intelligent systems.</span><br />Human progress.</p></div>
        </div>
        <div className="brand-introduction-timeline" aria-hidden="true"><span /><span /><span /><span /></div>
      </div>
    </section>
  );
}
