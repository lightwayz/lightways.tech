# Interaction upgrade — review before publishing

Scope confirmed by owner: interactions only; keep current pages, brand, homepage headlines, section order and PADI planning status.

The public Park & Battery website was reviewed for common interaction patterns. No reference copy, images, videos, client logos, testimonials or proprietary product features were imported.

| Pattern | Lightways implementation |
| --- | --- |
| Expanded navigation | Menu on desktop and mobile, existing page/section links, Escape and keyboard focus loop |
| Carousel | Existing Lightways principles inside expanded menu; arrow controls, keyboard and touch scrolling |
| Editorial motion | Visible-by-default section movement, hover feedback, reading progress and back-to-top |
| Media viewer | Native modal with original Lightways logo and existing company/PADI artwork; previous/next and keyboard controls |
| Contact form | Validated local draft composer, preview, copy and email-app handoff; no automatic sending or saved enquiry data |
| Preferences | Saved reduced-motion choice, device preference always respected; no optional trackers introduced |
| Video backgrounds / project video | Requires owner-supplied licensed media; no video copied or placeholder player added |
| Client testimonials, awards, project metrics | Requires verified company material; no invented evidence |
| Work, news, careers, pagination, case-study navigation | Additional pages excluded by owner’s interactions-only choice |
| Proprietary WOPR product | Not copied; PADI remains explicitly planned |

Reference: https://parkandbattery.com/ and its public contact, work and case-study pages. This is an adapted interaction set, not a claim of complete feature parity.

## Review checklist

- At 390, 768 and 1280 CSS pixels: menu scrolls without clipping; form uses one column on phones; artwork fits the viewport.
- Keyboard: menu Tab/Shift+Tab loop, Escape, links; native dialog Escape/close and focus return; carousel arrows/Home/End.
- Touch: swipe principle slides and use artwork controls.
- Motion: OS reduced motion and saved preference suppress movement; reload retains only the motion preference.
- Enquiry: required fields, invalid email, draft preview, editing invalidates stale draft, copy unavailable, long-message copy-first instructions, email-app handoff. Nothing should claim an email was sent.
- No new tracking, external media requests, dependencies or server endpoints.

Automated validation is recorded with the source package. Local interactive browser verification is pending because the available browser cannot reach this workspace’s local server. Keep this branch unpublished until the owner reviews it locally or in an explicitly authorized preview deployment.

Validation: ESLint and TypeScript passed. An initial full production webpack build and built-route checks passed for the homepage, PADI and privacy, including metadata, internal links, unique IDs, sitemap and security headers. After final responsive CSS adjustments, repeat builds compiled and passed TypeScript but failed during prerendering with intermittent local Windows EPERM errors creating `.next/server/app/* .segments` subfolders (including PADI and Next’s error pages). Final full-build validation therefore remains pending on an unrestricted local machine. Enquiry tests passed for validation, URL encoding, header isolation and long-draft fallback. The draft test uses Node’s TypeScript stripping support (Node 22.6+).

## Run in WebStorm

Extract the source ZIP into a separate folder. Open it in WebStorm, run `npm ci`, then `npm run dev`. Visit http://localhost:3000. Use a separate folder to preserve the current clone and local changes. Build with `npm run build` and verify with `npm run check:build`.

The existing Hostinger-compatible Next configuration is retained. Publishing is not part of this package; GitHub main triggers live hosting updates. No domain or email settings are changed.
