import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function CoursesPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Courses"
        description="Structured education built from modular Muscular America content."
        status="Architecture stub"
      />
      <PlaceholderPanel title="Content directory">
        <p>Course materials will live under <code>content/courses/</code>.</p>
      </PlaceholderPanel>
    </div>
  );
}
