import { site } from "@/lib/content";

type ArticleHeaderProps = {
  title: string;
  subtitle?: string;
  category: string;
  categoryEmoji: string;
};

export function ArticleHeader({
  title,
  subtitle,
  category,
  categoryEmoji,
}: ArticleHeaderProps) {
  return (
    <header className="mb-10">
      <p className="font-hand text-lg font-bold text-teal">
        {category} {categoryEmoji}
      </p>
      <h1 className="font-display mt-3 text-4xl leading-tight text-fg md:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 text-lg font-bold text-fg-muted">{subtitle}</p>
      ) : null}
      <div className="mt-6 flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full brutal-border brutal-shadow-sm bg-yellow text-sm font-extrabold"
          aria-hidden
        >
          AB
        </span>
        <p className="text-sm font-medium text-fg-muted">
          By <span className="font-bold text-fg">{site.name}</span>
        </p>
      </div>
    </header>
  );
}
