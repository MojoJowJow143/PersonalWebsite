# PersonalWebsite

This is my personal website — a simple, customizable static site built with plain HTML, CSS, and JS. No build step.

Live URL after deploy: `https://mojojowjow143.github.io/PersonalWebsite/`

## Customize

- **Content** — edit `index.html`. The hero, about, projects, and contact sections are all there in plain markup.
- **Colors / fonts / spacing** — edit the `:root` block at the top of `styles.css`. Light theme overrides live in `[data-theme="light"]`.
- **Favicon** — replace the inline SVG in `<link rel="icon" ...>` in `index.html`.
- **Theme default** — controlled by `script.js` (follows OS preference, remembers user choice).

## Run locally

Just open `index.html` in a browser, or serve the folder:

```powershell
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Commit and push to `main`.
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute, then open `https://mojojowjow143.github.io/PersonalWebsite/`.

The `.nojekyll` file is intentional — it tells GitHub Pages to serve files as-is instead of running them through Jekyll.
