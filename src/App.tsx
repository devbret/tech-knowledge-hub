import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TagFilter from "./components/TagFilter";
import GlossaryList from "./components/GlossaryList";
import LinkList from "./components/LinkList";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { buildCategoryMatrix } from "./utils/buildCategoryMatrix";
import { ALL_CATEGORIES, glossary, links } from "./data/data";
import type { Category } from "./data/types";
import "./styles/App.css";

const CategoryChord = lazy(() => import("./components/CategoryChord"));
const CategoryNetwork = lazy(() => import("./components/CategoryNetwork"));

type View = "main" | "chord" | "network";

export default function App() {
  const [query, setQuery] = useState(
    () => localStorage.getItem("tkh:query") ?? ""
  );
  const [activeCats, setActiveCats] = useState<Set<Category>>(new Set());
  const [view, setView] = useState<View>("main");

  const { matrix, categories } = useMemo(
    () => buildCategoryMatrix([...glossary, ...links], ALL_CATEGORIES),
    []
  );

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

  useEffect(() => {
    localStorage.setItem("tkh:query", query);
  }, [query]);

  if (view === "chord") {
    return (
      <div className="app chord-page">
        <header className="chord-page__header">
          <button
            className="chord-page__close-btn"
            onClick={() => setView("main")}
          >
            Close Chord Graph
          </button>
        </header>

        <main className="chord-page__main">
          <Suspense fallback={<p className="muted">Loading graph…</p>}>
            <CategoryChord matrix={matrix} categories={categories} />
          </Suspense>
        </main>
      </div>
    );
  }

  if (view === "network") {
    return (
      <div className="app chord-page">
        <header className="chord-page__header">
          <button
            className="chord-page__close-btn"
            onClick={() => setView("main")}
          >
            Close Network Graph
          </button>
        </header>

        <main className="chord-page__main">
          <Suspense fallback={<p className="muted">Loading graph…</p>}>
            <CategoryNetwork glossary={glossary} links={links} />
          </Suspense>
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
          <button className="open-chord-btn" onClick={() => setView("chord")}>
            Open Chord Graph
          </button>

          <button
            className="open-network-btn"
            onClick={() => setView("network")}
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
