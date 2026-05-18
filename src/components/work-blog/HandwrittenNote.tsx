type HandwrittenNoteProps = {
  children: React.ReactNode;
  className?: string;
};

export function HandwrittenNote({ children, className = "" }: HandwrittenNoteProps) {
  return (
    <p
      className={`font-hand text-lg font-bold text-red ${className}`}
      role="note"
    >
      {children}
    </p>
  );
}
