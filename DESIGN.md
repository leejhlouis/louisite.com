---
name: louisite
description: A warm, violet-accented portfolio system for presenting software engineering work.
colors:
  canvas-light: "#f6f3ed"
  surface-light: "#fcfaf6"
  elevated-light: "#ffffff"
  ink-light: "#201b27"
  muted-light: "#635b6c"
  line-light: "#d2cad6"
  signal-light: "#6d28d9"
  canvas-dark: "#0d0c11"
  surface-dark: "#141219"
  elevated-dark: "#1b1821"
  ink-dark: "#f4f0f8"
  muted-dark: "#aba2b5"
  line-dark: "#3d3745"
  signal-dark: "#c4a0ff"
  action-light: "#7c3aed"
  action-light-hover: "#8b5cf6"
  action-dark: "#a78bfa"
  action-dark-hover: "#c4b5fd"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-mobile: "24px"
  section-desktop: "48px"
  navbar-offset: "72px"
components:
  button-primary-light:
    backgroundColor: "{colors.action-light}"
    textColor: "{colors.elevated-light}"
    rounded: "{rounded.xl}"
    padding: "8px 16px"
  button-primary-dark:
    backgroundColor: "{colors.action-dark}"
    textColor: "{colors.canvas-dark}"
    rounded: "{rounded.xl}"
    padding: "8px 16px"
  button-ghost:
    textColor: "{colors.ink-light}"
    rounded: "{rounded.md}"
    padding: "2px 4px"
  badge-light:
    backgroundColor: "rgb(124 58 237 / 0.1)"
    textColor: "{colors.action-light}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "4px 8px"
  badge-dark:
    backgroundColor: "rgb(167 139 250 / 0.1)"
    textColor: "{colors.action-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "4px 8px"
  project-card-light:
    backgroundColor: "rgb(252 250 246 / 0.8)"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  project-card-dark:
    backgroundColor: "rgb(20 18 25 / 0.8)"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.2xl}"
    padding: "24px"
---

# Design System: louisite

## Overview

**Creative North Star: "Warm Technical Portfolio"**

This name describes the system already present in the code: a technical portfolio softened by
warm neutral canvases, translucent surfaces, rounded geometry, and violet illumination. The visual
hierarchy stays direct and legible so projects and professional evidence remain more prominent than
decoration.

The interface uses a light/dark token pair rather than separate identities. Both themes preserve
the same hierarchy, spacing, component silhouettes, and interaction grammar. Violet acts as the
single signal family across links, selection, focus, highlights, active states, and atmospheric
background light.

**Key Characteristics:**

- Warm light neutrals paired with near-black violet-tinted dark neutrals.
- Geist for primary reading and Geist Mono for technical labels and introductory text.
- Rounded, lightly translucent surfaces with thin borders and selective ambient shadow.
- One violet action and signal family across both themes.
- Short upward transitions and underline reveals for interactive feedback.

## Colors

The palette uses paired semantic tokens so light and dark themes retain identical roles.

### Primary

- **Signal Light** (`colors.signal-light`): selection, focus outlines, inline links, underlines, code
  emphasis, and the light-theme atmospheric glow.
- **Signal Dark** (`colors.signal-dark`): the equivalent high-contrast signal in the dark theme.
- **Action Violet** (`colors.action-light`, `colors.action-dark`): filled controls, badges, active
  navigation, and interactive borders, with separate hover steps for each theme.

### Neutral

- **Canvas** (`colors.canvas-light`, `colors.canvas-dark`): the outermost page background.
- **Surface** (`colors.surface-light`, `colors.surface-dark`): navigation, menus, panels, and primary
  content surfaces.
- **Elevated** (`colors.elevated-light`, `colors.elevated-dark`): code blocks and hovered menu rows.
- **Ink** (`colors.ink-light`, `colors.ink-dark`): headings and strongest text.
- **Muted** (`colors.muted-light`, `colors.muted-dark`): supporting copy, metadata, and labels.
- **Line** (`colors.line-light`, `colors.line-dark`): low-contrast borders and rules.

**The Paired-Role Rule.** Every theme change swaps semantic values, not component structure or
hierarchy.

**The Violet Signal Rule.** Violet is the only recurring chromatic action family; neutral surfaces
carry the rest of the interface.

## Typography

**Display Font:** Geist (with system-ui and sans-serif fallbacks)  
**Body Font:** Geist (with system-ui and sans-serif fallbacks)  
**Label/Mono Font:** Geist Mono (with platform monospace fallbacks)

**Character:** Geist keeps the portfolio clean and contemporary, while Geist Mono marks technical
introductions, badges, eyebrows, and code-oriented details without becoming the primary reading
face.

### Hierarchy

- **Display:** bold, tightly tracked type for the homepage hero. It begins at the frontmatter token
  size and rises to 3.75rem at the large breakpoint.
- **Headline:** bold page titles, rising from 1.75rem to 2.25rem at the medium breakpoint.
- **Title:** bold section headings at 1.5rem, rising to 1.875rem where implemented.
- **Body:** regular Geist with a relaxed 1.75 line-height; prose paragraphs rise to 1.125rem from the
  small breakpoint.
- **Label:** small, semibold monospace with wide tracking; the `.eyebrow` pattern also uses uppercase.
- **Project Title:** semibold 1.125rem with tight tracking.

**The Mono-as-Signal Rule.** Monospace is reserved for technical labels, introductory accents,
badges, and code rather than long-form body copy.

## Layout

The primary layout uses Tailwind's centered container with 16px horizontal padding by default,
32px at the medium breakpoint, and 48px at the extra-large breakpoint. Most sections cap at the
extra-large screen width and use 24px vertical padding on small screens, increasing to 48px from
the small breakpoint. Reading surfaces narrow to the medium screen width.

The homepage presents three selected projects as full-width editorial rows with a two-column split
at large widths. The project archive uses a responsive grid: one column by default, two from 640px,
and three from 1280px. The custom `xs` breakpoint begins at 480px; the remaining breakpoints follow
Tailwind's 640px, 768px, 1024px, 1280px, and 1536px defaults. A 72px top offset reserves space for
the fixed navigation.

Spacing is based on Tailwind's 4px rhythm, with 8px gaps for compact control groups, 16px gaps for
general grouping, 24px for card padding and content separation, and 32–48px for major section
rhythm.

**The Narrow Reading Rule.** Articles and biography content narrow independently of the broader
project grid so line length remains comfortable.

## Elevation & Depth

The system is layered rather than heavily raised. Thin borders, translucent fills, backdrop blur,
and tonal surface changes establish most depth. Two ambient editorial shadows support floating
menus, panels, and code blocks: `0 18px 60px rgb(20 12 38 / 0.08)` in light mode and
`0 24px 80px rgb(0 0 0 / 0.28)` in dark mode. Project cards use tonal surfaces and border-color
feedback without implying that the whole card is clickable.

Atmospheric depth also comes from two fixed, heavily blurred 640px violet gradient fields placed
outside the central content area.

**The Layer-before-Shadow Rule.** Use border, tone, translucency, or blur before adding elevation;
stronger shadow belongs to floating or interactive states.

## Shapes

The form language is consistently rounded. Compact ghost controls use the 6px radius, badges and
small icon wells use 8px, filled controls and menus use 12px, and project cards use 16px. Circular
geometry is reserved for the large blurred background fields rather than routine controls.

Borders are thin and low contrast at rest. Interactive borders shift toward the violet action
color instead of growing thicker.

**The Nested Radius Rule.** Smaller elements inside a larger rounded container use the next smaller
radius step, as seen in project cards, icon wells, and link controls.

## Components

### Buttons

- **Shape:** filled buttons use a gently rounded 12px corner and 8px by 16px padding; ghost buttons
  use a compact 6px corner and 2px by 4px padding.
- **Primary:** violet fill, contrasting text, a subtle border, and a small resting shadow.
- **Hover / Focus:** filled buttons move upward 2px and shift to the adjacent violet step; icons move
  horizontally by 2px. The global focus-visible treatment is a 2px signal outline with 4px offset.
- **Secondary:** the inverted filled variant uses a translucent neutral fill and changes border and
  text to violet on hover.
- **Ghost:** text links reveal a one-pixel underline from left to right over 300ms.

### Chips

- **Style:** badges use a 10% violet tint, violet monospace text, an 8px radius, and 4px by 8px
  padding.
- **State:** selectable badges use the same silhouette; the active state becomes a solid violet
  fill with high-contrast text, while inactive hover increases tint opacity.

### Cards / Containers

- **Corner Style:** project cards use a 16px radius; menus, code blocks, and compact panels use 12px.
- **Background:** cards use the translucent semantic surface over the themed canvas.
- **Shadow Strategy:** cards remain flat; hierarchy comes from surface and border roles.
- **Border:** a one-pixel line border shifts subtly toward violet on hover.
- **Internal Padding:** 20px on the smallest screens and 24px from the small breakpoint.

### Navigation

The fixed navigation spans the viewport with a subtle bottom border and strong backdrop blur. The
wordmark pairs a light `loui` with bold `site`. Desktop links use ghost-button underlines and a bold
violet active state. Below 640px, links move into a 144px-wide rounded surface menu with an ambient
editorial shadow. Theme and menu actions use bordered 12px icon buttons.

### Hero Highlight

Hero emphasis uses the semantic signal violet as a static text color. This keeps the strongest
statement inside the one-accent system and remains still for reduced-motion users.

### Entry Motion

Sections and selected elements begin 18px below their final position at zero opacity, then settle
over 560ms using `cubic-bezier(0.22, 1, 0.36, 1)`. Reduced-motion preferences collapse animation
and transition durations to 0.01ms and disable smooth scrolling.

## Do's and Don'ts

### Do:

- **Do** use semantic light/dark token pairs so role and hierarchy survive theme changes.
- **Do** use violet for focus, active, selection, link, and highlight states.
- **Do** keep reading content narrower than project and landing-page grids.
- **Do** preserve visible keyboard focus and the reduced-motion override.
- **Do** use the established 6px, 8px, 12px, and 16px radius progression.

### Don't:

- **Don't** introduce unrelated accent families into routine controls or navigation.
- **Don't** apply the animated gradient treatment to body text or every heading.
- **Don't** use heavy shadows as the default method of separating surfaces.
- **Don't** replace monospace body copy with long technical passages; keep it as a label and code
  signal.
- **Don't** change component geometry between light and dark themes.
