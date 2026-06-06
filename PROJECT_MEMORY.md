# Project Memory

## Purpose

Jekyll + GitHub Pages site for the GRAIL workshop series, currently `GRAIL-V @ CVPR 2026`. The site is audience-first: authors, students, attendees, and sponsors, not workshop reviewers.

## Current State

- Public site URL: `https://grailworkshops.github.io/`
- Local dev command: `bundle exec jekyll serve --config _config.yml,_config.dev.yml --port 4001`
- Latest public submission deadline is **March 8, 2026 (AoE)**.
- Workshop schedule is now confirmed for **June 3, 2026 from 7:30 AM to 12:30 PM local time** in **Room 506, Denver**.
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
- Added sponsor presentation in footer using `_data/sponsors.yml`; Oracle and Turing are currently shown there.
- Added SEO improvements: sitemap, robots, keywords, JSON-LD event metadata, Search Console verification file.
- Fixed Search Console Event schema warnings by adding `organizer`, `performer`, `offers`, and `validFrom`.
- Extended submission deadline twice; current extension is **Mar 8, 2026** and old **Mar 7** is visibly crossed out.
- Added Safari-safe strike-through behavior for deadline display.
- Added Vijay Krishnan as a visible speaker/panelist with local headshot `assets/people/vijay_krishnan.jpeg`.
- Added several program committee members including Bronson Bakunga, Dr. Pao-Ann Hsiung, and Ashish Somayajula.
- Added SurgeLLM Program Committee members to the visible GRAIL Program Committee with local headshots: Bhargava Kumar, Tejaswini Kumar, Eun Woo Im, Tampu Ravi Kumar, Manan Roy Choudhury, Tejas Anvekar, Abhijit Chakraborty, Yash Shah, and Ashish Raj Shekhar. Shiven Agarwal and Adarsh Singh were later added as final visible PC entries with user-provided headshots. The committee grid uses compact top-aligned cards with nine-line clamped bios to avoid uneven spacing from long entries.
- Karan Dua is currently in **Program Committee** as the first visible member, not in Organizers.
- Updated the workshop day across hero, venue, dates, schema metadata, and program schedule to the confirmed **June 3, 2026 7:30 AM-12:30 PM** program.
- Researched public CVPR 2026 workshop schedules in late Apr 2026: the official CVPR workshops page lists 148 accepted workshops, but its Day/Time/Room columns were still blank in the HTML at the time checked. Public workshop sites show a common June 3 AM half-day pattern of roughly **8:00/8:30 AM to 12:30/1:00 PM**, with opening remarks, 25-45 minute invited talks, contributed orals/spotlights, a coffee/poster block around 10:00 AM, and closing/awards near lunch. GRAIL-V now uses a **7:30 AM-12:30 PM** confirmed program.
- Current public program: opening remarks; invited talks by Dan Roth ("AI for Data and Data for AI"), Kristen Grauman ("Grounding Temporal Reasoning in Video Evidence"), Scott Wen-Tau Yih ("MetaCLIP: Open, Scalable Data Curation for Vision-Language Models"), and Mohit Bansal ("Long-Horizon Video Reasoning and Generation"); 8:45-9:00 AM coffee break; 10:00-11:00 AM coffee/poster session in Exhibit Hall A, boards 188-207; 11:00-11:15 AM paper presentation; 11:15 AM-12:15 PM industry panel "From Understanding to Action: Building the next AI frontier with Multimodal Agents, World Models, and Real-world Intelligence," moderated by Sujith Ravi with panelists Vijay Krishnan, Scott Wen-Tau Yih, Kenneth Marino, and Ming-Hsuan Yang; closing remarks. The Updates page also has June 2026 announcements for poster-session logistics and Best Paper awards being announced during the workshop.
- Program agenda rows now support downloadable talk resources through `_data/program.yml` `resources` entries. Dan Roth's invited talk links to `assets/slides/dan-roth-ai-for-data-and-data-for-ai-grail-v-2026.pptx`; Scott Wen-Tau Yih's MetaCLIP invited talk links to `assets/slides/scott-yih-metaclip-grail-v-2026.pdf`. The source files were copied from `/Users/aamita/Downloads/` on June 6, 2026; no Scott PPTX was found in Downloads, only the MetaCLIP PDF deck.
- After submissions closed, shifted the home page from submission-first to schedule-first: hero CTA is **View Schedule**, the agenda appears immediately after the hero, hero metrics include **4 invited talks** and **1 industry panel**, and the submission summary is no longer shown on the home page. After the workshop, the top announcement changed to **GRAIL-V 2026** with post-workshop materials copy: slides, award winners, accepted papers, and proceedings are available.
- Added a public **Accepted Papers** page at `/papers/`, generated from `_data/papers.yml` using the accepted-papers CSV; navigation now includes **Papers**, no longer includes a separate **Dates** tab, and places **Call for Papers** at the end after **FAQ**. The paper summary pills are clickable filters for all, long, short, and non-archival papers.
- After the official CVF Open Access workshop proceedings were published, added `cvf_url` links for the **30 GRAIL-V papers present on the official CVF GRAIL-V workshop proceedings page** and rendered a second **CVPR Proceedings** pill beside OpenReview on `/papers/`. Seven local accepted entries remain OpenReview-only because they did not appear on the CVF GRAIL-V page at the time checked: #12, #29, #33, #40, #43, #51, and #55.
- Announced the GRAIL-V paper awards: **SHOE - Semantic HOI Open-vocabulary Evaluation metric** (#52) is **Best Paper** with a **$2,000** prize, and **HTEF: Holistic Brand-Theme Alignment Scoring as a Catalog Gate for Grounded Conversational Recommendation** (#36) is **Outstanding Paper** with a **$1,500** prize. The awards are stored on the paper entries in `_data/papers.yml`, highlighted on `/papers/`, and announced through `_data/updates.yml`.
- Fixed `/papers/` and `/program/` visibility issues after the awards/proceedings/resource updates: page content was present but could stay transparent when the scroll animation observer missed a tall initial section. `assets/js/script.js` now uses a low threshold, immediately reveals `[data-animate]` sections already in the viewport, and falls back when `IntersectionObserver` is unavailable; `assets/css/styles.css` now keeps `[data-animate]` content visible by default so pages cannot remain blank.
- The schedule announcement pill links directly to `/program/#program`, and attendee-facing logistics now identify **Room 506, Denver** across the hero, Program page, Venue, FAQ, Updates, dates, and event metadata.
- Agenda presentation is now a premium single-track "run of show" timeline: flat warm charcoal/orange confirmed-program header and panel treatment, compact workshop summary chips, continuous time rail, highlighted invited-talk/poster/panel rows, and linked speaker mini-profiles with photos where schedule descriptions or explicit `people` lists match `_data/speakers.yml`. Paper presentation rows intentionally omit `x1`/`x2` details.
- Industry Panel agenda-row speaker links intentionally prefer LinkedIn profiles when available, while invited-talk rows keep the normal homepage/Scholar/LinkedIn fallback.
- Added Kenneth Marino and Ming-Hsuan Yang as visible panelist speaker cards with local headshots and homepage/Google Scholar links. Sujith Ravi's visible affiliation is **GVP, Oracle AI**, his bio mentions Oracle GenAI, SliceX AI, Google AI, Amazon Alexa AI, frontier models, and enterprise agentic systems; his stale personal homepage link is intentionally removed, and his speaker-card default profile opens LinkedIn. Vijay displays **Founder and CTO, Turing**; Kenneth displays **University of Utah / Ex-DeepMind**; Ming-Hsuan displays **UC Merced / DeepMind**. The placeholder panel card **More to be announced / Leaders from Industry & Academia** is hidden.
- Replaced Kenneth Marino's headshot with the user-provided `KennethMarinoHeadshot.jpg`, resized for the web at `assets/people/kenneth_marino.jpg`.
- Updated the live `GRAIL-V` PowerPoint opening/closing deck: slide 2 now has organizer headshots with concise affiliation captions, and slide 3 replaces the right-side example graphic with a 3x3 **official-logo-only** participating-organization panel covering Oracle, Penn, UT Austin, Meta, UNC Chapel Hill, Turing, University of Utah, UC Merced, and Google DeepMind. The final slide 3 overlay intentionally has no typed organization labels outside the logos themselves; PowerPoint file-access prompts were unreliable, so the overlay was pasted from the macOS clipboard and resized to full slide.
- Added three adapted opening-flow slides to the live `GRAIL-V.pptx` after slide 3, using `/Users/aamita/Desktop/grailv_opening_closing_presentation.pptx` slides 2, 6, and 7 as source content: why-now framing, accepted-paper community signal, and three questions for the room. The deck now has 148 slides and was saved to the SharePoint-backed open presentation.
- For the local editable rebuild at `/Users/aamita/Documents/GRAIL-V-Local.pptx`, slide 2 has been converted in place from the native 10-speaker template: title/name/affiliation boxes remain PowerPoint text placeholders, old picture placeholders were removed, and the ten organizer headshots are separate editable picture objects named `Organizer photo - <name>`. This avoids the earlier full-slide image-overlay approach.
- In `/Users/aamita/Documents/GRAIL-V-Local.pptx`, slide 3 now keeps the left title/subtitle/footer as editable placeholders, replaces the right-side example group with one editable heading plus nine separate logo-card picture objects named `Organization logo card - <org>`, and corrects the subtitle to "is emerging." This is no longer a full-slide/right-panel overlay.
- In `/Users/aamita/Documents/GRAIL-V-Local.pptx`, slide 4 now replaces the prior three-icon draft with the workshop-style title **From Perception to Reliable Actions**, concise one-sentence copy for Perceive and Plan / Retrieve and Reason / Verify and Act, and separate custom transparent PNG icons matching the dark Oracle template palette. The **Verify and Act** icon was later changed from a target/check to an agent/robot-with-check icon to better signal agentic execution.
- In `/Users/aamita/Documents/GRAIL-V-Local.pptx`, slide 6 now rebuilds the former slide-7 "questions for the room" graphic as editable native PowerPoint objects: three rounded question cards, separate editable numbers/headings/body copy, accent bars, and a native takeaway text line in the Oracle/GRAIL dark palette. Slide 7 remains as the original image-based reference unless the user asks to remove it.
- In `/Users/aamita/Documents/GRAIL-V-Local.pptx`, slides 4-12 are editable speaker-introduction slides in this order: Dan Roth, Kristen Grauman, Scott Wen-Tau Yih, Mohit Bansal, Sujith Ravi, Vijay Krishnan, Kenneth Marino, Ming-Hsuan Yang, and Scott Wen-Tau Yih again for the panel. Each slide uses the website profile image from `assets/people/`, one separate selectable `Speaker intro photo - <name>` picture object, and editable PowerPoint text placeholders for the bio, speaker name, and affiliation/focus. Stock quote-slide content and leftover empty placeholders were removed. The speaker-photo masks were revised to the stronger stock-template ellipse arc matching the user's reference, with each photo repositioned so the arc does not cut faces.
- In `/Users/aamita/Documents/GRAIL-V-Local.pptx`, slide 19 was converted from the full-image placeholder into a DocInsights 2026 CFP announcement: the official DocInsights banner image is a separate picture object, the stock picture placeholders were removed, and the CFP details/deadlines/URL are native editable PowerPoint text while preserving the template footer and Oracle mark.
- On June 2, 2026, checked the live CVPR 2026 program/proceedings against GRAIL-V topics using the official CVPR virtual JSON (`cvpr-2026-orals-posters.json` plus `cvpr-2026-abstracts.json`) and CVF Open Access day pages. Current indexed main-conference denominator is **4,070 unique proceedings papers** (CVF day pages: 1,322 + 1,340 + 1,408), while the CVPR press page reports **4,089 paper presentations**. Excluding 956 Findings-poster records, heuristic multi-label title+abstract counts were: retrieval/search **208**, reranking/ranking/scoring **120-123** depending on inclusion of broad preference scoring, agentic planning/tool/action **510**, grounding/provenance/reliability/verification **1,360**, data/evaluation/efficiency/deployment **1,961**, and generative handling/editing **1,475**. Conservative title-only counts were: retrieval **114**, reranking/scoring **41**, agentic **328**, grounding/reliability **512**, data/eval/efficiency **712**, and generation/editing **1,069**.

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
  - Passing after making the schedule announcement pill link to Program and adding Room 506 logistics.
- `bundle exec jekyll serve --config _config.yml,_config.dev.yml --port 4001`
  - Used for local validation; current convention is port `4001`.

## Workflow Notes

- GitHub Actions runs on pushes to `main`; recent deploys have triggered correctly.
- If deployed CSS/JS looks stale, hard refresh or test in incognito before assuming deploy failure.
- Commit only task-relevant files; repo often has unrelated untracked poster images and Google Trends CSV files.
- For the live `GRAIL-V` PowerPoint deck, the open cloud/autosaved presentation can differ from `/Users/aamita/Documents/GRAIL-V.pptx`; inspect and edit the open PowerPoint object model directly. PowerPoint on macOS may require "Grant File Access" for generated images, so a single transparent full-slide overlay is a faster way to place multiple organizer headshots than inserting ten separate image files.

## Open Issues / Risks / Next Steps

- Untracked files remain in `assets/people/` and repo root (poster images, CSV exports); avoid committing them unless explicitly requested.
- Deadline visuals depend on CSS/JS cache busting by GitHub Pages/browser; verify in Safari and Chrome after deadline changes.
- Keep `PROJECT_MEMORY.md` updated when deadlines, visible speakers, committee members, or deployment/SEO behavior changes.
