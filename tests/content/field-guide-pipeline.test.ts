import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  assertSlugMatchesFilename,
  filterFieldGuideEntries,
  getAllFieldGuideEntries,
  getFieldGuideEntryBySlug,
  getFieldGuideSeo,
  parseFieldGuideFrontmatter,
} from "@/lib/content";

describe("field guide content pipeline", () => {
  it("loads the specimen entries without manual imports", () => {
    const entries = getAllFieldGuideEntries();
    assert.equal(entries.length, 5);
    assert.ok(entries.every((entry) => entry.frontmatter.slug.length > 0));
  });

  it("loads an entry by slug", () => {
    const entry = getFieldGuideEntryBySlug("progressive-overload");
    assert.ok(entry);
    assert.equal(entry?.frontmatter.title, "Progressive Overload");
    assert.equal(entry?.frontmatter.entryType, "Quick Principle");
  });

  it("filters by category", () => {
    const nutrition = filterFieldGuideEntries(getAllFieldGuideEntries(), {
      category: "nutrition",
    });
    assert.equal(nutrition.length, 1);
    assert.equal(nutrition[0]?.frontmatter.slug, "protein");
  });

  it("builds SEO metadata from frontmatter", () => {
    const entry = getFieldGuideEntryBySlug("walking");
    assert.ok(entry);
    const seo = getFieldGuideSeo(entry!);
    assert.equal(seo.canonicalPath, "/books/field-guide/walking");
    assert.ok(seo.description.length > 0);
  });

  it("rejects invalid frontmatter", () => {
    assert.throws(() =>
      parseFieldGuideFrontmatter(
        {
          title: "X",
          slug: "x",
          description: "d",
          category: "training",
          tags: [],
          difficulty: "novice",
          estimated_read_time: 1,
          author: "MA",
          updated: "2026-07-24",
          status: "draft",
          featured: false,
          entryType: "Quick Principle",
        },
        "test.mdx"
      )
    );
  });

  it("rejects non-kebab-case slugs against filenames", () => {
    assert.throws(() =>
      assertSlugMatchesFilename("Bad_Slug", "Bad_Slug.mdx", "Bad_Slug.mdx")
    );
  });
});

