import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yulia Vorotintseva — Frontend Developer",
    short_name: "Yulia V.",
    description: "Frontend developer portfolio and selected case studies.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f1eb",
    theme_color: "#f3f1eb",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
