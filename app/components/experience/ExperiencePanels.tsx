"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { discoverySources, enquiryTypes, prepareEnquiry } from "../../../lib/enquiry";
import { preferenceKey, storedMotion, type ExperiencePanel } from "./events";

const artwork = [
  { src: "/images/lightways-logo.jpg", title: "Lightways original logo", width: 1024, height: 1024 },
  { src: "/social-card.png", title: "Intelligent systems for human progress", width: 1200, height: 630 },
  { src: "/padi-social-card.png", title: "PADI — planned personal assistant", width: 1200, height: 630 },
];
export default function ExperiencePanels() {
  const dialog = useRef<HTMLDialogElement>(null);
  const origin = useRef<HTMLElement | null>(null);
  const [panel, setPanel] = useState<ExperiencePanel>("enquiry");
  const [slide, setSlide] = useState(0);
  const [motion, setMotion] = useState<"auto" | "reduced">("auto");
  const [notice, setNotice] = useState("");
  const [draft, setDraft] = useState<ReturnType<typeof prepareEnquiry> | null>(null);
  const [message, setMessage] = useState("");
  const [startingPoint, setStartingPoint] = useState("");
  useEffect(() => {
    function open(event: Event) {
      const detail = (event as CustomEvent<{ panel: ExperiencePanel; trigger?: HTMLElement; startingPoint?: string }>).detail;
      if (!detail || !["enquiry", "gallery", "preferences"].includes(detail.panel)) return;
      origin.current = detail.trigger ?? null;
      setPanel(detail.panel); setNotice(""); setMotion(storedMotion());
      const context = typeof detail.startingPoint === "string" ? detail.startingPoint.slice(0, 1000) : "";
      setStartingPoint(context);
      if (context && detail.panel === "enquiry") {
        setMessage(previous => previous.trim() ? previous : context);
        setDraft(null);
      }
      dialog.current?.showModal();
    }
    window.addEventListener("lightways:experience", open);
    return () => window.removeEventListener("lightways:experience", open);
  }, []);
  const close = () => dialog.current?.close();
  const current = artwork[slide];
  return <dialog ref={dialog} className="experience-dialog" aria-labelledby="experience-title"
    onClose={() => origin.current?.focus()}
    onClick={(event) => { if (event.target === event.currentTarget) close(); }}
    onKeyDown={(event) => {
      if (panel === "gallery" && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
        event.preventDefault(); setSlide((value) => (value + (event.key === "ArrowRight" ? 1 : 2)) % 3);
      }
    }}>
    <div className="experience-panel">
      <div className="experience-heading"><p className="eyebrow">LIGHTWAYS.TECH</p><button type="button" onClick={close} aria-label="Close panel">Close ×</button></div>
      <h2 id="experience-title">{panel === "enquiry" ? "Start a conversation" : panel === "gallery" ? "Our identity, up close" : "Your experience"}</h2>
      {panel === "enquiry" && <>
        <p>Prepare a draft for your email app. This form does not send or save your message.</p>
        {startingPoint && !message.includes(startingPoint) && <div className="enquiry-context"><p>You have an existing message. Add your selected starting point if you wish.</p><p>{startingPoint.split("\n")[0]}</p><button type="button" className="experience-action" onClick={() => {
          const combined = `${message}\n\n${startingPoint}`;
          if (combined.length > 5000) { setNotice("Your message is too long to add this context. Edit it first, or describe your starting point in your own words."); return; }
          setMessage(combined); setDraft(null); setNotice("Starting point added to your message. Nothing has been sent.");
        }}>Add this starting point</button></div>}
        <form className="enquiry-form" onChange={() => { setDraft(null); setNotice(""); }} onSubmit={(event) => {
          event.preventDefault(); const data = new FormData(event.currentTarget);
          try { setDraft(prepareEnquiry({ name: String(data.get("name") ?? ""), email: String(data.get("email") ?? ""), company: String(data.get("company") ?? ""), type: String(data.get("type") ?? ""), source: String(data.get("source") ?? ""), message: String(data.get("message") ?? "") })); setNotice("Draft prepared. Nothing has been sent."); }
          catch (error) { setNotice(error instanceof Error ? error.message : "Please check your details."); }
        }}>
          <label>Name (required)<input name="name" autoComplete="name" required maxLength={100} /></label>
          <label>Email (required)<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
          <label>Company (optional)<input name="company" autoComplete="organization" maxLength={150} /></label>
          <label>Enquiry type<select name="type">{enquiryTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
          <label>How did you find us? (optional)<select name="source"><option value="">Choose if you wish</option>{discoverySources.map((source) => <option key={source}>{source}</option>)}</select></label>
          <label className="form-wide">Message (required)<textarea name="message" rows={5} required maxLength={5000} value={message} onChange={event => setMessage(event.target.value)} /></label>
          <button type="submit" className="experience-action">Prepare email draft ↗</button>
        </form>
        {draft && <div className="draft-preview"><h3>Your draft</h3><p>To: admin@lightways.tech</p><p>{draft.subject}</p><pre>{draft.body}</pre>
          {draft.copyFirst && <p>Your message is long. Copy the draft, then paste it into your email app.</p>}
          <div className="experience-actions"><a href={draft.href}>Open email draft ↗</a><button type="button" onClick={async () => {
            try { await navigator.clipboard.writeText(`${draft.subject}\n\n${draft.body}`); setNotice("Draft copied. Nothing has been sent."); }
            catch { setNotice("Copy is unavailable. Select the draft above and copy it manually."); }
          }}>Copy draft</button></div></div>}
      </>}
      {panel === "gallery" && <><figure className="artwork-viewer"><Image src={current.src} alt={current.title} width={current.width} height={current.height} unoptimized /><figcaption>{current.title}</figcaption></figure>
        <div className="carousel-controls"><button type="button" onClick={() => setSlide((slide + 2) % 3)} aria-label="Previous artwork">←</button><span role="status">{slide + 1} / 3</span><button type="button" onClick={() => setSlide((slide + 1) % 3)} aria-label="Next artwork">→</button></div></>}
      {panel === "preferences" && <><p>Choose how this website moves. Your device’s reduced-motion setting is always respected.</p>
        <fieldset><legend>Motion</legend><label><input type="radio" name="motion" checked={motion === "auto"} onChange={() => setMotion("auto")} /> Follow device preference</label><label><input type="radio" name="motion" checked={motion === "reduced"} onChange={() => setMotion("reduced")} /> Reduce motion</label></fieldset>
        <p>No advertising or analytics tracking is added. Saving stores only this motion choice in this browser.</p>
        <button type="button" className="experience-action" onClick={() => { try { localStorage.setItem(preferenceKey, motion); window.dispatchEvent(new Event("lightways:motion")); setNotice("Preference saved."); } catch { setNotice("This browser could not save your preference."); } }}>Save preference</button></>}
      <p className="experience-status" role="status">{notice}</p>
    </div>
  </dialog>;
}
