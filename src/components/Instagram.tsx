import { instagram } from "@/lib/content";

export function Instagram() {
  return (
    <section
      id="instagram"
      className="section-rule-top bg-[color-mix(in_srgb,var(--pink-highlight)_45%,white)] py-16 md:py-24"
    >
      <div className="site-container">
        <div className="brutal-card brutal-shadow-lg rounded-md p-8 md:flex md:items-center md:justify-between md:gap-10 md:p-12">
          <div className="max-w-xl">
            <p className="font-hand text-2xl font-bold text-purple">Instagram</p>
            <h2 className="font-display mt-2 text-4xl text-fg md:text-5xl">
              {instagram.headline}
            </h2>
            <p className="mt-4 text-base font-medium text-fg-muted md:text-lg">
              {instagram.subtext}
            </p>
          </div>
          <a
            href={instagram.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn btn-red mt-8 inline-flex rounded-md px-6 py-3.5 text-sm md:mt-0 md:shrink-0"
          >
            {instagram.cta.label} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
