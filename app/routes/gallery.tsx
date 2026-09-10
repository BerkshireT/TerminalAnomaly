import type { MetaFunction } from "react-router";
import { Topbar } from "~/components/Topbar";
import { Footer } from "~/components/Footer";
import { ImageList } from "~/components/ImageList";
import { useBreakpoint } from "~/hooks/useBreakpoint";
import { photos, edits } from "~/data/gallery";
import backgroundYellow from "~/assets/backgrounds/grid-yellow.png";
import logoYellow from "~/assets/logos/ta-yellow.gif";
import styles from "./gallery.module.css";

export const meta: MetaFunction = () => [{ title: "GALLERY" }];

const THEME = { color: "#fffb96", image: logoYellow };

export default function Gallery() {
  const breakpoint = useBreakpoint();
  const headingClass = breakpoint.smAndUp ? styles.heading : styles.headingM;

  return (
    <div className={styles.gallery} style={{ backgroundImage: `url(${backgroundYellow})` }}>
      <Topbar image={THEME.image} gif="gallery" color={THEME.color} />

      <div className={`${headingClass} ${styles.sectionHeading}`}>
        <div>P H O T O G R A P H Y</div>
        <div>写真撮影</div>
      </div>
      <ImageList images={photos} />

      <div className={`${headingClass} ${styles.sectionHeading}`}>
        <div>E D I T S</div>
        <div>編集する</div>
      </div>
      <ImageList images={edits} />

      <Footer />
    </div>
  );
}
