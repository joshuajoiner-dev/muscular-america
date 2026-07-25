import type {
  ContentDifficulty,
  ContentFrontmatter,
  ContentStatus,
  FieldGuideFrontmatter,
} from "@/lib/content/types";

const STATUSES = new Set<ContentStatus>([
  "draft",
  "review",
  "approved",
  "frozen",
  "published",
  "archived",
]);

const DIFFICULTIES = new Set<ContentDifficulty>([
  "beginning",
  "returning",
  "experienced",
  "all",
]);

function asString(value: unknown, field: string, filepath: string): string {
  // gray-matter may parse bare YAML dates as Date objects.
  if (value instanceof Date && !Number.isNaN(value.valueOf())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${filepath}: frontmatter.${field} must be a non-empty string`);
  }
  return value.trim();
}

function asBoolean(value: unknown, field: string, filepath: string): boolean {
  if (typeof value !== "boolean") {
    throw new Error(`${filepath}: frontmatter.${field} must be a boolean`);
  }
  return value;
}

function asNumber(value: unknown, field: string, filepath: string): number {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    throw new Error(`${filepath}: frontmatter.${field} must be a non-negative number`);
  }
  return value;
}

function asStringArray(value: unknown, field: string, filepath: string): string[] {
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    throw new Error(`${filepath}: frontmatter.${field} must be an array of strings`);
  }
  return value.map((item) => item.trim()).filter(Boolean);
}

function asStatus(value: unknown, filepath: string): ContentStatus {
  const status = asString(value, "status", filepath);
  if (!STATUSES.has(status as ContentStatus)) {
    throw new Error(
      `${filepath}: frontmatter.status must be one of ${[...STATUSES].join(", ")}`
    );
  }
  return status as ContentStatus;
}

function asDifficulty(value: unknown, filepath: string): ContentDifficulty {
  const difficulty = asString(value, "difficulty", filepath);
  if (!DIFFICULTIES.has(difficulty as ContentDifficulty)) {
    throw new Error(
      `${filepath}: frontmatter.difficulty must be one of ${[...DIFFICULTIES].join(", ")}`
    );
  }
  return difficulty as ContentDifficulty;
}

export function parseSharedFrontmatter(
  data: Record<string, unknown>,
  filepath: string
): ContentFrontmatter {
  return {
    title: asString(data.title, "title", filepath),
    slug: asString(data.slug, "slug", filepath),
    description: asString(data.description, "description", filepath),
    category: asString(data.category, "category", filepath),
    tags: asStringArray(data.tags ?? [], "tags", filepath),
    difficulty: asDifficulty(data.difficulty, filepath),
    estimated_read_time: asNumber(data.estimated_read_time, "estimated_read_time", filepath),
    author: asString(data.author, "author", filepath),
    updated: asString(data.updated, "updated", filepath),
    status: asStatus(data.status, filepath),
    featured: asBoolean(data.featured ?? false, "featured", filepath),
  };
}

export function parseFieldGuideFrontmatter(
  data: Record<string, unknown>,
  filepath: string
): FieldGuideFrontmatter {
  const shared = parseSharedFrontmatter(data, filepath);
  const entryType = asString(data.entryType, "entryType", filepath);

  return {
    ...shared,
    entryType,
    section:
      typeof data.section === "string" && data.section.trim()
        ? data.section.trim()
        : shared.category,
    rationale:
      typeof data.rationale === "string" && data.rationale.trim()
        ? data.rationale.trim()
        : undefined,
    action:
      typeof data.action === "string" && data.action.trim()
        ? data.action.trim()
        : undefined,
    caution:
      typeof data.caution === "string" && data.caution.trim()
        ? data.caution.trim()
        : undefined,
    relatedEntries: Array.isArray(data.relatedEntries)
      ? asStringArray(data.relatedEntries, "relatedEntries", filepath)
      : undefined,
  };
}

const KEBAB_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function assertSlugMatchesFilename(
  slug: string,
  filename: string,
  filepath: string
): void {
  if (!KEBAB_SLUG.test(slug)) {
    throw new Error(
      `${filepath}: frontmatter.slug ("${slug}") must be kebab-case (a-z, 0-9, hyphens)`
    );
  }

  const base = filename.replace(/\.mdx$/i, "");
  if (base !== slug) {
    throw new Error(
      `${filepath}: frontmatter.slug ("${slug}") must match filename ("${base}")`
    );
  }
}
