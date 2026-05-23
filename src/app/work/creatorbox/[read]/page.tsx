import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkPageHeader } from "@/components/WorkPageHeader";
import { TechnicalReadArticle } from "@/components/work-blog/TechnicalReadArticle";
import {
  getCreatorboxRead,
  getCreatorboxReadMetadata,
  getCreatorboxReadSlugs,
} from "@/lib/creatorbox-reads";

type PageProps = {
  params: Promise<{ read: string }>;
};

export function generateStaticParams() {
  return getCreatorboxReadSlugs().map((read) => ({ read }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { read } = await params;
  const meta = getCreatorboxReadMetadata(read);
  if (!meta) return { title: "CreatorBox AI · Work" };
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function CreatorboxReadPage({ params }: PageProps) {
  const { read: readSlug } = await params;
  const read = getCreatorboxRead(readSlug);
  if (!read) notFound();

  return (
    <>
      <WorkPageHeader />
      <main className="bg-yellow-soft py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <TechnicalReadArticle read={read} />
        </div>
      </main>
    </>
  );
}
