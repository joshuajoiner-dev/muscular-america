import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  trackEvent,
  trackNewsletterSignup,
  trackSearch,
  trackContactSubmit,
} from "@/lib/analytics";

describe("analytics utility", () => {
  it("no-ops safely when window/gtag are unavailable (server)", () => {
    assert.doesNotThrow(() => {
      trackEvent("search", { page_section: "test" });
      trackNewsletterSignup();
      trackSearch();
      trackContactSubmit();
    });
  });
});
