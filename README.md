# muid-uddin-chowdhury.github.io

Personal academic site — plain HTML and CSS, no build step, no dependencies. Dark theme by default with a light-mode toggle.

## Files

```
index.html                 Home / about
academic-credentials.html
research.html
404.html
.nojekyll                  Tells GitHub Pages to serve the files as-is
assets/css/style.css       All styling
assets/js/nav.js           Mobile menu + theme toggle (the only JS)
assets/img/                Placeholder images — replace with your own
assets/cv.pdf              Put your CV here (the rail links to it)
```

## Deploy

1. Create a repository named exactly `muid-uddin-chowdhury.github.io` (your GitHub
   username, then `.github.io`).
2. Push these files to the `main` branch.
3. Settings → Pages → Source: *Deploy from a branch* → `main` / `root`.
4. Wait a minute; the site is live at `https://muid-uddin-chowdhury.github.io`.

```bash
git init
git add .
git commit -m "Personal site"
git branch -M main
git remote add origin https://github.com/muid-uddin-chowdhury/muid-uddin-chowdhury.github.io.git
git push -u origin main
```

## Editing

- **Nav links** live in the `<aside class="rail">` block, repeated in every page.
  Change one, change all eight. The current page is marked with
  `aria-current="page"`.
- **Colors and type** are the CSS custom properties at the top of `style.css`.
- **Images**: replace the files in `assets/img/` keeping the same names, or point
  the `src` attributes somewhere else. Banners look best around 1600×500,
  portrait square, gallery images 4:3.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Theme

Dark is the default. A small inline script in the `<head>` of each page reads
`localStorage.theme` before the first paint, so a returning visitor who picked
light mode never sees a dark flash. The toggle sits at the bottom of the
sidebar.

To make **light** the default instead, swap the two blocks at the top of
`style.css`: put the light values in `:root` and the dark values under a
`[data-theme="dark"]` selector, then flip the check in each page's inline
script and in `applyTheme()` in `nav.js`.
