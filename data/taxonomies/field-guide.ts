/**
 * Provisional Field Guide taxonomies.
 * Section folders may be reorganized without changing entry IDs.
 */

export const fieldGuideSections = [
  "front-matter",
  "foundations",
  "training",
  "gym-environment",
  "nutrition",
  "recovery",
  "tracking",
  "goals",
  "back-matter",
] as const;

/** Provisional entry types — pending Founder approval. */
export const fieldGuideEntryTypes = [
  "Field Note",
  "Quick Principle",
  "Gym Signal",
  "Training Rationale",
  "Common Drift",
  "Try This",
  "Checkpoint",
  "Trivia Spot",
  "Goal Marker",
  "Courtesy Note",
  "Recovery Note",
] as const;

export const experienceLevels = [
  "beginning",
  "returning",
  "experienced",
] as const;
