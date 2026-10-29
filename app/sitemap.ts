import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/padi", "/privacy"].map((path) => ({
    url: `https://lightways.tech${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/padi" ? 0.8 : 0.3,
  }));
}
