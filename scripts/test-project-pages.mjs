import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const require = createRequire(import.meta.url);
const original = Object.fromEntries([".ts", ".tsx", ".css"].map(extension => [extension, require.extensions[extension]]));
try {
  for (const extension of [".ts", ".tsx"]) require.extensions[extension] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText, filename);
  require.extensions[".css"] = () => {};
  const layout = require(path.resolve("app/layout.tsx")).default;
  const cases = [["", "app/page.tsx"], ["/work", "app/work/page.tsx"], ["/work/energywallet-ticket-centre", "app/work/energywallet-ticket-centre/page.tsx"], ["/work/unic-law-firm", "app/work/unic-law-firm/page.tsx"], ["/padi", "app/padi/page.tsx"], ["/privacy", "app/privacy/page.tsx"]];
  const documents = new Map();
  for (const [route, filename] of cases) {
    const page = require(path.resolve(filename));
    const html = renderToStaticMarkup(React.createElement(layout, null, React.createElement(page.default)));
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${route || "/"}: one H1`);
    assert.match(html, /<main[^>]+id="main"/);
    assert.equal(page.metadata.alternates.canonical, route || "/");
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(ids.length, new Set(ids).size, `${route || "/"}: duplicate IDs`);
    assert.ok(html.includes("mailto:admin@lightways.tech"));
    assert.ok(html.includes('class="first-opening"'), "Welcome must be mounted in actual layout");
    documents.set(route, html);
    console.log(`PASS server-rendered ${route || "/"}: layout, landmarks, H1, IDs, canonical configuration and contact`);
  }
  const home = documents.get("");
  assert.match(home, /id="work"/);
  for (const text of ["EnergyWallet Ticket Centre", "UNIC Law Firm", "7,400+", "15,000+"]) assert.ok(home.includes(text));
  const energy = documents.get("/work/energywallet-ticket-centre");
  assert.match(energy, /supplied by Lightways on 31 October 2026/);
  assert.ok(!energy.includes("5,000,000"));
  assert.match(energy, /https:\/\/tickets\.energywalletng\.com\//);
  assert.match(documents.get("/work/unic-law-firm"), /https:\/\/www\.uniclawfirm\.com\//);
  assert.match(documents.get("/padi"), /Development has not started/);
  for (const text of ["WhatsApp", "Google Translate", "session-storage"]) assert.ok(documents.get("/privacy").includes(text));
  const { translationHref } = require(path.resolve("lib/translation-links.ts"));
  for (const route of cases.map(([route]) => route || "/")) assert.equal(new URL(translationHref("fr", route)).searchParams.get("u"), `https://lightways.tech${route}`);
  assert.match(fs.readFileSync("app/components/experience/FirstOpening.tsx", "utf8"), /setTimeout\(close, 4000\)/);
  console.log("PASS project evidence, corrected usage figures, provenance, public links, PADI planning status, privacy, translation routes and four-second welcome");
  console.log("Server-render smoke tests do not replace next build, browser hydration, mobile or performance testing.");
} finally {
  for (const extension of Object.keys(original)) {
    if (original[extension]) require.extensions[extension] = original[extension];
    else delete require.extensions[extension];
  }
}
