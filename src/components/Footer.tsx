export default function Footer() {
  return (
    <footer className="container footer">
      <span className="muted">
        © {new Date().getFullYear()} Bret Bernhoft • Built with React + Vite +
        TS
      </span>
      <nav className="footer-links">
        <a href="https://github.com/devbret" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/bernhoftbret"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </footer>
  );
}
