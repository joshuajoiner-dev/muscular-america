import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function LeanMassCalculatorPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Lean Mass Calculator"
        description="Architectural stub. Anthropometric estimates with stated limitations."
        status="Planned"
      />
      <PlaceholderPanel title="Standards">
        <p>See docs/11_CALCULATOR_STANDARDS.md before implementing formulas or UI.</p>
      </PlaceholderPanel>
    </div>
  );
}
