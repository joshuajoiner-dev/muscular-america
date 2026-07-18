import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function ArticlesPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Articles"
        description="Editorial articles and reference material for the Muscular America platform."
        status="Architecture stub"
      />
      <PlaceholderPanel title="Content directory">
        <p>
          Structured articles will load from <code>content/articles/</code>.
        </p>
      </PlaceholderPanel>
    </div>
  );
}
