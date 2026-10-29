# Connected workflow and Before we begin

The supplied Nualt screenshot was used as a reference for the idea of a connected process with an end-to-end signal. All Lightways icons, styling, motion and copy are original or taken from the existing Lightways site. No reference graphics, code or client evidence was copied.

## Workflow

The existing Think → Design → Build → Evolve cards retain their original wording and responsive grid. Four small inline SVG symbols are added above them. A dotted yellow connector and two gently travelling signal packets run from the first side to the other across the desktop row.

The animation is CSS-based. There is no video, canvas, WebGL dependency, JavaScript frame loop or new library. A small client wrapper provides an accessible pause/play button and visibility/preference handling. The signal runs only when the section is on-screen, the tab is visible, motion is allowed and the visitor has not paused it. Desktop movement takes nine seconds end to end. At 800px and below, the connectors and motion control are hidden and the icons remain static within the existing cards.

System reduced motion and the saved site preference produce a static workflow. Without JavaScript, it also remains static and the full process text stays readable. The SVG is decorative; native headings and ordered process descriptions convey all the information.

## Before we begin

Six native expandable questions are grouped under Starting and scoping, Information and handover, and Support and the next step. They sit after the existing growth story inside the Approach section. Each answer describes arrangements agreed per project, without claiming universal IP ownership, zero running costs, fixed delivery times or unlimited support. The native details controls work without JavaScript; the shared name allows one answer at a time in supporting browsers.

Human Signal, service channels, spotlights, brand, page routes, other sections and PADI’s planning disclosures are unchanged. No publishing, hosting, DNS, email, account or cost changes are included.

## Local review

Extract the latest source ZIP into a separate folder, open in WebStorm, run npm ci and npm run dev, then visit http://localhost:3000/#process.

- Desktop: confirm the packets travel end to end through the four symbols and align with the existing cards.
- Pause and resume; scroll away and return; switch tabs and return. Pausing manually should remain in effect.
- Enable system or saved reduced motion; confirm the workflow stops and the control indicates a static view.
- Phone/tablet: inspect the static symbols and existing two-column or one-column process cards without horizontal overflow.
- Keyboard: use the pause control, then each FAQ summary. Confirm native expansion, focus visibility and readable answers.
- With JavaScript disabled, confirm process copy and FAQs remain available.

Run `node --experimental-strip-types scripts/test-process-flow.mjs` for component-level playback and suspension checks (Node 22.6+). These checks do not replace in-page responsive, native focus or animation-timing review, which remains pending on the user’s local preview.

Validation: ESLint, TypeScript and the full production webpack build passed. Existing built-page checks passed for metadata, internal links, unique IDs, landmarks, sitemap, PADI status and security headers. Workflow component tests passed for pause/resume, system and saved reduced motion, off-screen/hidden-tab suspension and cleanup. The built homepage contains the connector, six native FAQ items and the preserved Human Signal. A standalone HTML preview was rendered from the actual source components; its control script syntax and FAQ count were verified. A static SVG-derived overview was visually inspected. In-page browser timing, pointer/touch, responsive and native focus review remain pending.

A downloadable standalone HTML preview is included as LIGHTWAYS-WORKFLOW-PREVIEW.html. Open it in a desktop browser above 800px to see the end-to-end movement without installing the source. It uses the same component-rendered markup and CSS, with a small standalone controller for playback and visibility instead of the app’s React hydration. It is a preview artifact, not a deployment or a substitute for testing the full app.
