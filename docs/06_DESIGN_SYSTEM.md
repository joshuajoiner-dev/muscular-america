# 06 — Design System

**Status:** FRAMEWORK ONLY — final visuals not locked  
**Authority:** Pattern introduction rules; not a finished brand book

## Purpose

Provide an initial design-system framework for interface and publication surfaces without freezing final art direction.

## What belongs here

- Spacing, layout, hierarchy, responsive, and print considerations
- Rules for introducing new patterns
- Distinction between interface UI and publication design
- Field Guide browsing requirements at the pattern level

## What does not belong here

- Final approved palette hex locks (see Color Tokens for semantic framework)
- Illustration style samples (see Illustration Guide)
- Marketing campaign layouts

## Governing principles

1. Patterns serve reading and tools — not decoration for its own sake.
2. Interface UI and publication design may share tokens but not necessarily the same density.
3. New patterns require a use case, not a moodboard impulse.
4. Field Guide segments should feel short and separable.

## Spacing

Use the token scale in `styles/tokens.css` (`--space-1` … `--space-16`). Prefer scale steps over arbitrary values.

## Layout

- Content measure: `--max-width-content` for reading
- Wide shells: `--max-width-wide` for app chrome
- One job per section on marketing and publication pages

## Borders and surfaces

Semantic roles: `background`, `surface`, `border`. Prefer quiet separation. Cards are allowed for interactive containers; they are not the default for every block of text.

## Information hierarchy

1. Publication / brand signal  
2. Entry or page title  
3. Summary / one-liner  
4. Body  
5. Secondary notes (rationale, caution, references)

## Responsive behavior

- Mobile: single column, generous tap targets for calculators
- Desktop: wider chrome, still restrained reading measure for prose
- Do not hide essential calculator disclaimers at any breakpoint

## Print considerations

- `styles/print.css` strips chrome where appropriate
- Prefer high-contrast text and avoid ink-heavy backgrounds for long print runs
- Page-break friendliness for Field Guide entries (one entry should not shatter awkwardly when avoidable)

## Interface vs publication design

| Interface | Publication |
| --- | --- |
| Navigation, forms, calculators | Field Guide entries, book pages |
| Dense controls OK when labeled | Short segments, scanning-friendly |
| Utility clarity first | Editorial pacing first |

## Field Guide browsing

Support short, visually separated content segments and passive browsing. Avoid textbook chapter walls of text as the default pattern.

## Introducing new patterns

1. State the problem the pattern solves  
2. Check for an existing pattern that already solves it  
3. Document the pattern here or in a child spec  
4. Prefer Founder review before wide reuse
