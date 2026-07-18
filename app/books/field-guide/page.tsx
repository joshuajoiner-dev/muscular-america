import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";
import { fieldGuideSections } from "@/data/taxonomies/field-guide";

export default function FieldGuidePage() {
  return (
    <div className="stack">
      <PageHeader
        title="Muscular America Field Guide"
        description="A compact, browsable gym and training guide. Short entries. Practical observations. Passive engagement — closer to a field manual than a textbook."
        status="Architecture stub · CONCEPT"
      />
      <PlaceholderPanel title="Content sections prepared">
        <p>
          Entries will live under <code>content/books/field-guide/</code> and can
          be reorganized later without changing stable entry IDs.
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {fieldGuideSections.map((section) => (
            <li key={section}>
              <code>{section}</code>
            </li>
          ))}
        </ul>
      </PlaceholderPanel>
      <PlaceholderPanel title="Intended reading mode">
        <p>
          Short encounters, visual separation, and TV-guide-like browsing. Full
          prose and final layouts are deferred.
        </p>
      </PlaceholderPanel>
    </div>
  );
}
