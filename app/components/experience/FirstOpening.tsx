"use client";

import { useEffect, useRef } from "react";
import { storedMotion } from "./events";
import "./first-opening.css";

const openingKey = "lightways:first-opening:v1";
const dots = Array.from({ length: 32 }, (_, index) => ({
  x: 3 + ((index * 37) % 94), y: 4 + ((index * 23) % 90),
  delay: (index % 8) * .13, size: 2 + (index % 3) * 2,
}));

export default function FirstOpening() {
  const overlay = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const panel = overlay.current;
    if (!panel || location.pathname !== "/" || location.hash || window.scrollY > 0 || document.hidden) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || storedMotion() === "reduced") return;
    try { if (sessionStorage.getItem(openingKey)) return; } catch { /* Optional session memory. */ }
    let timer: ReturnType<typeof setTimeout> | undefined;
    const close = () => { if (timer) clearTimeout(timer); panel.close(); delete document.documentElement.dataset.opening; };
    const frame = requestAnimationFrame(() => {
      if (document.activeElement !== document.body) return;
      try {
        panel.showModal();
        document.documentElement.dataset.opening = "active";
        try { sessionStorage.setItem(openingKey, "seen"); } catch { /* No tracking or required storage. */ }
        timer = setTimeout(close, 4000);
      } catch { /* The main page remains available if dialogs are unsupported. */ }
    });
    const motion = () => { if (media.matches || storedMotion() === "reduced") close(); };
    panel.addEventListener("close", close);
    media.addEventListener("change", motion);
    window.addEventListener("lightways:motion", motion);
    return () => {
      cancelAnimationFrame(frame);
      panel.removeEventListener("close", close);
      media.removeEventListener("change", motion);
      window.removeEventListener("lightways:motion", motion);
      close();
    };
  }, []);

  return <dialog ref={overlay} className="first-opening" aria-labelledby="first-opening-title" aria-describedby="first-opening-description">
    <div className="first-opening-dots" aria-hidden="true">{dots.map((dot, index) => <i key={index} style={{ left: `${dot.x}%`, top: `${dot.y}%`, width: dot.size, height: dot.size, animationDelay: `${dot.delay}s` }} />)}</div>
    <div className="first-opening-centre">
      <img src="/icon.svg" width="64" height="64" alt="" />
      <h2 id="first-opening-title" className="first-opening-accessible">Lightways.Tech</h2>
      <div className="first-opening-wordmark" aria-hidden="true">{Array.from("lightways.tech").map((letter, index) => <span key={index} className={index >= 9 ? "first-opening-domain" : undefined} style={{ animationDelay: `${.3 + index * .06}s` }}>{letter}</span>)}</div>
      <p id="first-opening-description">Human insight. Intelligent systems. Human progress.</p>
      <span className="first-opening-line" aria-hidden="true" />
    </div>
  </dialog>;
}
