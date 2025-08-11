import { useMemo, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TagFilter from "./components/TagFilter";
import GlossaryList from "./components/GlossaryList";
import LinkList from "./components/LinkList";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { ALL_CATEGORIES, glossary, links } from "./data/data";
import type { Category } from "./data/types";
import "./styles/App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeCats, setActiveCats] = useState<Set<Category>>(new Set());

  const toggleCat = (c: Category) =>
    setActiveCats((prev) => {
      const next = new Set(prev);
      next.has(c) ? next.delete(c) : next.add(c);
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
      </section>

      <main>
        <GlossaryList items={glossary} query={query} categories={activeCats} />
        <LinkList items={links} query={query} categories={activeCats} />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
