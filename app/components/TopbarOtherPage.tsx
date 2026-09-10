import { Link } from "react-router";
import { useBreakpoint } from "~/hooks/useBreakpoint";
import galleryGif from "~/assets/gallery.gif";
import projectsGif from "~/assets/projects.gif";
import aboutGif from "~/assets/about.gif";
import styles from "./TopbarOtherPage.module.css";

const PAGE_BG: Record<string, string> = {
  gallery: galleryGif,
  projects: projectsGif,
  about: aboutGif,
};

export interface TopbarOtherPageProps {
  image: string;
  page: string;
  color: string;
  title: string;
  icon: string;
}

export function TopbarOtherPage({ image, page, color, title, icon }: TopbarOtherPageProps) {
  const breakpoint = useBreakpoint();
  const pageBgStyle = { backgroundImage: `url(${PAGE_BG[page] ?? ""})` };

  if (breakpoint.lgAndUp) {
    return (
      <div className={styles.blackBackground}>
        <div className={styles.row}>
          <div className={styles.logoCol} style={pageBgStyle}>
            <img className={styles.logoImg} src={image} alt="" />
          </div>
          <div className={styles.textCol}>
            <img className={styles.icon} src={icon} height={48} width={48} alt="" />
            <div className={styles.topTitle} style={{ textShadow: `1px 1px ${color}` }}>
              {title}
            </div>
            <Link to="/">
              <div className={styles.topSub} style={{ color }}>
                RETURN・HOME
              </div>
            </Link>
          </div>
          <div className={styles.logoCol} style={pageBgStyle}>
            <img className={styles.logoImg} src={image} alt="" />
          </div>
        </div>
      </div>
    );
  }

  if (breakpoint.md) {
    return (
      <div className={styles.blackBackground}>
        <div className={styles.row}>
          <div className={`${styles.logoColMed} ${styles.mlSpace}`} style={pageBgStyle}>
            <img className={styles.logoImg} src={image} alt="" />
          </div>
          <div className={styles.textCol}>
            <img className={styles.icon} src={icon} height={33} width={33} alt="" />
            <div className={styles.topTitleMed} style={{ textShadow: `1px 1px ${color}` }}>
              {title}
            </div>
            <Link to="/">
              <div className={styles.topSubMed} style={{ color }}>
                RETURN・HOME
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blackBackground}>
      <div className={styles.row}>
        <div className={`${styles.logoColMed} ${styles.mlSpace}`} style={pageBgStyle}>
          <img className={styles.logoImg} src={image} alt="" />
        </div>
        <div className={styles.textCol}>
          <div className={styles.topTitleSmall} style={{ textShadow: `1px 1px ${color}` }}>
            {title}
          </div>
          <Link to="/">
            <div className={styles.topSubSmall} style={{ color }}>
              RETURN・HOME
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
