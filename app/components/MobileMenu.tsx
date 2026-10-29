"use client";
import Link from "next/link";
import { useRef } from "react";
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
    </details>
  );
}
