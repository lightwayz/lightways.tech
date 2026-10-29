"use client";
import Link from "next/link";
import { useRef } from "react";
import ExperienceAction from "./experience/ExperienceAction";
import PrinciplesCarousel from "./experience/PrinciplesCarousel";
import { expertiseLinks } from "../../lib/expertise-links";
const links = [
  ["About", "/#philosophy"],
  ["Expertise", "/#services"],
  ["The Lab", "/#lab"],
  ["PADI · Upcoming", "/padi"],
  ["Start a conversation", "/#contact"],
];
export default function MobileMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);
  return (
    <details
      className="mobile-menu"
      ref={menu}
      onKeyDown={(event) => {
        if (event.key === "Tab" && menu.current?.open) {
          const items = [...menu.current.querySelectorAll<HTMLElement>("summary, a, button:not(:disabled), [tabindex='0']")];
          const first = items[0]; const last = items[items.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }
        if (event.key === "Escape" && menu.current?.open) {
          menu.current.open = false;
          trigger.current?.focus();
        }
      }}
    >
      <summary ref={trigger}>
        <span>Menu</span>
        <span className="menu-symbol" aria-hidden="true" />
      </summary>
      <div className="expanded-menu">
      <nav
        aria-label="Expanded navigation"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a") && menu.current) {
            menu.current.open = false;
            trigger.current?.focus();
          }
        }}
      >
        {links.map(([label, href]) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="menu-aside"><PrinciplesCarousel /><nav className="menu-expertise-links" aria-label="Expertise quick links" onClick={event => { if ((event.target as HTMLElement).closest("a") && menu.current) { menu.current.open = false; trigger.current?.focus(); } }}>{expertiseLinks.map(item => <Link key={item.id} href={`/#${item.id}`}>{item.title}</Link>)}</nav><div className="experience-actions">
        <ExperienceAction panel="enquiry" onActivate={() => { if (menu.current) menu.current.open = false; }}>Prepare an enquiry ↗</ExperienceAction>
        <ExperienceAction panel="gallery" onActivate={() => { if (menu.current) menu.current.open = false; }}>View our artwork ↗</ExperienceAction>
        <ExperienceAction panel="preferences" onActivate={() => { if (menu.current) menu.current.open = false; }}>Experience preferences</ExperienceAction>
      </div></div></div>
    </details>
  );
}
