import Link from "next/link";

export function WorkPageHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-border bg-white">
      <div className="site-container flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-fg sm:text-xl"
        >
          Arush<span className="text-red">Bansal</span>
        </Link>
        <Link
          href="/#work"
          className="brutal-btn btn-white rounded-md px-4 py-2 text-xs sm:px-5 sm:text-sm"
        >
          ← Back to work
        </Link>
      </div>
    </header>
  );
}
