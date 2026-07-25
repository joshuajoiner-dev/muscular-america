import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  assertSlugMatchesFilename,
  parseFieldGuideFrontmatter,
} from "@/lib/content/validate";
import type { ContentSeo, FieldGuideEntry } from "@/lib/content/types";

const FIELD_GUIDE_ROOT = path.join(
  process.cwd(),
  "content",
  "books",
  "field-guide",
  "entries"
);

function walkMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMdxFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

function loadEntryFromFile(filepath: string): FieldGuideEntry {
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = parseFieldGuideFrontmatter(
    data as Record<string, unknown>,
    filepath
  );

  assertSlugMatchesFilename(frontmatter.slug, path.basename(filepath), filepath);

  if (!content.trim()) {
    throw new Error(`${filepath}: MDX body must not be empty`);
  }

  return {
    id: `fg-${frontmatter.slug}`,
    filepath,
    frontmatter,
    body: content.trim(),
  };
}

let cache: FieldGuideEntry[] | null = null;

/** Clear loader cache (tests / hot reload). */
export function clearFieldGuideCache(): void {
  cache = null;
}

export function getAllFieldGuideEntries(): FieldGuideEntry[] {
  if (cache) {
    return cache;
  }

  const files = walkMdxFiles(FIELD_GUIDE_ROOT);
  const entries = files.map(loadEntryFromFile);

  const slugs = new Set<string>();
  for (const entry of entries) {
    if (slugs.has(entry.frontmatter.slug)) {
      throw new Error(`Duplicate Field Guide slug: ${entry.frontmatter.slug}`);
    }
    slugs.add(entry.frontmatter.slug);
  }

  cache = sortFieldGuideEntries(entries);
  return cache;
}

export function getFieldGuideEntryBySlug(slug: string): FieldGuideEntry | undefined {
  return getAllFieldGuideEntries().find((entry) => entry.frontmatter.slug === slug);
}

export function getFieldGuideSlugs(): string[] {
  return getAllFieldGuideEntries().map((entry) => entry.frontmatter.slug);
}

export type FieldGuideSort =
  | "title-asc"
  | "title-desc"
  | "updated-desc"
  | "updated-asc"
  | "featured";

export function sortFieldGuideEntries(
  entries: FieldGuideEntry[],
  sort: FieldGuideSort = "title-asc"
): FieldGuideEntry[] {
  const copy = [...entries];

  copy.sort((a, b) => {
    switch (sort) {
      case "title-desc":
        return b.frontmatter.title.localeCompare(a.frontmatter.title);
      case "updated-desc":
        return b.frontmatter.updated.localeCompare(a.frontmatter.updated);
      case "updated-asc":
        return a.frontmatter.updated.localeCompare(b.frontmatter.updated);
      case "featured":
        if (a.frontmatter.featured !== b.frontmatter.featured) {
          return a.frontmatter.featured ? -1 : 1;
        }
        return a.frontmatter.title.localeCompare(b.frontmatter.title);
      case "title-asc":
      default:
        return a.frontmatter.title.localeCompare(b.frontmatter.title);
    }
  });

  return copy;
}

export type FieldGuideFilters = {
  category?: string;
  tag?: string;
  status?: string;
  difficulty?: string;
  featured?: boolean;
  entryType?: string;
  query?: string;
};

export function filterFieldGuideEntries(
  entries: FieldGuideEntry[],
  filters: FieldGuideFilters = {}
): FieldGuideEntry[] {
  return entries.filter((entry) => {
    const fm = entry.frontmatter;

    if (filters.category && fm.category !== filters.category) {
      return false;
    }
    if (filters.tag && !fm.tags.includes(filters.tag)) {
      return false;
    }
    if (filters.status && fm.status !== filters.status) {
      return false;
    }
    if (filters.difficulty && fm.difficulty !== filters.difficulty) {
      return false;
    }
    if (typeof filters.featured === "boolean" && fm.featured !== filters.featured) {
      return false;
    }
    if (filters.entryType && fm.entryType !== filters.entryType) {
      return false;
    }
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const haystack = `${fm.title} ${fm.description} ${fm.tags.join(" ")}`.toLowerCase();
      if (!haystack.includes(q)) {
        return false;
      }
    }

    return true;
  });
}

export function listFieldGuideCategories(entries?: FieldGuideEntry[]): string[] {
  const source = entries ?? getAllFieldGuideEntries();
  return [...new Set(source.map((entry) => entry.frontmatter.category))].sort();
}

export function getFieldGuideSeo(entry: FieldGuideEntry): ContentSeo {
  const { title, description, slug } = entry.frontmatter;
  return {
    title,
    description,
    openGraphTitle: title,
    openGraphDescription: description,
    canonicalPath: `/books/field-guide/${slug}`,
  };
}
