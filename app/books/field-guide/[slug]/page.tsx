import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/content/MdxContent";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  getFieldGuideEntryBySlug,
  getFieldGuideSeo,
  getFieldGuideSlugs,
  toNextMetadata,
} from "@/lib/content";

type FieldGuideEntryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getFieldGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: FieldGuideEntryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getFieldGuideEntryBySlug(slug);

  if (!entry) {
    return {
      title: "Entry not found",
    };
  }

  return toNextMetadata(getFieldGuideSeo(entry));
}

export default async function FieldGuideEntryPage({
  params,
}: FieldGuideEntryPageProps) {
  const { slug } = await params;
  const entry = getFieldGuideEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  const { frontmatter, body } = entry;

  return (
    <article className="stack">
      <p className="text-sm">
        <Link href="/books/field-guide" className="underline">
          ← Field Guide
        </Link>
      </p>

      <PageHeader
        title={frontmatter.title}
        description={frontmatter.description}
        status={`${frontmatter.entryType} · ${frontmatter.category}`}
      />

      <p className="muted text-sm">
        {frontmatter.estimated_read_time} min · Updated {frontmatter.updated} ·{" "}
        {frontmatter.difficulty}
      </p>

      <MdxContent source={body} />

      {frontmatter.action ? (
        <aside
          className="mt-6 border-l-2 pl-4"
          style={{ borderColor: "var(--color-primary)" }}
        >
          <p className="text-sm font-bold">Try this</p>
          <p className="muted text-sm">{frontmatter.action}</p>
        </aside>
      ) : null}

      {frontmatter.caution ? (
        <aside className="muted mt-4 text-sm">
          <strong>Note:</strong> {frontmatter.caution}
        </aside>
      ) : null}
    </article>
  );
}
