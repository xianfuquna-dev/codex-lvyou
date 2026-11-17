import type { MetadataRoute } from "next";
import { destinations, guides, trips } from "@/lib/data";

const baseUrl = "https://jingjiao.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/destinations", "/routes", "/guides", "/about", "/contact"];
  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...destinations.map((destination) => ({
      url: `${baseUrl}/destinations/${destination.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...trips.map((trip) => ({
      url: `${baseUrl}/routes/${trip.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...guides.map((guide) => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
