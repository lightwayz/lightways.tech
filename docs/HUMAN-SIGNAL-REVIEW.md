# The Human Signal

The philosophy photograph is replaced with an original dimensional SVG instrument. A yellow point represents a person’s need, fine paths illustrate surrounding complexity, and a clear connection passes through three translucent stages: Understand, Build and Improve.

The image is original code-defined vector artwork, not an AI-generated photograph or a live product interface. It uses charcoal planes, glass-like gradients and yellow connections. The SVG is self-contained and under 10 KB. A PNG preview is delivered separately; the website uses the much smaller SVG.

## Interaction

Three native radio controls reveal short explanations taken verbatim from the existing process copy. The selected explanation is announced as a status update. Native keyboard navigation, visible focus, generous targets and one-column controls on phones are retained. With JavaScript disabled, all three explanations appear as a definition list instead of unusable controls.

The artwork is static on every device, including mobile and reduced-motion settings. Stage selection updates text immediately. There is no rotating object, continuous animation, render loop, canvas, WebGL context or Three.js import. No new dependencies or third-party requests were added.

## Scope

Existing philosophy copy, brand, sections, service channels, service-card spotlights, PADI status and contact flow remain. No human photographs remain in the active page imagery. The abstract clarity/trust artwork and earlier operational illustration are unchanged. Earlier photo packages are superseded. No deployment, DNS, hosting or email changes were made.

## Local review

Extract the source ZIP into a separate folder, open it in WebStorm, run `npm ci` and `npm run dev`, then visit http://localhost:3000/#philosophy.

Check the illustration on desktop and phone, use Tab and arrow keys to select all three stages, and confirm each explanation changes. Repeat with reduced motion and JavaScript disabled. The SVG stays static and sharp as it scales; the readable stage names and explanations remain native webpage text.

Automated checks include actual component event handlers for each stage, explanation provenance, the single selected state, live-region markup, the no-JS fallback and the SVG size/self-containment. These do not replace in-page focus and responsive browser review, which remains pending because earlier local-preview access was unavailable to the browser tool.

Validation: ESLint, TypeScript and the full production webpack build passed. Built-page checks passed for landmarks, metadata, links, unique IDs, sitemap, PADI status and configured security headers. All stage-selection event tests, explanation provenance checks, no-JS fallback checks and SVG self-containment/size checks passed. The built homepage references the vector and stage controls, and the retired photograph is absent. The SVG was rendered to PNG and visually inspected. In-page responsive, native focus and touch checks remain pending.

To run the interaction checks: `node --experimental-strip-types scripts/test-human-signal.mjs` (Node 22.6+).
