"use client";

import { useEffect, useState } from "react";

const defaultQueries = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

type queryTypes = "sm" | "md" | "lg" | "xl" | "2xl";
export const useMediaQuire = (query: queryTypes) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(defaultQueries[query]);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};
