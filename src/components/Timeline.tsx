import Image from "next/image";
import Link from "next/link";
import {
  getTimelineYearLabel,
  timeline,
  type TimelineExperienceEntry,
  type TimelineLogo,
} from "@/lib/content";

function TimelineLogo({ logo, emoji }: { logo?: TimelineLogo; emoji?: string }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/30 bg-white sm:h-14 sm:w-14">
      {logo ? (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={40}
          height={40}
          className="h-9 w-9 sm:h-10 sm:w-10"
        />
      ) : (
        <span className="text-xl sm:text-2xl" aria-hidden>
          {emoji ?? "·"}
        </span>
      )}
    </div>
  );
}

function EducationAside() {
  const edu = timeline.education;

  return (
    <aside
      className="lg:sticky lg:top-28 lg:self-start"
      aria-label={`Education: ${edu.institution}, ${edu.startYear} to ${edu.endYear}`}
    >
      <p className="text-xs font-semibold tracking-widest text-fg-muted uppercase">
        Education
      </p>
      <p className="font-display mt-3 text-2xl leading-tight text-fg">
        {edu.institution}
      </p>
      <p className="mt-2 text-sm font-medium text-fg">{edu.degree}</p>
      <p className="mt-1 text-sm font-medium text-red">
        {edu.startYear} – {edu.endYear}
      </p>
      <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-muted">
        {edu.description}
      </p>
      <div
        className="mt-8 hidden h-px w-12 bg-border lg:block"
        aria-hidden
      />
    </aside>
  );
}

function TimelineEntry({ entry }: { entry: TimelineExperienceEntry }) {
  const yearLabel = getTimelineYearLabel(entry);

  return (
    <li className="relative grid grid-cols-[5.25rem_1.25rem_minmax(0,1fr)] items-start gap-x-5 sm:grid-cols-[6.5rem_1.5rem_minmax(0,1fr)] sm:gap-x-8">
      <p className="pt-0.5 text-right text-sm font-medium text-fg-muted tabular-nums">
        {yearLabel}
      </p>

      <div className="flex justify-center pt-1.5">
        <span
          className="relative z-10 h-2.5 w-2.5 rounded-full bg-border"
          aria-hidden
        />
      </div>

      <div className="flex min-w-0 gap-4 sm:gap-5">
        <TimelineLogo logo={entry.logo} emoji={entry.emoji} />
        <div className="min-w-0 pb-10 sm:pb-12">
          <h3 className="text-base font-semibold text-fg sm:text-lg">
            {entry.org}
          </h3>
          <p className="mt-0.5 text-sm text-fg-muted">{entry.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-[0.9375rem]">
            {entry.description}
          </p>
          {entry.href && entry.hrefLabel && (
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-red hover:underline"
            >
              {entry.hrefLabel}
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export function Timeline() {
  const entries = [...timeline.experience].sort(
    (a, b) => b.startYear - a.startYear || (b.endYear ?? 9999) - (a.endYear ?? 9999),
  );

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
      <EducationAside />

      <div className="min-w-0">
        <p className="mb-10 text-xs font-semibold tracking-widest text-fg-muted uppercase lg:mb-12">
          Experience
        </p>

        <div className="relative">
          <div
            className="pointer-events-none absolute top-2 bottom-12 left-[5.875rem] w-px bg-border/25 sm:left-[7.25rem]"
            aria-hidden
          />

          <ol>
            {entries.map((entry) => (
              <TimelineEntry key={entry.id} entry={entry} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export function TimelinePageHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/20 bg-white/95 backdrop-blur-sm">
      <div className="site-container flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-fg sm:text-xl"
        >
          Arush<span className="text-red">Bansal</span>
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold text-fg-muted transition-colors hover:text-fg"
        >
          ← Home
        </Link>
      </div>
    </header>
  );
}
