import { ChangeEvent, useEffect, useRef } from "react";

interface Props {
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
}
export default function SearchBar({ value, onChange, placeholder }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const handle = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key === "/") {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="container">
      <input
        ref={ref}
        className="search"
        value={value}
        onChange={handle}
        placeholder={placeholder ?? "Search terms and links…"}
        aria-label="Search"
      />
      <div
        className="muted left-aligned"
        style={{ fontSize: 12, marginTop: 4 }}
      >
        Tip: press <kbd>/</kbd> to search
      </div>
    </div>
  );
}
