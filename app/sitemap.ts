import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://ashique.work", changeFrequency: "monthly", priority: 1 }];
}
