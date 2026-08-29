# Repository Guidelines

## Project structure and module organization

This Next.js 15 portfolio uses React, TypeScript, MDX, and Tailwind CSS. Routes live in `src/app/`; `(main)` contains the primary pages. Organize reusable UI under `src/components/`. Put hooks in `src/hooks/`, data in `src/constants/`, types in `src/types/`, utilities in `src/utils/`, and posts in `src/content/posts/`. Store assets in `public/` and global styles in `src/styles/main.css`.

## Build, test, and development commands

- `npm install` installs dependencies from `package-lock.json`.
- `npm run dev` starts the local server at `http://localhost:3000`.
- `npm run build` catches compilation and type errors.
- `npm run start` serves the production build.
- `npm run lint` checks TypeScript and TSX with zero warnings allowed.
- `npm run prettier:check` verifies formatting; `npm run prettier:write` applies it.
- `npx tsc --noEmit` runs strict TypeScript validation.

## Coding style and naming conventions

Follow `.prettierrc.json`: 2-space indentation, single quotes, no semicolons, and 100-character lines. Tailwind classes sort through Prettier. Prefer the `@/` alias for `src` imports. Use PascalCase for components (`ProjectCard.tsx`), a `use` prefix for hooks (`useMounted.ts`), camelCase for utilities, and PascalCase for types.

## Product and design guardrails

Treat `PRODUCT.md` and `DESIGN.md` as sources of truth. Preserve the LOUI**SITE** identity, Louis Gustavo as author, and a direct first-person voice. Lead with verifiable work and balance frontend and backend experience. Never invent employers, clients, metrics, awards, testimonials, credentials, or project outcomes.

Maintain the warm neutral, violet-accented system in both themes. Use semantic light/dark token pairs without changing hierarchy or geometry. Reserve violet for interactive signals. Use Geist for reading and Geist Mono for labels or code. Follow the 4 px spacing rhythm and 6 px, 8 px, 12 px, and 16 px radius scale. Prefer borders, tone, translucency, and blur over heavy shadows. Preserve keyboard focus, reduced motion, responsive layouts, and narrow reading widths.

## Testing guidelines

No automated test framework or coverage target exists. Run `npm run lint`, `npx tsc --noEmit`, and `npm run build`. Check affected routes in both themes, at mobile and desktop widths, with keyboard navigation and reduced motion. Name future tests `*.test.ts` or `*.test.tsx`.

## Commit and pull request guidelines

Recent history uses prefixes such as `feat:`, `feat(blog):`, `fix(sitemap):`, and `chore:`. Write imperative, focused subjects and add a scope when useful. Pull requests must explain the visible change, link relevant issues, list validation, and include before-and-after screenshots for visual work. Keep unrelated refactors in separate pull requests.
