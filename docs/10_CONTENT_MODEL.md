# 10 — Content Model

**Status:** PROVISIONAL schema — subject to Founder approval  
**Authority:** Field shapes for modular entries; not a CMS product spec

## Purpose

Propose a flexible content model so entries can move across books, web, courses, and newsletters without refactoring identity.

## What belongs here

- Required vs optional fields
- Publication-specific extensions
- Status vocabulary
- Relationship to files and IDs

## What does not belong here

- Full editorial manuscripts
- UI component APIs
- Database vendor choices

## Provisional Field Guide entry

```ts
type FieldGuideEntry = {
  id: string
  slug: string
  title: string
  entryType: string
  section: string
  summary?: string
  body: string
  rationale?: string
  action?: string
  caution?: string
  experienceLevels?: string[]
  tags?: string[]
  relatedEntries?: string[]
  references?: string[]
  status: string
  updatedAt?: string
}
```

TypeScript mirror: `types/field-guide.ts`

## Field roles

| Field | Requirement | Notes |
| --- | --- | --- |
| `id` | Required | Stable; never recycle |
| `slug` | Required | URL-safe; may change with redirect discipline |
| `title` | Required | Short, scannable |
| `entryType` | Required | Provisional vocabulary in Field Guide Architecture |
| `section` | Required | Organizational; movable |
| `body` | Required | Primary content |
| `summary` | Optional | One-liner for indexes and browsing |
| `rationale` | Optional | Why this matters |
| `action` | Optional | Optional practice suggestion |
| `caution` | Optional | Limits, safety context, non-absolutism |
| `experienceLevels` | Optional | beginning / returning / experienced |
| `tags` | Optional | Cross-cutting topics |
| `relatedEntries` | Optional | IDs, not paths |
| `references` | Optional | IDs into `content/references` |
| `status` | Required | draft / review / approved / frozen / archived (refine as needed) |
| `updatedAt` | Optional | ISO date string |

## Publication-specific fields

Simply Fit, courses, and articles may extend this model. Extensions must not break Field Guide loaders. Prefer additive optional fields or separate types per publication.

## File organization

- One entry per file preferred once writing begins
- Filename: `kebab-case` matching slug when practical
- Folder placement may change; `id` must not

## Reuse

Courses, newsletters, and calculators should reference entry `id`s. Duplicating body text into multiple sources of truth is a last resort.
