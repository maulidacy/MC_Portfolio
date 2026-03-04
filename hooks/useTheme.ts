// hooks/useTheme.ts
"use client";

import { useCallback } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const theme: Theme = "light";

  const setTheme = useCallback((_t: Theme) => {
    // Light-only: intentionally no-op
  }, []);

  const toggleTheme = useCallback(() => {
    // Light-only: intentionally no-op
  }, []);

  return { theme, setTheme, toggleTheme, mounted: true };
}
