import { useMemo, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TagFilter from "./components/TagFilter";
import GlossaryList from "./components/GlossaryList";
import LinkList from "./components/LinkList";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { buildCategoryMatrix } from "./utils/buildCategoryMatrix";
import CategoryChord from "./components/CategoryChord";
import CategoryNetwork from "./components/CategoryNetwork";
import { ALL_CATEGORIES, glossary, links } from "./data/data";
import type { Category } from "./data/types";
import "./styles/App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeCats, setActiveCats] = useState<Set<Category>>(new Set());
  const [showChord, setShowChord] = useState(false);
  const [showNetwork, setShowNetwork] = useState(false);

  const allItems = [...glossary, ...links];
  const { matrix, categories } = buildCategoryMatrix(allItems, ALL_CATEGORIES);

  const toggleCat = (c: Category) =>
    setActiveCats((prev) => {
      const next = new Set(prev);
      if (next.has(c)) {
        next.delete(c);
      } else {
        next.add(c);
      }
      return next;
    });

  const clearCats = () => setActiveCats(new Set());

  useMemo(() => {
    const stored = localStorage.getItem("tkh:query");
    if (stored) setQuery(stored);
  }, []);

  useMemo(() => {
    localStorage.setItem("tkh:query", query);
  }, [query]);

  if (showChord) {
    return (
      <div className="app chord-page">
        <header className="chord-page__header">
          <button
            className="chord-page__close-btn"
            onClick={() => setShowChord(false)}
          >
            Close Chord Graph
          </button>
        </header>

        <main className="chord-page__main">
          <CategoryChord matrix={matrix} categories={categories} />
        </main>
      </div>
    );
  }

  if (showNetwork) {
    return (
      <div className="app chord-page">
        <header className="chord-page__header">
          <button
            className="chord-page__close-btn"
            onClick={() => setShowNetwork(false)}
          >
            Close Network Graph
          </button>
        </header>

        <main className="chord-page__main">
          <CategoryNetwork glossary={glossary} links={links} />
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <section className="hero">
        <Header />
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search terms and links…"
        />
        <TagFilter
          categories={ALL_CATEGORIES}
          active={activeCats}
          onToggle={toggleCat}
          onClear={clearCats}
        />

        <div className="open-chord-wrap">
          <button
            className="open-chord-btn"
            onClick={() => {
              setShowNetwork(false);
              setShowChord(true);
            }}
          >
            Open Chord Graph
          </button>

          <button
            className="open-network-btn"
            onClick={() => {
              setShowChord(false);
              setShowNetwork(true);
            }}
          >
            Open Network Graph
          </button>
        </div>
      </section>

      <main>
        <section className="full-bleed">
          <GlossaryList
            items={glossary}
            query={query}
            categories={activeCats}
          />
        </section>

        <section className="full-bleed">
          <LinkList items={links} query={query} categories={activeCats} />
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
