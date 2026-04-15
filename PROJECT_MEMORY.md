# Project Memory

## Purpose

Jekyll + GitHub Pages site for the GRAIL workshop series, currently `GRAIL-V @ CVPR 2026`. The site is audience-first: authors, students, attendees, and sponsors, not workshop reviewers.

## Current State

- Public site URL: `https://grailworkshops.github.io/`
- Local dev command: `bundle exec jekyll serve --config _config.yml,_config.dev.yml --port 4001`
- Latest public submission deadline is **March 8, 2026 (AoE)**.
- Workshop schedule is now confirmed for **June 3, 2026 at 8:00 AM local time** in Denver.
- Repo deploys through GitHub Actions workflow `.github/workflows/jekyll-gh-pages.yml` on pushes to `main`.

## Key Locations

- Content/data: `_data/*.yml`
- Main pages: `index.md`, `cfp.md`, `program.md`, `speakers.md`, `venue.md`, `updates.md`, `faq.md`
- Reusable sections: `_includes/sections/*.html`
- Layout + SEO/event schema: `_layouts/default.html`
- Styling and interactions: `assets/css/styles.css`, `assets/js/script.js`
- Search index: `search.json`
- Verification/SEO infra: `robots.txt`, `sitemap.xml`, `googlee291917ace764fa0.html`

## Recent Work Completed

- Restructured site toward workshop audience and submission clarity.
- Added/updated speaker, organizer, and program committee data with publish gating via `publish: true/false`.
- Added sponsor presentation in footer using `_data/sponsors.yml`; Oracle currently shown there.
- Added SEO improvements: sitemap, robots, keywords, JSON-LD event metadata, Search Console verification file.
- Fixed Search Console Event schema warnings by adding `organizer`, `performer`, `offers`, and `validFrom`.
- Extended submission deadline twice; current extension is **Mar 8, 2026** and old **Mar 7** is visibly crossed out.
- Added Safari-safe strike-through behavior for deadline display.
- Added Vijay Krishnan as a visible speaker/panelist with local headshot `assets/people/vijay_krishnan.jpeg`.
- Added several program committee members including Bronson Bakunga, Dr. Pao-Ann Hsiung, and Ashish Somayajula.
- Karan Dua is currently in **Program Committee** as the first visible member, not in Organizers.
- Updated the workshop day across hero, venue, dates, schema metadata, and program schedule to the confirmed **June 3, 2026 8:00 AM** start.

## Important Decisions / Assumptions

- Prefer editing YAML in `_data/` over embedding content directly in templates.
- Use `relative_url` for internal links in Liquid templates.
- Keep unconfirmed speakers/committee hidden with `publish: false`.
- Do not expose individual organizer emails; use `grailworkshops@googlegroups.com`.
- Keep timeline public-only; internal dates remain marked with `internal: true`.

## Commands Already Run

- `bundle exec jekyll build --config _config.yml,_config.dev.yml`
  - Repeatedly used; passing after recent deadline, speaker, and Safari changes.
- `bundle exec jekyll serve --config _config.yml,_config.dev.yml --port 4001`
  - Used for local validation; current convention is port `4001`.

## Workflow Notes

- GitHub Actions runs on pushes to `main`; recent deploys have triggered correctly.
- If deployed CSS/JS looks stale, hard refresh or test in incognito before assuming deploy failure.
- Commit only task-relevant files; repo often has unrelated untracked poster images and Google Trends CSV files.

## Open Issues / Risks / Next Steps

- Untracked files remain in `assets/people/` and repo root (poster images, CSV exports); avoid committing them unless explicitly requested.
- Deadline visuals depend on CSS/JS cache busting by GitHub Pages/browser; verify in Safari and Chrome after deadline changes.
- Keep `PROJECT_MEMORY.md` updated when deadlines, visible speakers, committee members, or deployment/SEO behavior changes.
