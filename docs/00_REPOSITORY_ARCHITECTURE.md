# 00 — Repository Architecture

**Status:** APPROVED (founding architecture)  
**Audience:** Founder, editors, engineers, future collaborators

## Purpose

Canonical map of the Muscular America repository: what each directory is for, how systems relate, and how to extend the tree without creating chaos.

## What belongs here

- Directory purposes and ownership
- Naming conventions
- Rules for shared vs publication-specific systems
- Guidance for adding new top-level folders

## What does not belong here

- Visual brand decisions (see Design System docs)
- Editorial voice rules (see Editorial Principles)
- Full product roadmaps
- Implementation details of individual features

## Governing principles

1. **Publication-first.** Content is a first-class citizen, not an afterthought to UI.
2. **Separation of concerns.** Application routes, components, content, data, and docs each have one job.
3. **Independent public identity.** Shared infrastructure does not imply shared brand family with other properties.
4. **Stable IDs over brittle paths.** Content may move; identifiers should not.
5. **Avoid premature complexity.** Add directories when a real need appears.

## Root structure

```text
muscular-america/
├── app/            Next.js App Router — routes and page composition
├── components/     UI grouped by concern (brand, field-guide, calculators, …)
├── content/        Manuscripts, articles, courses, glossary, references
├── data/           Structured registries (nav, publications, taxonomies, tokens)
├── docs/           Governance and institutional documentation
├── lib/            Pure logic: calculators, content loaders, formatting, validation
├── public/         Static assets served as-is
├── scripts/        Repeatable production and validation scripts
├── styles/         Design tokens, typography, print, shared CSS
├── tests/          Automated tests for lib and critical workflows
├── types/          Shared TypeScript contracts
├── package.json
├── tsconfig.json
└── README.md
```

## Relationship map

```text
docs/  ──governs──►  everything
content/ ──feeds──►  lib/content ──feeds──►  app/ + components/
data/    ──feeds──►  lib/* + app/
lib/     ──powers──► components/ + app/
styles/  ──styles──► app/ + components/
types/   ──contracts─► lib/ + data/ + components/
```

- **`app/`** composes pages; it should not own long-form prose.
- **`content/`** owns prose and modular entries.
- **`data/`** owns registries and constants that are not prose.
- **`components/`** owns presentation.
- **`lib/`** owns reusable logic and loaders.
- **`docs/`** owns authority and standards.

## Shared systems vs publication-specific systems

| Shared (platform) | Publication-specific |
| --- | --- |
| `lib/`, `types/`, base `components/ui`, `components/layout` | `content/books/<publication>/` |
| `data/publications`, `data/navigation` | `components/field-guide/`, future book component folders |
| Calculator math in `lib/calculators` | Calculator copy/constants under `data/calculators` when publication-bound |
| Governance docs | Publication architecture docs (e.g. Field Guide) |

Publication-specific design tokens and voice must not leak into the platform default identity.

## Naming conventions

- Directories and general content files: `lowercase-kebab-case`
- Canonical governance docs: `NN_UPPER_SNAKE.md`
- Components: clear descriptive PascalCase names
- Structured content: stable `id` fields
- Publication prefixes only when needed to prevent ambiguity

Avoid: `misc/`, `temp/`, `final-final-2`, unexplained abbreviations, duplicate sources of truth.

## Rules for adding new directories

1. Prefer nesting under an existing concern (`content/`, `components/`, `lib/`, `data/`).
2. A new top-level directory requires a note in this document and an Editorial Decision entry.
3. Empty directories must include a README or `.gitkeep` stating purpose.
4. Do not create parallel homes for the same content.

## Application routes (anticipated)

```text
/
├── books/field-guide/
├── books/simply-fit/
├── articles/
├── calculators/{strength,protein,calories,macros,waist-height,lean-mass}/
├── courses/
├── community/
├── newsletter/
└── about/
```

Route stubs exist; full experiences are deferred.

## Change control

Architectural changes that alter directory meaning, content ownership, or publication boundaries require Founder review and an entry in `16_EDITORIAL_DECISIONS.md`.
