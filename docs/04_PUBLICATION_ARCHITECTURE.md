# 04 — Publication Architecture

**Status:** APPROVED (framework); individual publications may be CONCEPT  
**Authority:** How multiple publications coexist without identity blend

## Purpose

Define how Muscular America hosts multiple publications with shared infrastructure and independent public identities.

## What belongs here

- Publication metadata model
- Shared vs independent systems
- Content reuse rules
- Lifecycle states
- Web/print relationship

## What does not belong here

- Field Guide entry typography details
- Calculator formulas
- Marketing copy calendars

## Publications (initial registry)

| ID | Title | Kind | Lifecycle |
| --- | --- | --- | --- |
| `pub-muscular-america` | Muscular America | platform | DEVELOPMENT |
| `pub-field-guide` | Muscular America Field Guide | field-guide | CONCEPT |
| `pub-simply-fit` | Simply Fit | book | CONCEPT |

Registry source: `data/publications/registry.ts`

## Shared technical infrastructure

- Next.js application shell
- Content and data loading libraries
- Base UI primitives
- Validation and test harness
- Governance documentation

Shared infrastructure is operational, not branding.

## Independent systems (per publication)

- Editorial tone
- Visual identity and tokens (when approved)
- Entry types and section schemes
- Front/back matter conventions
- Illustration direction (within platform illustration standards)

## Publication metadata (minimum)

```ts
{
  id: string
  slug: string
  title: string
  summary: string
  lifecycle: PublicationLifecycle
  kind: string
}
```

## Content reuse rules

1. Prefer reference by stable `id` over copy-paste.
2. When content is adapted for another publication, record provenance.
3. Do not silently rewrite a Field Guide entry inside Simply Fit without a decision trail.
4. Platform articles may cite publication entries; they do not own them.

## Web and print

- Web routes under `app/` are delivery surfaces.
- Print styles and export workflows live under `styles/` and future `scripts/`.
- A publication may ship web-first, print-first, or dual — lifecycle state should say which.

## Lifecycle

```text
CONCEPT
DEVELOPMENT
FOUNDER REVIEW
APPROVED
PRODUCTION
EDITORIAL FREEZE
PUBLISHED
ARCHIVED
```

Moving to EDITORIAL FREEZE or PUBLISHED requires Founder approval.

## Identity firewall

If removing the Muscular America name would make a publication look like it belongs to another publisher’s family, the identity work is incomplete. Shared Founder methods are fine; shared public family branding is not.
