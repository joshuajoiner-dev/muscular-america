"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackCalculatorOpen } from "@/lib/analytics";

const CALCULATOR_SLUGS = new Set([
  "strength",
  "protein",
  "calories",
  "macros",
  "waist-height",
  "lean-mass",
]);

/**
 * Watches calculator routes and records calculator_open with calculator_type only.
 * Does not fire on /calculators index.
 */
export function CalculatorRouteAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const match = pathname.match(/^\/calculators\/([^/]+)\/?$/);
    const slug = match?.[1];

    if (!slug || !CALCULATOR_SLUGS.has(slug)) {
      return;
    }

    trackCalculatorOpen(slug);
  }, [pathname]);

  return null;
}
