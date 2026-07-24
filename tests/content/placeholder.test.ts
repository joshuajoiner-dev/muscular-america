import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { listContentPlaceholders } from "@/lib/content";

describe("content library scaffold", () => {
  it("returns an empty list until content loaders are implemented", () => {
    assert.deepEqual(listContentPlaceholders(), []);
  });
});
