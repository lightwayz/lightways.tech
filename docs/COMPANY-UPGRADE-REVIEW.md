# Lightways.Tech — Company website upgrade review

Hosting compatibility update: see PUBLISHING.md. Both production build commands now use Webpack and the configuration file is next.config.mjs. Historical build notes below describe the earlier review stages.

Latest logo revision: see LOGO-UPDATE.md for current asset and validation details. The complete production-build pass below predates that revision; its rerun encountered generated-directory permissions.

Prepared 29 October 2026. Local branch: improve/company-polish.

## Starting point and what was preserved

The supplied lightways.tech.zip was inspected and its source extracted into a separate working audit folder. It contains the same original company sections and dependency lockfile as this project, plus accidental app/app and lib/lib copies. The nested copies hold earlier improvements, while older files remain active at the root. The review checkout normalizes this structure without modifying the user's original ZIP or WebStorm folder.

The original black/yellow identity, “We Build Intelligent Systems For Human Progress” headline, philosophy, expertise, Think/Design/Build/Evolve process and Lightways Lab remain the foundation. The earlier alternative editorial redesign is not the basis for this package. The new work refines the existing presentation and content hierarchy.

## What changed

- Consistent dark surfaces, signature #FFD700 yellow, balanced typography, intentional spacing and a cohesive navigation/footer system.
- Lightweight CSS gold light artwork retains a cinematic feel. Content does not wait for animation or JavaScript to become visible. Forced scrolling, cursor replacement, external noise requests, blocking intro and repeated animation layers are no longer active.
- Clear company philosophy, substantive expertise descriptions, operating principles and a readable four-stage approach. Removed broken placeholder customer logos; no testimonials, client names, statistics or case studies were invented.
- Flagship PADI section and dedicated /padi page, with an expandable FAQ and an honest status summary. Owner-confirmed vision: personal assistance intended to reduce everyday workload. No claims that it can already do anything, run continuously or offer a guaranteed service.
- PADI has not been built or launched. Flutter/Dart and Python/FastAPI are planned. Features, launch date, reliability commitments and hosting remain undecided.
- Owner-supplied admin@lightways.tech contact, working email links and GitHub profile. No unconnected forms, fake success messages, waitlists or personal-data collection were added. Mailbox deliverability was not tested and no messages were sent.
- Accessible landmarks, one H1 per page, visible focus, a skip link, native expandable mobile menu/FAQ, Escape handling for the menu, reduced-motion handling, responsive layouts and print styles. The owner-supplied white Lightways monogram and yellow dot are displayed from the original JPEG in the header/footer and used in the favicon and sharing images. The JPEG is preserved byte-for-byte; CSS/SVG viewports select the symbol without altering the source.
- Home, PADI, privacy information and useful 404 page. Titles, descriptions, canonical links, sitemap, robots, company/website structured data and dedicated company/PADI share images. Product software schema and launch claims were intentionally omitted.
- Production security headers: frame protection, content-type protection, referrer/permissions policies and a baseline CSP. Production does not allow unsafe-eval or remote assets; the Next.js development server has the extra local allowances it requires. Inline scripts/styles remain allowed for static Next.js rendering. A nonce-based CSP would require a separate rendering decision. HSTS is deferred until HTTPS/domain/subdomain readiness is verified.
- Added build verification and a backup-first local update helper to prevent the previous nested-folder copy problem.

## Verification

The final test results are listed below and in the delivered chat response. The production build uses Next.js's supported Webpack option (`npm run build:webpack`) because the default Turbopack compiler could not start its CSS worker in this environment. The standard build command remains available; no hosting configuration was changed.

- Production Webpack build and TypeScript: PASS on the final code. Windows generated-cache directory permissions caused two intervening prerender failures; the complete final retry passed. No application settings were weakened to obtain the result.
- ESLint: PASS with no errors or warnings on the final code.
- Built-page verification covers internal routes and anchors, unique IDs, main landmarks, one H1, descriptions/canonicals, approved contact email, removal of placeholder logos, PADI's status/stack, sitemap entries, share-image dimensions, reduced-motion CSS and production security-header configuration.
- Update helper tested against an isolated fixture: correct file placement, old-file backup, accidental nested-folder retirement, and preservation of Git/environment files all passed. The user's actual WebStorm folder was not modified.
- Dependency lockfile and versions remain unchanged from the previously scanned set. That earlier scan reported zero known vulnerabilities. A fresh network-backed vulnerability scan was not performed in this restricted session.

### Browser and performance limits

The production preview server started, but localhost requests were blocked in this environment. Browser security policy also rejected file:// preview access and prohibits bypassing it. Therefore this branch has NOT been visually verified in a browser at desktop, tablet or phone widths, and its client-side menu enhancement has NOT been browser-tested. No Lighthouse score, Core Web Vitals score, accessibility certification or security penetration test is claimed.

A self-contained static design preview is included separately for manual inspection. It is generated from the built HTML/CSS and excludes application JavaScript. Its native details menus/FAQs can open, but it is not a hydration or application-runtime test; full menu close/Escape behavior belongs to the actual app. Open index.html after extracting the design-preview ZIP.

The active company content is server-rendered. Only the small mobile-menu enhancement needs custom client JavaScript. Third-party animation, WebGL and scrolling packages retained from the original repository are not imported by active pages. Those legacy components remain in source for reference; a later dependency/component cleanup can remove them separately.

## Review in WebStorm before applying

1. Extract lightways-company-upgrade-source.zip into a NEW folder, separate from your clone. Do not overwrite your working repository as part of extraction.
2. Open that folder in WebStorm. Run `npm ci`, then `npm run dev` and open http://localhost:3000.
3. Review /, /padi and /privacy at 320, 390, 768, 1024 and 1440 widths. Check long lines, touch targets, keyboard order, skip navigation, native menu and FAQs. Test 200% zoom and reduced motion.
4. Run `npm run lint`, `npm run build:webpack`, `npm run check:build`. The last command needs a completed build.
5. Review the owner-supplied Lightways logo at desktop/mobile and favicon sizes before release. Confirm public copy, the working business mailbox and the primary canonical domain.

## Apply to the Git clone after reviewing

Stop your running dev server. In the existing clone, create a working branch:

    git switch -c improve/company-polish

If that exact branch already exists, switch to it without -c. Keep your original folder and any unrelated changes.

From the separately extracted upgrade folder, run:

    .\Apply-Local-Update.ps1 -RepositoryPath 'C:\Users\HP\WebstormProjects\lightways.tech'

The helper backs up all affected existing files in a timestamped sibling folder, copies managed files one by one, and moves obsolete Firebase/favicon files plus accidental app/app and lib/lib folders into the backup. It preserves .git, .env files, node_modules, .next and Vercel settings. It runs no Git, dependency installation, deployment or network commands. Original managed files are copied into their same relative paths in the backup; retired items are under backup/retired/. New files created by the upgrade have no prior backup version. Keep that backup until the upgrade is committed and reviewed.

If script execution is blocked by PowerShell, do not weaken your system's execution policy. Use File Explorer: copy the CONTENTS of app, lib, docs, scripts and public into their matching folders, replacing files; copy the root configuration/package files individually. Move accidental app/app and lib/lib directories, lib/firebase.ts and app/favicon.ico into your own backup folder. Never copy .git, .env files, node_modules or .next. This contents-based copy avoids nesting folders inside themselves.

Then open the cloned folder in WebStorm and run:

    git status
    npm ci
    npm run dev

Do not push yet. A push can trigger a Vercel deployment.

## Hosting and release decisions

No deployment, DNS, Hostinger/Vercel settings or paid services were changed. Existing Vercel deployment remains the comparison baseline. Canonicals target the intended company domain https://lightways.tech; verify that domain serves the approved production website before publishing.

Hostinger's previously checked documentation lists Business-plan Node.js/Next.js support, but the actual account's features and limits still need read-only confirmation. Moving hosts is not required to review this work and has not been proposed as part of the update. PADI's future FastAPI hosting is a separate decision.

Before production approval, complete manual browser/accessibility and performance tests, verify links/metadata on the chosen production hostname, approve the company copy and logo display, check HTTPS and the hosting rollback procedure, then explicitly approve deployment. The privacy page describes this website build and is not a complete jurisdiction-specific legal assessment.

## Final validation results

- Production build: PASS via npm run build:webpack. Home, PADI, privacy, icon, robots and sitemap are prerendered.
- TypeScript: PASS as part of the final production build.
- Built-page checks: PASS for all three public pages and the supporting metadata/security assertions.
- Lint: PASS with no errors or warnings.
- Update-helper fixture checks: PASS; originals backed up and Git/environment files preserved. Managed paths are normalized and deduplicated before file copying.
- Built CSS: approximately 35.8 KB raw / 8.6 KB gzip. Homepage HTML approximately 39 KB raw / 7.4 KB gzip. These are asset sizes, not measured loading speed or Core Web Vitals.
- Browser/responsive/interactive checks: NOT VERIFIED because local server access and file preview navigation are blocked by the environment/browser policy.
