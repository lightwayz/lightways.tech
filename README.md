# Lightways: eight-second opening story + expanded introduction

This focused update supersedes the earlier introduction ZIPs. It does not change your existing main headline, its description, buttons, PADI status, other sections, dependencies, package files, configuration or globals.css. It is not a complete repository.

OPENING STORY
0–2 seconds: a yellow point appears. “Behind every business challenge is a human need.”
2–4 seconds: fine paths form around it. “Work becomes complicated. Progress shouldn’t have to.”
4–6 seconds: paths compress into a clear connection. “We understand the need. Build what helps. Improve together.”
6–8 seconds: your existing LW icon resolves alongside “Lightways. Intelligent systems. Human progress.”

The sequence is an original SVG/CSS treatment. No video, WebGL, new libraries, audio, false loading percentage or network request. Skip remains fixed on screen. Escape uses native dialog dismissal. It closes automatically after eight seconds and appears once per tab session when sessionStorage is available. A new versioned session key ensures visitors can see this revised story.

System or saved reduced motion skips the automatic opening. Deep links, restored scroll, and visitors already focused on another control also skip it. With JavaScript unavailable the dialog stays closed and the complete homepage remains readable. Screen readers receive a stable title and complete story description instead of repeated changing announcements.

HOMEPAGE INTRODUCTION
The full requested three-paragraph introduction appears BEFORE the existing “We Build / Intelligent Systems / For Human Progress.” heading. Following dismissal, those paragraphs reveal with a short stagger. They are always present and readable without JavaScript, and remain static for reduced-motion visitors. The rest of your original hero remains.

INSTALL LOCALLY
1. Extract this ZIP outside your project. Do not replace your repository with this folder.
2. In your existing project, run git status --short and preserve any work before overwriting files. Back up app/components/Hero.tsx and any earlier introduction files outside the repo.
3. Copy only these three files into their matching paths under C:\Users\HP\WebstormProjects\lightways.tech:
   app/components/Hero.tsx
   app/components/experience/BrandIntroduction.tsx
   app/components/experience/brand-introduction.css
4. Run the following commands separately, stopping if any fails:

npm.cmd run build
npm.cmd run check:build
npm.cmd run dev

5. Open http://localhost:3000/ in a fresh tab. The production introduction plays once per session. The standalone preview has a Replay button for reviewing the sequence; the production website does not add this button.
6. Check Skip, Escape, keyboard focus, all four messages, completion after eight seconds, repeat visits, mobile portrait/landscape, browser zoom and reduced motion. Confirm existing sections and PADI upcoming disclosure remain intact.
7. Review locally before publishing. No GitHub update or deployment has been performed by this package.

VALIDATION
- Production compilation and TypeScript passed for this revision.
- Standalone TypeScript check and CSS parsing passed.
- Tests of actual transpiled component lifecycle/handlers with mocked browser APIs passed: 8000ms timeout, Skip clears timeout, session marking, reduced motion (system/saved), repeat session, deep link, restored scroll and active focus protection.
- Original headline/description/CTA/PADI wording retained; new copy precedes the original H1.
- Full production export remains blocked in this environment by a Windows EPERM creating .next/server/app/_global-error.segments/_global-error. There was no code/type error before that failure. Run the complete build and check:build locally before publishing.
- Actual browser/mobile visual and native dialog focus testing has not been completed here. The standalone HTML renders the actual Hero markup/styles with a small preview-only animation driver; it is a review aid, not a substitute for local Next.js QA.
