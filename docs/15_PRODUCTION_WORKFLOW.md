# 15 — Production Workflow

**Status:** APPROVED (initial workflow)  
**Authority:** How work moves from idea to published

## Purpose

Define a lightweight production path that preserves review quality without ceremony for its own sake.

## What belongs here

- Stage definitions
- File naming and proof expectations
- Commit and validation expectations
- Readiness criteria

## What does not belong here

- Tool worship or mandatory enterprise process theater
- Replacing Founder judgment with checklists alone

## Workflow

```text
IDEA
RESEARCH
DRAFT
EDITORIAL REVIEW
FOUNDER REVIEW
APPROVED
DESIGN
PROOF
VALIDATION
EDITORIAL FREEZE
PUBLISHED
```

## Stage expectations

| Stage | Expectation |
| --- | --- |
| IDEA | Problem and audience noted; no fake certainty |
| RESEARCH | Sources captured; classification assigned |
| DRAFT | Content in the right directory with `status` |
| EDITORIAL REVIEW | Principles and clarity check |
| FOUNDER REVIEW | Authority gate for material choices |
| APPROVED | Safe to design/produce against |
| DESIGN | Layout/illustration without rewriting frozen meaning |
| PROOF | Visual and textual defect hunt |
| VALIDATION | Lint/tests/build/link checks as applicable |
| EDITORIAL FREEZE | Meaning locked; defect fixes only |
| PUBLISHED | Public or distribution-ready |

## File naming

- `kebab-case` for content files
- Stable `id` inside structured entries
- Proof artifacts stay local or clearly dated; avoid polluting `content/`

## Review notes

- Prefer written notes tied to file paths or entry IDs
- Material decisions → `16_EDITORIAL_DECISIONS.md`
- Routine history → `CHANGELOG.md` at meaningful milestones

## Commits

- Small, reviewable commits with clear why
- Do not commit secrets, font binaries, or huge media dumps by default
- Do not commit until founding architecture is reviewed (this founding build)

## Validation before publication readiness

1. Referenced directories exist  
2. Documentation links resolve  
3. Application builds  
4. Lint passes  
5. Tests pass  
6. No accidental secrets or binary bloat  

## Publication readiness

A publication is ready when lifecycle state, content status, disclaimers, accessibility, and Founder approval align — not when a page merely “looks done.”
