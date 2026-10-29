import type { Metadata } from "next";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import Capabilities from "./components/Capabilities";
import Process from "./components/Process";
import Lab from "./components/Lab";
import CTA from "./components/CTA";
export const metadata: Metadata = { alternates: { canonical: "/" } };
const companyData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lightways.tech/#organization",
      name: "Lightways.Tech",
      url: "https://lightways.tech",
      email: "admin@lightways.tech",
      sameAs: ["https://github.com/lightwayz"],
    },
    {
      "@type": "WebSite",
      "@id": "https://lightways.tech/#website",
      name: "Lightways.Tech",
      url: "https://lightways.tech",
      publisher: { "@id": "https://lightways.tech/#organization" },
    },
  ],
};
export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(companyData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Philosophy />
      <Services />
      <Capabilities />
      <Process />
      <Lab />
      <CTA />
    </main>
  );
}
