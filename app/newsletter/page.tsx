import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function NewsletterPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Newsletter"
        description="Periodic practical updates from Muscular America."
        status="Architecture stub"
      />
      <PlaceholderPanel title="Content directory">
        <p>Newsletter drafts and archives will live under <code>content/newsletter/</code>.</p>
      </PlaceholderPanel>
    </div>
  );
}
