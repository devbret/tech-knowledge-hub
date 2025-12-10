import type { Category } from "../data/types";

type WithMaybeCategory = { category?: Category[] | null };

export function buildCategoryMatrix(
  items: WithMaybeCategory[],
  categories: Category[]
) {
  const index = new Map<Category, number>();
  categories.forEach((c, i) => index.set(c, i));

  const n = categories.length;
  const matrix: number[][] = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (const item of items) {
    const rawCats = item.category ?? [];
    const cats = Array.from(new Set(rawCats));
    if (cats.length < 2) continue;

    for (let a = 0; a < cats.length; a++) {
      for (let b = a + 1; b < cats.length; b++) {
        const i = index.get(cats[a]);
        const j = index.get(cats[b]);
        if (i == null || j == null) continue;

        matrix[i][j] += 1;
        matrix[j][i] += 1;
      }
    }
  }

  return { matrix, categories };
}
