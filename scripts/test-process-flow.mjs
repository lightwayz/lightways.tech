import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);
let paused = false, systemReduced = false, savedMotion = "auto", effect, observerCallback, disconnected = false;
const reference = { current: null };
const attributes = new Map();
const listeners = new Map();
const document = { hidden: false, addEventListener: (name, listener) => listeners.set(name, listener), removeEventListener: name => listeners.delete(name) };
const exports = {};
const source = fs.readFileSync("app/components/experience/ProcessFlow.tsx", "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
vm.runInNewContext(compiled, {
  exports, document,
  window: { matchMedia: () => ({ matches: systemReduced }) },
  IntersectionObserver: class { constructor(callback) { observerCallback = callback; } observe() {} disconnect() { disconnected = true; } },
  require(id) {
    if (id === "react") return { useState: () => [paused, update => { paused = typeof update === "function" ? update(paused) : update; }], useRef: () => reference, useEffect: callback => { effect ??= callback; }, useSyncExternalStore: (_subscribe, snapshot) => snapshot() };
    if (id === "./events") return { storedMotion: () => savedMotion };
    return require(id);
  },
});
const render = () => exports.default({ children: "Existing process stages" });
const button = tree => tree.props.children[0].props.children[1];
let tree = render();
assert.equal(tree.props["data-playback"], "running");
reference.current = { setAttribute: (name, value) => attributes.set(name, value), removeAttribute: name => attributes.delete(name) };
const cleanup = effect();
assert.equal(attributes.get("data-in-view"), "false");
observerCallback([{ isIntersecting: true }]); assert.equal(attributes.get("data-in-view"), "true");
button(tree).props.onClick(); tree = render(); assert.equal(tree.props["data-playback"], "paused"); assert.equal(button(tree).props["aria-pressed"], true);
button(tree).props.onClick(); tree = render(); assert.equal(tree.props["data-playback"], "running");
systemReduced = true; tree = render(); assert.equal(tree.props["data-playback"], "paused"); assert.equal(button(tree).props.disabled, true);
systemReduced = false; savedMotion = "reduced"; tree = render(); assert.equal(tree.props["data-playback"], "paused");
savedMotion = "auto"; document.hidden = true; listeners.get("visibilitychange")(); assert.equal(attributes.get("data-in-view"), "false");
document.hidden = false; listeners.get("visibilitychange")(); assert.equal(attributes.get("data-in-view"), "true");
observerCallback([{ isIntersecting: false }]); assert.equal(attributes.get("data-in-view"), "false");
cleanup(); assert.equal(disconnected, true); assert.equal(listeners.size, 0); assert.equal(attributes.has("data-in-view"), false);
console.log("PASS workflow pause/resume, system and saved reduced motion, off-screen/hidden-tab suspension and cleanup. Native browser timing/focus still requires visual QA.");
