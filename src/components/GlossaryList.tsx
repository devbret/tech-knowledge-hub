import type { GlossaryEntry, Category } from "../data/types";
import GlossaryItem from "./GlossaryItem";

interface Props {
  items: GlossaryEntry[];
  query: string;
  categories: Set<Category>;
}

const matchesQuery = (s: string, q: string) =>
  s.toLowerCase().includes(q.toLowerCase());

export default function GlossaryList({ items, query, categories }: Props) {
  const filtered = items.filter((g) => {
    const entryCategories = Array.isArray(g.category)
      ? g.category
      : g.category
      ? [g.category]
      : [];

    const catOk =
      categories.size === 0 ||
      entryCategories.some((cat) => categories.has(cat as Category));

    const text = `${g.term} ${g.definition} ${g.more ?? ""}`;
    const qOk = query.trim() === "" || matchesQuery(text, query);

    return catOk && qOk;
  });

  return (
    <section className="container">
      <h2>Glossary</h2>
      {filtered.length === 0 ? (
        <p className="muted">
          No matches. Add entries in <code>src/data/data.ts</code>.
        </p>
      ) : (
        <div className="grid">
          {filtered.map((g) => (
            <GlossaryItem key={g.term} {...g} />
          ))}
        </div>
      )}
    </section>
  );
}
