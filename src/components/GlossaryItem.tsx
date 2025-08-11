import { useState } from "react";
import type { GlossaryEntry } from "../data/types";

function normalizeCategories(
  category: GlossaryEntry["category"] | string | undefined
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

export default function GlossaryItem({
  term,
  definition,
  category,
  source,
  source_url,
  quote,
}: GlossaryEntry) {
  const [open, setOpen] = useState(false);
  const categories = normalizeCategories(category);

  return (
    <article className="card">
      <div className="card-head">
        <h3 className="card-title">{term}</h3>
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

      <p>{definition}</p>

      <button className="link-button" onClick={() => setOpen((v) => !v)}>
        {open ? "Hide details" : "More"}
      </button>

      {open && quote && (
        <blockquote
          style={{
            margin: "10px 0 0 0",
            paddingLeft: 12,
            borderLeft: "3px solid var(--border)",
            opacity: 0.9,
          }}
        >
          {quote}
        </blockquote>
      )}

      {open && (source || source_url) && (
        <div
          className="muted quote_source"
          style={{ marginTop: 13, fontSize: 13 }}
        >
          Source:{" "}
          {source_url ? (
            <a href={source_url} target="_blank" rel="noreferrer">
              {source ?? source_url}
            </a>
          ) : (
            <span>{source}</span>
          )}
        </div>
      )}
    </article>
  );
}
