import assert from "node:assert/strict";
import { startingPoints, startingPointMessage } from "../lib/clear-path.ts";
import { prepareEnquiry } from "../lib/enquiry.ts";

assert.equal(new Set(startingPoints.map(point => point.id)).size, 4);
for (const point of startingPoints) {
  const message = startingPointMessage(point.id);
  assert.ok(message.includes(point.label.toLowerCase()));
  assert.ok(message.length < 1000);
  const draft = prepareEnquiry({ name: "Example Visitor", email: "visitor@example.com", company: "", type: "Project or partnership", source: "", message });
  const link = new URL(draft.href);
  assert.equal(link.pathname, "admin@lightways.tech");
  assert.equal(link.searchParams.get("body"), draft.body);
  assert.ok(draft.body.includes(point.label.toLowerCase()));
  assert.ok(draft.body.includes("Our current situation:"));
}
assert.throws(() => startingPointMessage("unknown"));
console.log("PASS all four starting points preserve their context through validated email-draft encoding; unknown selections are rejected.");
