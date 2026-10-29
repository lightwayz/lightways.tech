"use client";
import Link from "next/link";
import { useRef } from "react";"use client";
2
import Link from "next/link";
3
import { useRef } from "react";
 |  | 
4
 
5
 
import ExperienceAction from "./experience/ExperienceAction";
6
 
import PrinciplesCarousel from "./experience/PrinciplesCarousel";
7
 
import { expertiseLinks } from "../../lib/expertise-links";
8
 
9
 
10
const links = [
11
  ["About", "/#philosophy"],
12
  ["Expertise", "/#services"],
13
  ["The Lab", "/#lab"],
14
  ["PADI · Upcoming", "/padi"],
15
  ["Start a conversation", "/#contact"],
16
];
17
export default function MobileMenu() {
18
  const menu = useRef<HTMLDetailsElement>(null);
19
  const trigger = useRef<HTMLElement>(null);
20
  return (
21
    <details
22
      className="mobile-menu"
23
      ref={menu}
24
      onKeyDown={(event) => {
 |  | 
25
 
26
 
        if (event.key === "Tab" && menu.current?.open) {
27
 
          const items = [...menu.current.querySelectorAll<HTMLElement>("summary, a, button:not(:disabled), [tabindex='0']")];
28
 
          const first = items[0]; const last = items[items.length - 1];
29
 
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
30
 
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
31
 
        }
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
      <nav
        aria-label="Mobile navigation"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a") && menu.current) {
            menu.current.open = false;
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
