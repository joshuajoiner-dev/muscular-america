import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";
import { calculators } from "@/data/calculators/registry";

export default function CalculatorsPage() {
  return (
    <div className="stack">
      <PageHeader
        title="Calculators"
        description="Transparent, testable fitness calculators with plain-language results and clear limitations."
        status="Architecture stub"
      />
      <PlaceholderPanel title="Planned calculators">
        <ul className="stack">
          {calculators.map((calculator) => (
            <li key={calculator.id}>
              <Link href={`/calculators/${calculator.slug}`} className="underline">
                {calculator.title}
              </Link>
              {" — "}
              {calculator.summary}
            </li>
          ))}
        </ul>
      </PlaceholderPanel>
    </div>
  );
}
