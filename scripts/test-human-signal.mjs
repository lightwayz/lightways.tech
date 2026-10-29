import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
let selected = "understand";
const exports = {};
const source = fs.readFileSync("app/components/experience/HumanSignal.tsx", "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
vm.runInNewContext(compiled, { exports, require(id) {
  if (id === "react") return { useState: () => [selected, value => { selected = value; }] };
  if (id === "next/image") return { __esModule: true, default: "img" };
  return require(id);
} });
function nodes(node) {
  if (Array.isArray(node)) return node.flatMap(nodes);
  if (!node || typeof node !== "object" || !node.props) return [];
  return [node, ...nodes(node.props.children)];
}
function text(node) {
  if (Array.isArray(node)) return node.map(text).join("");
  if (typeof node === "string" || typeof node === "number") return String(node);
  return node?.props ? text(node.props.children) : "";
}
const processSource = fs.readFileSync("app/components/Process.tsx", "utf8");
for (const id of ["understand", "build", "improve"]) {
  const tree = nodes(exports.default());
  tree.find(node => node.type === "input" && node.props.value === id).props.onChange();
  const next = nodes(exports.default());
  const checked = next.filter(node => node.type === "input" && node.props.checked);
  assert.equal(checked.length, 1);
  assert.equal(checked[0].props.value, id);
  const explanation = next.find(node => node.props.id === "human-signal-explanation");
  const copy = text(explanation).split(". ").slice(1).join(". ");
  assert.ok(processSource.includes(copy), "Stage explanation must reuse existing process wording");
  assert.equal(explanation.props.role, "status");
}
const noScript = nodes(exports.default()).find(node => node.type === "noscript");
for (const label of ["Understand", "Build", "Improve"]) assert.ok(text(noScript).includes(label));
const svg = fs.readFileSync("public/images/brand/human-signal.svg", "utf8");
assert.ok(Buffer.byteLength(svg) < 10000, "Keep the vector under 10 KB");
assert.ok(!/<script|<animate|<foreignObject|https?:\/\//.test(svg.replace('xmlns="http://www.w3.org/2000/svg"', "")), "Image must remain static and self-contained");
assert.ok(!/from\s+["'](?:three|@react-three)/.test(source) && !source.includes("requestAnimationFrame"));
console.log("PASS all three stage selections, existing wording, single checked state, live description, no-JS explanations and static self-contained SVG under 10 KB.");
