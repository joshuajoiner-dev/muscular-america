/** Minimal className joiner. Prefer composition over utility libraries. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
