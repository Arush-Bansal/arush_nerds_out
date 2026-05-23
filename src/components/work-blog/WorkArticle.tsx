import type { WorkPost } from "@/lib/work-posts";
import { ArticleHeader } from "./ArticleHeader";
import { Callout } from "./Callout";
import { HandwrittenNote } from "./HandwrittenNote";
import { NumberedList } from "./NumberedList";
import { QuoteBox } from "./QuoteBox";
import { StrategicInsight } from "./StrategicInsight";
import { SuggestedNextRead } from "./SuggestedNextRead";

type WorkArticleProps = {
  post: WorkPost;
};

export function WorkArticle({ post }: WorkArticleProps) {
  return (
    <article className="brutal-card rounded-md p-8 md:p-12">
      <ArticleHeader
        title={post.title}
        subtitle={post.subtitle}
        category={post.category}
        categoryEmoji={post.categoryEmoji}
      />

      {post.sections.map((section) => {
        switch (section.type) {
          case "callout":
            return <Callout key={section.id}>{section.content}</Callout>;
          case "paragraph":
            return (
              <div key={section.id} className="mb-5">
                <p className="text-base font-medium leading-relaxed text-fg-muted">
                  {section.content}
                </p>
                {section.note ? (
                  <HandwrittenNote className="mt-3">{section.note}</HandwrittenNote>
                ) : null}
              </div>
            );
          case "heading":
            return (
              <h2
                key={section.id}
                className="font-display mt-10 mb-4 text-2xl text-fg first:mt-0"
              >
                {section.content}
              </h2>
            );
          case "quote":
            return <QuoteBox key={section.id}>{section.content}</QuoteBox>;
          case "numbered":
            return (
              <NumberedList
                key={section.id}
                intro={section.intro}
                items={section.items}
              />
            );
          case "insight":
            return <StrategicInsight key={section.id}>{section.content}</StrategicInsight>;
          default:
            return null;
        }
      })}

      {post.externalHref ? (
        <p className="section-rule-top mt-10 pt-8">
          <a
            href={post.externalHref}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn btn-white rounded-md px-5 py-2.5 text-xs"
          >
            Visit {post.externalLabel ?? "live project"} →
          </a>
        </p>
      ) : null}

      {post.nextRead ? <SuggestedNextRead next={post.nextRead} /> : null}
    </article>
  );
}
