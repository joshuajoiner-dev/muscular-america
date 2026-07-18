import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";
import { getPublications } from "@/lib/publications";
import { calculators } from "@/data/calculators/registry";

export default function HomePage() {
  const publications = getPublications();

  return (
    <div className="stack">
      <PageHeader
        title="Muscular America"
        description="A practical fitness publishing platform for books, field guides, calculators, courses, and community resources."
        status="Founding architecture"
      />

      <PlaceholderPanel title="Publications in development">
        <ul className="stack">
          {publications.map((publication) => (
            <li key={publication.id}>
              <strong>{publication.title}</strong> — {publication.summary}{" "}
              <span>({publication.lifecycle})</span>
            </li>
          ))}
        </ul>
      </PlaceholderPanel>

      <PlaceholderPanel title="Route stubs ready">
        <ul className="flex flex-wrap gap-3">
          <li>
            <Link href="/books/field-guide" className="underline">
              Field Guide
            </Link>
          </li>
          <li>
            <Link href="/books/simply-fit" className="underline">
              Simply Fit
            </Link>
          </li>
          <li>
            <Link href="/calculators" className="underline">
              Calculators ({calculators.length})
            </Link>
          </li>
          <li>
            <Link href="/articles" className="underline">
              Articles
            </Link>
          </li>
          <li>
            <Link href="/courses" className="underline">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/community" className="underline">
              Community
            </Link>
          </li>
          <li>
            <Link href="/newsletter" className="underline">
              Newsletter
            </Link>
          </li>
          <li>
            <Link href="/about" className="underline">
              About
            </Link>
          </li>
        </ul>
      </PlaceholderPanel>
    </div>
  );
}
