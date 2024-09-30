import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Paper24: Quick Paper Help from Native Helpers",
    short_name: "Paper24",
    description:
      "Paper24 makes studying easier. Easily connect with an expert and get paper help on any subject or difficulty!",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F8FF",
    theme_color: "#0a1330",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
