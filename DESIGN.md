# Shuyuan Hu — a field journal in the mist

## Visual system

Clear research content sits in the quiet air of the supplied forest photograph. The photograph is the sole landscape source. Its open fog becomes the cover's negative space; the wooded slope becomes a softly masked horizon behind the following pages. No decorative stock imagery, card grid, colored section panels, or artificial landscape illustrations.

- **Palette:** pine `#0C2828`, ink `#051A1F`, forest `#1C3827`, moss `#465835`, sage `#53655D`, fog `#ABB0B5`, light fog `#C1C5CA`, paper `#EFF1EE`, earth `#74684B`.
- **Proportion:** paper and light fog dominate the long page; pine and ink carry typography; sage carries secondary text; earth is reserved for tiny editorial indices and dates.
- **Type:** locally hosted Newsreader at weight 300 for large editorial headings; DM Sans at normal weight for sharp body copy and navigation. Body copy is at least 16px. Narrow tracking for display type, open tracking only for short metadata.
- **Space:** a 12-column mental grid, a wide outer margin, offset text and imagery, a reading width of roughly 62 characters, and generous vertical pauses. The mobile layout becomes one reading column while keeping the same hierarchy.
- **Surfaces:** the page stays on fog white. Publication figures remain sharp because they communicate scientific information. A portrait is inset into the biography. Text links use a fine underline; the single cover CTA is a quiet pine rectangle.
- **Atmosphere:** three independent, diffuse CSS fog layers drift in different directions over 24–30 seconds. Only transform and a small opacity change animate. Fine static noise is added at very low opacity. Blurring is confined to background atmosphere. A subtle scroll displacement is capped at 16px.
- **Motion:** a 1000ms opacity and 12px vertical reveal, no text blur. System reduced-motion preference produces the complete static atmosphere. A persistent visitor control also pauses decorative motion. Motion stops while the page is hidden or the cover is outside the viewport.
- **Accessibility:** dark type has a stable light scrim wherever it overlaps the cover photograph; small earth-colored text uses an ink-mixed variant to maintain contrast over photographic undertones. Body links remain identifiable; keyboard focus is explicit; navigation is available without JavaScript; all decorative atmosphere is hidden from assistive technology. Minimum practical target height is 44px.

## Page structure

1. **Cover / `#top`:** name, Chinese name, current role and affiliation, a short research statement based on the existing biography, one link to selected research. A restrained masthead links to About, Research, Updates, and Contact.
2. **About / `#about`:** full existing biography, portrait, PhD search statement, research interests, education, advisor links, and personal interests.
3. **Selected research / `#research`:** three existing papers as spacious editorial rows. Preserve full titles, all authors, venues and submission/acceptance notes, figures, arXiv links, and the existing IROS manuscript PDF. Bibliography contains only the owner's three entries.
4. **Updates / `#updates`:** all four existing dated announcements, most recent first.
5. **Contact / `#contact`:** the existing email and Google Scholar profile, a calm closing crop of the forest, and a small copyright footer.

The old theme's Einstein examples, sample CV, placeholder projects, demo blog posts, theme code, dependencies, Docker files, and template workflows are removed. No fictional CV, unsupported dates, or invented academic claims are introduced. Original researcher photographs and documents are retained as content assets.

## Implementation and acceptance

Semantic static HTML, one stylesheet, and a small progressive-enhancement script. No application framework, package installation, runtime CDN, build step, or old-theme compatibility layer. GitHub Pages continues to serve the existing `gh-pages` branch, populated by a minimal static deployment workflow.

Verify the actual page in a browser at desktop and mobile widths, including a narrow 320px viewport and enlarged text. Check navigation, links, menu behavior, image loading, keyboard focus, reduced motion, lack of horizontal overflow, and readable contrast. Review the entire change before committing. Publishing remains a separate Git push, so a local commit does not silently replace the public website.
