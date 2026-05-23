import Link from "next/link";
import type { CreatorboxRead } from "@/lib/creatorbox-reads";
import { creatorboxReads } from "@/lib/creatorbox-reads";

type TechnicalReadArticleProps = {
  read: CreatorboxRead;
};

export function TechnicalReadArticle({ read }: TechnicalReadArticleProps) {
  const otherReads = creatorboxReads.filter((item) => item.slug !== read.slug);

  return (
    <article className={`brutal-card rounded-md p-8 md:p-12 ${read.accentClass}`}>
      <Link
        href="/work/creatorbox"
        className="font-hand text-sm font-bold tracking-wide text-fg-muted uppercase hover:text-fg"
      >
        ← CreatorBox AI
      </Link>

      <header className="mt-6 border-b-2 border-fg/15 pb-6">
        <p className="font-hand text-sm font-bold tracking-wide text-teal uppercase">
          Technical read
        </p>
        <span className="mt-3 block text-3xl" aria-hidden>
          {read.emoji}
        </span>
        <h1 className="font-display mt-2 text-3xl text-fg md:text-4xl">{read.title}</h1>
        <p className="mt-2 text-base font-medium text-fg-muted">{read.subtitle}</p>
      </header>

      <p className="mt-8 text-base font-medium leading-relaxed text-fg-muted">{read.description}</p>

      <div className="mt-10 space-y-8">
        {read.points.map((point, index) => (
          <section key={point.title} className="grid gap-3 sm:grid-cols-[3.5rem_1fr]">
            <span className="font-display text-4xl text-fg/20">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-display text-lg text-fg">{point.title}</h2>
              <p className="mt-2 text-base font-medium leading-relaxed text-fg-muted">{point.body}</p>
            </div>
          </section>
        ))}
      </div>

      {otherReads.length > 0 ? (
        <aside className="section-rule-top mt-12 pt-8">
          <p className="font-hand text-sm font-bold tracking-wide text-fg uppercase">
            More technical reads
          </p>
          <ul className="mt-4 space-y-3">
            {otherReads.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/work/creatorbox/${item.slug}`}
                  className="font-display text-base text-fg hover:underline"
                >
                  {item.emoji} {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </article>
  );
}
