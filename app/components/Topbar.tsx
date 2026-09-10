import { useBreakpoint } from "~/hooks/useBreakpoint";
import homeGif from "~/assets/home.gif";
import { TopbarOtherPage } from "./TopbarOtherPage";
import styles from "./Topbar.module.css";

const OTHER_PAGE_META: Record<string, { title: string; icon: string }> = {
  projects: {
    title: "PROJECTS",
    icon: "https://win98icons.alexmeub.com/icons/png/directory_folder_options-2.png",
  },
  gallery: {
    title: "GALLERY",
    icon: "https://win98icons.alexmeub.com/icons/png/camera3-2.png",
  },
  about: {
    title: "ABOUT",
    icon: "https://win98icons.alexmeub.com/icons/png/help_sheet-0.png",
  },
};

export interface TopbarProps {
  image: string;
  gif: "home" | "projects" | "gallery" | "about";
  color: string;
}

export function Topbar({ image, gif, color }: TopbarProps) {
  const breakpoint = useBreakpoint();

  if (gif !== "home") {
    const meta = OTHER_PAGE_META[gif];
    return <TopbarOtherPage page={gif} image={image} color={color} title={meta.title} icon={meta.icon} />;
  }

  const titleClass = breakpoint.lgAndUp
    ? styles.topTitle
    : breakpoint.md
      ? styles.topTitleMd
      : styles.topTitleSm;
  const subClass = breakpoint.lgAndUp
    ? styles.topSub
    : breakpoint.md
      ? styles.topSubMd
      : styles.topSubSm;
  const logoMaxHeight = breakpoint.lgAndUp ? 200 : breakpoint.md ? 125 : 100;

  return (
    <div className={styles.row}>
      <div className={styles.logoCol} style={{ backgroundImage: `url(${homeGif})` }}>
        <img className={styles.logoImg} style={{ maxHeight: logoMaxHeight }} src={image} alt="" />
      </div>
      <div className={styles.textCol}>
        <div className={titleClass} style={{ textShadow: `1px 1px ${color}` }}>
          WELCOME!
        </div>
        <div className={subClass} style={{ color }}>
          いらっしゃいませ！
        </div>
        <hr className={styles.divider} style={{ borderColor: color }} />
      </div>
    </div>
  );
}
