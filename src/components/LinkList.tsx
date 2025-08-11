import type { LinkEntry, Category } from "../data/types";
import LinkItem from "./LinkItem";

interface Props {
  items: LinkEntry[];
  query: string;
  categories: Set<Category>;
}

const matchesQuery = (s: string, q: string) =>
  s.toLowerCase().includes(q.toLowerCase());

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

  return (
    <section className="container">
      <h2>Favorite Links</h2>
      {filtered.length === 0 ? (
        <p className="muted">
          No matches. Add links in <code>src/data/data.ts</code>.
        </p>
      ) : (
        <div className="grid">
          {filtered.map((l) => (
            <LinkItem key={l.url} {...l} />
          ))}
        </div>
      )}
    </section>
  );
}
