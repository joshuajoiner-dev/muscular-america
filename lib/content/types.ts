/**
 * Shared content models for the Muscular America publishing pipeline.
 * Frontmatter is the source of truth for metadata; body is MDX.
 */

export type ContentStatus =
  | "draft"
  | "review"
  | "approved"
  | "frozen"
  | "published"
  | "archived";

export type ContentDifficulty = "beginning" | "returning" | "experienced" | "all";

/** Common frontmatter shared across publications. */
export type ContentFrontmatter = {
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  difficulty: ContentDifficulty;
  estimated_read_time: number;
  author: string;
  updated: string;
  status: ContentStatus;
  featured: boolean;
};

export type FieldGuideFrontmatter = ContentFrontmatter & {
  /** Approved Field Guide entry type (e.g. Quick Principle). */
  entryType: string;
  /** Optional Field Guide section override; defaults to category. */
  section?: string;
  rationale?: string;
  action?: string;
  caution?: string;
  relatedEntries?: string[];
};

export type ArticleFrontmatter = ContentFrontmatter & {
  series?: string;
};

export type CalculatorFrontmatter = ContentFrontmatter & {
  calculatorId: string;
};

export type CourseFrontmatter = ContentFrontmatter & {
  moduleCount?: number;
  level?: string;
};

export type LoadedDocument<TFrontmatter> = {
  id: string;
  filepath: string;
  frontmatter: TFrontmatter;
  /** Raw MDX body without frontmatter. */
  body: string;
};

export type FieldGuideEntry = LoadedDocument<FieldGuideFrontmatter>;
export type Article = LoadedDocument<ArticleFrontmatter>;
export type CalculatorDoc = LoadedDocument<CalculatorFrontmatter>;
export type Course = LoadedDocument<CourseFrontmatter>;

/** SEO-facing metadata derived from frontmatter. */
export type ContentSeo = {
  title: string;
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
  canonicalPath: string;
};
