# Live GitHub Pages portfolio

Live website: https://rozetwashington19.github.io/tesol-portfolio/

The repository root contains the ready-built website. GitHub Pages publishes `main` from the root folder. `.nojekyll` allows the `_next` asset folder to be served correctly. Existing lesson files remain at their original paths.

## Editable source

`portfolio-source/` contains the React, TypeScript, and Next.js source. The editable portfolio content is in `portfolio-source/lib/portfolioData.ts`.

To publish a source update:

1. Install Node.js 22.13 or newer.
2. In `portfolio-source`, run `npm install`.
3. Run `node publish-build.mjs`. This builds with `/tesol-portfolio` as the URL path and copies the finished website into the repository root.
4. Commit and push the updated source and generated files to `main`.
5. Wait for the GitHub Pages build and deployment workflow to succeed.

Old lesson PDFs are preserved. Older generated asset files can be removed later once the new deployment is confirmed; they are deliberately not deleted by the publishing script.

## Restore the previous site

The branch `backup-before-portfolio-redesign-2026-10-01` preserves the previous website. Git history also records all changes.

## Contact and content

The contact form opens the visitor's email app. No server sends mail. The PDF resume is the one from the original site build, not a separately refined resume. See `portfolio-source/CONTENT_GUIDE.md` for content notes.
