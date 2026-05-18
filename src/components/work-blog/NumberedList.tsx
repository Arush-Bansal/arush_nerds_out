type NumberedItem = {
  title: string;
  body: string;
};

type NumberedListProps = {
  intro?: string;
  items: NumberedItem[];
};

export function NumberedList({ intro, items }: NumberedListProps) {
  return (
    <div className="my-10">
      {intro ? (
        <p className="mb-6 text-base font-medium leading-relaxed text-fg-muted">{intro}</p>
      ) : null}
      <ol className="space-y-8">
        {items.map((item, index) => (
          <li key={item.title} className="grid gap-3 sm:grid-cols-[3.5rem_1fr]">
            <span className="font-display text-4xl text-fg/20">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-lg text-fg">{item.title}</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-fg-muted">
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
