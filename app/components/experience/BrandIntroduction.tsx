"use client";

import { useEffect, useRef } from "react";
import { storedMotion } from "./events";

const sessionKey = "lightways:introduction:v2";

export default function BrandIntroduction() {
  const dialog = useRef<HTMLDialogElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function dismiss() {
    if (timer.current) clearTimeout(timer.current);
    dialog.current?.close();
  }

  function revealHomepage() {
    if (timer.current) clearTimeout(timer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || storedMotion() === "reduced") return;
    // Content is always readable; animate only after the opening has finished.
    document.querySelectorAll<HTMLElement>(".hero-opening-message > p").forEach((line, index) => {
      if (typeof line.animate === "function") line.animate(
        [{ opacity: 0.3, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 650, delay: index * 160, easing: "cubic-bezier(.2,.65,.3,1)", fill: "backwards" },
      );
    });
  }

  useEffect(() => {
    const panel = dialog.current;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let seen = false;
    try { seen = sessionStorage.getItem(sessionKey) === "seen"; } catch { /* Storage is optional. */ }
    // Never interrupt a deep link, restored scroll position or reduced-motion visit.
    if (!panel || seen || media.matches || storedMotion() === "reduced" || location.hash || window.scrollY > 0) return;
    const frame = requestAnimationFrame(() => {
      // A visitor who has already started using the page should not be interrupted.
      if (document.activeElement !== document.body || window.scrollY > 0) return;
      try {
        panel.showModal();
        try { sessionStorage.setItem(sessionKey, "seen"); } catch { /* Still dismiss on time. */ }
        timer.current = setTimeout(() => panel.close(), 8000);
      } catch { /* Unsupported browsers keep the homepage visible. */ }
    });
    const stopForMotion = () => {
      if (media.matches || storedMotion() === "reduced") dismiss();
    };
    media.addEventListener("change", stopForMotion);
    window.addEventListener("lightways:motion", stopForMotion);
    return () => {
      cancelAnimationFrame(frame);
      if (timer.current) clearTimeout(timer.current);
      panel.close();
      media.removeEventListener("change", stopForMotion);
      window.removeEventListener("lightways:motion", stopForMotion);
    };
  }, []);

  return (
    <dialog ref={dialog} className="brand-introduction" aria-labelledby="brand-introduction-title" aria-describedby="brand-introduction-description" onClose={revealHomepage}>
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
        <button type="button" className="brand-introduction-skip" autoFocus onClick={dismiss}>Skip introduction <span aria-hidden="true">↗</span></button>
      </div>
    </dialog>
  );
}
