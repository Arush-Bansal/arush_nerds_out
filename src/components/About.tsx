import Image from "next/image";
import { about } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="section-rule-top bg-[color-mix(in_srgb,var(--yellow)_35%,white)] py-16 md:py-24"
    >
      <div className="site-container flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-8">
        <figure
          className="brutal-border brutal-shadow-sm w-[min(100%,16.25rem)] shrink-0 rounded-md bg-white p-3 lg:w-[16.9rem] xl:w-[19.5rem]"
          aria-label="Photo of Arush Bansal"
        >
          <Image
            src="/images/arush-about.jpeg"
            alt="Arush Bansal"
            width={960}
            height={1280}
            className="aspect-[3/4] w-full rounded-sm object-cover"
            sizes="(max-width: 1024px) 260px, 312px"
            priority
          />
        </figure>

        <div className="brutal-card min-w-0 flex-1 rounded-md p-8 md:p-12">
          <p className="font-hand text-2xl font-bold text-fg">About</p>
          <h2 className="font-display mt-2 text-4xl text-fg md:text-5xl">
            The Nerdy Bits about Me
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
            {about.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed font-medium text-fg-muted md:text-lg"
              >
                {para}
              </p>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="brutal-border brutal-shadow-sm rounded-md bg-white p-4"
              >
                <dt className="font-hand text-sm font-bold text-red">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-bold text-fg">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
