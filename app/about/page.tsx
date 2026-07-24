import { PageHeader } from "@/components/layout/PageHeader";
import { PlaceholderPanel } from "@/components/layout/PlaceholderPanel";

export default function AboutPage() {
  return (
    <div className="stack">
      <PageHeader
        title="About Muscular America"
        description="A practical fitness publishing platform grounded in clarity, durable principles, and accessible language."
        status="Architecture stub"
      />
      <PlaceholderPanel title="What this is">
        <p>
          Muscular America publishes books, field guides, calculators, courses,
          articles, and community resources that make training concepts usable.
        </p>
      </PlaceholderPanel>
      <PlaceholderPanel title="What this is not">
        <ul className="stack list-disc pl-5">
          <li>Medical care or individualized diagnosis</li>
          <li>A replacement for qualified professional guidance</li>
          <li>A bodybuilding-only platform</li>
          <li>A motivational-content mill</li>
          <li>A collection of disconnected fitness posts</li>
        </ul>
      </PlaceholderPanel>
    </div>
  );
}
