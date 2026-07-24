# Analytics Components

GA4 bootstrap and mount trackers for Muscular America.

| File | Role |
| --- | --- |
| `GoogleAnalytics.tsx` | Single gtag load + config (env-gated) |
| `AnalyticsPageViews.tsx` | App Router page_view without duplicates |
| `CalculatorRouteAnalytics.tsx` | `calculator_open` by route slug |
| `TrackMountEvents.tsx` | Field Guide (and optional calculator) mount trackers |

Call custom events only through `@/lib/analytics`. Never call `gtag` directly from pages.
