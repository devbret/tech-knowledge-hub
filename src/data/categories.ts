import type { CSSProperties } from "react";
import type { Category } from "./types";

export const categoryColors: Record<Category, string> = {
  OSINT: "#3b82f6",
  AI: "#a855f7",
  "Video Games": "#f97316",
  FOSS: "#10b981",
  Programming: "#06b6d4",
  Audio: "#ef4444",
  Music: "#e879f9",
  Other: "#9ca3af",
  OPSEC: "#f59e0b",
  Hardware: "#22c55e",
  Biohacking: "#8b5cf6",
  Blockchain: "#7c3aed",
  Cybersecurity: "#0ea5e9",
  DevOps: "#6366f1",
};

export const DEFAULT_CATEGORY_COLOR = "#94a3b8";

export function getCategoryColor(cat?: Category): string {
  return (cat && categoryColors[cat]) || DEFAULT_CATEGORY_COLOR;
}

export function categoryAccentStyle(categories: Category[]): CSSProperties {
  if (categories.length === 0) return {};

  const stops = categories
    .map((cat, i) => {
      const start = (100 / categories.length) * i;
      const end = (100 / categories.length) * (i + 1);
      return `${getCategoryColor(cat)} ${start}% ${end}%`;
    })
    .join(", ");

  return { background: `linear-gradient(90deg, ${stops})` };
}
