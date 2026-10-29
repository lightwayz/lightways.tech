"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { storedMotion } from "./events";

export default function SiteEnhancements() {
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);
  const back = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ownedAnimations = new Set<Animation>();
    function updateMotion() {
      const reduced = media.matches || storedMotion() === "reduced";
      document.documentElement.dataset.motion = reduced ? "reduced" : "auto";
      if (reduced) { ownedAnimations.forEach(animation => animation.cancel()); ownedAnimations.clear(); }
    }
    updateMotion();
    media.addEventListener("change", updateMotion);
    window.addEventListener("lightways:motion", updateMotion);
    window.addEventListener("storage", updateMotion);
    let frame = 0;
    function updateScroll() {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const position = range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${position})`;
      if (back.current) back.current.hidden = position < 0.12 && document.activeElement !== back.current;
      frame = 0;
    }
    function scroll() { if (!frame) frame = window.requestAnimationFrame(updateScroll); }
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    updateScroll();
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer?.unobserve(entry.target);
        if (document.documentElement.dataset.motion === "reduced") return;
        const animation = entry.target.animate([{ transform: "translateY(12px)" }, { transform: "translateY(0)" }], { duration: 550, easing: "cubic-bezier(.2,.65,.3,1)" });
        ownedAnimations.add(animation);
        animation.finished.then(() => ownedAnimations.delete(animation)).catch(() => ownedAnimations.delete(animation));
      });
    }, { threshold: 0.15 });
    document.querySelectorAll("main .section-topline, main .section-intro, main .service-row, main .padi-feature, main .process-grid > li").forEach(node => observer?.observe(node));
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      window.removeEventListener("lightways:motion", updateMotion);
      window.removeEventListener("storage", updateMotion);
      media.removeEventListener("change", updateMotion);
      observer?.disconnect();
      ownedAnimations.forEach(animation => animation.cancel());
    };
  }, [pathname]);
  return <><div className="reading-progress" aria-hidden="true"><div ref={progress} /></div><button ref={back} hidden type="button" className="back-to-top" aria-label="Back to top" onClick={() => {
    document.getElementById("main")?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: document.documentElement.dataset.motion === "reduced" ? "instant" : "smooth" });
  }}>↑</button></>;
}
