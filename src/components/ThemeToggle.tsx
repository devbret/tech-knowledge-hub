import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(
    (localStorage.getItem("tkh:theme") as "dark" | "light") ||
      (window.matchMedia?.("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark")
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("tkh:theme", theme);
  }, [theme]);

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
