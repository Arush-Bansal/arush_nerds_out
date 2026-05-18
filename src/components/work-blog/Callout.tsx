type CalloutProps = {
  children: React.ReactNode;
};

export function Callout({ children }: CalloutProps) {
  return (
    <aside className="my-8 border-l-[6px] border-teal bg-teal/10 px-5 py-4 brutal-border rounded-md">
      <p className="text-base leading-relaxed font-semibold text-fg">{children}</p>
    </aside>
  );
}
