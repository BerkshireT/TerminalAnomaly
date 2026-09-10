import { Link } from "react-router";
import { useBreakpoint } from "~/hooks/useBreakpoint";
import styles from "./ProjectListItem.module.css";

export interface ProjectListItemProps {
  link: string;
  image: string;
  title: string;
  titleJap: string;
  isLeft: boolean;
  disabled?: boolean;
}

export function ProjectListItem({ link, image, title, titleJap, isLeft, disabled }: ProjectListItemProps) {
  const breakpoint = useBreakpoint();

  const text = (
    <div className={styles.textBlock}>
      <div>{title}</div>
      <div>{titleJap}</div>
    </div>
  );
  const thumb = (
    <div className={styles.thumbBlock}>
      <img className={styles.thumb} src={image} alt="" />
    </div>
  );

  const content = breakpoint.mdAndUp ? (
    <div className={styles.rowDesktop}>
      {isLeft ? (
        <>
          {thumb}
          {text}
        </>
      ) : (
        <>
          {text}
          {thumb}
        </>
      )}
    </div>
  ) : (
    <div className={styles.rowMobile}>
      {thumb}
      {text}
    </div>
  );

  const className = `${styles.glow} ${disabled ? styles.disabled : ""}`;

  if (disabled) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link to={link} className={className}>
      {content}
    </Link>
  );
}
