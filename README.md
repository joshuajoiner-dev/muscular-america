# Muscular America

Practical fitness publishing — books, field guides, calculators, courses, articles, newsletter, and community resources.

Muscular America is a **publishing platform**, not a pile of disconnected posts. Clarity over hype. Durable principles over trends. Educational information, not medical care.

## Current status

**Founding architecture.** Governance, directory structure, route stubs, and content scaffolding are in place. Full Field Guide prose, final visual identity, and calculator implementations are deferred pending review.

## Read these first

1. [Project Charter](docs/01_PROJECT_CHARTER.md)
2. [Governance](docs/02_GOVERNANCE.md)
3. [Editorial Principles](docs/03_EDITORIAL_PRINCIPLES.md)
4. [Repository Architecture](docs/00_REPOSITORY_ARCHITECTURE.md)
5. Then the relevant publication doc (start with [Field Guide Architecture](docs/05_FIELD_GUIDE_ARCHITECTURE.md))

## Repository map

```text
app/            Routes and page composition (Next.js App Router)
components/     Brand, layout, navigation, field-guide, calculators, ui
content/        Manuscripts and modular entries (publication-first)
data/           Registries: publications, navigation, calculators, taxonomies
docs/           Governance and institutional standards
lib/            Pure logic, loaders, formatting, validation
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
| Muscular America Field Guide | CONCEPT | Compact, browsable gym/training guide |
| Simply Fit | CONCEPT | Future accessible fitness line |

## Calculators (planned)

Strength · Protein · Calories · Macros · Waist-to-Height · Lean Mass

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
| [00 Repository Architecture](docs/00_REPOSITORY_ARCHITECTURE.md) | Directory map and ownership |
| [01 Project Charter](docs/01_PROJECT_CHARTER.md) | What Muscular America is / is not |
| [02 Governance](docs/02_GOVERNANCE.md) | Authority and change control |
| [03 Editorial Principles](docs/03_EDITORIAL_PRINCIPLES.md) | Voice and certainty |
| [04 Publication Architecture](docs/04_PUBLICATION_ARCHITECTURE.md) | Multi-publication system |
| [05 Field Guide Architecture](docs/05_FIELD_GUIDE_ARCHITECTURE.md) | Field Guide intent |
| [06–09](docs/06_DESIGN_SYSTEM.md) | Design, type, color, illustration frameworks |
| [10–15](docs/10_CONTENT_MODEL.md) | Content model, calculators, production |
| [16 Editorial Decisions](docs/16_EDITORIAL_DECISIONS.md) | Institutional memory |
| [Changelog](docs/CHANGELOG.md) | Milestone history |

## Current priorities

1. Review founding architecture and Decision 001
2. Approve or revise Field Guide entry types
3. Draft a small Field Guide specimen set (not the full guide)
4. Implement first calculator behind standards in `docs/11_CALCULATOR_STANDARDS.md`
5. Advance typography/color from direction → Founder-approved defaults

## Contribution and governance

Material changes follow the document hierarchy in Governance. Record normative decisions in `docs/16_EDITORIAL_DECISIONS.md`. Do not treat this repository as part of another publisher’s public brand family — shared operational discipline is fine; shared public identity is not.

Educational content only. Not medical care, diagnosis, or a substitute for qualified professional guidance.
