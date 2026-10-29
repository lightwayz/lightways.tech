import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
const tracked = execFileSync("git", ["ls-files"], { encoding: "utf8" })
  .trim()
  .split(/\r?\n/);
const files = new Set(tracked.map((file) => file.split(path.sep).join("/")));
for (const dir of ["app", "public", "scripts", "docs"]) {
  for (const entry of fs.readdirSync(dir, { recursive: true })) {
    const file = path.join(dir, entry);
    if (fs.statSync(file).isFile()) files.add(file.split(path.sep).join("/"));
  }
}
for (const file of [
  "README.md",
  "next.config.mjs",
  "Apply-Local-Update.ps1",
  "upgrade-manifest.json",
])
  files.add(file);
const managed = [...files]
  .filter(
    (file) =>
      (file === "upgrade-manifest.json" || fs.existsSync(file)) &&
      !file.startsWith(".git") &&
      !file.startsWith("AGENTS") &&
      !file.startsWith("CLAUDE"),
  )
  .sort();
fs.writeFileSync(
  "upgrade-manifest.json",
  JSON.stringify(
    {
      files: managed,
      retire: ["app/app", "lib/lib", "lib/firebase.ts", "app/favicon.ico", "next.config.ts"],
    },
    null,
    2,
  ) + "\n",
);
console.log(`Upgrade manifest: ${managed.length} unique managed files.`);
