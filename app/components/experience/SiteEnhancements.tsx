"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { storedMotion } from "./events";
import "./scroll-experience.css";

export function sceneProgress(top: number, height: number, viewport: number) {
  const clamp = (value: number) => Math.max(0, Math.min(1, value));
  const progress = clamp((viewport - top) / Math.max(1, viewport + height));
  const entrance = clamp((viewport * .85 - top) / Math.max(1, viewport * .65));
  return { progress, heading: (1 - entrance) * 28, ambient: (progress - .5) * 64 };
}

export default function SiteEnhancements() {
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);
  const back = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ownedAnimations = new Set<Animation>();
    const scenes = [...document.querySelectorAll<HTMLElement>("main > section:not(#hero)")];
    const visibleScenes = new Set<HTMLElement>();
    scenes.forEach(scene => scene.classList.add("scroll-experience-scene"));
    let frame = 0, reduced = true;
    function resetScenes() {
      scenes.forEach(scene => ["--scene-progress", "--scene-heading", "--scene-ambient"].forEach(property => scene.style.removeProperty(property)));
    }
    function updateScroll() {
      frame = 0;
      if (document.hidden) return;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const position = range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${position})`;
      if (back.current) back.current.hidden = position < .12 && document.activeElement !== back.current;
      if (reduced) return;
      // Batch geometry reads before style writes; animate only nearby sections.
      const positions = [...visibleScenes].map(scene => ({ scene, bounds: scene.getBoundingClientRect() }));
      positions.forEach(({ scene, bounds }) => {
        const state = sceneProgress(bounds.top, bounds.height, window.innerHeight);
        scene.style.setProperty("--scene-progress", String(state.progress));
        scene.style.setProperty("--scene-heading", `${state.heading}px`);
        scene.style.setProperty("--scene-ambient", `${state.ambient}px`);
      });
    }
    function scroll() { if (!frame && !document.hidden) frame = window.requestAnimationFrame(updateScroll); }
    function updateMotion() {
      reduced = media.matches || storedMotion() === "reduced";
      document.documentElement.dataset.motion = reduced ? "reduced" : "auto";
      if (reduced) { ownedAnimations.forEach(animation => animation.cancel()); ownedAnimations.clear(); resetScenes(); }
      scroll();
    }
    const sceneObserver = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) visibleScenes.add(entry.target as HTMLElement); else visibleScenes.delete(entry.target as HTMLElement); });
      scroll();
    }, { rootMargin: "120px 0px", threshold: 0 });
    scenes.forEach(scene => { if (sceneObserver) sceneObserver.observe(scene); else visibleScenes.add(scene); });
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer?.unobserve(entry.target);
        if (reduced || entry.target.contains(document.activeElement)) return;
        const node = entry.target as HTMLElement;
        if (typeof node.animate !== "function") return;
        const order = Number(node.dataset.scrollOrder ?? 0);
        const distance = window.innerWidth > 800 ? 40 : 16;
        const animation = node.animate([{ opacity: .65, transform: `translateY(${distance}px)` }, { opacity: 1, transform: "translateY(0)" }], { duration: 850, delay: order * 70, easing: "cubic-bezier(.2,.7,.25,1)", fill: "backwards" });
        ownedAnimations.add(animation);
        animation.finished.then(() => ownedAnimations.delete(animation)).catch(() => ownedAnimations.delete(animation));
      });
    }, { threshold: .12 });
    const revealNodes = [...document.querySelectorAll<HTMLElement>("main .section-topline, main .section-intro, main .service-row, main .padi-feature, main .process-grid > li, main .business-offer-grid > article, main .human-signal, main .workflow-comparison, main .brand-story-art, main .before-begin-grid > div, main .principles-grid > article, main .contact-grid, main .project-evidence-card, main .project-case-story > section")];
    revealNodes.forEach((node, index) => { node.dataset.scrollOrder = String(index % 3); observer?.observe(node); });
    function visibility() {
      if (document.hidden) { if (frame) window.cancelAnimationFrame(frame); frame = 0; ownedAnimations.forEach(animation => animation.cancel()); ownedAnimations.clear(); }
      else scroll();
    }
    media.addEventListener("change", updateMotion);
    window.addEventListener("lightways:motion", updateMotion);
    window.addEventListener("storage", updateMotion);
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    document.addEventListener("visibilitychange", visibility);
    updateMotion();
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      window.removeEventListener("lightways:motion", updateMotion);
      window.removeEventListener("storage", updateMotion);
      document.removeEventListener("visibilitychange", visibility);
      media.removeEventListener("change", updateMotion);
      observer?.disconnect(); sceneObserver?.disconnect();
      ownedAnimations.forEach(animation => animation.cancel());
      resetScenes();
      scenes.forEach(scene => scene.classList.remove("scroll-experience-scene"));
      revealNodes.forEach(node => delete node.dataset.scrollOrder);
    };
  }, [pathname]);
  return <><div className="reading-progress" aria-hidden="true"><div ref={progress} /></div><button ref={back} hidden type="button" className="back-to-top" aria-label="Back to top" onClick={() => {
    document.getElementById("main")?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: document.documentElement.dataset.motion === "reduced" ? "instant" : "smooth" });
  }}>↑</button></>;
}

