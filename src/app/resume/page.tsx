import type { Metadata } from "next";
import { Resume, ResumePageHeader } from "@/components/Resume";
import { ResumeJsonLd } from "@/components/ResumeJsonLd";
import { site } from "@/lib/content";

const title = `Resume · ${site.name} — Engineer, IIT Delhi, Grifi & Floworks`;
const description = `Resume for ${site.name} — engineer and co-founder of Grifi, IIT Delhi alum, early engineer at Floworks (YC W23), ex-JLR. Experience, projects, and skills.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title,
    description,
    type: "profile",
    url: "/resume",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function ResumePage() {
  return (
    <>
      <ResumeJsonLd />
      <ResumePageHeader />
      <main
        className="bg-yellow-soft py-12 md:py-20"
        aria-labelledby="resume-heading"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="badge-tilt font-hand mb-8 text-lg font-bold tracking-wide text-fg uppercase">
            Resume
          </p>
          <Resume />
        </div>
      </main>
    </>
  );
}
