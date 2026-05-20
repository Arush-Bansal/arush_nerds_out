import Link from "next/link";
import { hero } from "@/lib/content";

const cardLayout = [
  { position: "left-0 top-0", rotate: "-rotate-3", z: "z-10" },
  { position: "right-0 top-6 sm:top-10", rotate: "rotate-2", z: "z-20" },
  { position: "left-6 top-[42%] sm:left-10", rotate: "-rotate-2", z: "z-30" },
  { position: "right-4 bottom-0 sm:right-8", rotate: "rotate-3", z: "z-30" },
] as const;

export function Hero() {
  return (
    <section className="bg-white pt-10 pb-16 md:pt-14 md:pb-24">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <p className="badge-tilt font-hand mb-8 text-lg font-bold tracking-wide text-fg uppercase">
              {hero.badge}
            </p>

            <h1 className="font-display text-[2.5rem] leading-[1.02] font-normal tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              {hero.headlineBefore}
              <span className="highlight-mark">{hero.headlineHighlight}</span>
              {hero.headlineAfter}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed font-medium text-fg-muted md:text-lg">
              {hero.subtext}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={hero.primaryCta.href}
                className="brutal-btn btn-red rounded-md px-6 py-3.5 text-sm"
              >
                {hero.primaryCta.label} →
              </a>
              <a
                href={hero.secondaryCta.href}
                className="brutal-btn btn-white rounded-md px-6 py-3.5 text-sm"
              >
                {hero.secondaryCta.label}
              </a>
              <Link
                href={hero.tertiaryCta.href}
                className="brutal-btn btn-white rounded-md px-6 py-3.5 text-sm"
              >
                {hero.tertiaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto hidden h-[22rem] w-full max-w-[440px] sm:h-[26rem] sm:max-w-[520px] md:block lg:mx-0 lg:ml-auto">
            {hero.insights.map((card, i) => {
              const layout = cardLayout[i];
              return (
                <div
                  key={card.label}
                  className={`brutal-border brutal-shadow absolute flex aspect-square w-[11.5rem] flex-col items-center justify-center rounded-md sm:w-[13rem] ${card.bgClass} ${layout.position} ${layout.rotate} ${layout.z}`}
                >
                  <span
                    className={`font-hand absolute top-4 left-4 text-sm font-bold sm:text-base ${
                      card.labelLight ? "text-white" : "text-fg"
                    }`}
                  >
                    {card.label}
                  </span>
                  <span className="text-5xl sm:text-6xl" aria-hidden>
                    {card.emoji}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
