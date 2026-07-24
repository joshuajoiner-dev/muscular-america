# 05 — Field Guide Architecture

**Status:** DEVELOPMENT (intent approved; entry types provisional)  
**Publication:** Muscular America Field Guide

## Purpose

Document the intended form, reading mode, and content architecture of the Field Guide.

## What belongs here

- Reading experience intent
- Entry types (provisional)
- Section domains
- Reorganization rules
- Boundaries against textbook/manual clones

## What does not belong here

- Full manuscript prose
- Final cover or illustration commissions
- Locked chapter titles presented as immutable

## Intended feel

Closer to:

- A cable television guide
- A compact field manual
- A browsable reference
- A sequence of short encounters
- A mixture of practical guidance, observation, trivia, rationale, and principles

## Not the intended feel

- A conventional fitness textbook
- A dense training manual
- An academic monograph
- A long-form narrative
- A clone of The Word Detective
- A publication that visibly belongs to the same publishing family as The Word Detective

Operational overlap (governance, modular content, documentation discipline) is allowed. Public family resemblance is not.

## Content root

```text
content/books/field-guide/
├── front-matter/
├── foundations/
├── training/
├── gym-environment/
├── nutrition/
├── recovery/
├── tracking/
├── goals/
└── back-matter/
```

These folders are organizational aids. Entries carry stable IDs so sections can move later.

## Functional domains (not final chapter titles)

- Beginning a workout with intention
- Focus and internal dialogue
- Music, sound, or silence during warm-up
- Gym etiquette
- Cleaning equipment before and after use
- Reracking weights
- Respecting active workout spaces
- Visual or spoken communication before entering another person’s training area
- Avoiding extended social interruptions
- Choosing appropriate exercises
- Training consistency
- Short-term goals, mid-term benchmarks, long-term destinations
- Progress tracking
- Strength, conditioning, mobility
- Nutrition and recovery

## Provisional entry types

Pending Founder approval:

| Type | Likely use |
| --- | --- |
| Field Note | Short observation from practice |
| Quick Principle | Compact durable rule of thumb |
| Gym Signal | Etiquette / environmental cue |
| Training Rationale | Why a practice tends to work |
| Common Drift | Frequent mistake or slide |
| Try This | Optional small experiment |
| Checkpoint | Self-check moment |
| Trivia Spot | Lightweight related fact |
| Goal Marker | Goal-setting waypoint |
| Courtesy Note | Shared-space respect |
| Recovery Note | Recovery-oriented short entry |

## Browsing model

Design and content should support:

- Passive scanning
- Visually separated segments
- Short dwell time per entry
- Non-linear dipping in and out

## Schema

See provisional `FieldGuideEntry` in `docs/10_CONTENT_MODEL.md` and `types/field-guide.ts`.

## Next architectural steps (not this founding task)

1. Approve or revise entry type names
2. Draft a small specimen set (few entries) for layout testing
3. Define Field Guide-specific tokens without locking platform brand
