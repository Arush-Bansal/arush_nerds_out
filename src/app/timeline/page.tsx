import type { Metadata } from "next";
import { Timeline, TimelinePageHeader } from "@/components/Timeline";
import { site, timeline } from "@/lib/content";

const title = `Timeline · ${site.name} — IIT Delhi, Grifi, Floworks & more`;
const description = `Year-by-year timeline for ${site.name} — IIT Delhi (2021–2025), co-founding Grifi, early engineer at Floworks (YC W23), JLR, and Phoenix.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/timeline",
  },
  openGraph: {
    title,
    description,
    type: "profile",
    url: "/timeline",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function TimelinePage() {
  return (
    <>
      <TimelinePageHeader />
      <main
        className="bg-white py-14 md:py-20"
        aria-labelledby="timeline-heading"
      >
        <div className="site-container max-w-4xl">
          <p className="text-xs font-semibold tracking-widest text-fg-muted uppercase">
            {timeline.badge}
          </p>
          <h1
            id="timeline-heading"
            className="font-display mt-4 text-3xl text-fg md:text-4xl"
          >
            {timeline.headline}
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-fg-muted md:text-base">
            {timeline.subtext}
          </p>
          <div className="mt-14 md:mt-16">
            <Timeline />
          </div>
        </div>
      </main>
    </>
  );
}
