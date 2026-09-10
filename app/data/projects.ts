import mixerThumb from "~/assets/projectListThumbs/MixerThumb.png";

const COMING_SOON_ICON = "https://win98icons.alexmeub.com/icons/png/hourglass-0.png";

export interface ProjectEntry {
  link: string;
  image: string;
  title: string;
  titleJap: string;
  disabled?: boolean;
}

export const liveProjects: ProjectEntry[] = [
  { link: "/DirtyVideoMixer", image: mixerThumb, title: "Karl Klomp Video Mixer", titleJap: "ビデオミキサー" },
];

export interface ComingSoonProject extends ProjectEntry {
  slug: string;
  notes: string;
}

// Placeholder "coming soon" entries for future project pages (see revamp plan).
// `notes` are the original idea notes from the revamp planning conversation,
// shown as-is on each stub page until the real content gets built out.
export const comingSoonProjects: ComingSoonProject[] = [
  {
    slug: "japan-trip",
    image: COMING_SOON_ICON,
    title: "Japan Trip",
    titleJap: "日本旅行",
    link: "/projects/japan-trip",
    notes: "Blog style recap of vacation. Interactive presentation using photos from the trip. Plot path across Japan on a map.",
  },
  {
    slug: "combo-videos",
    image: COMING_SOON_ICON,
    title: "Combo Videos",
    titleJap: "コンボビデオ",
    link: "/projects/combo-videos",
    notes: "Copy YouTube videos onto new server. CRT setup presentation. Click on CDs to select video.",
  },
  {
    slug: "climbing",
    image: COMING_SOON_ICON,
    title: "Climbing",
    titleJap: "クライミング",
    link: "/projects/climbing",
    notes:
      "Climbing gifs, thoughts on each and grade. Map of spots I have climbed and want to climb (Yosemite, Smith Rock Oregon, New Zealand, deep water solo). List of gyms I have been to.",
  },
  {
    slug: "games",
    image: COMING_SOON_ICON,
    title: "Games",
    titleJap: "ゲーム",
    link: "/projects/games",
    notes: "Favorite games section, encyclopedia style.",
  },
  {
    slug: "crafts",
    image: COMING_SOON_ICON,
    title: "Crafts",
    titleJap: "クラフト",
    link: "/projects/crafts",
    notes: "Blog style overview (much like the Mixer page). Mushroom wizard staff.",
  },
  {
    slug: "book-club",
    image: COMING_SOON_ICON,
    title: "Book Club",
    titleJap: "読書クラブ",
    link: "/projects/book-club",
    notes:
      "Catalog of our book club reads. Library style. Easy admin page for us to add our current reads, and give each a /10 rating. Use Google SSO to guard this page by only the people I whitelist.",
  },
  {
    slug: "books",
    image: COMING_SOON_ICON,
    title: "Books",
    titleJap: "本",
    link: "/projects/books",
    notes: "Favorite books list, todo books. Also in the library. Like Goodreads but less detailed.",
  },
  {
    slug: "arcade",
    image: COMING_SOON_ICON,
    title: "Arcade",
    titleJap: "アーケード",
    link: "/projects/arcade",
    notes: "Future place for web games I create.",
  },
  {
    slug: "music",
    image: COMING_SOON_ICON,
    title: "Music",
    titleJap: "音楽",
    link: "/projects/music",
    notes: "Place for a small listening gallery of music I create.",
  },
  {
    slug: "movies",
    image: COMING_SOON_ICON,
    title: "Movies",
    titleJap: "映画",
    link: "/projects/movies",
    notes: "Download Letterboxd data. Movie theater display.",
  },
  {
    slug: "nacreous-cloud-formations",
    image: COMING_SOON_ICON,
    title: "Nacreous Cloud Formations",
    titleJap: "真珠母雲",
    link: "/projects/nacreous-cloud-formations",
    notes: "",
  },
];
