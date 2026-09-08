# muid-uddin-chowdhury.github.io

Personal academic site — plain HTML and CSS, no build step, no dependencies.

## Files

```
index.html                 Home / about
academic-credentials.html
certifications.html
research.html
hardware-projects.html
software-projects.html
leadership.html
music.html
404.html
.nojekyll                  Tells GitHub Pages to serve the files as-is
assets/css/style.css       All styling
assets/js/nav.js           Mobile menu toggle (the only JS)
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
