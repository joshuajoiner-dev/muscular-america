import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function WaistHeightCalculatorPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Waist-to-Height Ratio"
        description="Architectural stub. Ratio computation with clear units and non-diagnostic framing."
        status="Planned"
      />
      <PlaceholderPanel title="Standards">
        <p>See docs/11_CALCULATOR_STANDARDS.md before implementing formulas or UI.</p>
      </PlaceholderPanel>
    </div>
  );
}
