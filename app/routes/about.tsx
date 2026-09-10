import type { MetaFunction } from "react-router";
import { Topbar } from "~/components/Topbar";
import { Footer } from "~/components/Footer";
import { useBreakpoint } from "~/hooks/useBreakpoint";
import backgroundBlue from "~/assets/backgrounds/grid-blue.png";
import logoBlue from "~/assets/logos/ta-blue.gif";
import styles from "./about.module.css";

export const meta: MetaFunction = () => [{ title: "ABOUT" }];

const THEME = { color: "#01cdfe", image: logoBlue };

const SOCIAL_LINKS = [
  { href: "https://github.com/BerkshireT", icon: "https://win98icons.alexmeub.com/icons/png/program_manager-1.png" },
  {
    href: "https://open.spotify.com/user/cf9hq7vhmnz4lizol8969ph6t?si=3uj903wIRji4mHXT0q3GmQ",
    icon: "https://win98icons.alexmeub.com/icons/png/computer_musical_keyboard-2.png",
  },
  { href: "https://www.instagram.com/terminalanomaly/", icon: "https://win98icons.alexmeub.com/icons/png/camera3-2.png" },
  { href: "https://anilist.co/user/terminalanomaly/animelist", icon: "https://win98icons.alexmeub.com/icons/png/msagent-3.png" },
];

function SocialIcons() {
  return (
    <div className={styles.iconsRow}>
      {SOCIAL_LINKS.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          <img className={styles.imgSpaced} src={link.icon} height={48} width={48} alt="" />
        </a>
      ))}
    </div>
  );
}

export default function About() {
  const breakpoint = useBreakpoint();

  return (
    <div className={styles.about} style={{ backgroundImage: `url(${backgroundBlue})` }}>
      <Topbar image={THEME.image} gif="about" color={THEME.color} />

      {breakpoint.lgAndUp ? (
        <div className={styles.personalsBox}>
          <SocialIcons />
          <div className={styles.text}>
            <div>links</div>
            <div>リンク</div>
          </div>
        </div>
      ) : (
        <div className={styles.personalsBoxMobile}>
          <div className={styles.textMobile}>
            <div>links</div>
            <div>リンク</div>
          </div>
          <SocialIcons />
        </div>
      )}

      <Footer />
    </div>
  );
}
