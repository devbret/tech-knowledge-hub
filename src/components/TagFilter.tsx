import type { Category } from "../data/types";

interface Props {
  categories: Category[];
  active: Set<Category>;
  onToggle: (c: Category) => void;
  onClear: () => void;
}

export default function TagFilter({
  categories,
  active,
  onToggle,
  onClear,
}: Props) {
  return (
    <div className="container tags">
      <span className="muted filter-label">Filter:</span>
      {categories.map((c) => (
        <button
          key={c}
          className={`tag ${active.has(c) ? "tag-active" : ""}`}
          onClick={() => onToggle(c)}
        >
          {c}
        </button>
      ))}
      {active.size > 0 && (
        <button className="tag clear" onClick={onClear} title="Clear filters">
          Clear
        </button>
      )}
    </div>
  );
}
