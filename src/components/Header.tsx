const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#"
          className="font-display text-lg tracking-tight text-fg sm:text-xl"
        >
          Arush<span className="text-red">Bansal</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-fg transition-colors hover:text-red"
            >
              {item.label}
            </a>
          ))}
        </nav>

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
