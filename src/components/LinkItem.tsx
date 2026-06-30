import type { LinkEntry } from "../data/types";
import { categoryAccentStyle } from "../data/categories";

export default function LinkItem({
  title,
  url,
  description,
  category,
}: LinkEntry) {
  const categories = category ?? [];

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
            {categories.map((cat) => (
              <span key={cat} className="pill">
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      <div
        className="card-accent"
        style={categoryAccentStyle(categories)}
        aria-hidden="true"
      />

      {description && <p>{description}</p>}
      <a className="link-button" href={url} target="_blank" rel="noreferrer">
        Visit →
      </a>
    </article>
  );
}
