/** Shared validation helpers for forms, calculators, and content status. */

export function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
