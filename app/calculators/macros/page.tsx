import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function MacrosCalculatorPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Macros Calculator"
        description="Architectural stub. Macro distribution tools with transparent defaults."
        status="Planned"
      />
      <PlaceholderPanel title="Standards">
        <p>See docs/11_CALCULATOR_STANDARDS.md before implementing formulas or UI.</p>
      </PlaceholderPanel>
    </div>
  );
}
