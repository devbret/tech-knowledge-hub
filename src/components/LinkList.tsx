import type { LinkEntry, Category } from "../data/types";
import LinkItem from "./LinkItem";

interface Props {
  items: LinkEntry[];
  query: string;
  categories: Set<Category>;
}

const matchesQuery = (s: string, q: string) =>
  s.toLowerCase().includes(q.toLowerCase());

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default function LinkList({ items, query, categories }: Props) {
  const filtered = items.filter((l) => {
    const entryCategories = Array.isArray(l.category)
      ? l.category
      : l.category
      ? [l.category]
      : [];

    const catOk =
      categories.size === 0 ||
      entryCategories.some((cat) => categories.has(cat));

    const text = `${l.title} ${l.description ?? ""} ${l.url}`;
    const qOk = query.trim() === "" || matchesQuery(text, query);

    return catOk && qOk;
  });

  const randomized = shuffleArray(filtered);

  return (
    <section className="container">
      <h2>Resource Links</h2>
      {randomized.length === 0 ? (
        <p className="muted">
          No matches. Add links in <code>src/data/data.ts</code>.
        </p>
      ) : (
        <div className="grid">
          {randomized.map((l) => (
            <LinkItem key={l.url} {...l} />
          ))}
        </div>
      )}
    </section>
  );
}
