# Muscular America

**Muscular America** is a practical fitness **publishing platform**.
**MuscularAmerica.com** is the public website.
The **Field Guide** is the first flagship publication—not the entire product.

The platform supports books, field guides, articles, calculators, courses, newsletters, community resources, and future educational formats. Clarity over hype. Durable principles over trends. Educational information, not medical care.

## Current status

**Publishing Platform Foundation (Sprint 1.0).** Version-controlled publishing source, MDX Field Guide pipeline, typed frontmatter, browse/detail routes, privacy-safe analytics foundation, and governance documentation are in place.

Still ahead: Field Guide publication experience, first production calculator, curated entry growth, and Launch v1.0.

## Canonical local path

```text
/Volumes/WD_BLACK/Projects/MuscularAmerica
```

## Read these first

1. [Platform Vision](docs/00_PLATFORM_VISION.md)
2. [Project Charter](docs/01_PROJECT_CHARTER.md)
3. [Governance](docs/02_GOVERNANCE.md)
4. [Editorial Principles](docs/03_EDITORIAL_PRINCIPLES.md)
5. [Repository Architecture](docs/00_REPOSITORY_ARCHITECTURE.md)
6. Then the relevant publication doc (start with [Field Guide Architecture](docs/05_FIELD_GUIDE_ARCHITECTURE.md))

## Repository map

```text
app/            Routes and page composition (Next.js App Router)
components/     Brand, layout, navigation, field-guide, calculators, ui
content/        Version-controlled publishing source
data/           Registries: publications, navigation, calculators, taxonomies
docs/           Governance and institutional standards
lib/            Pure logic, content loaders, formatting, validation, analytics
public/         Static assets
scripts/        Production and validation scripts
styles/         Tokens, typography, print CSS
tests/          Automated tests
types/          Shared TypeScript contracts
```

## Publications

| Publication | Status | Notes |
| --- | --- | --- |
| Muscular America (platform) | DEVELOPMENT | Central site and shared systems |
| Muscular America Field Guide | CONCEPT · pipeline live | Publication #1 — specimen entries validate publishing |
| Simply Fit | CONCEPT | Future accessible fitness line |

## Calculators (planned)

Strength · Protein · Calories · Macros · Waist-to-Height · Lean Mass

## Local development

```bash
npm install
cp .env.example .env.local   # then set your GA measurement ID if needed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Local analytics (optional; never commit `.env.local`):

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm test` | Node test runner via `tsx` |

Stack: Next.js 15, React 19, TypeScript, Tailwind CSS 4.

## Documentation entry points

| Doc | Topic |
| --- | --- |
| [Platform Vision](docs/00_PLATFORM_VISION.md) | Why the platform exists |
| [00 Repository Architecture](docs/00_REPOSITORY_ARCHITECTURE.md) | Directory map and ownership |
| [01 Project Charter](docs/01_PROJECT_CHARTER.md) | What Muscular America is / is not |
| [02 Governance](docs/02_GOVERNANCE.md) | Authority and change control |
| [03 Editorial Principles](docs/03_EDITORIAL_PRINCIPLES.md) | Voice and certainty |
| [04 Publication Architecture](docs/04_PUBLICATION_ARCHITECTURE.md) | Multi-publication system |
| [05 Field Guide Architecture](docs/05_FIELD_GUIDE_ARCHITECTURE.md) | Field Guide intent |
| [18 Field Guide Entry Types](docs/18_FIELD_GUIDE_ENTRY_TYPES.md) | Approved entry types |
| [19 Content Pipeline](docs/19_CONTENT_PIPELINE.md) | Publishing Platform Foundation — technical subsystem |
| [20 Product Roadmap](docs/20_PRODUCT_ROADMAP.md) | Platform milestones |
| [Changelog](docs/CHANGELOG.md) | Milestone history |

## Current priorities

1. Field Guide publication experience (design + curated entries beyond specimens)
2. First production calculator behind `docs/11_CALCULATOR_STANDARDS.md`
3. Grow toward the first 25 Field Guide entries
4. Advance typography/color from direction → Founder-approved defaults

## Contribution and governance

Material changes follow the document hierarchy in Governance. Record normative decisions in `docs/16_EDITORIAL_DECISIONS.md`. Do not treat this repository as part of another publisher’s public brand family — shared operational discipline is fine; shared public identity is not.

Educational content only. Not medical care, diagnosis, or a substitute for qualified professional guidance.
