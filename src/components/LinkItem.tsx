import type { LinkEntry } from "../data/types";

export default function LinkItem({
  title,
  url,
  description,
  category,
}: LinkEntry) {
  const categories = Array.isArray(category)
    ? category
    : category
    ? [category]
    : [];

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
      {description && <p>{description}</p>}
      <a className="link-button" href={url} target="_blank" rel="noreferrer">
        Visit →
      </a>
    </article>
  );
}
