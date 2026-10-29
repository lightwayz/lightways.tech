import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
const description =
  "Human-centric AI, thoughtful engineering and technology for human progress. Meet Lightways.Tech and explore PADI, our planned personal assistant.";
export const metadata: Metadata = {
  metadataBase: new URL("https://lightways.tech"),
  title: {
    default: "Lightways.Tech — Intelligent Systems for Human Progress",
    template: "%s | Lightways.Tech",
  },
  description,
  applicationName: "Lightways.Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lightways.Tech",
    title: "Intelligent Systems for Human Progress",
    description,
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "Lightways.Tech — Intelligent systems for human progress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightways.Tech — Intelligent Systems for Human Progress",
    description,
    images: ["/social-card.png"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
