# 12 — Publication Standards

**Status:** APPROVED (initial standards)  
**Authority:** Production hygiene for books, guides, and web publications

## Purpose

Define shared standards for naming, structure, proofing, and release readiness.

## What belongs here

- Naming and file organization
- Front/back matter expectations
- Headings, captions, callouts
- Proof stages and freeze rules

## What does not belong here

- Voice principles (Editorial Principles)
- Visual token values
- Feature roadmaps

## Naming

- Publications: clear public titles; stable internal `id`s
- Files: `kebab-case`
- Avoid version theater (`final-final-2.md`)

## File organization

- Manuscript content under `content/books/<publication>/`
- Metadata under `data/publications/`
- Publication-specific components under `components/<publication>/` when justified

## Versioning

- Lifecycle state is the primary status signal
- Changelog records published structural/history notes
- Editorial Decisions record normative choices

## Front matter / back matter

Front matter typically includes: title, how to use, disclaimers.  
Back matter typically includes: references pointers, glossary pointers, credits.

Keep Field Guide front matter short enough to preserve browsing.

## Headings, captions, callouts

- One H1 per page/entry surface
- Captions explain what the reader should notice
- Callouts are scarce; if everything is a callout, nothing is

## References

Follow `docs/14_REFERENCE_AND_CITATION_STANDARD.md`.

## Accessibility

Follow `docs/13_ACCESSIBILITY.md` for web and print legibility.

## Print export and web publication

- Web may ship earlier than print, or vice versa; state which in lifecycle notes
- Print export scripts belong in `scripts/` when introduced
- Do not commit giant binary exports by default

## Proof stages

1. Draft  
2. Editorial review  
3. Founder review  
4. Design pass  
5. Proof  
6. Validation  
7. Editorial freeze  
8. Published  

## Founder review and editorial freeze

- Founder review is required before APPROVED / FREEZE / PUBLISHED transitions for publications
- After EDITORIAL FREEZE, only defect fixes with explicit approval

## Related workflow

See `docs/15_PRODUCTION_WORKFLOW.md`.
