import fs from "node:fs";
import path from "node:path";
// Source ZIPs do not contain .git. Enumerate managed source explicitly.
const files = new Set();
for (const dir of ["app", "public", "scripts", "docs", "lib"]) {
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
  ".gitignore",
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "postcss.config.mjs",
  "eslint.config.mjs",
])
  files.add(file);
const managed = [...files]
  .filter(
    (file) =>
      (file === "upgrade-manifest.json" || fs.existsSync(file)) &&
      file !== ".git" && !file.startsWith(".git/") &&
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
