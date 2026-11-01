# Evidence-led release review — 31 October 2026

## Source and scope
Built from the user's lightways.tech.zip, supplied 31 October 2026. Git history, .idea, .next, node_modules and environment files were excluded from the extracted source and deliverables. The original ZIP is unchanged. Existing design, welcome styling, glass movement, scroll features, language selector, public business contact and PADI planned-product status are retained.

## Project evidence
Two named projects are sufficient for this release. A third can be added when an equally concrete project is ready; no empty testimonial carousel or invented client count is added.

- EnergyWallet Ticket Centre: https://tickets.energywalletng.com/
- UNIC Law Firm: https://www.uniclawfirm.com/

The human user confirmed that they built the projects from scratch through production. They confirmed permission to name UNIC Law Firm, superseding the previous anonymisation restriction. They described prior EnergyWallet security-hardening work. These are first-party project statements, not independently audited attestations. No penetration-test certificate, performance benchmark, uptime guarantee or successful-payment total is claimed.

EnergyWallet figures supplied by the human user on 31 October 2026:
- More than 7,400 transactions.
- The initially ambiguous ticket figure was clarified to more than 15,000 tickets across issuance, sales and receipt.

Public wording uses “7,400+ transactions” and “15,000+ tickets handled”, with a compact source/date note. It does not convert ticket activity into unique attendees, unique customers, revenue or success rates. Do not sum the two counts. Update the source/date when replacing these figures.

UNIC's public homepage was read through the web tool on 31 October 2026. Its services and described case-selection/document/progress journey inform the project description. No private client data, client legal results or placeholder judgments are reproduced. EnergyWallet's public page could not be retrieved by the web tool, and the historical EnergyWallet ZIP was not available in this workspace; its descriptions and usage/hardening statements rely on the human user's account. The live link is provided for review, without a fabricated screenshot or simulated product interface. Editorial project-identity panels are Lightways design assets, not screenshots.

## Implementation
- Added selected-work section after the hero; dedicated /work index and two explicit static project pages.
- Added Work links to desktop/mobile/footer navigation and a production-project link near the existing main hero actions.
- Added shared project data, server-rendered cards and case pages. No new dependencies or third-party scripts.
- Expanded sitemap and translation-route allowlist for all three project routes. English remains original; translation is the existing external Google Translate flow.
- Mounted the four-second FirstOpening component in the root layout, fixing the confirmed missing integration in the uploaded ZIP.
- Updated privacy content for session storage, external project links, WhatsApp and Google Translate.
- Relabelled existing preference links “Motion & accessibility”; no new Pause/Resume control was added to the introduction or glass.
- Fixed upgrade-manifest generation for source ZIPs without Git, including .gitignore explicitly.
- Expanded built-page verification to cover all six page routes and project evidence contracts.

## Release review
Run build/check:build and existing enquiry/clear-path tests before packaging. Check all three new project routes, mobile/desktop navigation, canonical URLs, public links, enquiry focus handling, translation and upcoming PADI language. Test the first welcome in a new tab, motion preferences and glass/scroll behaviour in an actual browser. Do not interpret passing builds as a security certification, mobile performance score or proof that the external products' authenticated flows were tested.

No GitHub push, production deployment, DNS change, hosting change or paid service is authorised by this source package. Those remain separate release actions after local review.

## Final verification record

- PASS: TypeScript (`tsc --noEmit`) and project stylesheet parsing.
- PASS: `node scripts/test-project-pages.mjs`, rendering the actual root layout and all six page components, checking H1/landmarks, IDs, canonical configuration, approved contact, two project names, corrected figures/provenance, PADI planning status, privacy disclosures, project translation routes and four-second welcome integration.
- PASS: existing enquiry, clear-path, human-signal, service-channel, workflow and Potadot-pattern interaction tests.
- PASS: all ten language choices on all six published page routes; source URLs exclude drafts, queries and local addresses.
- PASS: source-manifest generation without Git and explicit .gitignore inclusion.
- LIMIT: normal Next.js builds hit Windows EPERM creating .next/server/app/work. A temporary local build-worker workaround allowed webpack compilation and TypeScript to finish, but page export still hit Windows EPERM in PADI/not-found output. The temporary settings were removed and next.config.mjs restored to its original uploaded bytes. A complete production export and check:build are therefore NOT claimed as passed for this release.
- PENDING: normal `npm.cmd run build` then `npm.cmd run check:build` on the user's machine, real-browser/mobile/keyboard review, deployment performance measurements, external EnergyWallet authenticated behavior and independent security review.

Do not publish until the normal local build and checks pass. No production configuration workaround is shipped. The ZIP does not contain Git metadata, build output, dependencies or environment files.
