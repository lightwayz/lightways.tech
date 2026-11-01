import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCards } from "../components/ProjectEvidence";
const description = "Explore Lightways’ work on EnergyWallet Ticket Centre and UNIC Law Firm: end-to-end development, production delivery and project evidence.";
export const metadata: Metadata = {
  title: "Selected Work", description, alternates: { canonical: "/work" },
  openGraph: { title: "Selected work | Lightways.Tech", description, type: "website", url: "/work", images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "Lightways.Tech — Selected work" }] },
  twitter: { card: "summary_large_image", title: "Selected work | Lightways.Tech", description, images: ["/social-card.png"] },
};
export default function Work() { return <main id="main" tabIndex={-1} className="project-case container"><Link href="/" className="back-link">← Back to Lightways</Link><p className="eyebrow">SELECTED WORK</p><h1>Built for people.<br /><span>Delivered to production.</span></h1><p className="project-case-summary">Two projects, different working contexts and one standard: useful technology that people can put to work. Explore what we delivered and the evidence available for each project.</p><ProjectCards /><p className="project-evidence-note">Explore the live websites alongside each project note. EnergyWallet usage figures supplied by Lightways, 31 October 2026.</p></main>; }
