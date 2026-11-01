"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { translationHref, translationLanguages } from "../../../lib/translation-links";
import "./language-selector.css";

export default function LanguageSelector() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);
  useEffect(() => {
    if (menu.current) menu.current.open = false;
    const outside = (event: PointerEvent) => {
      if (menu.current?.open && event.target instanceof Node && !menu.current.contains(event.target)) menu.current.open = false;
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [pathname]);
  return <details ref={menu} className="language-selector notranslate" translate="no" onKeyDown={event => {
    if (event.key === "Escape" && menu.current?.open) { event.preventDefault(); menu.current.open = false; trigger.current?.focus(); }
  }}>
    <summary ref={trigger} aria-label="Choose website language">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></svg>
      <span className="language-current">EN</span>
    </summary>
    <div className="language-selector-panel">
      <p className="eyebrow">CHOOSE YOUR LANGUAGE</p>
      <p className="language-selector-notice">Automatic translation opens Google Translate in a new tab. Wording may vary. English is our original version.</p>
      <nav aria-label="Website languages">{translationLanguages.map(language => <a key={language.code} href={translationHref(language.code, pathname)} target={language.code === "en" ? undefined : "_blank"} rel={language.code === "en" ? undefined : "noopener noreferrer"} onClick={() => { if (menu.current) menu.current.open = false; }}>
        <span lang={language.code}>{language.native}</span><small>{language.name}{language.code === "en" ? " · Original" : " ↗"}</small>
      </a>)}</nav>
    </div>
  </details>;
}
