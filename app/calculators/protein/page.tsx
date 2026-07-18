import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function ProteinCalculatorPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Protein Calculator"
        description="Architectural stub. Estimates only — never presented as medical advice."
        status="Planned"
      />
      <PlaceholderPanel title="Standards">
        <p>See docs/11_CALCULATOR_STANDARDS.md before implementing formulas or UI.</p>
      </PlaceholderPanel>
    </div>
  );
}
