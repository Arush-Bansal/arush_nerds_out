export function Header() {
  return (
    <header className="section-rule-bottom sticky top-0 z-50 bg-white">
      <div className="site-container flex items-center justify-between gap-4 py-4">
        <a
          href="#"
          className="font-display text-lg tracking-tight text-fg sm:text-xl"
        >
          Arush<span className="text-red">Bansal</span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#work"
            className="brutal-btn btn-yellow hidden rounded-md px-4 py-2 text-xs sm:inline-flex"
          >
            Work
          </a>
          <a
            href="#contact"
            className="brutal-btn btn-red rounded-md px-4 py-2 text-xs sm:px-5 sm:text-sm"
          >
            Connect
          </a>
        </div>
      </div>
    </header>
  );
}
