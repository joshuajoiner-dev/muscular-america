# 16 — Editorial Decisions

**Status:** Active institutional memory  
**Authority:** Normative decisions; not a changelog

## Purpose

Record decisions that future work must respect. This is institutional memory, not a commit log.

## What belongs here

- Architecture boundaries
- Terminology approvals
- Identity firewalls
- Standard adoptions and exceptions

## What does not belong here

- Routine bugfixes
- Every commit message
- Speculative ideas not decided

## Entry format

```markdown
## Decision 00N — Title

**Date**

Month DD, YYYY

**Status**

APPROVED | SUPERSEDED | AMENDED

**Decision**

[Concise decision]

**Rationale**

[Why the decision was made]

**Implications**

[What future work must follow]

**Related Documents**

[List]
```

---

## Decision 001 — Repository Architecture Established

**Date**

July 16, 2026

**Status**

APPROVED

**Decision**

Establish Muscular America as a modular, publication-first repository with clear separation among `app/`, `components/`, `content/`, `data/`, `docs/`, `lib/`, `styles/`, `tests/`, and `types/`. Shared publishing infrastructure (governance, content structures, component organization, production workflows, documentation discipline) is allowed. Public-facing identity must remain completely independent from The Word Detective and must not present Muscular America as part of the same publishing family.

**Rationale**

Muscular America needs a scalable home for books, field guides, calculators, courses, newsletters, and community resources without premature product complexity. Borrowing operational structure accelerates quality; borrowing brand language or visual family cues would confuse the public identity.

**Implications**

- Future work follows `docs/00_REPOSITORY_ARCHITECTURE.md` and the governance hierarchy.
- Publication-specific systems (especially Field Guide and Simply Fit) keep independent tone and visuals.
- Field Guide prose, final colors, and full layouts remain deferred until architecture review.
- Calculator logic must stay pure and testable under `lib/calculators/`.
- Identity firewall is ongoing: no forest-green/ochre/ivory default appropriation; no Word Detective editorial clone.

**Related Documents**

- `docs/00_REPOSITORY_ARCHITECTURE.md`
- `docs/01_PROJECT_CHARTER.md`
- `docs/02_GOVERNANCE.md`
- `docs/04_PUBLICATION_ARCHITECTURE.md`
- `docs/05_FIELD_GUIDE_ARCHITECTURE.md`
- `docs/08_COLOR_TOKENS.md`
