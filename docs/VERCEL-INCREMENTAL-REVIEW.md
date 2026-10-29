# Existing Vercel website — incremental pass

> Historical note: this describes the earlier incremental pass. See COMPANY-UPGRADE-REVIEW.md for the current implementation and verification status.

Reviewed https://lightways-tech.vercel.app/ on 29 October 2026.

The live site visibly matches the original repository's hero, section copy, navigation and missing placeholder logos. This supports using original commit 1e61a8e as the baseline; the exact Vercel deployment commit has not been independently verified through its dashboard.

The earlier editorial redesign remains preserved on branch improve/company-website (af1def0). This branch, improve/existing-vercel-site, begins at the original repository and keeps its hero headline, black/yellow palette, philosophy, capabilities, process, Lab and animation-led composition.

## First incremental changes
- Corrected the home link and replaced missing navigation routes with existing section targets. The live Services link was verified to return a 404.
- Added mobile navigation with expanded/collapsed state and automatic close on selection.
- Connected hero actions to the service and contact sections.
- Removed missing customer-logo placeholders; no customer claims were invented.
- Added a clearly labelled upcoming PADI section. It states that development has not started, with Flutter and FastAPI planned and hosting undecided.
- Connected the contact action to the known GitHub profile pending a verified business email.
- Added metadata, skip navigation and visible keyboard focus.
- Kept the cinematic effects, removed the duplicate glow cursor, fixed cursor and smooth-scroll animation cleanup, disabled scroll interception for reduced-motion users and applied Framer Motion's user reduced-motion setting. Broader accessibility of animated reveals still needs work.
- Replaced the page-wide fade template with a typed pass-through so navigation does not depend on that reveal.
- Carried forward patched Next.js 16.4.3, matching lint configuration and security headers. Removed unused Firebase helper/dependencies and obsolete font package. Preserved the existing external noise asset in the image CSP allowlist.
- Google font fetching was blocked in this environment. System Arial fallback retains the baseline's CSS font family and makes the build independent of Google's network availability. Self-hosted approved font files can be added later.

## Verification and limitations
- Live homepage inspected in browser; Services navigation confirmed 404 before changes.
- Earlier redesigned draft's successful build and responsive checks do NOT validate this new branch.
- Current production build attempted: compiler child-process startup is blocked in this restricted environment. A production build and browser verification of this new branch remain required in WebStorm before any release.
- No Vercel project settings, DNS, deployment or paid services were changed. No code was pushed.

## Run this version in WebStorm
The current workspace checkout is on improve/existing-vercel-site. Open the existing work/lightways.tech directory, then run:

    npm ci
    npm run dev

For release validation:

    npm run lint
    npm run build
    npm run start

Use http://localhost:3000. The PADI section is /#padi on this incremental version; the separate /padi page belongs to the earlier design branch.

## Next increments
First validate the preserved layout across phone/tablet/desktop, resolve remaining animation accessibility and excess section spacing, then refine typography and content hierarchy while retaining the existing presentation. Add verified company contact and original LW artwork when available. SEO/social assets and measured performance checks follow. Production deployment remains subject to explicit approval.

Final static checks: ESLint passed with no errors or warnings. TypeScript was rerun after removing a stale generated route validator left by the earlier design branch; see final chat status for result.
