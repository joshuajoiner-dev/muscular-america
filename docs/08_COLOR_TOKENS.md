# 08 — Color Tokens

**Status:** SEMANTIC FRAMEWORK — palette provisional  
**Authority:** Token names and roles; hex values may change

## Purpose

Define a semantic color token system so pages do not invent one-off colors.

## What belongs here

- Semantic token categories
- Rules for domain accents
- Placeholder values and change process

## What does not belong here

- Page-level hard-coded hex sprawl
- Borrowing another publisher’s signature palette as Muscular America’s default
- Final brand approval language before Founder sign-off

## Identity firewall

Do **not** adopt The Word Detective’s forest green / muted ochre / warm ivory system as Muscular America’s default identity.

Muscular America may eventually choose any approved palette — including earth tones — but it must be its own decision, documented here.

## Semantic categories

| Token role | CSS variable | Intent |
| --- | --- | --- |
| Background | `--color-background` | Page canvas |
| Surface | `--color-surface` | Panels, interactive containers |
| Text | `--color-text` | Primary reading color |
| Muted text | `--color-text-muted` | Secondary information |
| Border | `--color-border` | Quiet separation |
| Primary | `--color-primary` | Main brand action / emphasis |
| Secondary | `--color-secondary` | Supporting emphasis |
| Accent | `--color-accent` | Sparse highlight |
| Success | `--color-success` | Positive status |
| Caution | `--color-caution` | Warning without panic |
| Danger | `--color-danger` | Errors / hard stops |
| Information | `--color-information` | Neutral notices |
| Training | `--color-training` | Training domain accent |
| Nutrition | `--color-nutrition` | Nutrition domain accent |
| Recovery | `--color-recovery` | Recovery domain accent |
| Tracking | `--color-tracking` | Tracking domain accent |

Source of truth for current placeholders: `styles/tokens.css`.

## Provisional placeholder direction

Cool slate surfaces with steel-blue primary and restrained copper accent — **placeholders only**. Not approved brand colors.

## Rules

1. Components consume semantic tokens, not raw hex.
2. Domain accents (training/nutrition/recovery/tracking) are optional cues, not rainbow decoration.
3. Status colors are for meaning, not aesthetics.
4. Palette changes update `styles/tokens.css`, this doc, and an Editorial Decision when defaults change.

## Contrast

All text/surface pairs used for reading or critical UI must meet accessibility contrast expectations in `docs/13_ACCESSIBILITY.md`.
