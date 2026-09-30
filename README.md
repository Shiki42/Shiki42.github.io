# Shuyuan Hu — Research homepage

A continuous editorial homepage with a fixed forest photograph, slow mist, and clear research content. Plain HTML, CSS, and JavaScript; no Jekyll, framework, package manager, build dependency, or runtime CDN.

## Preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`.

## Edit

- `index.html`: quotation, biography, research questions, two selected publications, two open-source projects, three additional publications, news, and contact details.
- `assets/css/site.css`: typography, responsive layout, and color, fog, grain, and motion variables in `:root`.
- `assets/js/site.js`: mobile navigation, quiet reveals, capped background displacement, and the fixed pause control.
- `assets/bibliography/publications.bib`: the five researcher publication entries.
- `DESIGN.md`: visual system and reading structure.

All original researcher photographs, publication figures, and research PDFs are preserved. Display figures use exact lossless WebP. The original Evo-RLT rollout GIF is linked from a static preview, so it does not introduce uncontrolled movement. Fonts are self-hosted with their SIL Open Font Licenses. The Chinese name uses a three-character LXGW WenKai TC subset. The portrait is 150% of its previous desktop width and sits closer to the biography. Opening the native Beyond the lab disclosure switches from the original portrait to the supplied skiing photograph and reveals personal interests; closing it restores the original portrait.

The forest and three fog layers continue throughout the page. Reduced-motion mode keeps the static photograph and mist, disables movement and scrolling effects, and immediately shows all content. The pause control also freezes decorative motion. Body text and scientific figures are never blurred.

## Publish

GitHub Pages serves `main` from the repository root. `.nojekyll` makes this a static publication. Push reviewed changes to `main`; no custom deployment workflow or generated publishing branch is needed. The website is available at `https://shiki42.github.io/`.

## Validation

Validate desktop, 390px and 320px mobile layouts, and 200% text enlargement. Check navigation and Escape focus return, persistent forest atmosphere, pause and reduced motion, abstract disclosures, figure loading, local references, complete bibliography, PDF responses, and the deployed public page.
