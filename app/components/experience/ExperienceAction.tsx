"use client";
import { openExperience, type ExperiencePanel } from "./events";
export default function ExperienceAction({ panel, children, className = "experience-action", onActivate }: { panel: ExperiencePanel; children: React.ReactNode; className?: string; onActivate?: () => void }) {
  return <button type="button" className={className} onClick={event => {
    const trigger = event.currentTarget.closest(".mobile-menu") ? document.querySelector<HTMLElement>(".mobile-menu > summary") ?? event.currentTarget : event.currentTarget;
    onActivate?.();
    openExperience(panel, trigger);
  }}>{children}</button>;
}
