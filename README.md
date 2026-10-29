# Lightways.Tech

Company website built with Next.js, React and TypeScript. This update retains the existing yellow/black identity, hero headline, philosophy, expertise, process and Lab while refining the presentation and accessibility.

## Run locally

Use Node.js 22 or 24.

    npm ci
    npm run dev

Open http://localhost:3000. PADI is at /padi and privacy information is at /privacy.

## Validate

    npm run lint
    npm run build:webpack
    npm run check:build
    npm run start

Both production build commands use Webpack for compatibility with Hostinger's current Linux build environment. Configuration is in `next.config.mjs`; see `docs/PUBLISHING.md` for the platform details.

## Apply this package to an existing clone

Keep this package in a separate extracted folder. Stop any running development server. Create a working branch in your cloned repository first. From a PowerShell terminal, run the included script with the existing repository path:

    .\Apply-Local-Update.ps1 -RepositoryPath 'C:\Users\HP\WebstormProjects\lightways.tech'

The script backs up affected files beside the repository, copies managed files individually to avoid app/app nesting, and moves accidental nested folders and obsolete assets into the backup. It never copies or changes .git, .env files, node_modules, .next or Vercel settings. It does not install dependencies or run Git. Inspect it before use. If PowerShell execution policy blocks it, do not weaken system settings; use the file-by-file copy method described in docs/COMPANY-UPGRADE-REVIEW.md instead.

## Content and deployment

PADI is planned, not built or launched. Flutter/Dart and Python/FastAPI are proposed technology choices. Product scope, availability, launch timing and hosting are undecided.

Public company contact supplied by the owner: admin@lightways.tech. The owner-supplied Lightways logo is stored unchanged at public/images/lightways-logo.jpg and displayed by app/components/Brand.tsx. See docs/COMPANY-UPGRADE-REVIEW.md for verification results and remaining release gates.

No deployment, DNS changes or paid services are part of this update. A Git push can trigger Vercel deployment; obtain explicit approval before publishing.
