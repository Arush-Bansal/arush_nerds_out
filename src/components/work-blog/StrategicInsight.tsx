type StrategicInsightProps = {
  children: React.ReactNode;
};

export function StrategicInsight({ children }: StrategicInsightProps) {
  return (
    <aside className="my-10 rounded-md brutal-border brutal-shadow bg-white p-6">
      <p className="font-hand text-sm font-bold tracking-wide text-teal uppercase">
        💡 Strategic insight
      </p>
      <p className="mt-3 text-base font-medium leading-relaxed text-fg-muted">{children}</p>
    </aside>
  );
}
