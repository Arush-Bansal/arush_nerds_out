import Image from "next/image";
import Link from "next/link";
import {
  getTimelineYearLabel,
  timeline,
  type TimelineExperienceEntry,
  type TimelineLogo,
} from "@/lib/content";

/** Pixels per calendar year — keeps vertical bars proportional. */
const PX_PER_YEAR = 44;
const RANGE_END = 2026;

function barHeightPx(startYear: number, endYear: number | null): number {
  const end = endYear ?? RANGE_END;
  const years = Math.max(end - startYear, 0.5);
  return Math.round(years * PX_PER_YEAR);
}

function TimelineLogo({ logo, emoji }: { logo?: TimelineLogo; emoji?: string }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-md border-[3px] border-border bg-white sm:h-12 sm:w-12">
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

function EducationBar({ className = "" }: { className?: string }) {
  const edu = timeline.education;
  const height = barHeightPx(edu.startYear, edu.endYear);

  return (
    <aside
      className={`flex shrink-0 flex-col items-center ${className}`}
      aria-label={`${edu.institution}, ${edu.startYear} to ${edu.endYear}`}
    >
      <span className="text-xs font-medium text-fg-muted tabular-nums">
        {edu.endYear}
      </span>
      <div
        className="relative my-2 w-10 rounded-md bg-[#ececec] sm:w-11"
        style={{ height: height + 16 }}
      >
        <div
          className={`absolute right-0 bottom-2 left-0 rounded-md ${edu.barClass}`}
          style={{ height }}
          role="presentation"
        />
      </div>
      <span className="text-xs font-medium text-fg-muted tabular-nums">
        {edu.startYear}
      </span>
      <p className="font-hand mt-3 max-w-[4.5rem] text-center text-sm leading-tight font-bold text-fg">
        {edu.institution}
      </p>
      <p className="mt-1 max-w-[5.5rem] text-center text-[0.65rem] leading-snug font-medium text-fg-muted">
        {edu.degree}
      </p>
    </aside>
  );
}

function ExperienceEntry({ entry }: { entry: TimelineExperienceEntry }) {
  const height = barHeightPx(entry.startYear, entry.endYear);
  const yearLabel = getTimelineYearLabel(entry);

  return (
    <li className="flex gap-4 sm:gap-5">
      <div
        className="flex shrink-0 flex-col items-center pt-1"
        aria-hidden
      >
        <div
          className={`w-3 rounded-sm sm:w-3.5 ${entry.barClass}`}
          style={{ height }}
        />
      </div>

      <div className="flex min-w-0 flex-1 gap-4 sm:gap-5">
        <TimelineLogo logo={entry.logo} emoji={entry.emoji} />
        <div className="min-w-0 pb-2">
          <p className="text-xs font-medium text-red tabular-nums">{yearLabel}</p>
          <h3 className="mt-1 text-base font-semibold text-fg sm:text-lg">
            {entry.org}
          </h3>
          <p className="mt-0.5 text-sm text-fg-muted">{entry.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
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
  const edu = timeline.education;
  const entries = [...timeline.experience].sort(
    (a, b) => b.startYear - a.startYear || (b.endYear ?? 9999) - (a.endYear ?? 9999),
  );

  return (
    <div className="min-w-0">
      {/* Mobile: education strip above the stack */}
      <div className="section-rule-bottom mb-10 flex gap-5 pb-10 sm:hidden">
        <EducationBar />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold tracking-widest text-fg-muted uppercase">
            Education
          </p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            {edu.description}
          </p>
        </div>
      </div>

      <div className="flex gap-8 lg:gap-12">
        {/* Desktop: college bar adjacent to the whole experience stack */}
        <EducationBar className="hidden sm:flex lg:sticky lg:top-28 lg:self-start" />

        <div className="min-w-0 flex-1">
          <p className="mb-8 text-xs font-semibold tracking-widest text-fg-muted uppercase sm:mb-10">
            Experience
          </p>

          <ol className="flex flex-col gap-12 sm:gap-14">
            {entries.map((entry) => (
              <ExperienceEntry key={entry.id} entry={entry} />
            ))}
          </ol>

          <p className="mt-10 hidden text-sm leading-relaxed text-fg-muted sm:block">
            {edu.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TimelinePageHeader() {
  return (
    <header className="section-rule-bottom sticky top-0 z-40 bg-white">
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
