# One human image and two focused enhancements

Owner requested keeping the existing website while consolidating human imagery and adapting one or two interactions from https://yeahright.co/ and https://www.dopaminestudio.io/ . This update supersedes the earlier multi-photo and generated-people packages.

## Image change

One real people-and-technology photograph remains: Andrea Piacquadio / Pexels photo 3860813, in the existing philosophy section. Its source credit stays visible. The other human photo figures and unused corresponding assets were removed from Expertise, Process, Lab/PADI and Contact. The abstract clarity/trust illustration, operational artwork, LW logo and existing hero graphics remain. The selected photograph illustrates human collaboration; it is not presented as Lightways staff or a customer.

## Two interactions

1. **Numbered service channels.** Yeah Right’s selected-work section was inspected in the browser: numbered channels, previous/next controls and keyboard instructions. The Lightways adaptation enhances the existing Find your clear path guide with those navigation patterns. All four existing choices, descriptions, delivery scopes, measures and enquiry handoffs remain. Previous/next wraps; selecting a number or the original radio synchronises both controls. Arrow and number shortcuts work only when the result panel itself is focused, without intercepting typing or modified shortcuts.
2. **Pointer-following service spotlights.** Dopamine’s official effects catalogue documents spotlight-style card interactions: https://www.dopaminestudio.io/free-webflow-effects . The original Lightways implementation adds a restrained yellow highlight behind the three existing paid-service cards. The card content and layout markup are preserved. It runs only for mouse/fine-pointer hover, batches updates through requestAnimationFrame, clears on exit and cleans up on unmount. System/site reduced motion disables it, and touch remains a normal static experience. The effect carries no essential information.

Reference interaction patterns were adapted with original code; no reference branding, text, media assets or source code was copied. No new dependencies, trackers, audio, loading gate, server endpoints or paid service are introduced.

## Preserved

Company copy, page order, section headings, brand colours, hero, service descriptions, PADI planning disclosures, enquiry composer, responsive layouts and existing navigation remain. Only the requested photo consolidation, the two interactions and their small control labels/styles are added. No publishing, hosting, DNS or email changes are included.

## Review locally

Extract the source ZIP into a separate folder. Run `npm ci` and `npm run dev`, then visit http://localhost:3000. The single photograph is in Our Philosophy. Use Find your clear path to try the numbered channels. Hover the three paid-service offers below it to inspect the spotlight.

- At phone, tablet and desktop widths, check the channel controls fit without horizontal scrolling.
- Tab to the result panel: use left/right and keys 1–4. Tab into its controls and check normal keyboard behaviour, focus visibility and enquiry opening.
- Select from the original radios; confirm numbers, content and prepared enquiry topic stay aligned.
- Compare mouse hover with touch, system reduced motion and saved reduced motion. Ensure the spotlight clears when leaving a card or changing preference.
- Confirm exactly one human image on the homepage and no human photographs on PADI. No implication of a launched product or quantified result is introduced.

Validation results are recorded below. Local browser access was unavailable in earlier attempts, so visual, real focus and touch verification remain pending on the user’s local preview.

Validation: ESLint, TypeScript and the full production webpack build passed. Built-page checks passed for metadata, links, landmarks, unique IDs, PADI status, sitemap and configured security headers. Component event tests passed for previous/next wraparound, all numbered channels, radio synchronisation, focused-panel shortcuts, ignored nested/modified shortcuts and enquiry-topic handoff. A source comparison verified the original company copy and section structure are unchanged outside the requested figures and spotlight wrapper. The built homepage includes one human photograph and channel controls; PADI has none. In-page visual, real keyboard focus, touch and pointer-effect review remain pending on the local preview.
