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

// Placeholder "coming soon" entries for future project pages (see revamp plan).
export const comingSoonProjects: ProjectEntry[] = [
  { link: "#", image: COMING_SOON_ICON, title: "Japan Trip", titleJap: "日本旅行", disabled: true },
  { link: "#", image: COMING_SOON_ICON, title: "Combo Videos", titleJap: "コンボビデオ", disabled: true },
  { link: "#", image: COMING_SOON_ICON, title: "Climbing", titleJap: "クライミング", disabled: true },
  { link: "#", image: COMING_SOON_ICON, title: "Games", titleJap: "ゲーム", disabled: true },
  { link: "#", image: COMING_SOON_ICON, title: "Crafts", titleJap: "クラフト", disabled: true },
  { link: "#", image: COMING_SOON_ICON, title: "Book Club", titleJap: "読書クラブ", disabled: true },
  { link: "#", image: COMING_SOON_ICON, title: "Books", titleJap: "本", disabled: true },
  { link: "#", image: COMING_SOON_ICON, title: "Arcade", titleJap: "アーケード", disabled: true },
  { link: "#", image: COMING_SOON_ICON, title: "Music", titleJap: "音楽", disabled: true },
  { link: "#", image: COMING_SOON_ICON, title: "Movies", titleJap: "映画", disabled: true },
  { link: "#", image: COMING_SOON_ICON, title: "Nacreous Cloud Formations", titleJap: "真珠母雲", disabled: true },
];
