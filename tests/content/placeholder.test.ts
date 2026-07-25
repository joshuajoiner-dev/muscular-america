import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getAllFieldGuideEntries } from "@/lib/content";

describe("content library scaffold", () => {
  it("exposes Field Guide entries through the shared content loader", () => {
    assert.ok(getAllFieldGuideEntries().length >= 1);
  });
});
