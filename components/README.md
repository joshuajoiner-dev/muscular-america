# Components

Logical groupings:

| Directory | Purpose |
| --- | --- |
| `brand/` | Wordmarks, logotypes, brand-specific marks |
| `calculators/` | Calculator shells, inputs, result panels |
| `content/` | Shared content rendering for articles and entries |
| `field-guide/` | Field Guide-specific browsing and entry presentation |
| `layout/` | Page shells, section wrappers, page headers |
| `navigation/` | Primary and secondary navigation |
| `publication/` | Shared publication chrome across books and tools |
| `ui/` | Universal interface primitives |

Rules:

- Do not create decorative components without a defined purpose.
- Keep publication-specific visuals out of `ui/`.
- Field Guide components must support short, visually separated segments.
