import type { Category } from "../data/types";

export interface Filterable {
  category?: Category[];
}

export const matchesQuery = (s: string, q: string) =>
  s.toLowerCase().includes(q.toLowerCase());

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function filterItems<T extends Filterable>(
  items: T[],
  query: string,
  categories: Set<Category>,
  getText: (item: T) => string,
): T[] {
  const q = query.trim();

  return items.filter((item) => {
    const cats = item.category ?? [];
    const catOk =
      categories.size === 0 || cats.some((cat) => categories.has(cat));
    const qOk = q === "" || matchesQuery(getText(item), q);
    return catOk && qOk;
  });
}
