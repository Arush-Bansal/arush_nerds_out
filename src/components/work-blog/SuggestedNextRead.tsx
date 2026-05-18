import Link from "next/link";
import type { WorkPostMeta } from "@/lib/work-posts";

type SuggestedNextReadProps = {
  next: WorkPostMeta;
};

export function SuggestedNextRead({ next }: SuggestedNextReadProps) {
  return (
    <Link
      href={`/work/${next.slug}`}
      className="mt-12 block rounded-md brutal-border brutal-shadow-lg bg-yellow px-6 py-8 text-center transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_var(--border)]"
    >
      <p className="font-hand text-sm font-bold tracking-wide text-fg uppercase">
        Suggested next read
      </p>
      <p className="font-display mt-2 text-2xl text-fg">{next.title}</p>
      <p className="mt-2 text-sm font-bold text-fg-muted">{next.subtitle}</p>
    </Link>
  );
}
