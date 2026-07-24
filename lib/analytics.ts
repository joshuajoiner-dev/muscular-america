/**
 * Muscular America — shared GA4 analytics utility.
 *
 * All gtag interaction goes through this module.
 * Never send email, name, search text, or form field values.
 */

export type AnalyticsEventName =
  | "newsletter_signup"
  | "field_guide_open"
  | "calculator_open"
  | "calculator_complete"
  | "article_read"
  | "article_share"
  | "external_link_click"
  | "search"
  | "contact_submit";

export type AnalyticsEventParameterValue = string | number | boolean;

export type AnalyticsEventParameters = Record<
  string,
  AnalyticsEventParameterValue
>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ANALYTICS_DEDUPE_PREFIX = "ma_ga4:";

export function trackEvent(
  eventName: AnalyticsEventName,
  parameters?: AnalyticsEventParameters
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const gtag = window.gtag;

    if (typeof gtag !== "function") {
      return;
    }

    gtag("event", eventName, parameters ?? {});
  } catch {
    // Analytics must never interrupt the reader experience.
  }
}

export function trackEventOnce(
  dedupeKey: string,
  eventName: AnalyticsEventName,
  parameters?: AnalyticsEventParameters
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const storageKey = `${ANALYTICS_DEDUPE_PREFIX}${dedupeKey}`;

    if (window.sessionStorage.getItem(storageKey)) {
      return;
    }

    window.sessionStorage.setItem(storageKey, "1");
  } catch {
    // Continue without persistence if sessionStorage is unavailable.
  }

  trackEvent(eventName, parameters);
}

/** Newsletter conversion — never include email or name. */
export function trackNewsletterSignup(pageSection = "newsletter"): void {
  trackEvent("newsletter_signup", { page_section: pageSection });
}

/** Field Guide opened — once per session path. */
export function trackFieldGuideOpen(pageSection = "field_guide"): void {
  trackEventOnce(`field_guide_open:${pageSection}`, "field_guide_open", {
    page_section: pageSection,
  });
}

/** Specific calculator opened — anonymous calculator type only. */
export function trackCalculatorOpen(calculatorType: string): void {
  trackEventOnce(`calculator_open:${calculatorType}`, "calculator_open", {
    page_section: "calculators",
    calculator_type: calculatorType,
  });
}

/** Calculator finished — never include input values or results. */
export function trackCalculatorComplete(calculatorType: string): void {
  trackEvent("calculator_complete", {
    page_section: "calculators",
    calculator_type: calculatorType,
  });
}

/** Article engagement — category only, never title PII or body. */
export function trackArticleRead(articleCategory: string, pageSection = "articles"): void {
  trackEventOnce(
    `article_read:${articleCategory}:${pageSection}`,
    "article_read",
    {
      page_section: pageSection,
      article_category: articleCategory,
    }
  );
}

/** Share intent — category only. */
export function trackArticleShare(articleCategory: string, pageSection = "articles"): void {
  trackEvent("article_share", {
    page_section: pageSection,
    article_category: articleCategory,
  });
}

/**
 * External link click — hostname only.
 * Do not pass full URLs that may contain tokens or query PII.
 */
export function trackExternalLinkClick(
  linkHost: string,
  pageSection = "site"
): void {
  trackEvent("external_link_click", {
    page_section: pageSection,
    link_host: linkHost,
  });
}

/**
 * Search occurred — never include the search query text.
 */
export function trackSearch(pageSection = "search"): void {
  trackEvent("search", { page_section: pageSection });
}

/** Contact form submitted — never include message body or identity fields. */
export function trackContactSubmit(pageSection = "contact"): void {
  trackEvent("contact_submit", { page_section: pageSection });
}
