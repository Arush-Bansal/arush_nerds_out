import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  workTiles,
  type WorkTile,
  type WorkTileFloatingIcon,
  type WorkTileFloatingPlacement,
} from "@/lib/content";

const FLOAT_PLACEMENT: Record<WorkTileFloatingPlacement, string> = {
  "top-left": "-left-2 -top-2 sm:-left-3 sm:-top-3",
  "top-right": "-right-2 -top-2 sm:-right-3 sm:-top-3",
  "bottom-left": "-left-2 -bottom-2 sm:-left-3 sm:-bottom-3",
  "bottom-right": "-right-2 -bottom-2 sm:-right-3 sm:-bottom-3",
  left: "-left-3 top-[38%] sm:-left-4",
  right: "-right-3 top-[42%] sm:-right-4",
};

function FloatingIcon({ icon }: { icon: WorkTileFloatingIcon }) {
  const onAccent =
    icon.bgClass?.includes("bg-red") ||
    icon.bgClass?.includes("bg-teal") ||
    icon.bgClass?.includes("bg-purple");

  return (
    <span
      className={`absolute z-20 hidden aspect-square w-10 items-center justify-center rounded-md border-[3px] border-border text-lg shadow-[3px_3px_0_0_#0a0a0a] sm:flex sm:w-11 sm:text-xl ${FLOAT_PLACEMENT[icon.placement]} ${icon.rotate} ${icon.bgClass ?? "bg-white"} ${onAccent ? "text-white" : "text-fg"}`}
      aria-hidden
    >
      {icon.emoji}
    </span>
  );
}

function TileLogo({ logo }: { logo: NonNullable<WorkTile["logo"]> }) {
  return (
    <div className="absolute top-4 right-4 z-10 rounded-md border-[3px] border-border bg-white p-1 shadow-[3px_3px_0_0_#0a0a0a] sm:top-5 sm:right-5">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={44}
        height={44}
        className="h-10 w-10 sm:h-11 sm:w-11"
      />
    </div>
  );
}

function NoteCard({ tile }: { tile: WorkTile }) {
  return (
    <article className="brutal-card group dotted-grid relative flex h-full flex-col overflow-hidden rounded-md transition-transform">
      {tile.logo ? <TileLogo logo={tile.logo} /> : null}
      <div className={`h-3 w-full ${tile.barClass}`} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-hand pr-14 text-base font-bold text-fg">
          {tile.category} {tile.categoryEmoji}
        </p>
        <h3 className="font-display mt-3 pr-2 text-2xl leading-tight text-fg">
          {tile.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed font-medium text-fg-muted">
          {tile.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href={`/work/${tile.id}`}
            className="brutal-btn btn-red rounded-md px-4 py-2 text-xs"
          >
            Read story →
          </Link>
          {tile.href ? (
            <a
              href={tile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-fg-muted transition-colors hover:text-red"
            >
              {tile.hrefLabel ?? "Visit site"} ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function TileShell({ tile, children }: { tile: WorkTile; children: ReactNode }) {
  return (
    <div className="relative overflow-visible px-1 pt-2 pb-1 sm:px-2 sm:pt-3">
      {tile.floatingIcons?.map((icon, i) => (
        <FloatingIcon key={`${tile.id}-float-${i}`} icon={icon} />
      ))}
      {children}
    </div>
  );
}

export function WorkTiles() {
  const featured = workTiles.slice(0, 3);
  const more = workTiles.slice(3);

  return (
    <section id="work" className="border-t-[3px] border-border bg-white py-16 md:py-24">
      <div className="site-container">
        <div className="mb-12">
          <p className="font-hand text-2xl font-bold text-red">Latest work</p>
          <h2 className="font-display mt-2 text-4xl text-fg md:text-5xl">
            Things I&apos;ve built & led
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium text-fg-muted">
            Fresh projects and experiments — updated as they ship.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {featured.map((tile) => (
            <TileShell key={tile.id} tile={tile}>
              <NoteCard tile={tile} />
            </TileShell>
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-2 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:mt-6 lg:grid-cols-3">
            {more.map((tile) => (
              <TileShell key={tile.id} tile={tile}>
                <NoteCard tile={tile} />
              </TileShell>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
