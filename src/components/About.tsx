import { about } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="border-t-[3px] border-border bg-yellow-soft py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="brutal-card rounded-md p-8 md:p-12">
          <p className="font-hand text-2xl font-bold text-fg">About</p>
          <h2 className="font-display mt-2 text-4xl text-fg md:text-5xl">
            A bit about me
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
