export type PublicationLifecycle =
  | "CONCEPT"
  | "DEVELOPMENT"
  | "FOUNDER REVIEW"
  | "APPROVED"
  | "PRODUCTION"
  | "EDITORIAL FREEZE"
  | "PUBLISHED"
  | "ARCHIVED";

export type Publication = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  lifecycle: PublicationLifecycle;
  kind: "platform" | "book" | "field-guide" | "course" | "tool" | "newsletter";
};
