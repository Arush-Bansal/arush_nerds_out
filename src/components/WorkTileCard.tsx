import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type {
  WorkTile,
  WorkTileFloatingIcon,
  WorkTileFloatingPlacement,
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
    <TileLogoFrame>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={44}
        height={44}
        className="h-10 w-10 sm:h-11 sm:w-11"
      />
    </TileLogoFrame>
  );
}

function TileLogoFrame({ children }: { children: ReactNode }) {
  return (
    <div className="absolute top-4 right-4 z-10 rounded-md border-[3px] border-border bg-white p-1 shadow-[3px_3px_0_0_#0a0a0a] sm:top-5 sm:right-5">
      {children}
    </div>
  );
}

function PrimaryLink({ tile }: { tile: WorkTile }) {
  const href = tile.storyHref ?? `/work/${tile.id}`;
  const label = tile.storyLabel ?? "Read story →";
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="brutal-btn btn-red rounded-md px-4 py-2 text-xs"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className="brutal-btn btn-red rounded-md px-4 py-2 text-xs">
      {label}
    </Link>
  );
}

type WorkTileCardProps = {
  tile: WorkTile;
  variant?: "landing" | "hub";
};

export function WorkTileCard({ tile, variant = "landing" }: WorkTileCardProps) {
  return (
    <article className="brutal-card group dotted-grid relative flex h-full flex-col overflow-hidden rounded-md transition-transform">
      {tile.logo ? <TileLogo logo={tile.logo} /> : null}
      <div className={`h-3 w-full ${tile.barClass}`} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-hand pr-14 text-base font-bold text-fg">
          {tile.category} {tile.categoryEmoji}
        </p>
        <h3 className="font-display mt-3 pr-2 text-2xl leading-tight text-fg">{tile.title}</h3>
        {variant === "hub" ? (
          <p className="mt-1 text-xs font-bold text-fg-muted">{tile.subtitle}</p>
        ) : null}
        <p className="mt-3 flex-1 text-sm leading-relaxed font-medium text-fg-muted">
          {tile.description}
        </p>
        {variant === "hub" ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tile.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border-2 border-border bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-fg-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <TileActions tile={tile} variant={variant} />
      </div>
    </article>
  );
}

function TileActions({
  tile,
  variant,
}: {
  tile: WorkTile;
  variant: "landing" | "hub";
}) {
  const showSecondary =
    tile.href && (variant === "landing" || !tile.storyHref?.startsWith("http"));

  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <PrimaryLink tile={tile} />
      {showSecondary ? (
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
  );
}

export function WorkTileShell({ tile, children }: { tile: WorkTile; children: ReactNode }) {
  return (
    <div className="relative overflow-visible px-1 pt-2 pb-1 sm:px-2 sm:pt-3">
      {tile.floatingIcons?.map((icon, i) => (
        <FloatingIcon key={`${tile.id}-float-${i}`} icon={icon} />
      ))}
      {children}
    </div>
  );
}
