import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("gallery", "routes/gallery.tsx"),
  route("projects", "routes/projects.tsx"),
  route("projects/:slug", "routes/project-note.tsx"),
  route("DirtyVideoMixer", "routes/mixer.tsx"),
] satisfies RouteConfig;
