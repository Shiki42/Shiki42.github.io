# Shuyuan Hu — Research homepage

A quiet editorial homepage built around the supplied forest photograph. Plain HTML, CSS, and JavaScript; no framework, package manager, Jekyll, or build dependency.

## Preview

From this repository:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`.

## Edit

- `index.html`: biography, publications, news, and contact details. Content is readable without JavaScript.
- `assets/css/site.css`: the complete visual system. All palette, fog, grain, and motion parameters live in `:root`.
- `assets/js/site.js`: mobile navigation, slow reveals, capped scroll displacement, and the atmosphere pause control.
- `assets/bibliography/publications.bib`: the three original researcher publication entries.
- `DESIGN.md`: visual direction, structure, and acceptance criteria.

The original portrait photographs, three research figures, and both research PDFs are preserved. The forest has desktop and mobile WebP encodings; research figures use lossless WebP for display. Fonts are hosted locally with their SIL Open Font Licenses. There are no runtime requests to a font CDN or analytics service.

Reduced-motion mode retains the photograph and static mist, disables drifting and scrolling effects, and immediately exposes all content. The pause control also freezes the atmosphere. Decorative animation pauses when the cover leaves the viewport or the document is hidden. Body text and research figures are never blurred.

## Validation

Checked in the browser at 1440px, 390px, and 320px. At 320px with text enlarged to 200%, content has no horizontal overflow. Mobile navigation, Escape focus return, chapter links, the atmosphere pause control, the 404 page, image loading, and browser error logs were checked. Reduced-motion initialization and the static CSS rules were checked with an isolated preference simulation. Local asset paths, anchor IDs, PDF responses, bibliography entries, JavaScript syntax, and deployment YAML were validated. The three display figures preserve their original RGBA pixels; original photographs and PDFs retain their checksums.

## Publish

The repository's existing GitHub Pages configuration serves `gh-pages`. A push to `main` runs the small static publishing workflow and replaces its generated contents. Only the HTML, metadata, `.nojekyll`, and `assets/` directory are published. Documentation and repository files are excluded.

This redesign lives on `codex/mist-journal` until it is merged into `main`. A local commit alone does not update the public site.
