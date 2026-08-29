# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 15 portfolio built with React, TypeScript, MDX, and Tailwind CSS. Routes live in `src/app/`; the `(main)` route group contains the home, about, projects, and blog pages. Reusable UI is organized by purpose under `src/components/` (`common`, `layouts`, `sections`, and `ui`). Put shared hooks in `src/hooks/`, data and site configuration in `src/constants/`, types in `src/types/`, and small pure helpers in `src/utils/`. Blog posts belong in `src/content/posts/`. Static files, icons, and metadata are served from `public/`; global styles are in `src/styles/main.css`.

## Build, Test, and Development Commands

- `npm install` installs the exact dependency tree from `package-lock.json`.
- `npm run dev` starts the local Next.js development server, normally at `http://localhost:3000`.
- `npm run build` creates a production build and catches Next.js compilation and type errors.
- `npm run start` serves the completed production build locally.
- `npm run lint` checks all TypeScript and TSX files with zero warnings allowed.
- `npm run prettier:check` verifies formatting; `npm run prettier:write` applies it to configured source files.
- `npx tsc --noEmit` runs strict TypeScript validation independently.

## Coding Style & Naming Conventions

Use 2-space indentation, single quotes, no semicolons, and a 100-character line width, as defined in `.prettierrc.json`. The Tailwind Prettier plugin automatically sorts utility classes. Prefer the `@/` alias for imports from `src`. Name React components and their files in PascalCase (`ProjectCard.tsx`), hooks with a `use` prefix (`useMounted.ts`), and utilities/types descriptively in camelCase or PascalCase. Keep route-specific code near its route and extract shared behavior into existing module folders.

## Testing Guidelines

No automated test framework or coverage threshold is currently configured. Before submitting changes, run `npm run lint`, `npx tsc --noEmit`, and `npm run build`. Manually verify affected routes in both light and dark themes and at mobile and desktop widths. If adding tests, colocate them as `*.test.ts` or `*.test.tsx` and add the runner command to `package.json`.

## Commit & Pull Request Guidelines

Recent history generally uses Conventional Commit prefixes such as `feat:`, `feat(blog):`, `fix(sitemap):`, and `chore:`. Write imperative, focused subjects and include a scope when useful. Pull requests should explain the user-visible change, link relevant issues, list validation performed, and include before/after screenshots for visual work. Keep unrelated refactors out of feature or fix PRs.
