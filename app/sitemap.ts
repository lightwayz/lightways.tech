import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", "/work/energywallet-ticket-centre", "/work/unic-law-firm", "/padi", "/privacy"].map((path) => ({
    url: `https://lightways.tech${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/privacy" ? 0.3 : 0.8,
  }));
}
