import Link from "next/link";
import { primaryNavigation } from "@/data/navigation/primary";
import { SiteMark } from "@/components/brand/SiteMark";

export function PrimaryNav() {
  return (
    <header className="no-print border-b" style={{ borderColor: "var(--color-border)" }}>
      <div className="container-wide flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" aria-label="Muscular America home">
          <SiteMark />
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-4 text-sm">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
