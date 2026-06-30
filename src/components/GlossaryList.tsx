import type { GlossaryEntry, Category } from "../data/types";
import { useFilteredItems } from "../utils/useFilteredItems";
import GlossaryItem from "./GlossaryItem";

interface Props {
  items: GlossaryEntry[];
  query: string;
  categories: Set<Category>;
}

const glossaryText = (g: GlossaryEntry) =>
  `${g.term} ${g.definition} ${g.more ?? ""}`;

export default function GlossaryList({ items, query, categories }: Props) {
  const visible = useFilteredItems(items, query, categories, glossaryText);

  return (
    <section className="container">
      <h2>Glossary Terms</h2>
      {visible.length === 0 ? (
        <p className="muted">No matches.</p>
      ) : (
        <div className="grid">
          {visible.map((g) => (
            <GlossaryItem key={g.term} {...g} />
          ))}
        </div>
      )}
    </section>
  );
}
