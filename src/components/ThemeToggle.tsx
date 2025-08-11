import { useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("tkh:theme") as Theme | null;
    if (saved === "dark" || saved === "light") return saved;

    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }

  return "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const hasStoredPref = useMemo(
    () => typeof window !== "undefined" && !!localStorage.getItem("tkh:theme"),
    []
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("tkh:theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined" || hasStoredPref === true) return;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setTheme(mql.matches ? "dark" : "light");
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [hasStoredPref]);

  return (
    <div className="theme-toggle">
      <button
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="theme-btn"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
