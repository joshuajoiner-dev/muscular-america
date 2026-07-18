# Founding Architecture Review

## Review Status

**Date:** July 16, 2026  
**Scope:** Founding repository architecture and governing documents only  
**Constraint:** Review only — no repository expansion, schema implementation, specimen content, or commit  
**Documents reviewed in order:** README → Charter → Governance → Editorial Principles → Repository Architecture → Publication Architecture → Field Guide Architecture → Content Model → Calculator Standards → Publication Standards → Reference Standard → Production Workflow → Editorial Decisions  
**Also checked for consistency:** Design System, Typography, Color Tokens, Illustration Guide, Accessibility, package scaffold

---

## Executive Assessment

The founding documents establish the correct institution: **Muscular America as an independent fitness publishing platform**, not a blog, workout app, single-book repo, calculator site, or extension of another publisher.

Multi-publication capacity, calculator honesty, modular content, and proportionate change control are largely in place. The Field Guide’s browsing intent is clear and not prematurely locked into a final form.

The main institutional gap is independence hygiene: The Word Detective still appears as an ongoing comparative reference inside permanent governance docs. That should be reduced to a single founding acknowledgment so Muscular America can stand alone afterward.

No architectural rewrite of the directory tree is required before the first commit.

---

## What Is Correctly Established

- Platform identity is explicit in the Charter and README: publishing platform spanning books, tools, articles, education, courses, newsletter, and community resources.
- Clear exclusions: not medical care, not diagnosis, not bodybuilding-only, not a motivational mill, not disconnected posts.
- Multi-publication architecture supports independent tone, visuals, entry schemes, lifecycle, web, and print per publication.
- Field Guide intent favors short, segmented, passive browsing — closer to a compact reference than a textbook.
- Goals, gym-environment, training, nutrition, recovery, and tracking domains have architectural homes without frozen chapter titles.
- Calculator standards separate pure logic, validation, units, presentation, limitations, provenance, and tests.
- Evidence classification exists as honest epistemic labeling, not an academic apparatus.
- Governance distinguishes material Founder decisions from routine edits and allows labeled experiments.
- Technical scaffold is minimal (Next.js, React, TypeScript, Tailwind, ESLint, tsx tests) — no CMS, auth, subscriptions, analytics, or monorepo assumptions.
- Tone across governance docs is largely calm, practical, and free of fitness-industry cliché language.

---

## Critical Findings

### Finding 001 — The Word Detective remains a permanent comparative reference

**Priority**

CRITICAL

**Location**

`docs/05_FIELD_GUIDE_ARCHITECTURE.md` (Not the intended feel)  
`docs/08_COLOR_TOKENS.md` (Identity firewall)  
`docs/16_EDITORIAL_DECISIONS.md` (Decision 001 Decision / Implications)

**Observation**

The Word Detective is named in permanent governance documents as a continuing “do not resemble” foil — including Field Guide architecture and color-token doctrine — not only as a one-time founding precedent.

**Why It Matters**

Ongoing comparison keeps another publisher inside Muscular America’s institutional language. The repository should be able to stand independently after the founding decision is recorded. Permanent docs should state positive independence rules without requiring readers to know The Word Detective.

**Recommendation**

Keep a single founding acknowledgment in Decision 001. Rewrite other references to stand-alone language such as: independent public identity; no shared imprint, design family, or publication terminology with other properties; use established publication governance and production discipline. In Color Tokens, forbid borrowing another property’s signature palette without naming that palette’s owner.

**Status**

OPEN

---

## Important Refinements

### Finding 002 — Approval-state vocabularies are not aligned

**Priority**

IMPORTANT

**Location**

`docs/02_GOVERNANCE.md` (Publication approval states; Experiments vs approved systems)  
`docs/04_PUBLICATION_ARCHITECTURE.md` (Lifecycle)  
`docs/10_CONTENT_MODEL.md` (`status` field notes)  
`docs/15_PRODUCTION_WORKFLOW.md` (Workflow)

**Observation**

The repository uses several overlapping ladders: publication lifecycle (`CONCEPT` … `ARCHIVED`), content `status` (`draft` / `review` / `approved` / `frozen` / `archived`), experiment labeling, and workflow stages. The useful distinctions EXPERIMENTAL / PROVISIONAL / FOUNDER APPROVED / FROZEN / PUBLISHED are implied but not stated as one map.

**Why It Matters**

Without a short alignment note, editors may think every draft needs Founder approval, or that provisional entry types are already institutional defaults.

**Recommendation**

Add a brief vocabulary map in Governance only — do not invent a new parallel system. Clarify that EXPERIMENTAL and PROVISIONAL work may proceed without Founder approval until something becomes a default; FOUNDER APPROVED / FROZEN / PUBLISHED are the gates that create institutional obligation.

**Status**

OPEN

---

### Finding 003 — Cable-guide comparison needs an experience-of-use clarification

**Priority**

IMPORTANT

**Location**

`docs/05_FIELD_GUIDE_ARCHITECTURE.md` (Intended feel)

**Observation**

The Field Guide is said to feel closer to “a cable television guide” without stating that this refers to glanceable, segmented, enter-anywhere use — not a visual imitation of a TV schedule.

**Why It Matters**

Designers could over-literalize the metaphor into schedule grids, channel chrome, or gimmick layout that fights a calm fitness reference.

**Recommendation**

Add one clarifying sentence: the comparison describes experience of use (glanceable, segmented, varied, useful in small portions), not visual imitation of a television schedule.

**Status**

OPEN

---

### Finding 004 — “Field Note” risks publication-family echo

**Priority**

IMPORTANT

**Location**

`docs/05_FIELD_GUIDE_ARCHITECTURE.md` (Provisional entry types)  
`data/taxonomies/field-guide.ts` (mirror vocabulary; noted for context only)

**Observation**

“Field Note” is provisional and functionally useful, but it closely echoes another publication’s “Field Notes” terminology.

**Why It Matters**

Even without shared branding, shared entry-type language can make Muscular America feel like a sibling imprint.

**Recommendation**

Treat “Field Note” as RENAME before specimen writing (see Entry-Type Assessment). Do not lock the name by use in early drafts.

**Status**

OPEN

---

### Finding 005 — “Gym etiquette” framing risks scolding tone

**Priority**

IMPORTANT

**Location**

`docs/05_FIELD_GUIDE_ARCHITECTURE.md` (Functional domains; Gym Signal row)  
`content/books/field-guide/gym-environment/README.md` (context)

**Observation**

Domains and entry-type notes use “etiquette” as a primary frame. The architecture correctly includes practical conduct topics, but does not yet state that these are training-support conditions rather than moral ranking or gym-policing.

**Why It Matters**

Etiquette language can sound territorial, elitist, or hostile to beginners — contradicting Editorial Principles.

**Recommendation**

In Field Guide Architecture, prefer “practical gym conduct” / “shared-space conditions that support training,” and add one sentence: courtesy is not moral superiority; distinguish useful courtesy from rigid etiquette performance.

**Status**

OPEN

---

### Finding 006 — Evidence classification is required by doctrine but absent from the entry schema

**Priority**

IMPORTANT

**Location**

`docs/14_REFERENCE_AND_CITATION_STANDARD.md`  
`docs/10_CONTENT_MODEL.md` (Provisional Field Guide entry)

**Observation**

Writers must distinguish evidence classes, yet `FieldGuideEntry` has `references[]` and `caution` without an optional evidence-classification field for the load-bearing claim.

**Why It Matters**

Without a light metadata hook, classification becomes easy to skip or bury in prose inconsistently.

**Recommendation**

Add an optional field such as `evidenceClass?: string` (or `claimClass`) for the entry’s load-bearing claim. Keep it optional — not every Trivia or Courtesy entry needs it. Do not add a full citation apparatus to the schema.

**Status**

OPEN

---

### Finding 007 — Shared `styles/` tokens can quietly become a de facto publication identity

**Priority**

IMPORTANT

**Location**

`docs/00_REPOSITORY_ARCHITECTURE.md` (Shared vs publication-specific)  
`docs/04_PUBLICATION_ARCHITECTURE.md` (Independent systems)  
`docs/08_COLOR_TOKENS.md` / `styles/tokens.css` (platform placeholders)

**Observation**

Publication architecture correctly lists independent visual systems, but the working CSS token file is platform-global. The firewall says publication tokens must not leak into the platform default; the reverse risk is understated.

**Why It Matters**

If Field Guide and Simply Fit inherit platform placeholders by inertia, independent visual identity becomes theoretical.

**Recommendation**

State explicitly that platform tokens are temporary scaffolding / interface defaults, and each publication may define its own token layer when design begins. No code change required before commit.

**Status**

OPEN

---

## Minor Refinements

### Finding 008 — Governance hierarchy labels `04_` as publication-specific

**Priority**

MINOR

**Location**

`docs/02_GOVERNANCE.md` (Hierarchy item 4)

**Observation**

Item 4 groups “Publication-specific architecture (e.g. `04_`, `05_`)”, but `04` is platform multi-publication architecture; `05` is publication-specific.

**Why It Matters**

Slight authority confusion about which doc governs platform vs one book.

**Recommendation**

Clarify hierarchy wording: platform publication architecture (`04`) above publication-specific docs (`05` and future).

**Status**

OPEN

---

### Finding 009 — Production stages are duplicated across two standards docs

**Priority**

MINOR

**Location**

`docs/12_PUBLICATION_STANDARDS.md` (Proof stages)  
`docs/15_PRODUCTION_WORKFLOW.md` (Workflow)

**Observation**

Nearly the same stage ladder appears in both documents. Neither is wrong; they serve adjacent audiences.

**Why It Matters**

Drift risk if one is updated and the other is not.

**Recommendation**

Keep both for now. Make one canonical by reference (“stage names follow Production Workflow”) in a later tidy pass — not a merge before first commit.

**Status**

OPEN

---

### Finding 010 — “Supported research” is broad; “established consensus” is thin

**Priority**

MINOR

**Location**

`docs/14_REFERENCE_AND_CITATION_STANDARD.md` (Evidence classifications)

**Observation**

Classifications are usable and distinct enough for founding work. “Supported research” covers a wide range; “established consensus” lacks a practical test beyond “broadly accepted.”

**Why It Matters**

Writers may reach for “supported research” as a prestige label, or avoid “established consensus” for lack of a clear bar.

**Recommendation**

Later, add one sentence each: consensus = multiple reputable professional sources converge; supported research = citeable study/review without claiming settlement. No change required before first commit.

**Status**

OPEN

---

## Document-by-Document Findings

### README.md

Correct platform framing. Reading order is sound. No fitness clichés. Mentions independence without naming The Word Detective (good). No findings unique to README beyond general status-vocabulary clarity (Finding 002).

### `01_PROJECT_CHARTER.md`

Strong institutional definition. “Is / is not” lists prevent blog, bodybuilding-brand, and motivational-mill misreads. “Tools” correctly includes calculators without turning the charter into an app product brief. Independence stated generically (“other publishing properties”) — preferred pattern.

### `02_GOVERNANCE.md`

Proportionate: typos stay lightweight; material changes need Founder review. Experiments are allowed if labeled. Finding 002 (status map) and Finding 008 (hierarchy wording) apply.

### `03_EDITORIAL_PRINCIPLES.md`

Tone and certainty rules match the desired voice. Identity note uses “other projects under the same Founder” without naming a sibling brand — good. No finding.

### `00_REPOSITORY_ARCHITECTURE.md`

Clear ownership map; publication-first; avoids premature complexity. Finding 007 (shared styles as identity risk) applies.

### `04_PUBLICATION_ARCHITECTURE.md`

Supports genuinely independent publications (tone, tokens, entry types, lifecycle, web/print). Identity firewall is correctly principle-based. Shared infrastructure list is appropriately technical. No critical issue.

### `05_FIELD_GUIDE_ARCHITECTURE.md`

Browsing intent is correct and not locked into final chapter titles. Goals and gym-environment domains are present. Findings 001, 003, 004, 005, and entry-type assessment apply. Missing: explicit note that MuscularAmerica.com may expand topics the guide only introduces — worth a short sentence at specimen stage (Deferred Questions).

### `10_CONTENT_MODEL.md`

Modular, optional-field-friendly, stable IDs separate from section placement, related entries and experience levels present. Does not embed layout. Finding 006 applies. Intended reading duration / print inclusion / revision history are rightly deferrable.

### `11_CALCULATOR_STANDARDS.md`

Separation of formula logic, validation, units, results language, UI, limitations, references, and tests is clear. Non-diagnostic posture is firm. Formulas can change without UI redesign if the split is respected. No finding.

### `12_PUBLICATION_STANDARDS.md`

Practical production hygiene. Finding 009 (overlap with workflow) only.

### `14_REFERENCE_AND_CITATION_STANDARD.md`

Right ambition: honest labeling, not citation density. Finding 010 (definition sharpening) only.

### `15_PRODUCTION_WORKFLOW.md`

Lightweight and explicit about avoiding ceremony. Aligns with “not every edit needs Founder approval.” Finding 002 and 009 apply.

### `16_EDITORIAL_DECISIONS.md`

Decision 001 correctly records founding architecture and independence. Keep the founding acknowledgment; trim ongoing comparative language (Finding 001).

### Design / accessibility docs (consistency only)

Framework-only status on design docs is appropriate. Color Tokens currently names The Word Detective (Finding 001). Accessibility requirements are compatible with publishing aims. No additional critical findings.

---

## Field Guide Entry-Type Assessment

| Entry Type | Recommendation | Distinct Function | Overlap Risk | Notes |
|---|---|---|---|---|
| Field Note | RENAME | Short observation from practice | Medium with Quick Principle if both stay vague | Rename to avoid sibling-publication echo; candidates: Practice Note, Floor Note, Gym Note |
| Quick Principle | RETAIN | Compact durable rule of thumb | Low–medium with Field Note | Keep; optionally shorten label to Principle later |
| Gym Signal | RETAIN | Environmental / shared-space cue | High with Courtesy Note | Keep as the conduct/environment type |
| Training Rationale | RETAIN | Why a practice tends to work | Low | Clear and useful across sections |
| Common Drift | RETAIN | Frequent slide or mistake | Low | Distinct; good for browsing |
| Try This | RETAIN | Optional small experiment | Low with Checkpoint | Keep optional framing |
| Checkpoint | RETAIN | Self-check moment | Low–medium with Goal Marker | Process check vs destination — keep both |
| Trivia Spot | RENAME | Lightweight related fact | Low | “Spot” feels slightly gimmicky; prefer Trivia |
| Goal Marker | RETAIN | Goal / horizon waypoint | Low with Checkpoint | Needed for goals architecture |
| Courtesy Note | MERGE | Shared-space respect | High with Gym Signal | Merge into Gym Signal (or Floor Cue) |
| Recovery Note | REMOVE | Recovery-oriented short entry | High with section taxonomy | Recovery is a section, not a type; use other types inside `recovery/` |

### Suggested additions (maximum three; prefer fewer)

| Proposed type | Recommendation | Reason |
|---|---|---|
| Orientation | DEFER unless specimens need it | Useful for “how to use this guide” / where to start; may be front-matter only |
| — | — | No second or third addition recommended at founding |

### Preferred smaller system (recommendation, not implementation)

1. Practice Note *(renamed Field Note)*  
2. Quick Principle  
3. Gym Signal *(includes former Courtesy Note)*  
4. Training Rationale  
5. Common Drift  
6. Try This  
7. Checkpoint  
8. Trivia *(renamed Trivia Spot)*  
9. Goal Marker  

Nine types is still workable; eleven with domain-duplicate types is not.

---

## Content-Model Assessment

**Strengths**

- Short modular entries work with required `id`, `slug`, `title`, `entryType`, `section`, `body`, `status` only.
- Optional fields avoid forcing every entry through the same template.
- Stable `id` vs movable `section` is correct.
- `relatedEntries`, `experienceLevels`, `references`, and `caution` cover relationships, audience, sources, and scope/safety notes without layout coupling.
- Publication-specific extensions are explicitly allowed.

**Material gap**

- Optional evidence classification for the load-bearing claim (Finding 006).

**Fields considered and not recommended as required now**

| Field idea | Assessment |
|---|---|
| Evidence classification | Add as **optional** metadata |
| Intended reading duration | Defer — presentation concern |
| Safety / scope notes | Already covered by optional `caution` |
| Print inclusion | Defer until print pipeline |
| Web expansion | Use `relatedEntries` / platform articles |
| Revision history | Git + optional `updatedAt` suffice |
| Editorial status | Keep single `status`; align vocabulary (Finding 002) |

No schema implementation in this review.

---

## Governance Weight Assessment

Governance is mostly proportionate to founding stage.

**Provides**

- Authority hierarchy  
- Institutional memory via Editorial Decisions  
- Change discipline for boundaries and identity  
- Publication separation  

**Does not currently create**

- Ticket theater  
- Mandatory Founder review for typos  
- A CMS or process product  

**Watch items**

- Status vocabulary fragmentation (Finding 002)  
- Duplicate stage lists (Finding 009)  
- Do not merge Charter / Governance / Editorial Principles — they govern different decisions  

Experimental work is allowed if labeled and prevented from silently becoming defaults. That distinction should remain explicit after the vocabulary map is added.

---

## Independence Assessment

| Risk area | Assessment |
|---|---|
| Shared imprint language | Not present in reader-facing stubs |
| Fictional universe / investigation metaphors | Not present |
| Design family / palette borrowing | Explicitly warned; currently names The Word Detective (Finding 001) |
| Publication terminology echo | “Field Note” risk (Finding 004) |
| Reader-facing voice clone | Principles are distinct and fitness-native |
| Branded component names | Neutral (`SiteMark`, `PrimaryNav`, etc.) |
| Ongoing comparative dependency | Present in permanent docs (Finding 001) |

**Word Detective mentions**

| Document | Necessary? | Assessment |
|---|---|---|
| `16_EDITORIAL_DECISIONS.md` Decision 001 | Yes, once | Founding acknowledgment of operational precedent and identity firewall — keep, then stop repeating |
| `05_FIELD_GUIDE_ARCHITECTURE.md` | No | Replace with stand-alone “not a sibling imprint / not another publisher’s guide format” language |
| `08_COLOR_TOKENS.md` | No | Replace with “do not borrow another property’s signature palette” |
| README / Charter / Editorial Principles | N/A | Correctly avoid naming |

Operational learning may be acknowledged once. Permanent doctrine should not require The Word Detective as a reference object.

---

## Recommended Founder Decisions

### DECIDE BEFORE FIRST COMMIT

1. Accept Finding 001 approach: one founding acknowledgment in Decision 001; neutralize other Word Detective references in permanent docs before or in the first commit.  
2. Accept that provisional entry types are **not** approved names — especially RENAME Field Note and Trivia Spot; MERGE Courtesy Note; REMOVE Recovery Note as a type.  
3. Choose final recommendation path: commit after the small independence/clarification edits, or commit as-created and schedule those edits immediately after.

### CAN DEFER UNTIL SPECIMEN DEVELOPMENT

1. Exact renamed entry-type strings (Practice Note vs Floor Note, etc.).  
2. Optional `evidenceClass` field shape.  
3. Whether Orientation is needed as a type or only as front matter.  
4. Sentence on platform expansion vs Field Guide compactness.  
5. Sharper definitions for “established consensus” vs “supported research.”

### CAN DEFER UNTIL DESIGN DEVELOPMENT

1. Publication-specific token layers vs platform scaffolding (document now, design later).  
2. Whether the cable-guide metaphor appears in any public marketing language (prefer not).  
3. Final typography and color approvals.

---

## Recommended Pre-Commit Changes

Smallest useful set (still not implemented in this review pass):

1. **Independence pass** on `05`, `08`, and Decision 001 implications — stand-alone language; one founding mention only.  
2. **One clarifying sentence** in Field Guide Architecture: TV-guide comparison = experience of use, not visual imitation.  
3. **One clarifying sentence** on gym conduct: practical support for training, not moral ranking.  
4. **Short status map** in Governance: EXPERIMENTAL / PROVISIONAL / FOUNDER APPROVED / FROZEN / PUBLISHED related to existing lifecycle and content status.  
5. **Mark entry-type table** as “provisional pending Founder naming decisions” with the RENAME/MERGE/REMOVE recommendations noted or linked to this review.

No directory changes. No new docs beyond this review. No dependencies. No specimens.

---

## Deferred Questions

- How prominently should MuscularAmerica.com host expanded treatments of topics the Field Guide only introduces?  
- Should Simply Fit share any Field Guide entries by ID early, or remain fully separate until its charter exists?  
- Reader-facing evidence labels vs internal-only metadata — how much classification language appears in print?  
- Calculator result copy patterns across all six tools — shared phrases vs per-calculator voice?

---

## Final Recommendation

**READY TO COMMIT AFTER MINOR REFINEMENTS**

The institution is correctly established: an independent, multi-publication fitness publishing platform with modular content, honest calculators, and proportionate governance. The directory architecture does not need revision.

Before the first commit, complete a short independence and clarity pass (Findings 001–005 especially). Entry-type names and schema extras can remain provisional if clearly marked; they should not be treated as approved by silence.
