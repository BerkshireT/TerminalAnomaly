import { useEffect, useState } from "react";

// Mirrors the Vuetify 1 breakpoint thresholds the old site relied on
// ($vuetify.breakpoint.{lgAndUp,md,smAndDown,...}).
type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

function getBreakpoint(): Breakpoint {
  if (typeof window === "undefined") return "lg";
  const width = window.innerWidth;
  if (width < 600) return "xs";
  if (width < 960) return "sm";
  if (width < 1264) return "md";
  if (width < 1904) return "lg";
  return "xl";
}

export function useBreakpoint() {
  const [bp, setBp] = useState<Breakpoint>(getBreakpoint);

  useEffect(() => {
    const onResize = () => setBp(getBreakpoint());
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    xs: bp === "xs",
    sm: bp === "sm",
    md: bp === "md",
    lg: bp === "lg",
    xl: bp === "xl",
    smAndUp: bp !== "xs",
    smAndDown: bp === "xs" || bp === "sm",
    mdAndUp: bp === "md" || bp === "lg" || bp === "xl",
    lgAndUp: bp === "lg" || bp === "xl",
  };
}
