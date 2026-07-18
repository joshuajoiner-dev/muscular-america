# 02 — Governance

**Status:** APPROVED (founding)  
**Authority:** Second only to the Project Charter

## Purpose

Establish who decides, which documents control which decisions, and how changes become institutional.

## What belongs here

- Authority model
- Document hierarchy
- Approval states
- Change-control rules
- Experiment vs approved-system distinction

## What does not belong here

- Day-to-day task lists
- Full editorial style samples
- Implementation tickets

## Founder authority

The Founder holds final authority over:

- Charter and governance revisions
- Publication approval and freeze
- Terminology that becomes institutional
- Public identity decisions
- Architectural changes that alter ownership boundaries

Collaborators may propose; they may not silently redefine standards.

## Hierarchy of governing documents

1. Project Charter (`01_PROJECT_CHARTER.md`)
2. Governance (`02_GOVERNANCE.md`)
3. Editorial Principles (`03_EDITORIAL_PRINCIPLES.md`)
4. Publication-specific architecture (e.g. `04_`, `05_`)
5. Design and production standards (`06_`–`15_`)
6. Editorial Decisions (`16_EDITORIAL_DECISIONS.md`)
7. Changelog (`CHANGELOG.md`)

When documents conflict, the higher document wins.

## Editorial decision recording

Material decisions are recorded in `16_EDITORIAL_DECISIONS.md` using the standard entry format.

Record decisions that affect:

- Architecture boundaries
- Terminology
- Publication lifecycle
- Design system defaults
- Evidence classification practice
- Calculator presentation standards

Do not use Editorial Decisions as a commit log. Use `CHANGELOG.md` for release and structural history summaries.

## Publication approval states

Suggested lifecycle:

```text
CONCEPT → DEVELOPMENT → FOUNDER REVIEW → APPROVED
→ PRODUCTION → EDITORIAL FREEZE → PUBLISHED → ARCHIVED
```

Only APPROVED (and later) systems should be treated as institutional defaults.

## Change-control expectations

| Change type | Expectation |
| --- | --- |
| Typo / local copy fix | Normal PR / edit discipline |
| New component under existing pattern | Document if it introduces a reusable pattern |
| New top-level directory | Update Repository Architecture + Editorial Decision |
| Terminology change | Founder review + Editorial Decision |
| Calculator formula change | Cite provenance, update tests, note limitations |
| Identity / brand change | Founder review; design docs updated before ship |

## Experiments vs approved systems

- **Experiments** may live in branches, local proofs, or clearly labeled `status: experimental` materials.
- **Approved systems** are documented, named, and safe to build upon.
- Experiments must not silently become defaults.

## Architectural change rules

Changing the meaning of `content/`, `data/`, `lib/`, or publication boundaries requires:

1. Proposal against this hierarchy
2. Founder review
3. Updates to `00_REPOSITORY_ARCHITECTURE.md`
4. An Editorial Decision entry
