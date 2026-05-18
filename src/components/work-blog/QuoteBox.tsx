type QuoteBoxProps = {
  children: React.ReactNode;
};

export function QuoteBox({ children }: QuoteBoxProps) {
  return (
    <blockquote className="relative my-10 rounded-md brutal-border brutal-shadow bg-white px-6 py-8 text-center">
      <span
        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-2 font-display text-3xl text-red"
        aria-hidden
      >
        &ldquo;
      </span>
      <p className="font-display text-xl leading-snug text-fg md:text-2xl">{children}</p>
    </blockquote>
  );
}
