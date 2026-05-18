import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkPageHeader } from "@/components/WorkPageHeader";
import { WorkArticle } from "@/components/work-blog/WorkArticle";
import { site } from "@/lib/content";
import { getWorkPost, getWorkPostMetadata, getWorkSlugs } from "@/lib/work-posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = getWorkPostMetadata(slug);
  if (!meta) return { title: `Work · ${site.name}` };
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function WorkPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getWorkPost(slug);
  if (!post) notFound();

  return (
    <>
      <WorkPageHeader />
      <main className="bg-yellow-soft py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="badge-tilt font-hand mb-8 text-lg font-bold tracking-wide text-fg uppercase">
            Work story
          </p>
          <WorkArticle post={post} />
        </div>
      </main>
    </>
  );
}
