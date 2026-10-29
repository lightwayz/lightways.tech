"use client";
import { useEffect, useRef } from "react";

export default function ServiceSpotlights({ children }: { children: React.ReactNode }) {
  const active = useRef<HTMLElement | null>(null);
  const frame = useRef(0);
  const point = useRef({ x: 0, y: 0 });
  function reset() {
    if (frame.current) window.cancelAnimationFrame(frame.current);
    frame.current = 0;
    active.current?.removeAttribute("data-service-spotlight");
    active.current?.style.removeProperty("--service-light-x");
    active.current?.style.removeProperty("--service-light-y");
    active.current = null;
  }
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    media.addEventListener("change", reset);
    pointer.addEventListener("change", reset);
    window.addEventListener("lightways:motion", reset);
    window.addEventListener("storage", reset);
    return () => { reset(); media.removeEventListener("change", reset); pointer.removeEventListener("change", reset); window.removeEventListener("lightways:motion", reset); window.removeEventListener("storage", reset); };
  }, []);
  return <div className="business-offer-grid" onPointerLeave={reset} onPointerMove={event => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.motion === "reduced" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) { reset(); return; }
    const card = (event.target as Element).closest<HTMLElement>("article");
    if (!card || !event.currentTarget.contains(card)) { reset(); return; }
    if (active.current !== card) { reset(); active.current = card; }
    point.current = { x: event.clientX, y: event.clientY };
    if (!frame.current) frame.current = window.requestAnimationFrame(() => {
      frame.current = 0;
      const current = active.current;
      if (!current) return;
      const bounds = current.getBoundingClientRect();
      current.style.setProperty("--service-light-x", `${Math.max(0, Math.min(bounds.width, point.current.x - bounds.left))}px`);
      current.style.setProperty("--service-light-y", `${Math.max(0, Math.min(bounds.height, point.current.y - bounds.top))}px`);
      current.setAttribute("data-service-spotlight", "true");
    });
  }}>{children}</div>;
}
