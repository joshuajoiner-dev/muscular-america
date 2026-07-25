# 20 — Product Roadmap

**Status:** Living roadmap
**Authority:** Milestone orientation — not a sprint board

## Purpose

Track major Muscular America platform milestones so engineering and editorial work stay aligned.

Muscular America is the publishing platform. MuscularAmerica.com is the public website. The Field Guide is Publication #1—not the entire product.

## Completed

### Repository Foundation

Git repository, App Router scaffold, governance docs, ignore rules, and production-safe local workflow.

### Editorial Architecture

Charter, governance, editorial principles, publication architecture, Field Guide architecture, entry types, and related standards.

### Analytics Foundation

Privacy-safe GA4 bootstrap, shared `lib/analytics.ts`, typed events, and `analytics-foundation-v1.0` milestone.

### Publishing Platform Foundation

Version-controlled publishing source under `content/`, typed frontmatter, validated Field Guide loading, browse/detail routes, specimen entries, SEO helpers, and pipeline documentation (Sprint 1.0).

**Completion criteria met:** content source · typed frontmatter · validated loading · browse/detail routes · specimens · documentation.

## Next

### First Publication — Field Guide

**Criteria:** approved entry-type system in active use · representative visual design · initial curated entry set beyond specimens · usable navigation · mobile and accessibility review.

### First Calculator

**Criteria:** validated formulas · clear assumptions · accessible UI · educational interpretation · `calculator_complete` analytics event · follows `docs/11_CALCULATOR_STANDARDS.md`.

### First 25 Field Guide Entries

**Criteria:** twenty-five Founder-reviewed entries across core domains · consistent entry types · no orphaned stubs.

### First Article Collection

**Criteria:** article loader · small curated set · platform SEO patterns · clear distinction from Field Guide brevity.

### Newsletter Platform

**Criteria:** capture surface · privacy-safe signup analytics · archival content path under `content/newsletter/`.

### Courses Platform

**Criteria:** course content model · module sequencing · reuse of Field Guide / article IDs where appropriate.

### Community Foundation

**Criteria:** scope defined · moderation posture · no premature auth complexity.

### Public Beta

**Criteria:** stable navigation · Field Guide usable · at least one calculator or clear deferred plan · analytics verified in production · known issues listed.

### Launch v1.0

**Criteria:**

- stable homepage and navigation
- Field Guide publication available
- at least one production calculator
- SEO and structured metadata
- newsletter capture
- analytics verified
- accessibility and performance review
- production deployment and monitoring

## Change control

Update milestone state when work meaningfully lands. Record normative decisions in `docs/16_EDITORIAL_DECISIONS.md`. Do not mark unfinished work complete.
