import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function CaloriesCalculatorPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Calories Calculator"
        description="Architectural stub. Energy estimates with stated assumptions and unit clarity."
        status="Planned"
      />
      <PlaceholderPanel title="Standards">
        <p>See docs/11_CALCULATOR_STANDARDS.md before implementing formulas or UI.</p>
      </PlaceholderPanel>
    </div>
  );
}
