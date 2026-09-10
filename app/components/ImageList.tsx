import { useEffect, useMemo, useState } from "react";
import { useBreakpoint } from "~/hooks/useBreakpoint";
import type { GalleryImage } from "~/data/gallery";
import { PaginationControl } from "./PaginationControl";
import transparent1 from "~/assets/gallery/transparent1.png";
import transparent2 from "~/assets/gallery/transparent2.png";
import transparent3 from "~/assets/gallery/transparent3.png";
import transparent4 from "~/assets/gallery/transparent4.png";
import transparent5 from "~/assets/gallery/transparent5.png";
import styles from "./ImageList.module.css";

const EMPTY_TILES = [transparent1, transparent2, transparent3, transparent4, transparent5];

interface Tile extends Partial<GalleryImage> {
  isEmpty: boolean;
  emptyLink?: string;
}

function shuffle<T>(list: T[]): T[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function ImageList({ images }: { images: GalleryImage[] }) {
  const breakpoint = useBreakpoint();
  const perPage = breakpoint.lgAndUp ? 8 : 4;

  // Shuffled once per gallery load, independent of viewport size.
  const shuffled = useMemo(() => shuffle(images), [images]);

  // Padded with random transparent tiles so the last page divides evenly.
  const padded = useMemo<Tile[]>(() => {
    const tiles: Tile[] = shuffled.map((img) => ({ isEmpty: false, ...img }));
    const remainder = tiles.length % perPage;
    if (remainder !== 0) {
      const emptiesNeeded = perPage - remainder;
      for (let i = 0; i < emptiesNeeded; i++) {
        tiles.push({ isEmpty: true, emptyLink: EMPTY_TILES[Math.floor(Math.random() * EMPTY_TILES.length)] });
      }
    }
    return tiles;
  }, [shuffled, perPage]);

  const pageCount = Math.max(1, Math.ceil(padded.length / perPage));
  const [page, setPage] = useState(1);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setPage(1);
    setExpandedIndex(null);
  }, [perPage]);

  const start = (page - 1) * perPage;
  const visible = padded.slice(start, start + perPage);
  const thumbMaxHeight = breakpoint.lgAndUp ? 150 : breakpoint.smAndDown ? 60 : 200;
  const expandedTile = expandedIndex !== null ? visible[expandedIndex] : null;

  return (
    <>
      <div className={breakpoint.lgAndUp ? styles.gridDesktop : styles.gridMobile}>
        {visible.map((tile, i) =>
          tile.isEmpty ? (
            <div key={`empty-${start + i}`} className={styles.cell}>
              <img
                className={styles.imageTrans}
                style={{ maxHeight: thumbMaxHeight }}
                src={tile.emptyLink}
                alt=""
              />
            </div>
          ) : (
            <div key={tile.full} className={styles.cell} onClick={() => setExpandedIndex(i)}>
              <img
                className={styles.image}
                style={{ maxHeight: thumbMaxHeight }}
                src={tile.compressed}
                alt={tile.info}
              />
              <div className={breakpoint.lgAndUp ? styles.imageText : styles.imageTextM}>{tile.info}</div>
            </div>
          ),
        )}
      </div>
      <div className={styles.paginationRow}>
        <PaginationControl
          currentPage={page}
          pageCount={pageCount}
          onNextPage={() => setPage((p) => Math.min(pageCount, p + 1))}
          onPreviousPage={() => setPage((p) => Math.max(1, p - 1))}
        />
      </div>
      {expandedTile && !expandedTile.isEmpty && (
        <div className={styles.expanded} onClick={() => setExpandedIndex(null)}>
          <div className={styles.imagePlaceholder}>
            loading...
            <br />
            読み込み...
          </div>
          <img className={styles.expandedImage} src={expandedTile.full} alt={expandedTile.info} />
          <div className={breakpoint.lgAndUp ? styles.imageTextExpanded : styles.imageTextExpandedM}>
            {expandedTile.info}
          </div>
        </div>
      )}
    </>
  );
}
