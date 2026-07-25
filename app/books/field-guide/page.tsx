import type { Metadata } from "next";
import { TrackFieldGuideOpen } from "@/components/analytics/TrackMountEvents";
import { FieldGuideCategoryFilter } from "@/components/field-guide/FieldGuideCategoryFilter";
import { FieldGuideEntryCard } from "@/components/field-guide/FieldGuideEntryCard";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  filterFieldGuideEntries,
  getAllFieldGuideEntries,
  listFieldGuideCategories,
} from "@/lib/content";

type FieldGuidePageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Field Guide",
  description:
    "Browse short Muscular America Field Guide entries on training, nutrition, and practical gym practice.",
  alternates: {
    canonical: "/books/field-guide",
  },
  openGraph: {
    title: "Muscular America Field Guide",
    description:
      "Browse short Muscular America Field Guide entries on training, nutrition, and practical gym practice.",
    url: "/books/field-guide",
    type: "website",
  },
};

export default async function FieldGuidePage({ searchParams }: FieldGuidePageProps) {
  const params = (await searchParams) ?? {};
  const category = params.category?.trim() || undefined;

  const allEntries = getAllFieldGuideEntries();
  const categories = listFieldGuideCategories(allEntries);
  const entries = filterFieldGuideEntries(allEntries, { category });

  return (
    <div className="stack">
      <TrackFieldGuideOpen pageSection="field_guide" />
      <PageHeader
        title="Muscular America Field Guide"
        description="Short, browsable entries. Specimen content validates the publishing pipeline—not the final guide."
        status="Content pipeline · specimen set"
      />

      <FieldGuideCategoryFilter
        categories={categories}
        activeCategory={category}
      />

      {entries.length === 0 ? (
        <p className="muted">No entries match this filter.</p>
      ) : (
        <div>
          {entries.map((entry) => (
            <FieldGuideEntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
