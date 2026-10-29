# Lightways logo integration

The owner-supplied image-21.jpg is preserved byte-for-byte at public/images/lightways-logo.jpg.

Header and footer: app/components/Brand.tsx displays the original image through a CSS viewport that selects the symbol. It retains the white geometry and yellow dot without editing the JPEG. The adjacent Lightways.tech text remains live text for legibility at small screen sizes.

Favicon: app/icon.svg embeds the original JPEG and uses an SVG viewport to select the symbol. Company and PADI sharing images are rendered from their existing SVG layouts with the original logo placed in them. No generated logo conversions are included; the transparent-conversion trials did not preserve clean enough edges.

Validation for this logo revision:
- Original-file hash matches the owner upload exactly.
- Logo, favicon references and sharing-image dimensions pass asset checks.
- ESLint passes. TypeScript and Webpack compilation pass during the production build attempt.
- Full production build completion is unverified for this revision: Windows returned EPERM while creating generated prerender directories. The earlier complete build pass in COMPANY-UPGRADE-REVIEW.md predates this logo revision.
- Browser visual/responsive verification remains pending under the previously recorded local-browser restrictions.

Nothing was pushed, deployed or changed in the owner's WebStorm folder.

Review this updated source in a separate folder, or use its Apply-Local-Update.ps1 helper to back up and update the existing clone as described in the README. Do not push before reviewing locally.
