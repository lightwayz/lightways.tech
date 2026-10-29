import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";
import { serviceExamples } from "../lib/service-examples.ts";
import { expertiseLinks } from "../lib/expertise-links.ts";
const require = createRequire(import.meta.url);
const compile = file => ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
function load(file, stubs, globals = {}) {
  const exports = {};
  vm.runInNewContext(compile(file), { exports, ...globals, require: id => id in stubs ? stubs[id] : require(id) });
  return exports.default;
}
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
let step = 0;
const Demo = load("app/components/experience/ServiceDemo.tsx", {
  react: { useState: () => [step, value => { step = typeof value === "function" ? value(step) : value; }] },
  "../../../lib/service-examples": { serviceExamples },
});
for (const scenario of Object.keys(serviceExamples)) {
  step = 0;
  const render = () => nodes(Demo({ scenario }));
  const action = () => render().find(node => node.type === "button" && node.props.className === "button button-outline");
  for (let state = 0; state < 3; state++) {
    const status = render().find(node => node.props.role === "status");
    assert.equal(text(status), serviceExamples[scenario].messages[state]);
    assert.ok(text(Demo({ scenario })).includes("Sample data only"));
    action().props.onClick();
    assert.equal(step, state === 2 ? 0 : state + 1);
  }
  action().props.onClick();
  render().find(node => node.type === "button" && text(node) === "Reset example").props.onClick(); assert.equal(step, 0);
}
let reveal = 50;
const Comparison = load("app/components/experience/WorkflowComparison.tsx", { react: { useState: () => [reveal, value => { reveal = value; }] } });
const compareNodes = () => nodes(Comparison());
compareNodes().find(node => node.type === "input").props.onChange({ target: { value: "78" } });
assert.equal(reveal, 78); assert.equal(compareNodes().find(node => node.type === "input").props["aria-valuetext"], "78 percent organised view");
assert.equal(compareNodes().find(node => node.props.className === "comparison-stage").props.style["--reveal-edge"], "22%");
for (const [label, expected] of [["Show scattered", 0], ["Show organised", 100]]) { compareNodes().find(node => node.type === "button" && text(node) === label).props.onClick(); assert.equal(reveal, expected); }
for (const [value, expected] of [["-10", 0], ["200", 100], ["not-a-number", 100]]) { compareNodes().find(node => node.type === "input").props.onChange({ target: { value } }); assert.equal(reveal, expected); }

class FakeNode { constructor(inside) { this.inside = inside; } }
const refs = [{ current: null }, { current: null }]; let refIndex = 0, effect, focused = 0;
const listeners = new Map();
const Menu = load("app/components/experience/ExpertiseMenu.tsx", {
  react: { useRef: () => refs[refIndex++], useEffect: callback => { effect = callback; } },
  "next/link": { __esModule: true, default: "a" }, "../../../lib/expertise-links": { expertiseLinks },
}, { Node: FakeNode, document: { addEventListener: (name, listener) => listeners.set(name, listener), removeEventListener: name => listeners.delete(name) } });
const menuTree = Menu();
refs[0].current = { open: true, contains: node => node.inside }; refs[1].current = { focus: () => focused++ };
const cleanup = effect();
listeners.get("pointerdown")({ target: new FakeNode(true) }); assert.equal(refs[0].current.open, true);
listeners.get("pointerdown")({ target: new FakeNode(false) }); assert.equal(refs[0].current.open, false);
refs[0].current.open = true; menuTree.props.onKeyDown({ key: "Escape" }); assert.equal(refs[0].current.open, false); assert.equal(focused, 1);
refs[0].current.open = true; listeners.get("focusin")({ target: new FakeNode(false) }); assert.equal(refs[0].current.open, false);
const anchors = nodes(menuTree).filter(node => node.type === "a");
for (const item of expertiseLinks) assert.ok(anchors.some(node => node.props.href === `/#${item.id}`));
refs[0].current.open = true;
nodes(menuTree).find(node => node.props.id === "expertise-menu-panel").props.onClick({ target: { closest: () => ({}) } }); assert.equal(refs[0].current.open, false); assert.equal(focused, 2);
cleanup(); assert.equal(listeners.size, 0);
console.log("PASS four demo journeys/reset, comparison controls/bounds, menu Escape/outside/focus handling, service destinations and listener cleanup. Native browser gestures/focus remain pending.");
