"use client";

import { useCallback } from "react";

export function useScrollToTop() {
  return useCallback((behavior: ScrollBehavior = "smooth") => {
    window.scrollTo({ top: 0, behavior });
  }, []);
}
