import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function BooksPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Books"
        description="Publication lines under the Muscular America platform. Each book keeps an independent editorial and visual identity."
        status="Architecture stub"
      />
      <PlaceholderPanel title="Current lines">
        <ul className="stack">
          <li>
            <Link href="/books/field-guide" className="underline">
              Muscular America Field Guide
            </Link>
          </li>
          <li>
            <Link href="/books/simply-fit" className="underline">
              Simply Fit
            </Link>
          </li>
        </ul>
      </PlaceholderPanel>
    </div>
  );
}
