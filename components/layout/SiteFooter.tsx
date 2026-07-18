export function SiteFooter() {
  return (
    <footer
      className="no-print mt-16 border-t py-8"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="container-wide muted text-sm">
        <p>Muscular America — practical fitness publishing.</p>
        <p className="mt-2">
          Educational information only. Not medical care or individualized diagnosis.
        </p>
      </div>
    </footer>
  );
}
