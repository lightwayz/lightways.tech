# Image-only story update

Six original AI-generated illustrations now accompany the existing content. The original copy, headings, links, logo, page routes, section order and interactive behaviour are preserved. Existing stylesheet rules were not edited; only a small scoped figure style was appended. Images add vertical space naturally without reorganising existing content.

## Placement

- Philosophy: human-progress.webp — people listening and developing an idea together.
- Expertise: purposeful-tools.webp — scattered planning cards becoming organised.
- What guides us: clarity-and-trust.webp — a clear yellow route through translucent panels.
- Process: think-build-evolve.webp — hands carefully refining a physical prototype.
- Lab / PADI: room-for-life.webp — time and attention for everyday life. Also reused on the dedicated PADI page.
- Contact: start-a-conversation.webp — an attentive conversation.

The existing hero artwork, yellow-path guide and operational illustration remain as they were. The privacy page does not need an image. The PADI development and availability disclosures are unchanged.

## Assets and provenance

The built-in image-generation tool created all six images. They depict illustrative subjects, not actual Lightways staff, clients, projects or a functioning PADI service. A discreet AI-generated illustration caption accompanies each image, with the PADI image explicitly labelled conceptual. No law-firm identity appears.

Original PNGs are delivered separately. The website uses local 1600×900 WebP files in public/images/story, approximately 640 KB combined, with descriptive alt text, explicit dimensions, responsive image sizing and lazy loading. No new dependencies, third-party image requests or animation were introduced. Exact prompts are saved in docs/STORY-IMAGE-PROMPTS.json.

## Review locally

Extract the latest source ZIP into a separate folder, open in WebStorm, run npm ci and npm run dev, then visit http://localhost:3000. Review the homepage and /padi at phone, tablet and desktop widths. No new publication, hosting, DNS or email change is included.

A source comparison verified that removing only the new image imports and figure calls reproduces all seven original page/section files exactly, and that the old stylesheet is unchanged. Final build results are recorded below. Visual inspection of the generated images was completed; in-page responsive browser QA remains pending because the available browser could not reach the local preview in earlier attempts.

Validation: ESLint, TypeScript, the full production webpack build and built-page checks passed. All six WebP assets were verified at 1600×900, referenced in the built homepage, and below 750 KB combined. The dedicated PADI page includes its concept image and disclosure. No changes have been published.
