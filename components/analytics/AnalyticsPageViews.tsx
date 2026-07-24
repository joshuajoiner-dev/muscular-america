"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type AnalyticsPageViewsProps = {
  measurementId: string;
};

/**
 * Module-level last path survives React Strict Mode remounts in development,
 * preventing duplicate page_view config calls for the same pathname.
 * Navigating away and back still records a new view (last path changes).
 */
let lastReportedPath: string | null = null;

/**
 * Sends a single page_view per distinct pathname within a client session
 * of App Router navigations. Initial gtag config uses send_page_view: false
 * so full loads and client navigations share one path.
 *
 * Pathname only — query strings are omitted to avoid accidental PII leakage.
 */
export function AnalyticsPageViews({ measurementId }: AnalyticsPageViewsProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (lastReportedPath === pathname) {
      return;
    }

    lastReportedPath = pathname;

    try {
      const gtag = window.gtag;

      if (typeof gtag !== "function") {
        return;
      }

      gtag("config", measurementId, {
        page_path: pathname,
        anonymize_ip: true,
      });
    } catch {
      // Analytics must never interrupt navigation.
    }
  }, [measurementId, pathname]);

  return null;
}
