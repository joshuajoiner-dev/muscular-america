import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function CommunityPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Community"
        description="Community resources and shared reference materials for trainees."
        status="Architecture stub"
      />
      <PlaceholderPanel title="Reserved">
        <p>
          Community tooling and moderation standards will be defined before public
          features ship.
        </p>
      </PlaceholderPanel>
    </div>
  );
}
