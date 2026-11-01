import type { Metadata } from "next";
import ProjectCaseStudy from "../../components/ProjectCaseStudy";
import { projects } from "../../../lib/projects";
const description = "Lightways’ end-to-end build and production delivery of EnergyWallet Ticket Centre, with owner-reported transaction and ticket activity.";
export const metadata: Metadata = {
  title: "EnergyWallet Ticket Centre — Project", description,
  alternates: { canonical: "/work/energywallet-ticket-centre" },
  openGraph: { title: "EnergyWallet Ticket Centre | Lightways.Tech", description, type: "article", url: "/work/energywallet-ticket-centre", images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "Lightways.Tech — Selected work" }] },
  twitter: { card: "summary_large_image", title: "EnergyWallet Ticket Centre | Lightways.Tech", description, images: ["/social-card.png"] },
};
export default function EnergyWalletProject() { return <ProjectCaseStudy project={projects[0]} />; }
