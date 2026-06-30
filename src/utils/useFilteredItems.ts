import { useMemo } from "react";
import type { Category } from "../data/types";
import { filterItems, shuffleArray, type Filterable } from "./filter";

export function useFilteredItems<T extends Filterable>(
  items: T[],
  query: string,
  categories: Set<Category>,
  getText: (item: T) => string,
): T[] {
  const shuffled = useMemo(() => shuffleArray(items), [items]);

  return useMemo(
    () => filterItems(shuffled, query, categories, getText),
    [shuffled, query, categories, getText],
  );
}
