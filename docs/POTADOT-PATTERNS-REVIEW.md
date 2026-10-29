# Three Potadot-inspired additions

Reference reviewed: https://potadot.com.my/ . The public site presents selectable business scenarios with miniature interface illustrations, a manual-to-digital visual, and a services dropdown. Lightways adapts these patterns with original code, content and artwork. No reference assets, client details, metrics, geographic claims or source code were imported.

## 1. Interactive service examples

The existing Find your clear path guide now includes a small sample workspace. Its scenario follows the existing four choices: repetitive administration, scattered enquiries, disconnected tools and an idea that needs building. Each has three local states, two actions, restart and reset controls. Changing the parent choice resets the example through its React key. The original service descriptions, channel controls and enquiry handoff remain.

The screen is visibly labelled as a sample. There are no real customers, records, connected systems, messages or AI requests. PADI is not represented as delivering these functions. Nothing is saved or transmitted. Without JavaScript the initial sample remains readable and inactive controls are hidden.

## 2. Scattered → organised reveal

A native range slider reveals two representations of fictional work inside the existing operations story. Two buttons provide full-view alternatives to dragging. The range supports standard keyboard interaction, an explicit label and a percentage value description. Visual-only sample records have a complete text explanation. Without JavaScript, a static split view and explanation remain, with inactive controls hidden.

## 3. Expertise navigation

The desktop Expertise link becomes a native details dropdown with the three existing service areas, their current focus labels and direct section anchors. Escape closes and returns focus. Pointer or focus moving outside closes it, and selecting a link closes it before navigation. The service targets are focusable for hash navigation. Equivalent quick links appear in the existing mobile expanded menu. These are ordinary navigation links, not an ARIA application menu.

## Preserved and performance

The LW logo, signature yellow, hero headline, Human Signal, numbered channels, service-card spotlights, connected process animation, FAQs, page routes and PADI status remain. The additions use native controls, small React components and CSS, with no new dependencies, remote APIs, timers, autoplay, loading gate or tracking. Demo actions and comparison changes do not animate, so they remain usable with reduced motion. No hosting, DNS, email, account or cost changes are included. Nothing has been published.

## Review

Extract the latest source ZIP into a separate folder, run npm ci and npm run dev, and visit http://localhost:3000.

- Desktop Expertise: open with click/keyboard, navigate the links, close with Escape, move focus outside, and inspect the panel at narrower desktop widths and zoom.
- Mobile Menu: use the three service quick links and confirm the menu closes.
- Find your clear path: select each topic using radio or channel controls, exercise both demo steps and restart/reset; check the selected enquiry context is still correct.
- Operations story: drag the reveal, use arrow keys and both full-view buttons; inspect at phone, tablet and desktop widths.
- With JavaScript disabled, check native navigation and static samples remain available without inactive demo controls.
- Confirm every example is labelled illustrative and no client result or launched PADI feature is implied.

Component tests: `node --experimental-strip-types scripts/test-potadot-patterns.mjs`. Existing channel and enquiry tests remain applicable. Automated event tests do not replace real browser gesture/focus or visual responsive review, which remains pending because earlier local-preview access was unavailable to the browser tool.

Validation: ESLint and TypeScript passed. The first build encountered the recurring local Windows EPERM folder-creation issue; the retry completed the full production webpack build. Built-page checks passed for landmarks, metadata, internal links, unique IDs, sitemap, PADI status and security headers. New component tests passed for all four demo journeys, restart/reset, comparison range/buttons/bounds, menu Escape/outside/focus behaviour, destination links and listener cleanup. Existing service-channel tests passed. The generated standalone preview has valid controller syntax, unique IDs and working local anchor targets. Full in-page responsive, real touch/drag and native-focus verification remain pending on the local preview.

A self-contained review file is supplied separately as LIGHTWAYS-SERVICE-INTERACTIONS-PREVIEW.html. Download and open it in a browser to try the three patterns without installing the app. It uses component-rendered markup and the actual CSS, with a small standalone controller replacing React hydration. Scenario selection and service-anchor destinations are simplified for this isolated preview; it is not a deployment or a substitute for full-app QA.
