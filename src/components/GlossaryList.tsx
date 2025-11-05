import type { GlossaryEntry, Category } from "../data/types";
import GlossaryItem from "./GlossaryItem";

interface Props {
  items: GlossaryEntry[];
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

  const randomized = shuffleArray(filtered);

  return (
    <section className="container">
      <h2>Glossary Terms</h2>
      {randomized.length === 0 ? (
        <p className="muted">No matches.</p>
      ) : (
        <div className="grid">
          {randomized.map((g) => (
            <GlossaryItem key={g.term} {...g} />
          ))}
        </div>
      )}
    </section>
  );
}
