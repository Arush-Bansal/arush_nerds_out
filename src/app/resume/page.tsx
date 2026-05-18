import type { Metadata } from "next";
import { Resume, ResumePageHeader } from "@/components/Resume";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Resume · ${site.name}`,
  description: `Professional resume for ${site.name} — engineer, co-founder of Grifi, IIT Delhi alum.`,
};

export default function ResumePage() {
  return (
    <>
      <ResumePageHeader />
      <main className="bg-yellow-soft py-12 md:py-20">
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
