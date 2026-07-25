import Link from "next/link";
import type { FieldGuideEntry } from "@/lib/content";

type FieldGuideEntryCardProps = {
  entry: FieldGuideEntry;
};

export function FieldGuideEntryCard({ entry }: FieldGuideEntryCardProps) {
  const { slug, title, description, entryType, category, estimated_read_time } =
    entry.frontmatter;

  return (
    <article
      className="border-b py-4"
      style={{ borderColor: "var(--color-border)" }}
    >
      <p className="muted text-sm">
        {entryType} · {category} · {estimated_read_time} min
      </p>
      <h2 className="mt-1 text-xl font-bold">
        <Link href={`/books/field-guide/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h2>
      <p className="muted mt-2 max-w-2xl text-sm">{description}</p>
    </article>
  );
}
