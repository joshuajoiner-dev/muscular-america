# Publishing source

`content/` is the **version-controlled publishing source** for Muscular America.

Muscular America is the publishing platform. Files here feed MuscularAmerica.com through loaders in `lib/content/`.

```text
content/
├── books/
│   ├── field-guide/          # Publication #1 — first active publication
│   │   ├── entries/          # MDX Field Guide specimens and future entries
│   │   └── …                 # Organizational section folders (READMEs)
│   └── simply-fit/           # Future book line (reserved)
├── articles/                 # Future editorial articles (MDX)
├── calculators/              # Future calculator explainers / copy
├── courses/                  # Future course modules
├── shared/                   # Cross-publication fragments
├── glossary/
├── newsletter/
├── principles/
└── references/
```

Future books such as Simply Fit can coexist under `books/` without changing platform architecture. Articles, calculator explanations, courses, newsletters, and shared notes may be added using the same frontmatter standards where appropriate.

Load documents through `lib/content/` — never import individual MDX files from pages.

See `docs/00_PLATFORM_VISION.md` and `docs/19_CONTENT_PIPELINE.md`.
