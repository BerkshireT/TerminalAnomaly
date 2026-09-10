import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { Topbar } from "~/components/Topbar";
import { Footer } from "~/components/Footer";
import { useBreakpoint } from "~/hooks/useBreakpoint";
import backgroundGreen from "~/assets/backgrounds/grid-green.png";
import logoGreen from "~/assets/logos/ta-green.gif";
import styles from "./home.module.css";

export const meta: MetaFunction = () => [{ title: "TERMINAL ANOMALY" }];

const THEME = { color: "#05ffa1", image: logoGreen };

const LINKS = [
  { to: "/gallery", en: "gallery", jp: "ギャラリー" },
  { to: "/about", en: "about", jp: "約" },
  { to: "/projects", en: "projects", jp: "プロジェクト" },
];

export default function Home() {
  const breakpoint = useBreakpoint();

  return (
    <div className={styles.home} style={{ backgroundImage: `url(${backgroundGreen})` }}>
      <Topbar image={THEME.image} gif="home" color={THEME.color} />
      <div className={breakpoint.mdAndUp ? styles.navRowDesktop : styles.navRowMobile}>
        {LINKS.map((link) => (
          <div key={link.to} className={breakpoint.mdAndUp ? styles.navItemDesktop : styles.navItemMobile}>
            <Link to={link.to} className={styles.glow}>
              <div>{link.en}</div>
              <div>{link.jp}</div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
