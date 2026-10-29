import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
const routes = ["", "/padi", "/privacy"];
const documents = new Map(
  routes.map((route) => [
    route,
    fs
      .readFileSync(
        path.join(
          ".next/server/app",
          route ? `${route.slice(1)}.html` : "index.html",
        ),
        "utf8",
      )
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ""),
  ]),
);
for (const [route, html] of documents) {
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) ?? []).length,
    1,
    `${route || "/"} must have one H1`,
  );
  assert.match(html, /<main[^>]+id="main"/, "Missing main landmark");
  assert.match(
    html,
    /name="description" content="[^\"]+"/,
    "Missing description",
  );
  assert.ok(
    html.includes(`rel="canonical" href="https://lightways.tech${route}"`),
    "Incorrect canonical",
  );
  assert.ok(
    html.includes("mailto:admin@lightways.tech"),
    "Missing approved contact address",
  );
  assert.ok(!html.includes("/logos/brand"), "Placeholder brand assets remain");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, "Duplicate element IDs");
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const [targetRoute, hash] = href.startsWith("#")
      ? [route, href.slice(1)]
      : href.split("#");
    const normalizedRoute = targetRoute === "/" ? "" : targetRoute;
    assert.ok(
      documents.has(normalizedRoute),
      `Missing internal route: ${href}`,
    );
    if (hash)
      assert.ok(
        documents.get(normalizedRoute).includes(`id="${hash}"`),
        `Missing anchor: ${href}`,
      );
  }
  console.log(
    `PASS ${route || "/"}: landmarks, metadata, links, email and unique IDs`,
  );
}
assert.match(documents.get("/padi"), /Development has not started/);
assert.match(documents.get("/padi"), /Flutter/);
assert.match(documents.get("/padi"), /FastAPI/);
assert.ok(
  !/type="SoftwareApplication"/.test(documents.get("/padi")),
  "Unlaunched product should not imply available software",
);
const css = fs.readFileSync("app/globals.css", "utf8");
assert.ok(css.includes("prefers-reduced-motion"));
assert.ok(
  !/opacity:\s*0[;}]/.test(css),
  "Important content must not depend on reveal animations",
);
const meta = await sharp("public/social-card.png").metadata();
assert.equal(meta.width, 1200);
assert.equal(meta.height, 630);
const sitemap = fs.readFileSync(".next/server/app/sitemap.xml.body", "utf8");
for (const route of routes)
  assert.ok(sitemap.includes(`https://lightways.tech${route}`));
const manifest = JSON.parse(
  fs.readFileSync(".next/routes-manifest.json", "utf8"),
);
const headers = manifest.headers.flatMap((rule) => rule.headers);
const csp = headers.find(
  (header) => header.key.toLowerCase() === "content-security-policy",
)?.value;
assert.ok(csp?.includes("frame-ancestors 'none'"));
assert.ok(csp?.includes("object-src 'none'"));
assert.ok(!csp?.includes("unsafe-eval"));
assert.ok(!csp?.includes("grainy-gradients"));
assert.ok(
  headers.some(
    (header) =>
      header.key === "X-Content-Type-Options" && header.value === "nosniff",
  ),
);
assert.ok(!fs.existsSync("app/app") && !fs.existsSync("lib/lib"));
console.log(
  "PASS PADI status, sitemap, social image, reduced-motion CSS, security configuration and clean folder structure",
);
