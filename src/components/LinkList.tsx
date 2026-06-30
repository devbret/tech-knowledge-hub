import type { LinkEntry, Category } from "../data/types";
import { useFilteredItems } from "../utils/useFilteredItems";
import LinkItem from "./LinkItem";

interface Props {
  items: LinkEntry[];
  query: string;
  categories: Set<Category>;
}

const linkText = (l: LinkEntry) => `${l.title} ${l.description ?? ""} ${l.url}`;

export default function LinkList({ items, query, categories }: Props) {
  const visible = useFilteredItems(items, query, categories, linkText);

  return (
    <section className="container">
      <h2>Resource Links</h2>
      {visible.length === 0 ? (
        <p className="muted">No matches.</p>
      ) : (
        <div className="grid">
          {visible.map((l) => (
            <LinkItem key={l.url} {...l} />
          ))}
        </div>
      )}
    </section>
  );
}
