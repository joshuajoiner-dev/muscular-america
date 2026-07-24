import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function SimplyFitPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Simply Fit"
        description="A future accessible fitness publication or book line within the Muscular America platform."
        status="Architecture stub · CONCEPT"
      />
      <PlaceholderPanel title="Reserved content space">
        <p>
          Content will live under <code>content/books/simply-fit/</code>. Identity,
          tone, and design system remain independent from the Field Guide.
        </p>
      </PlaceholderPanel>
    </div>
  );
}
