"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { expertiseLinks } from "../../../lib/expertise-links";

export default function ExpertiseMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);
  useEffect(() => {
    function outside(event: PointerEvent) { if (menu.current?.open && event.target instanceof Node && !menu.current.contains(event.target)) menu.current.open = false; }
    function focusOutside(event: FocusEvent) { if (menu.current?.open && event.target instanceof Node && !menu.current.contains(event.target)) menu.current.open = false; }
    document.addEventListener("pointerdown", outside); document.addEventListener("focusin", focusOutside);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("focusin", focusOutside); };
  }, []);
  return <details className="expertise-menu" ref={menu} onKeyDown={event => { if (event.key === "Escape" && menu.current?.open) { menu.current.open = false; summary.current?.focus(); } }}>
    <summary ref={summary} aria-controls="expertise-menu-panel">Expertise <span aria-hidden="true">⌄</span></summary>
    <div id="expertise-menu-panel" className="expertise-menu-panel" onClick={event => { if ((event.target as HTMLElement).closest("a") && menu.current) { menu.current.open = false; summary.current?.focus(); } }}>
      <p className="eyebrow">EXPLORE OUR EXPERTISE</p><div className="expertise-menu-links">{expertiseLinks.map((item, index) => <Link key={item.id} href={`/#${item.id}`}><span className="micro-label">0{index + 1}</span><strong>{item.title}</strong><small>{item.detail}</small><span className="expertise-menu-arrow" aria-hidden="true">↗</span></Link>)}</div>
      <div className="expertise-menu-bottom"><Link href="/#clear-path">Find your clear path ↗</Link><Link href="/#contact">Start a conversation ↗</Link></div>
    </div>
  </details>;
}
