"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { storedMotion } from "./events";
import "./reading-glass.css";

export function readingGeometry(width: number, height: number, header: number, card: number, reduced: boolean) {
  const top = header + 32;
  const enabled = !reduced && width >= 1001 && height >= 760 && card > 0 && card <= height - top - 100;
  return { enabled, top, hold: enabled ? Math.min(900, height) : 0 };
}

export function readingWave(progress: number) {
  const phase = Math.max(0, Math.min(1, progress));
  const wave = Math.sin(phase * Math.PI * 2);
  return { drift: -16 * phase + 9 * wave, sway: 8 * wave, tilt: .6 * wave };
}

export default function ReadingGlass({ children }: { children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = track.current, panel = card.current;
    if (!container || !panel) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const header = document.querySelector<HTMLElement>(".site-header");
    let frame = 0;
    function update() {
      frame = 0;
      const geometry = readingGeometry(window.innerWidth, window.innerHeight, header?.getBoundingClientRect().height ?? 88, panel!.offsetHeight, media.matches || storedMotion() === "reduced");
      const enabled = geometry.enabled && typeof CSS !== "undefined" && CSS.supports("overflow", "clip");
      container!.dataset.sticky = String(enabled);
      container!.style.setProperty("--reading-top", `${geometry.top}px`);
      container!.style.setProperty("--reading-hold", enabled ? `${geometry.hold}px` : "0px");
      const progress = enabled ? Math.max(0, Math.min(1, (geometry.top - container!.getBoundingClientRect().top) / geometry.hold)) : 0;
      const wave = readingWave(progress);
      container!.style.setProperty("--reading-drift", `${wave.drift}px`);
      container!.style.setProperty("--reading-sway", `${wave.sway}px`);
      container!.style.setProperty("--reading-tilt", `${wave.tilt}deg`);
      container!.style.setProperty("--reading-progress", String(progress));
    }
    function schedule() { if (!frame) frame = window.requestAnimationFrame(update); }
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
    observer?.observe(panel);
    if (header) observer?.observe(header);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("lightways:motion", schedule);
    window.addEventListener("storage", schedule);
    media.addEventListener("change", schedule);
    update();
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("lightways:motion", schedule);
      window.removeEventListener("storage", schedule);
      media.removeEventListener("change", schedule);
      container.dataset.sticky = "false";
      ["--reading-top", "--reading-hold", "--reading-drift", "--reading-sway", "--reading-tilt", "--reading-progress"].forEach(property => container.style.removeProperty(property));
    };
  }, []);
  return <div ref={track} className="glass-reading-track"><div ref={card} className="glass-reading-card" role="region" aria-label="The Lightways approach"><span className="glass-statement-mark" aria-hidden="true">“</span>{children}<span className="glass-reading-progress" aria-hidden="true"><span /></span></div></div>;
}
