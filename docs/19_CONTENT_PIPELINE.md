# Publishing Platform Foundation — Content Pipeline

**Status:** COMPLETE (Sprint 1.0 technical subsystem)
**Authority:** How version-controlled documents are stored, validated, loaded, and published on the web

## Purpose

Sprint 1.0 establishes the first **publishing subsystem** for the Muscular America platform: a lightweight content pipeline without a CMS.

Muscular America is the publishing platform. MuscularAmerica.com is the public website. The Field Guide is the first implemented publication using this pipeline—not the entire platform.

Content loaders and frontmatter standards are infrastructure for the larger platform. Books, articles, calculator prose, courses, newsletters, and future formats can share these standards where appropriate.

## What belongs here

- Directory layout
- Frontmatter standards
- Loader responsibilities
- Validation rules
- How to add a Field Guide entry

## What does not belong here

- Final visual design for Field Guide pages
- Full manuscript production plans
- Analytics architecture (see `lib/analytics.ts`)
- Platform vision (see `docs/00_PLATFORM_VISION.md`)

## Implemented now

- Field Guide MDX pipeline (`content/books/field-guide/entries/`)
- typed frontmatter models and validation
- list / filter / load-by-slug utilities
- SEO helpers (`title`, `description`, Open Graph, canonical path)
- browse + detail routes
- five specimen entries (pipeline validation only)

## Prepared but not implemented

- article loaders
- calculator document loaders
- course loaders
- newsletter publishing
- community publishing

Do not treat empty or README-only directories as live publications.

## Architecture

```text
content/                      Version-controlled publishing source (MDX + YAML)
lib/content/types.ts          Shared TypeScript models
lib/content/validate.ts       Frontmatter validation
lib/content/field-guide.ts    Enumerate / load / sort / filter Field Guide entries
lib/content/seo.ts            Metadata helpers
app/books/field-guide/        Browse + entry routes (consume loaders only)
components/content/MdxContent.tsx
```

**Rationale**

- Publishing source stays in Git beside code.
- Pages never import individual MDX files.
- Validation fails loudly on bad frontmatter.
- MDX keeps short entries writable without a proprietary editor.
- No CMS dependency at this stage.

## Directory structure

```text
content/
├── books/field-guide/entries/   Field Guide MDX entries (Publication #1)
├── articles/                    Future articles
├── calculators/                 Future calculator explainers / copy
├── courses/                     Future course modules
└── shared/                      Cross-publication fragments
```

`content/` is the version-controlled publishing source for Muscular America.
Section folders under `content/books/field-guide/` remain organizational documentation. Entry files live in `entries/` with `category` / `section` in frontmatter so they can be reorganized later without changing stable slugs.

## Frontmatter standards

Required shared fields:

| Field | Type | Notes |
| --- | --- | --- |
| `title` | string | Display title |
| `slug` | string | Must match filename (without `.mdx`); kebab-case |
| `description` | string | SEO + browse summary |
| `category` | string | Topic grouping (e.g. training, nutrition) |
| `tags` | string[] | Cross-cutting labels |
| `difficulty` | beginning \| returning \| experienced \| all | Audience hint |
| `estimated_read_time` | number | Minutes |
| `author` | string | Attribution |
| `updated` | string | ISO date `YYYY-MM-DD` (quote in YAML: `"2026-07-24"`) |
| `status` | draft \| review \| approved \| frozen \| published \| archived | Editorial state |
| `featured` | boolean | Browse emphasis |

Field Guide also requires:

| Field | Type |
| --- | --- |
| `entryType` | Approved type from `docs/18_FIELD_GUIDE_ENTRY_TYPES.md` |

Optional Field Guide fields: `section`, `rationale`, `action`, `caution`, `relatedEntries`.

## Adding a Field Guide entry

1. Create `content/books/field-guide/entries/<slug>.mdx`.
2. Fill required frontmatter (`slug` = filename).
3. Write a short MDX body.
4. Run `npm test` and `npm run build`.
5. Browse at `/books/field-guide` and `/books/field-guide/<slug>`.

Do not import the file from a page component.

## Validation rules

- Required fields present and typed correctly
- `slug` matches filename and uses kebab-case (`a-z0-9` with hyphens)
- Duplicate slugs rejected
- Empty MDX body rejected
- Unknown `status` / `difficulty` rejected
- YAML dates coerced when parsed as `Date` objects

## SEO

`getFieldGuideSeo()` + `toNextMetadata()` expose title, description, Open Graph fields, and canonical path. Entry routes use `generateMetadata`.

## Analytics

Reuse `lib/analytics.ts`. Do not add a second analytics system.

Prepared for later wiring (not implemented in Sprint 1.0):

- `article_read`
- `search`
- `bookmark`

`field_guide_open` already fires on the Field Guide index.

## Related documents

- `docs/00_PLATFORM_VISION.md`
- `docs/10_CONTENT_MODEL.md`
- `docs/18_FIELD_GUIDE_ENTRY_TYPES.md`
- `docs/20_PRODUCT_ROADMAP.md`
