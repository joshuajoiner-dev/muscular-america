import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function StrengthCalculatorPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Strength Calculator"
        description="Architectural stub. Formula logic will live in lib/calculators with transparent assumptions and tests."
        status="Planned"
      />
      <PlaceholderPanel title="Standards">
        <p>See docs/11_CALCULATOR_STANDARDS.md before implementing formulas or UI.</p>
      </PlaceholderPanel>
    </div>
  );
}
