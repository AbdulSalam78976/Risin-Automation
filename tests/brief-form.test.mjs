// Contact form action checks. Run: npm run test:form
import assert from "node:assert/strict";
import { sendBrief } from "../app/contact/actions.ts";

const fd = (o) => {
  const f = new FormData();
  for (const [k, v] of Object.entries(o)) f.append(k, v);
  return f;
};
const valid = { fullName: "A Khan", company: "Acme", email: "a@b.co", brief: "Need 1 MW rooftop solar." };

// A honeypot hit looks successful to the bot but is never delivered.
assert.equal((await sendBrief(null, fd({ ...valid, website: "bot" }))).ok, true);

for (const [bad, expected] of [
  [{ fullName: "" }, /required/],
  [{ company: "" }, /required/],
  [{ brief: "" }, /required/],
  [{ email: "not-an-email" }, /email/],
  [{ brief: "x".repeat(5001) }, /longer/],
]) {
  const r = await sendBrief(null, fd({ ...valid, ...bad }));
  assert.equal(r.ok, false, `should reject ${JSON.stringify(bad)}`);
  assert.match(r.message, expected);
}

console.log("brief-form: all checks passed");
