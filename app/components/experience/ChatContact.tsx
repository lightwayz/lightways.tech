"use client";

import { useEffect, useRef } from "react";
import { openExperience } from "./events";
import "./chat-contact.css";

// Set only to an owner-confirmed international WhatsApp number, digits only.
const whatsappNumber: string = "2347061927188";
const topics = ["Simplify my work", "Build a digital product", "Discuss an idea"];

export default function ChatContact() {
  const widget = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (widget.current?.open && event.target instanceof Node && !widget.current.contains(event.target)) widget.current.open = false;
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);

  function enquire(topic?: string) {
    if (widget.current) widget.current.open = false;
    openExperience("enquiry", trigger.current ?? undefined, topic ? `I would like to discuss: ${topic}.` : undefined);
  }

  return <details ref={widget} className="chat-contact" onKeyDown={event => {
    if (event.key === "Escape" && widget.current?.open) {
      event.preventDefault(); event.stopPropagation();
      widget.current.open = false; trigger.current?.focus();
    }
  }}>
    <summary ref={trigger} className="chat-contact-trigger">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8H4l1.6-4A8 8 0 1 1 20 11.5Z" /><path d="M8 10h8M8 13h5" /></svg>
      <span>Chat with us</span>
    </summary>
    <div className="chat-contact-panel" role="region" aria-labelledby="chat-contact-title">
      <header><span className="eyebrow">LIGHTWAYS.TECH</span><button type="button" aria-label="Close contact panel" onClick={() => { if (widget.current) widget.current.open = false; trigger.current?.focus(); }}>×</button></header>
      <h2 id="chat-contact-title">What would you like<br />to make <span>easier?</span></h2>
      <p>A workflow that slows you down. A product idea. A question about what comes next. Start here.</p>
      <div className="chat-contact-topics" aria-label="Conversation starting points">{topics.map(topic => <button key={topic} type="button" onClick={() => enquire(topic)}>{topic} <span aria-hidden="true">↗</span></button>)}</div>
      {whatsappNumber && <a className="chat-contact-primary" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Lightways, I would like to discuss a project.")}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a>}
      <a className={whatsappNumber ? "chat-contact-email" : "chat-contact-primary"} href="mailto:admin@lightways.tech">Email Lightways <span aria-hidden="true">↗</span></a>
      <p className="chat-contact-note">{whatsappNumber ? "WhatsApp opens in a new tab. Your message is sent only when you choose to send it there." : "Email opens your email app. The options above prepare an enquiry draft; this panel does not send messages or provide live chat."}</p>
    </div>
  </details>;
}
