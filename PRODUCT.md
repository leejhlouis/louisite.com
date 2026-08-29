# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary audience needs to understand his professional profile, assess relevant
experience and technical range, inspect representative work, and find a direct way to contact him.

## Product Purpose

Louisite is Louis Gustavo's personal portfolio. It exists to establish professional credibility,
make his experience and accomplishments easy to evaluate, and create relevant career and
collaboration opportunities. Success means a visitor can quickly understand who Louis is, what he
has built, where his strengths lie, and how to reach him.

## Positioning

The portfolio presents Louis as a software engineer who combines his production experience with
practical breadth across web interfaces and backend systems. His body of work also
shows project leadership, community involvement, and a progression from academic and independent
projects to professional software engineering.

## Operating Context

Visitors typically arrive while screening a candidate, following a profile or repository link, or
researching one of Louis's projects. They move between a concise homepage, a filterable project
archive, a detailed biography and skills record, technical writing, external source repositories,
live project links, and direct contact channels.

The site complements rather than duplicates Louis's LinkedIn profile. Detailed implementation
documentation for individual projects may live in the corresponding GitHub repositories.

## Capabilities and Constraints

- The site is a public, responsive, multi-page web portfolio with light and dark themes.
- Core routes cover the homepage, projects, about information, and technical writing.
- Projects can be filtered by technology and link to verified source repositories or live builds
  when available.
- Contact is available through email, LinkedIn, and GitHub.
- Content is maintained in English.
- Employment history, credentials, dates, project ownership, and technical claims must remain
  factual and verifiable.
- Future work must not invent employers, clients, testimonials, metrics, awards, or project
  outcomes.

## Brand Commitments

- Preserve the `louisite` name, stylized as LOUI**SITE**, and its meaning as a portmanteau of
  Louis and site.
- Preserve Louis Gustavo as the named author and subject of the portfolio.
- Use a direct, approachable first-person voice where Louis speaks about himself.
- Keep professional claims grounded in Louis's actual experience and body of work.

## Evidence on Hand

- Current role and professional summary in `src/app/layout.tsx`,
  `src/components/sections/Hero.tsx`, and `src/app/(main)/about/page.mdx`.
- Employment, education, leadership, skills, and contact details in
  `src/app/(main)/about/page.mdx`.
- Project descriptions, technologies, source repositories, and live links in
  `src/constants/projects.tsx`.
- A long-form account of the portfolio's purpose and evolution in
  `src/content/posts/how-i-built-my-portfolio.mdx` and `README.md`.
- Public GitHub, LinkedIn, and email contact paths in `src/constants/`.
- No verified testimonials, client endorsements, performance benchmarks, or quantified project
  outcomes are currently present; future work must not fabricate them.

## Product Principles

1. Lead with demonstrated work so visitors can evaluate capability through evidence.
2. Make professional fit understandable quickly without reproducing an entire résumé or LinkedIn
   profile.
3. Balance frontend and backend experience rather than presenting Louis as limited to one layer.
4. Keep every career, credential, and project claim accurate, current, and traceable.
5. Provide a clear path from initial evaluation to deeper inspection and direct contact.

## Accessibility & Inclusion

The portfolio must remain usable with keyboard navigation, assistive technology, reduced-motion
preferences, and both light and dark themes. A specific conformance target has not been established.
