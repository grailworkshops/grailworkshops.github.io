# Project Memory

## Purpose

Jekyll + GitHub Pages site for the GRAIL workshop series, currently `GRAIL-V @ CVPR 2026`. The site is audience-first: authors, students, attendees, and sponsors, not workshop reviewers.

## Current State

- Public site URL: `https://grailworkshops.github.io/`
- Local dev command: `bundle exec jekyll serve --config _config.yml,_config.dev.yml --port 4001`
- Latest public submission deadline is **March 8, 2026 (AoE)**.
- Workshop schedule is now confirmed for **June 3, 2026 from 7:30 AM to 12:30 PM local time** in **Hall 506, Denver**.
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
- Added Bhargava Kumar and Tejaswini Kumar to the visible Program Committee, mirroring their SurgeLLM committee entries with local headshots; they are intentionally placed at the end of the committee list.
- Karan Dua is currently in **Program Committee** as the first visible member, not in Organizers.
- Updated the workshop day across hero, venue, dates, schema metadata, and program schedule to the confirmed **June 3, 2026 7:30 AM-12:30 PM** program.
- Researched public CVPR 2026 workshop schedules in late Apr 2026: the official CVPR workshops page lists 148 accepted workshops, but its Day/Time/Room columns were still blank in the HTML at the time checked. Public workshop sites show a common June 3 AM half-day pattern of roughly **8:00/8:30 AM to 12:30/1:00 PM**, with opening remarks, 25-45 minute invited talks, contributed orals/spotlights, a coffee/poster block around 10:00 AM, and closing/awards near lunch. GRAIL-V now uses a **7:30 AM-12:30 PM** confirmed program.
- Current public program: opening remarks; invited talks by Dan Roth, Kristen Grauman, Scott Wen-tau Yih, and Mohit Bansal; 8:45-9:00 AM coffee break; 10:00-11:00 AM coffee/poster session; 11:00-11:15 AM paper presentation; 11:15 AM-12:15 PM industry panel moderated by Sujith Ravi with panelists Vijay Krishnan, Kenneth Marino, and Ming-Hsuan Yang; closing remarks.
- After submissions closed, shifted the home page from submission-first to schedule-first: top announcement says **Schedule released**, hero CTA is **View Schedule**, the agenda appears immediately after the hero, and the submission summary is no longer shown on the home page.
- The schedule announcement pill links directly to `/program/#program`, and attendee-facing logistics now identify **Hall 506, Denver** across the hero, Program page, Venue, FAQ, Updates, dates, and event metadata.
- Agenda presentation is now a premium single-track "run of show" timeline: flat warm charcoal/orange confirmed-program header and panel treatment, compact workshop summary chips, continuous time rail, highlighted invited-talk/poster/panel rows, and linked speaker mini-profiles with photos where schedule descriptions match `_data/speakers.yml`. Paper presentation rows intentionally omit `x1`/`x2` details.
- Added Kenneth Marino and Ming-Hsuan Yang as visible panelist speaker cards with local headshots and homepage/Google Scholar links. Sujith Ravi's visible affiliation is **VP, Oracle AI**; Vijay displays **Founder and CTO, Turing**; Kenneth displays **University of Utah / Ex-DeepMind**; Ming-Hsuan displays **UC Merced / DeepMind**.
- Replaced Kenneth Marino's headshot with the user-provided `KennethMarinoHeadshot.jpg`, resized for the web at `assets/people/kenneth_marino.jpg`.

## Important Decisions / Assumptions

- Prefer editing YAML in `_data/` over embedding content directly in templates.
- Use `relative_url` for internal links in Liquid templates.
- Keep unconfirmed speakers/committee hidden with `publish: false`.
- Do not expose individual organizer emails; use `grailworkshops@googlegroups.com`.
- Keep timeline public-only; internal dates remain marked with `internal: true`.

## Commands Already Run

- `bundle exec jekyll build --config _config.yml,_config.dev.yml`
  - Repeatedly used; passing after recent deadline, speaker, and Safari changes.
  - Passing after the premium agenda/timeline redesign.
  - Passing after the warm agenda palette and linked speaker mini-profile update.
  - Passing after adding Kenneth Marino and Ming-Hsuan Yang, updating the panel row, and refining agenda meta labels.
  - Passing after replacing Kenneth Marino's headshot.
  - Passing after making the schedule announcement pill link to Program and adding Hall 506 logistics.
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
