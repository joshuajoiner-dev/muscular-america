/**
 * Provisional Field Guide entry model.
 * Exact schema subject to Founder approval.
 * See docs/10_CONTENT_MODEL.md.
 */
export type FieldGuideEntry = {
  id: string;
  slug: string;
  title: string;
  entryType: string;
  section: string;
  summary?: string;
  body: string;
  rationale?: string;
  action?: string;
  caution?: string;
  experienceLevels?: string[];
  tags?: string[];
  relatedEntries?: string[];
  references?: string[];
  status: string;
  updatedAt?: string;
};
