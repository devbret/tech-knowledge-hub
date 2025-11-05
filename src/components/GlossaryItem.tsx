import { useState } from "react";
import type { GlossaryEntry, Category } from "../data/types";

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

  const accentStyle =
    categories.length > 0
      ? {
          background: `linear-gradient(90deg, ${categories
            .map((cat, i) => {
              const c = categoryColors[cat as Category] ?? "#9ca3af"; // fallback gray
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

      <div className="card-accent" style={accentStyle} aria-hidden="true" />

      <p>{definition}</p>

      <button className="link-button" onClick={() => setOpen((v) => !v)}>
        {open ? "Hide details" : "Show details"}
      </button>

      {open && quote && (
        <blockquote
          style={{
            margin: "10px 0 0 0",
            paddingLeft: 12,
            borderLeft: "3px solid var(--border)",
            opacity: 0.9,
            fontStyle: "italic",
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
