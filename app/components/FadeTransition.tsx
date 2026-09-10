import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLocation } from "react-router";
import styles from "./FadeTransition.module.css";

export function FadeTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [fading, setFading] = useState(false);
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current === location.pathname) {
      setDisplayChildren(children);
      return;
    }
    setFading(true);
    const timeout = setTimeout(() => {
      prevPath.current = location.pathname;
      setDisplayChildren(children);
      setFading(false);
    }, 150);
    return () => clearTimeout(timeout);
  }, [location.pathname, children]);

  return (
    <div className={fading ? styles.fadeOut : styles.fadeIn}>
      {displayChildren}
    </div>
  );
}
