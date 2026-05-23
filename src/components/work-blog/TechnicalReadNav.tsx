import Link from "next/link";

type TechnicalReadLink = {
  slug: string;
  title: string;
  emoji: string;
  teaser: string;
  accentClass: string;
};

type TechnicalReadNavProps = {
  heading: string;
  summary?: string;
  parentSlug: string;
  links: TechnicalReadLink[];
};

export function TechnicalReadNav({
  heading,
  summary,
  parentSlug,
  links,
}: TechnicalReadNavProps) {
  return (
    <section className="my-10">
      <h2 className="font-display mb-3 text-2xl text-fg">{heading}</h2>
      {summary ? (
        <p className="mb-8 text-base font-medium leading-relaxed text-fg-muted">{summary}</p>
      ) : null}
      <div className="grid gap-6">
        {links.map((link) => (
          <Link
            key={link.slug}
            href={`/work/${parentSlug}/${link.slug}`}
            className={`group block rounded-md brutal-border brutal-shadow p-6 transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_var(--border)] md:p-7 ${link.accentClass}`}
          >
            <span className="text-2xl" aria-hidden>
              {link.emoji}
            </span>
            <h3 className="font-display mt-2 text-xl text-fg group-hover:underline">{link.title}</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-fg-muted md:text-base">
              {link.teaser}
            </p>
            <p className="mt-4 font-hand text-sm font-bold tracking-wide text-fg uppercase">
              Read deep dive →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
