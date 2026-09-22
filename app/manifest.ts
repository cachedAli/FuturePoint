import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Future Point",
    short_name: "Future Point",
    description:
      "Enterprise technology integration, cybersecurity, data center and managed services.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F6F2",
    theme_color: "#18181B",
    icons: [
      {
        src: "/favicon-preview.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
