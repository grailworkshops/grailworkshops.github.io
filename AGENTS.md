# Repository Guidelines

This repository is a **Jekyll + GitHub Pages** website for the GRAIL workshop series (e.g., “GRAIL‑V @ CVPR 2026”). Most edits should be made in data files and Markdown, not HTML.

## Project Structure & Module Organization

- `_data/`: Primary content sources (YAML). Example: `_data/site.yml`, `_data/speakers.yml`, `_data/organizers.yml`.
- `_includes/`: Reusable Liquid/HTML components. Section partials live in `_includes/sections/`.
- `_layouts/`: Page layout templates (main layout: `_layouts/default.html`).
- `assets/`: Static assets (CSS in `assets/css/`, JS in `assets/js/`, images in `assets/` and `assets/people/`).
- `*.md`: Top-level pages (`index.md`, `cfp.md`, `program.md`, `speakers.md`, `faq.md`, `venue.md`, `updates.md`).
- `search.json`: Jekyll-generated search index consumed by the site search modal.

## Build, Test, and Development Commands

- `bundle install`: Install Ruby/Jekyll dependencies.
- `bundle exec jekyll serve --config _config.yml,_config.dev.yml`: Run locally with dev overrides (recommended).
- `bundle exec jekyll build --config _config.yml`: Production build (writes `_site/`).

## Coding Style & Naming Conventions

- Use **2-space indentation** for YAML/HTML/CSS.
- Prefer editing content in `_data/*.yml`; keep templates in `_includes/` focused on presentation.
- For internal links in Liquid templates, always use `| relative_url` (except pure `#anchors`) to avoid broken links.
- Images: store headshots in `assets/people/` and reference as `photo: "/assets/people/<file>"` in YAML.

## Testing / QA Checklist

No automated test suite. Before merging:

- Run `bundle exec jekyll build` and open the site locally.
- Click through nav links (Home/CFP/Program/Speakers/Venue) and verify assets load.
- Try the search modal and confirm results navigate correctly.

## Commit & Pull Request Guidelines

- Use short, imperative commit messages; optional scope prefixes are common (e.g., `UX: ...`, `Site: ...`, `Fix ...`).
- PRs should include: a brief summary, screenshots (desktop + mobile), and any relevant links (e.g., speaker pages).

## GitHub Pages Notes

This repo is deployed as an **org site** at `https://grailworkshops.github.io/` (see `_config.yml` `url` and `baseurl`). Avoid hardcoding `/grail.github.io/` anywhere.
