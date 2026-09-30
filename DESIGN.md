# Shuyuan Hu — a continuous research journal in the mist

The supplied forest photograph is a single fixed background behind the entire page. Three diffuse fog layers drift slowly across it. A stable translucent fog-white veil protects sharp text while preserving the forest’s presence. Identity, research questions, biography, papers, and projects share this atmosphere. The opening has no full-screen cover or separate About chapter.

## Visual system

- Palette: pine `#0C2828`, ink `#051A1F`, forest `#1C3827`, moss `#465835`, sage `#53655D`, fog `#ABB0B5`, light fog `#C1C5CA`, paper `#EFF1EE`, earth `#74684B`. Secondary and earth text mix with ink or pine for contrast over the photograph.
- Typography: locally hosted Newsreader at weight 300 for display type and the Gibson quotation; system PingFang SC at weight 300 and 0.24em letter spacing for the Chinese name; DM Sans for clear body text, questions, navigation, authors, and metadata. No text is blurred.
- Composition: a compact masthead, quotation with attribution above the name, and introduction beside the portrait. Both research questions appear immediately. Education and prior research continue in the same column.
- Content: editorial image-and-text rows for five papers and two open-source projects. Selected research contains CTR and the IROS paper; the other three papers follow Open source. Full authors, collaborator links, submission notes, PDFs, abstracts, and project descriptions are preserved.
- Motion: 24–30s fog drift, a 16px cap on background scroll displacement, and a subtle 1000ms content reveal. Fog continues throughout the page. A fixed pause control stops decorative motion; motion also stops while the document is hidden.
- Accessibility: readable links, explicit keyboard focus, useful figure alternatives, native abstract disclosure controls, and one mobile reading column. Reduced-motion mode retains static mist and shows all content. Project rollout animation opens only through a deliberate link; its in-page preview is static.
- Texture: extremely fine, static film grain. Research figures use exact lossless WebP, preserving scientific information. Original PNGs and PDFs remain available.

## Reading order

1. Introduction (`#about`): the user-provided William Gibson quotation, name and Chinese name, role and MINT Lab affiliation, both current research questions, education, a larger portrait closer to the biography that switches to the skiing photograph when personal interests expand, and larger Google Scholar and GitHub links below the biography.
2. Selected research (`#research`): CTR and human-aware multi-robot handover. Each venue and status appears once above its title.
3. Open source (`#open-source`): Evo-RL (Core Contributor) and Evo-RLT (Project Lead), with descriptions, previews, repository links, and the Evo-RLT rollout demo.
4. More research (`#more-research`): Evo-RL, Gen2Real, and explainable medical-code prediction, followed by the bibliography download.
5. Updates (`#updates`): all four existing dated announcements.
6. Contact (`#contact`): email and copyright on the same forest background.

## Implementation and publishing

Semantic static HTML, one stylesheet, and a small progressive-enhancement script. No theme, framework, package manager, build step, runtime font CDN, or old-theme compatibility layer. GitHub Pages reads `main` directly with `.nojekyll`. The obsolete generated `gh-pages` branch and theme publishing workflow are removed after successful deployment.

Validate desktop and mobile layouts, including 320px and 200% text enlargement. Check the fixed background during scrolling, both questions before education, five complete papers and two projects, image and PDF loading, abstract disclosures, pause and reduced motion, and absence of horizontal overflow. Review before committing and verify the public site after publishing.
