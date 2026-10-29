import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";
import { startingPoints, startingPointMessage } from "../lib/clear-path.ts";

// Exercise the real component's event handlers without a browser or new test dependencies.
const require = createRequire(import.meta.url);
let selected = startingPoints[0].id;
let enquiry;
const exports = {};
const source = fs.readFileSync("app/components/experience/ClearPath.tsx", "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
vm.runInNewContext(compiled, { exports, require(id) {
  if (id === "react") return { useState: () => [selected, value => { selected = value; }] };
  if (id === "../../../lib/clear-path") return { startingPoints, startingPointMessage };
  if (id === "./events") return { openExperience: (...args) => { enquiry = args; } };
  if (id === "./ServiceDemo") return { __esModule: true, default: () => null };
  return require(id);
} });
function nodes(node) {
  if (Array.isArray(node)) return node.flatMap(nodes);
  if (!node || typeof node !== "object" || !node.props) return [];
  return [node, ...nodes(node.props.children)];
}
const render = () => nodes(exports.default());
function button(label) { return render().find(node => node.type === "button" && node.props["aria-label"] === label); }
function assertSelection(id) {
  assert.equal(selected, id);
  const tree = render();
  const pressed = tree.filter(node => node.type === "button" && node.props["aria-pressed"]);
  assert.equal(pressed.length, 1);
  assert.ok(pressed[0].props["aria-label"].includes(startingPoints.find(point => point.id === id).label));
  const checked = tree.filter(node => node.type === "input" && node.props.checked);
  assert.equal(checked.length, 1);
  assert.equal(checked[0].props.value, id);
}
button("Previous starting point").props.onClick(); assertSelection("idea");
button("Next starting point").props.onClick(); assertSelection("administration");
for (const [index, point] of startingPoints.entries()) {
  button(`Starting point ${index + 1}: ${point.label}`).props.onClick(); assertSelection(point.id);
}
render().find(node => node.type === "input" && node.props.value === "tools").props.onChange(); assertSelection("tools");
function key(value, { nested = false, ctrl = false } = {}) {
  const panel = render().find(node => node.props.id === "clear-path-result");
  const target = {};
  let prevented = false;
  panel.props.onKeyDown({ key: value, currentTarget: target, target: nested ? {} : target, ctrlKey: ctrl, preventDefault() { prevented = true; } });
  return prevented;
}
assert.ok(key("ArrowRight")); assertSelection("idea");
assert.ok(key("ArrowRight")); assertSelection("administration");
assert.ok(key("4")); assertSelection("idea");
assert.equal(key("1", { nested: true }), false); assertSelection("idea");
assert.equal(key("1", { ctrl: true }), false); assertSelection("idea");
assert.equal(key("5"), false); assertSelection("idea");
const trigger = {};
render().find(node => node.type === "button" && node.props.className === "button button-primary").props.onClick({ currentTarget: trigger });
assert.equal(enquiry[0], "enquiry"); assert.equal(enquiry[1], trigger); assert.equal(enquiry[2], startingPointMessage("idea"));
console.log("PASS channel wraparound, numbered choices, radio synchronisation, scoped shortcuts and selected enquiry context. Browser focus/touch behaviour still requires visual QA.");
