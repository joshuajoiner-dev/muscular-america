import type { ContentSeo } from "@/lib/content/types";
import { siteConfig } from "@/lib/metadata/site";

export function buildAbsoluteUrl(canonicalPath: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const path = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  return `${base}${path}`;
}

export function toNextMetadata(seo: ContentSeo) {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonicalPath,
    },
    openGraph: {
      title: seo.openGraphTitle,
      description: seo.openGraphDescription,
      url: seo.canonicalPath,
      type: "article" as const,
    },
  };
}

/**
 * Future analytics hooks — call sites should use lib/analytics helpers.
 * Reserved for article_read, search, and bookmark once UI exists.
 */
export const contentAnalyticsEvents = [
  "article_read",
  "search",
  "bookmark",
] as const;
