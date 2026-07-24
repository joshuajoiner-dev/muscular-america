import type { Publication } from "@/types";

export const publications: Publication[] = [
  {
    id: "pub-muscular-america",
    slug: "muscular-america",
    title: "Muscular America",
    summary: "Central publishing platform for practical fitness resources.",
    lifecycle: "DEVELOPMENT",
    kind: "platform",
  },
  {
    id: "pub-field-guide",
    slug: "field-guide",
    title: "Muscular America Field Guide",
    summary:
      "A compact, browsable gym and training guide of short practical entries.",
    lifecycle: "CONCEPT",
    kind: "field-guide",
  },
  {
    id: "pub-simply-fit",
    slug: "simply-fit",
    title: "Simply Fit",
    summary: "A future accessible fitness publication or book line.",
    lifecycle: "CONCEPT",
    kind: "book",
  },
];
