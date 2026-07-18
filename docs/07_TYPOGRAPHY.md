# 07 — Typography

**Status:** DIRECTION RECORDED — complete type system not approved  
**Leading direction:** Atkinson Hyperlegible Next for highly readable body and interface text

## Purpose

Record readability goals and the current typography direction without pretending the full system is locked.

## What belongs here

- Readability goals
- Hierarchy requirements
- Screen/print considerations
- Numeral clarity for calculators
- Rules for testing additional display faces

## What does not belong here

- Committed font binaries
- Final display-face pairings presented as approved
- Lettering for logos (brand assets live elsewhere when ready)

## Current direction

**Atkinson Hyperlegible Next** is the leading candidate for body and interface text because of letter distinctiveness and accessibility-oriented design.

Font files are **not** stored in this repository. Load from an approved source when the Founder green-lights production use.

Until then, CSS falls back to highly readable system stacks (`styles/typography.css`).

## Readability goals

- Distinct character shapes (I/l/1, O/0)
- Comfortable default size for mixed audiences
- Line length suitable for scanning short entries
- Strong contrast against surfaces

## Hierarchy requirements

Minimum levels:

1. Page / entry title  
2. Section label  
3. Body  
4. Meta / muted supporting text  
5. Calculator numerals (tabular)

## Screen and print

- Screen: favor `display: swap` when webfonts are introduced
- Print: ensure fallbacks remain legible if webfonts are unavailable
- Avoid ultra-light weights for body copy

## Calculator numerals

Use tabular lining numerals for inputs and results (see `.numerals` in `styles/typography.css`). Ambiguous unit presentation is an accessibility defect.

## Testing additional display faces

Display faces may be tested for titles and publication covers if they:

1. Do not harm body readability when paired
2. Do not imitate another property’s publication family look
3. Are recorded here with specimen notes before adoption
4. Pass Founder review before becoming defaults

## Accessibility

Typography decisions must remain compatible with `docs/13_ACCESSIBILITY.md`.
