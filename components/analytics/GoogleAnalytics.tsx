import Script from "next/script";
import { AnalyticsPageViews } from "@/components/analytics/AnalyticsPageViews";

/**
 * Single GA4 bootstrap for the App Router.
 * No-ops when NEXT_PUBLIC_GA_MEASUREMENT_ID is unset (local/dev without GA).
 */
export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ma-ga4-init" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', {
  send_page_view: false,
  anonymize_ip: true
});
        `.trim()}
      </Script>
      <AnalyticsPageViews measurementId={measurementId} />
    </>
  );
}
