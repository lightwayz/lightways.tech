"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { storedMotion } from "./events";

function subscribeMotion(listener: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", listener);
  window.addEventListener("lightways:motion", listener);
  window.addEventListener("storage", listener);
  return () => { media.removeEventListener("change", listener); window.removeEventListener("lightways:motion", listener); window.removeEventListener("storage", listener); };
}
function reducedMotion() { return window.matchMedia("(prefers-reduced-motion: reduce)").matches || storedMotion() === "reduced"; }

export default function ProcessFlow({ children }: { children: React.ReactNode }) {
  const reduced = useSyncExternalStore(subscribeMotion, reducedMotion, () => true);
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    let inView = typeof IntersectionObserver === "undefined";
    function visibility() { node?.setAttribute("data-in-view", String(inView && !document.hidden)); }
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => { inView = entries[0]?.isIntersecting ?? false; visibility(); }, { threshold: 0.1 });
    observer?.observe(node);
    document.addEventListener("visibilitychange", visibility);
    visibility();
    return () => { observer?.disconnect(); document.removeEventListener("visibilitychange", visibility); node.removeAttribute("data-in-view"); };
  }, []);
  return <div className="process-flow" ref={root} data-playback={reduced || paused ? "paused" : "running"}>
    <div className="process-flow-controls"><span className="micro-label">ONE CONNECTED APPROACH</span>
      <button type="button" disabled={reduced} aria-pressed={reduced || paused} aria-label={reduced ? "Workflow animation disabled by reduced-motion preference" : paused ? "Play workflow animation" : "Pause workflow animation"} onClick={() => setPaused(value => !value)}>{reduced ? "Static workflow" : paused ? "Play animation ↗" : "Pause animation Ⅱ"}</button>
    </div>
    <div className="process-flow-track">
      <svg className="process-flow-connectors" viewBox="0 0 1000 6" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 3H1000" stroke="#ffd700" strokeOpacity=".22" strokeDasharray="2 7" />
        <g className="process-flow-packet"><path d="M-20 3H0" stroke="#ffd700" strokeOpacity=".35" strokeWidth="2" /><rect x="-3" y="1" width="6" height="4" fill="#ffd700" /></g>
        <g className="process-flow-packet process-flow-packet-second"><path d="M-20 3H0" stroke="#ffd700" strokeOpacity=".35" strokeWidth="2" /><rect x="-3" y="1" width="6" height="4" fill="#ffd700" /></g>
      </svg>
      {children}
    </div>
  </div>;
}
