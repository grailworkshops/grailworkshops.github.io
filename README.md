# GRAIL-V CVPR 2026 Workshop Site

This site is built with Jekyll for easy content editing.

Quick edits
- Update section copy and lists in `_data/*.yml`.
- Update layout/structure in `_includes/sections/*.html`.
- Global structure lives in `_layouts/default.html`.
- Speaker/organizer photos go in `assets/people/` and are referenced as `photo: "/assets/people/<file>"` in `_data/speakers.yml` and `_data/organizers.yml`.

Local preview
```
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

GitHub Pages deployment
- **Org/user site** (current setup): repo named `<org>.github.io`, deployed at `https://<org>.github.io/` with `_config.yml` `baseurl: ""`.
- **Project site** (alternate): deploy at `https://<org>.github.io/<repo>/` with `_config.yml` `baseurl: "/<repo>"`.

See `EDITING_GUIDE.md` for organizer-friendly editing notes.
