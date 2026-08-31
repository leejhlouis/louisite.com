---
target: homepage
total_score: 17
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-29T09-39-35Z
slug: src-app-main-page-tsx
---
Method: dual-agent (A: /root/design_review · B: /root/detector_evidence)

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 2/4 | Active navigation is visible, but theme state and mobile-menu expansion are not announced clearly. |
| 2 | Match System / Real World | 3/4 | The role and calls to action are plain, while the project evidence leans on unexplained framework names and icon glyphs. |
| 3 | User Control and Freedom | 2/4 | Routes are easy to leave, but the mobile disclosure lacks Escape dismissal, outside-click dismissal, and an exposed expanded state. |
| 4 | Consistency and Standards | 3/4 | Color, typography, geometry, and themes are cohesive; icon-only actions and duplicate back-to-top patterns weaken consistency. |
| 5 | Error Prevention | 3/4 | This is a low-risk static surface, but stale or insecure live-project links are not visibly qualified. |
| 6 | Recognition Rather Than Recall | 2/4 | Navigation is labeled; project, social, and contact actions rely visually on glyph recognition. |
| 7 | Flexibility and Efficiency | n/a | Accelerators are not material to this portfolio surface. |
| 8 | Aesthetic and Minimalist Design | 2/4 | The hero is focused, but nine equally weighted featured cards flatten hierarchy and produce a repetitive catalog. |
| 9 | Error Recovery | n/a | The homepage has no meaningful error-producing task. |
| 10 | Help and Documentation | n/a | Contextual help is not expected on this Experience surface. |
| **Total** |  | **17/28** | **Acceptable (61%)** |

## Design Specificity Verdict

**Partially authored, but still category-interchangeable.** The LOUI**SITE** wordmark, warm-violet dual theme, balanced frontend/backend statement, animated headline, and system-map illustration create a coherent identity. Beneath that layer, the structure is the standard developer-portfolio sequence: claim, two calls to action, social icons, then a uniform repository-card grid.

The biggest missed opportunity is Experience-mode authorship: the work does not lead. Visitors meet a claim and an abstract illustration before they meet evidence. When the evidence arrives, nine equally weighted cards mix a portfolio rebuild, coursework, internship work, community projects, and small applications without communicating Louis's exact role, constraints, technical decisions, or why each item represents his current strengths.

**LLM assessment:** the identity system is coherent, but the project presentation does not yet make a deliberate argument for Louis specifically. The homepage says “web interfaces and backend systems,” while the first visible evidence is largely stack badges and interface-oriented project summaries.

**Deterministic scan:** the scoped CLI detector returned a clean result: **0 findings** across `src/app/(main)/page.tsx`, `src/components/sections/Hero.tsx`, and `src/components/sections/FeaturedProjects.tsx`. That result is accurate for its rule set but narrow; it does not cover indirectly imported navigation, project-card, theme, motion, or layout components where the design review found important issues. There were no detector false positives.

**Visual overlays:** no reliable user-visible overlay is available. The in-app browser blocked the mutable `javascript:` preflight, so no script was injected and the overlay server was correctly not started. The fallback evidence was fresh-tab inspection, DOM snapshots, computed layout/style checks, and desktop/mobile screenshots in both themes. Those checks found no horizontal overflow at 1440×900 or 390×844.

## Overall Impression

This is a polished foundation with a clearer identity than most developer portfolios, but it currently behaves more like a well-themed repository catalog than an edited body of work. The single biggest opportunity is to turn “Featured projects” into a selective, evidence-rich narrative that proves the hero's positioning.

## What's Working

- **Positioning is immediate and balanced.** “Web interfaces and backend systems” explains Louis's range in one scan, and “Spring Boot and Next.js” makes it concrete without reproducing a résumé.
- **The theme system is cohesive.** Desktop/mobile and light/dark preserve hierarchy and geometry, violet consistently signals interaction, visible focus styling exists, and no horizontal overflow appeared in the inspected viewports.
- **Claims stay grounded.** Source and live links provide real inspection paths, card actions have descriptive accessible names, and the copy avoids invented outcomes.

## Cognitive Load

**Moderate: 3 of 8 checklist failures.**

- **Chunking fails:** nine projects appear as one equal-status featured set instead of a primary body of two to four representative pieces.
- **Minimal choices fails:** the desktop hero exposes roughly eleven actions before the visitor has seen work; the project section then exposes sixteen card links plus “More projects.”
- **Progressive disclosure fails:** descriptions, stacks, and source/live actions for all nine projects are expanded at once.

Single focus, grouping, basic hierarchy, one-thing-at-a-time flow, and working-memory continuity are otherwise sound.

## Emotional Journey

The opening is the peak: approachable greeting, confident role statement, recognizable employer, and balanced technical positioning. Trust then drops in the project section, where repeated cards, emoji thumbnails, and course-derived work make the presentation feel less senior precisely where evidence should intensify confidence. The ending is another valley: repeated navigation and “Made with love” do not convert accumulated interest into a clear professional next step. The peak-end rule is working against the site's contact goal.

## Priority Issues

### [P1] “Featured” does not express a professional evidence hierarchy

**Why it matters:** Nine equal cards dilute the strongest work and place coursework beside professional or community contributions without distinction. A screening visitor cannot tell what best proves current engineering ability.

**Fix:** Keep three representative cases on the homepage: one professional-system story, one strong frontend artifact, and one backend/full-stack or leadership artifact. Give them distinct editorial weight. State Louis's role, the problem, one meaningful technical decision, and verifiable proof; move the remainder to the project archive.

**Suggested command:** `$impeccable distill homepage projects`

### [P1] The work is described but not experienced

**Why it matters:** An Experience surface should let artifacts lead. Emoji, generic descriptions, and technology badges cannot communicate interface craft, system complexity, or Louis's point of view. The abstract system map is atmosphere, not proof.

**Fix:** Put a real representative artifact in or immediately after the first viewport: a product screenshot, architecture excerpt, code/output detail, or case-study composition. Replace the uniform card wall with two or three varied project narratives while retaining source/live proof.

**Suggested command:** `$impeccable shape featured work`

### [P1] Mobile and accessibility details reduce interaction confidence

**Why it matters:** Project source/live controls are 32×32px rather than a comfortable 44×44px touch target. The mobile menu does not expose `aria-expanded`, and inspection found no Escape dismissal. The headline's JavaScript gradient interval can continue even when CSS motion durations collapse under reduced motion.

**Fix:** Make card actions at least 44×44px and add visible “Source” and “Live” labels where space allows. Implement the navigation as a proper disclosure with `aria-expanded`, `aria-controls`, Escape/outside-click dismissal, and focus return. Disable the highlight interval when `prefers-reduced-motion` is active.

**Suggested command:** `$impeccable audit homepage`

### [P2] The page lacks a strong professional close

**Why it matters:** Contact is a core product outcome, but email is visually reduced to an icon and the footer repeats navigation. After a long project list, the site does not turn confidence into action.

**Fix:** End with a concise first-person contact block: what conversations Louis welcomes, a labeled “Email me” primary action, and secondary LinkedIn/GitHub links. Keep every statement factual.

**Suggested command:** `$impeccable clarify homepage ending`

### [P2] The light theme does not fully express the documented warm-neutral system

**Why it matters:** Browser inspection computed a light body background of `rgb(226, 232, 240)`, which reads cool slate rather than the documented warm canvas `#f6f3ed`. The dark theme feels more intentional, and the implementation's outer body colors are not using the semantic canvas roles consistently.

**Fix:** Drive the outer page, project surfaces, borders, and muted text from the documented semantic tokens. Preserve the violet-only signal rule and verify contrast instead of compensating with heavier shadows.

**Suggested command:** `$impeccable colorize homepage`

## Persona Red Flags

### Jordan — first-time evaluator

- The first five seconds explain Louis's role but not which project proves it.
- “Spring Boot,” “Next.js,” and technology badges dominate without explaining contribution or value.
- Source, live, social, and contact actions are visually icon-only, so Jordan must infer unfamiliar glyphs.
- Nine equal “featured” projects provide no cue about which one deserves the first click.

### Casey — distracted mobile visitor

- Nine single-column cards create a long path before the project archive or final contact options.
- The 32px source/live controls are below comfortable one-handed touch size.
- The floating scroll-to-top control competes with project-card actions near the right edge while scrolling.
- The strongest contact action is not a labeled, thumb-friendly endpoint after the work.

### Sam — keyboard, screen-reader, and reduced-motion user

- The mobile menu's expanded state is not announced and it does not dismiss with Escape.
- Project actions have good accessible names but undersized visual/touch targets.
- The animated highlight interval is not explicitly stopped by the reduced-motion preference.
- The decorative system map is exposed with generic alternative text; it should either carry meaningful evidence or be hidden from assistive technology.

## Minor Observations

- The hero introduces an `h2` greeting before the page `h1`, which weakens heading-outline clarity.
- `h-[90vh]` leaves a large desktop first viewport for atmosphere when it could show representative work.
- The fuchsia-to-blue highlight departs from the documented violet-only signal family.
- Cards lift as a whole on hover even though the card itself is not clickable, implying a larger hit area than exists.
- Floating and footer back-to-top controls duplicate the same action with different patterns.
- The theme button's accessible name says only “Toggle theme” rather than current or resulting state.
- An HTTP Heroku project destination should be checked and visibly qualified if archival.

## Questions to Consider

- If a recruiter sees only the hero and first project, what verified evidence earns the next click?
- Why are coursework and professional/community contributions all called “featured” with identical weight?
- What real artifact can prove “backend systems” before the visitor has to trust the claim?
- Should the homepage feel like a catalog of repositories or an edited argument for Louis's current strengths?
- What should the final screen make a qualified visitor feel—and do—next?
