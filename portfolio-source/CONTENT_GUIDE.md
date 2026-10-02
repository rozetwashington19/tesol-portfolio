# Editing the portfolio

The portfolio uses React and TypeScript with a standard Next.js static export build. The output is portable across static hosts.

- `lib/portfolioData.ts`: biography, philosophy, experience, credentials, toolkit, contact details, and lesson case-study content.
- `components/portfolio.tsx`: reusable portfolio components and client interactions.
- `app/globals.css`: color tokens, typography, layouts, responsive breakpoints, and reduced-motion styles.
- `app/lessons/[slug]/page.tsx`: lesson routes and page metadata.
- `public/lessons/`: the three English-Spanish lesson PDFs.
- `public/assets/`: hero artwork and genuine page previews from those PDFs.
- `public/Rozario_Washington_Resume_ENL.pdf`: supplied résumé, unchanged.

## Content to finish

Add the LinkedIn URL when available. DASA, mandated reporter, and FERPA / Student Privacy workshops are completed, as confirmed by Rozario. Completion dates or certificates may be added if desired. Add any further professional development when available. The K–1 case study is an illustrative unit concept; it has no dedicated downloadable lesson. The high-school plan still needs its real source packet before classroom use. Standards references on case-study pages are broad WIDA framework connections, not verified grade-specific NYS mappings.

The résumé lists paraprofessional employment as “2024–Present.” The web timeline uses neutral wording because prior context indicates this role may have ended. Update the supplied résumé if needed.

## Contact behavior

The form validates required fields and creates a prefilled `mailto:` message addressed to the professional email from the résumé. The visitor reviews and sends in their email client. Nothing is sent or stored by the website. A copy-message fallback is included. No email delivery service is configured.

## Accessibility

Semantic landmarks, paired language labels, visible keyboard focus, alt text, an accessible menu and gallery dialog, responsive breakpoints, and reduced-motion rules are included. An interactive browser accessibility audit was not available during this build.

## Asset notes

The hero is original generated artwork, used as decoration. Lesson previews are rendered from the user-approved bilingual PDF lessons. Design-board reference images are not published as site content.

WIDA reference: https://wida.wisc.edu/teach/standards/eld

## Mobile layout

Explicit device-width viewport metadata preserves pinch zoom. Phone layouts use fluid headings, safe-area gutters, single-column cards, stacked and labeled English/Spanish frames, horizontal lesson-section navigation, and 44px-or-larger primary touch controls. Menus scroll on short screens. Gallery previews include a full-size image link. Inputs use a minimum 16px font and the email keyboard. Interactive phone-browser verification was unavailable in the current environment; TypeScript and production build checks are used.
