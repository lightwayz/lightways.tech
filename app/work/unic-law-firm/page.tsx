import type { Metadata } from "next";
import ProjectCaseStudy from "../../components/ProjectCaseStudy";
import { projects } from "../../../lib/projects";
const description = "Lightways’ end-to-end build and production deployment for UNIC Law Firm: a professional-services website and digital entry points.";
export const metadata: Metadata = {
  title: "UNIC Law Firm — Project", description,
  alternates: { canonical: "/work/unic-law-firm" },
  openGraph: { title: "UNIC Law Firm | Lightways.Tech", description, type: "article", url: "/work/unic-law-firm", images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "Lightways.Tech — Selected work" }] },
  twitter: { card: "summary_large_image", title: "UNIC Law Firm | Lightways.Tech", description, images: ["/social-card.png"] },
};
export default function UnicProject() { return <ProjectCaseStudy project={projects[1]} />; }
