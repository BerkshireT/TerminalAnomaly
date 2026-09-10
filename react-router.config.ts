import type { Config } from "@react-router/dev/config";

export default {
  // No server-side rendering: this ships as a fully static site, matching
  // the current deploy model (build once, scp static files to nginx/apache).
  ssr: false,
  // Every route is prerendered to its own real HTML file at build time so
  // deep links work without a server-side rewrite rule, and the build output
  // can be opened straight from disk (needed for the future offline-CD build).
  prerender: [
    "/",
    "/about",
    "/gallery",
    "/projects",
    "/DirtyVideoMixer",
    // Keep in sync with the slugs in app/data/projects.ts (comingSoonProjects).
    "/projects/japan-trip",
    "/projects/combo-videos",
    "/projects/climbing",
    "/projects/games",
    "/projects/crafts",
    "/projects/book-club",
    "/projects/books",
    "/projects/arcade",
    "/projects/music",
    "/projects/movies",
    "/projects/nacreous-cloud-formations",
  ],
} satisfies Config;
