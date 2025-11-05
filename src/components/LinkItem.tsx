import type { LinkEntry, Category } from "../data/types";

const categoryColors: Record<Category, string> = {
  OSINT: "#3b82f6",
  AI: "#a855f7",
  "Video Games": "#f97316",
  FOSS: "#10b981",
  Programming: "#06b6d4",
  Audio: "#ef4444",
  Music: "#e879f9",
  Other: "#9ca3af",
  OPSEC: "#f59e0b",
  Hardware: "#22c55e",
  Biohacking: "#8b5cf6",
  Blockchain: "#7c3aed",
  Cybersecurity: "#0ea5e9",
};

function normalizeCategories(
  category: LinkEntry["category"] | string | undefined
) {
  if (Array.isArray(category)) return category;
  if (typeof category === "string") {
    return category
      .split(/[|,;]/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

export default function LinkItem({
  title,
  url,
  description,
  category,
}: LinkEntry) {
  const categories = normalizeCategories(category) as Category[];

  const accentStyle =
    categories.length > 0
      ? {
          background: `linear-gradient(90deg, ${categories
            .map((cat, i) => {
              const c = categoryColors[cat] ?? "#9ca3af";
              const start = (100 / categories.length) * i;
              const end = (100 / categories.length) * (i + 1);
              return `${c} ${start}% ${end}%`;
            })
            .join(", ")})`,
        }
      : {};

  return (
    <article className="card">
      <div className="card-head">
        <h3 className="card-title">
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>

        {categories.length > 0 && (
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {categories.map((cat, idx) => (
              <span key={idx} className="pill">
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="card-accent" style={accentStyle} aria-hidden="true" />

      {description && <p>{description}</p>}
      <a className="link-button" href={url} target="_blank" rel="noreferrer">
        Visit →
      </a>
    </article>
  );
}
