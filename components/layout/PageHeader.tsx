type PageHeaderProps = {
  title: string;
  description?: string;
  status?: string;
};

export function PageHeader({ title, description, status }: PageHeaderProps) {
  return (
    <header className="stack mb-8">
      {status ? (
        <p className="muted text-sm uppercase tracking-wide">{status}</p>
      ) : null}
      <h1 className="text-3xl font-bold">{title}</h1>
      {description ? <p className="muted max-w-2xl">{description}</p> : null}
    </header>
  );
}
