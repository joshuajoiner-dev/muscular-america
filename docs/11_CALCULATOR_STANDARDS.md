# 11 — Calculator Standards

**Status:** APPROVED (standards framework); calculators themselves PLANNED  
**Authority:** Rules for any calculator shipped under Muscular America

## Purpose

Ensure calculators are transparent, testable, accessible, and honest about limits.

## What belongs here

- Formula transparency rules
- Units, validation, disclaimers
- Separation of logic and UI
- Testing and provenance expectations

## What does not belong here

- Hard-coded medical claims
- Final formula selections without provenance
- Motivational copy that obscures uncertainty

## Planned calculators

Strength · Protein · Calories · Macros · Waist-to-Height Ratio · Lean Mass

Registry: `data/calculators/registry.ts`  
Logic home: `lib/calculators/`  
UI home: `components/calculators/` and `app/calculators/`

## Governing rules

1. **Transparent formulas.** Show or link the formula and its inputs.
2. **Stated assumptions.** Defaults and population assumptions must be visible.
3. **Clear units.** Label metric and U.S. customary; convert explicitly.
4. **Metric and U.S. customary support** where appropriate.
5. **Input validation.** Reject impossible values with plain-language errors.
6. **Accessible labels.** Every input has a name, unit, and help text when needed.
7. **Plain-language results.** Lead with meaning, then numbers.
8. **Limitations and disclaimers.** Adjacent to results, not buried.
9. **No diagnoses.** Estimates are estimates — never clinical conclusions.
10. **Separation of concerns.** Pure functions in `lib/`; UI in components.
11. **Tests for core functions.** No silent formula changes.
12. **Citations / provenance** where a formula is taken from research or convention.

## Evidence and certainty

Classify formula basis using `docs/14_REFERENCE_AND_CITATION_STANDARD.md`.  
A coaching heuristic must not be labeled as established consensus.

## Implementation checklist (per calculator)

- [ ] Pure function(s) with tests  
- [ ] Unit handling  
- [ ] Assumption copy  
- [ ] Limitation copy  
- [ ] Accessible form UI  
- [ ] Registry status updated  
- [ ] Founder review before “available”
