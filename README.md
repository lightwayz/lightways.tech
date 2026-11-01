# Lightways.Tech

Company website for Lightways.Tech: human-centric technology, end-to-end product delivery and the planned PADI personal-assistant product.

## Run locally

Use the existing Git checkout. In PowerShell:

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd run check:build
npm.cmd run dev
```

Open http://localhost:3000/. Stop at any failing command before publishing. Use a Node.js release supported by the locked Next.js dependency. Dependencies and lockfile are unchanged in the evidence-led update.

## Pages

- `/` — company, selected work, services, approach, PADI preview and contact.
- `/work` — project index.
- `/work/energywallet-ticket-centre` — production ticketing project.
- `/work/unic-law-firm` — professional-services project.
- `/padi` — planned product; development has not started.
- `/privacy` — website data handling and external-service links.

## Project evidence

Project content lives in `lib/projects.ts`. Lightways' owner confirmed end-to-end builds and production deployment for EnergyWallet Ticket Centre and UNIC Law Firm. EnergyWallet figures supplied on 31 October 2026 are 7,400+ transactions and 15,000+ tickets handled across issuance, sales and receipt. The public pages retain a compact source/date note. No client quotations, revenue, unique-customer figures, uptime guarantees or independent security certifications are invented.

UNIC's public interface was reviewed; the EnergyWallet role, usage and security-hardening information comes from the owner. The cover panels are editorial project identities, not interface screenshots. Source notes and verification limits are in `docs/EVIDENCE-LAUNCH-REVIEW.md`.

## Experience and accessibility

The four-second first-visit welcome is mounted in the root layout. It uses a session flag and respects reduced motion. The existing looping story, transparent oscillating glass and scroll-linked section treatments remain. Narrow/short screens and reduced-motion preferences use static fallbacks. The existing “Motion & accessibility” links expose the saved preference controls.

The site renders key content before JavaScript. Contact prepares an email draft or opens WhatsApp (+234 706 192 7188); messages are sent only when the visitor chooses to send them. Google Translate links open the selected published page in an external tab. Translation is automatic; English remains the original. No paid translation API, analytics or embedded chat SDK is added.

## Architecture and checks

Next.js App Router, React and TypeScript. Development/build use webpack; the existing portable `next.config.mjs` and security headers are retained. Server-rendered project content adds no client-side data API.

`check:build` checks all six page routes, metadata, canonical URLs, landmarks, links, unique IDs, contact details, PADI disclosures, sitemap, project figures/provenance, welcome integration, privacy disclosures and security configuration. Existing enquiry, clear-path and interaction tests remain in `scripts/`.

## Update and publish

A source ZIP is not a Git checkout. Apply the supplied update into the existing repository, preserving `.git`, environment files and independent work. The backup-first PowerShell helper remains available; if script execution is disabled, follow the included manual-copy instructions rather than changing system security settings.

Review local builds, actual mobile/desktop behavior, public links and `git diff` before committing. Check the active branch and the hosting-connected production branch before pushing. Do not force-push to resolve divergent copies. Production publishing and any hosting/DNS/email changes require an explicit release decision.

## Source packaging

`node scripts/make-upgrade-manifest.mjs` regenerates the source manifest without requiring Git, including `.gitignore`. It excludes Git internals and agent-instruction files. Source deliveries exclude `.git`, `.idea`, `.next`, `node_modules`, environment files and credentials.
