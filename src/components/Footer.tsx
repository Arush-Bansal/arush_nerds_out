import { site } from "@/lib/content";

const explore = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contact", href: "#contact" },
];

const community = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Instagram", href: site.links.instagram },
  { label: "Email", href: `mailto:${site.email}` },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-border bg-fg py-14 text-white">
      <div className="site-container">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">
              Arush<span className="text-red">Bansal</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              {site.bio}
            </p>
          </div>

          <div>
            <h3 className="font-hand text-xl font-bold text-yellow">Explore</h3>
            <ul className="mt-4 space-y-2">
              {explore.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-white/80 transition-colors hover:text-yellow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-hand text-xl font-bold text-yellow">Connect</h3>
            <ul className="mt-4 space-y-2">
              {community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white/80 transition-colors hover:text-yellow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-sm font-medium text-white/60">
            © {year} {site.name}
          </p>
          <p className="text-sm font-medium text-white/60">
            {/* Built for{" "} */}
            <span className="font-bold text-yellow">{site.domain}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
