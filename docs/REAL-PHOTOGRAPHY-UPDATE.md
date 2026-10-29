# Real photography update

The five generated images containing people or hands are replaced with real camera photography from Pexels. Existing figure placements, page copy, headings, logo, layout rules and interactive behaviour remain unchanged. Only StoryImage source metadata, photo files and credit captions changed for this update.

## Image placement and credits

- Philosophy: Andrea Piacquadio, photo 3860813 — people collaborating around a laptop.
- Expertise: Pavel Danilyuk, photo 7869125 — hands working on laptops with planning materials.
- Process: Thirdman, photo 7652179 — people discussing work around a laptop.
- PADI vision: Polina Tankilevitch, photo 6927559 — a person using a smartphone calculator in an everyday home setting. This is not PADI software; planning/not-launched disclosures remain visible.
- Contact: Anna Shvets, photo 4226140 — a video conversation on a laptop.

The non-human abstract clarity/trust artwork and existing yellow-path graphics remain. There are no generated people in the active story-image slots. Old unused generated people assets were removed from this source package. Earlier generated-image review packages are superseded.

## Provenance and usage

Source pages and credits are linked from the image captions and recorded in REAL-PHOTOGRAPHY-SOURCES.json. The reviewed source pages identify these as stock photography under the Pexels licence: https://www.pexels.com/license/ . The subjects are illustrative and are not presented as Lightways staff, customers or endorsers. No client name, confidential data or law-firm promotion is used.

Photos were acquired through the supported browser asset export, visually inspected, cropped to 1600×900 and compressed to local WebP files. No generative changes were made to the photographs. Images remain lazy-loaded with descriptive alt text and responsive sizing. The site makes no remote image requests. Credit links open the photographer's source page if the visitor chooses them.

## Review

Extract the latest source ZIP into a separate folder, open in WebStorm, run npm ci and npm run dev, and visit http://localhost:3000. Photo replacements appear in the existing homepage image slots and on the PADI page. Nothing has been published; hosting, DNS and email settings are untouched.

Source photographs and their final crops were visually inspected. Full in-page responsive browser review remains pending because the available browser could not reach the local development server in earlier attempts.

Validation: ESLint, TypeScript and the full production webpack build passed. Built-page checks passed for landmarks, metadata, links, unique IDs, PADI status, sitemap and configured security headers. All five real-photo replacements were verified at 1600×900 with source credits, and the superseded generated human-image files are absent from this source package. No publication was performed.
