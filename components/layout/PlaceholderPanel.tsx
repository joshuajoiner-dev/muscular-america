type PlaceholderPanelProps = {
  title: string;
  children: React.ReactNode;
};

export function PlaceholderPanel({ title, children }: PlaceholderPanelProps) {
  return (
    <section
      className="rounded-md border p-6"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface)",
      }}
      aria-label={title}
    >
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <div className="muted stack text-sm">{children}</div>
    </section>
  );
}
