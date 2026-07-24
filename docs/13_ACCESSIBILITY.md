# 13 — Accessibility

**Status:** APPROVED (founding requirements)  
**Authority:** Non-negotiable usability baseline

## Purpose

Ensure Muscular America works for people with different abilities, devices, and levels of fitness literacy.

## What belongs here

- Typography, contrast, keyboard, semantics
- Calculator usability
- Motion, images, plain language
- Print legibility

## What does not belong here

- Full WCAG audit reports (attach or link when produced)
- Brand aesthetics that conflict with readability (aesthetics lose)

## Requirements

### Readable typography

Follow the Atkinson Hyperlegible Next direction and hierarchy rules in `docs/07_TYPOGRAPHY.md`.

### Contrast

Text and critical controls must maintain strong contrast against surfaces. Decorative low-contrast type is not allowed for essential information.

### Keyboard navigation

All interactive controls must be reachable and operable by keyboard. Focus states must be visible.

### Semantic HTML

Use landmarks, headings, lists, labels, and buttons as what they are. Do not rebuild semantics with unlabelled `div` click handlers.

### Descriptive labels

Inputs need labels and units. Icon-only controls need accessible names.

### Calculator usability

- Errors are plain language
- Results are announced in a sensible reading order
- Disclaimers are adjacent and readable
- Numerals are tabular where comparison matters

### Motion restraint

Prefer subtle, purposeful motion. Respect reduced-motion preferences. No motion required to understand content.

### Image alternatives

Informative images need alt text that carries the instructional point. Decorative images use empty alt.

### Plain-language explanations

Especially for beginners and returning trainees: define jargon once; prefer concrete wording.

### Print legibility

High contrast, restrained backgrounds, sensible type size, and chrome hidden where useless (`styles/print.css`).

### Fitness literacy accommodations

Do not assume readers know gym slang. Provide short definitions or glossary links without condescension.

## Testing expectations

Manual keyboard checks for new interactive surfaces. Automated checks may be added later; they do not replace human review.
