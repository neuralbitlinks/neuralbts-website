import type { MetadataRoute } from "next";

const base = "https://neuralbts.com";
const routes = ["", "/about", "/services", "/products", "/clients", "/blog", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
