# Find your clear path — review copy

The original homepage headline, LW logo, palette, section order and PADI planning status are retained. No client reference is reintroduced. No footage, new dependency, tracking, account system or server endpoint is added. This update is local; no publishing, hosting, DNS or email changes are included.

## What changed

- Original lightweight SVG paths replace the decorative orbit graphics behind the hero. Yellow strands compress towards a clearer route as the visitor scrolls. A new hero link leads to the guide inside the existing Expertise section.
- Four native radio choices explore repetitive administration, scattered enquiries, disconnected tools and an idea that needs building. Each gives a possible approach, scoped deliverable, relevant measures and illustrative three-step route.
- The enquiry action carries the selected topic into the existing draft composer. Empty messages receive the prompt; existing message text is preserved and the visitor can explicitly append the new topic. No message is sent automatically or persisted.
- The guide is introductory content, not a business diagnosis or guaranteed outcome. PADI is not represented as implementing any of these workflows.

## Motion and accessibility

Artwork is decorative, non-focusable and excluded from assistive technology. It has no continuous animation or scroll interception. Scroll work is batched with requestAnimationFrame and paused when off-screen. System reduced motion and the saved site preference produce static artwork. Without JavaScript the vector remains visible, the initial guide content is rendered and the existing email/contact routes remain available.

The selector uses native labelled radio inputs, a fieldset, visible focus treatment, an announced summary and a labelled result region. One-column layouts apply on smaller screens. Enquiry panels retain native modal behaviour and focus return.

## Review checklist

1. At desktop, tablet and phone widths, confirm hero readability, no horizontal overflow and usable choice labels.
2. Scroll from the hero and check the gentle change in the yellow strands. Repeat with system reduced motion and saved reduced motion.
3. Tab into the choices and use arrow keys to select all four. Confirm the approach, deliverable, measures and route change together.
4. Open an enquiry from each choice; confirm the selected topic appears in an empty message and remains editable.
5. Write an unsent message, close the dialog, change starting point and reopen. Confirm the previous message is preserved and the optional append action names the new topic. Test the 5,000-character limit.
6. Prepare a draft, verify that it contains the chosen context, then close with Escape and confirm focus returns to the originating button.

Run `npm ci`, then `npm run dev` in a separate extracted folder. Open http://localhost:3000 and use “Find your clear path” in the hero. Before publishing, run `npm run build`, `npm run check:build`, `npm run test:clear-path` and `npm run test:enquiry`. The draft tests require Node with TypeScript stripping support (22.6+).

## Verification record

Changed components passed ESLint. The production build and TypeScript passed on the initial check. After a small clarification to the existing-message notice, the final repeat build compiled and passed TypeScript, but failed prerendering `/privacy` with the recurring local Windows EPERM directory-creation error. Final full-build verification is therefore pending on a machine without that filesystem restriction. Tests verified that every choice produces a valid, correctly encoded email draft retaining its selected topic, and that invalid selections are rejected. Existing enquiry validation and long-message fallback tests passed. Interactive browser QA was attempted against the isolated local preview on port 3100 but the browser reported a connection timeout; visual, touch, keyboard and reduced-motion behaviour require the local review above. The temporary development server was stopped after this attempt.
