# Hallmark Enterprises — offline product catalog

Plain HTML/CSS/JS site for Hallmark Enterprises (Kerala FMCG wholesale
distributor) to show shop owners on phone or laptop. No build tools, no
frameworks, works fully offline.

## Structure

- `index.html` — product grid with category tabs, search, `?category=`/`?brand=` filters
- `product.html?id=<slug>` — product detail (gallery, specs, wholesale pricing, how-to-use)
- `css/style.css` — design tokens + styles, matched to hallmarkworld.com's own colors/fonts
- `js/products.js` — generated data file (see `scripts/build-data.js`), do not hand-edit
- `js/app.js`, `js/product.js` — page logic
- `images/` — downloaded product/brand/logo photos (`download-images.ps1` regenerates)
- `fonts/` — self-hosted Poppins/Raleway/Roboto woff2 files (no CDN, works offline)
- `scripts/build-data.js` — transforms `scripts/raw/*.json` (pulled from
  hallmarkworld.com's public `/api/site/*` endpoints) into `js/products.js`

## Regenerating product data

If you re-pull fresh JSON into `scripts/raw/`, run:
```
node scripts/build-data.js
node scripts/gen-download-script.js
powershell -ExecutionPolicy Bypass -File .\download-images.ps1
```

## dist/index.html — single-file build for sharing via WhatsApp/email

**Problem**: iOS apps (WhatsApp, Mail, etc.) that preview an `.html` file in
place only load that one file — they don't bring along `css/`, `js/`,
`fonts/`, or `images/` sitting next to it. Opening `index.html` that way
shows an unstyled page (raw blue links, giant default-sized SVG icons, no
product photos).

**Fix, part 1 (inlining)**: `build.js` inlines everything index.html needs
into one file:
- `css/style.css` (including its `@font-face` files, base64-encoded) goes into a `<style>` tag
- `js/products.js` (with each product's first/grid image rewritten to a base64
  `data:` URI) and `js/app.js` go into inline `<script>` tags, same order as the source
- `images/logo-white.png` becomes a base64 `data:` URI

**Fix, part 2 (no-JS fallback)**: inlining alone wasn't enough. WhatsApp's
in-app document preview and iOS Quick Look render the page as a static
document and **never execute JavaScript at all** — so `app.js`'s
`renderGrid()`/`renderTabs()` simply never ran, and the grid stayed empty
even with every file inlined. `build.js` now also pre-renders the product
grid, category tabs, result count, and footer brand/category links as plain
static HTML directly in the output (duplicating `cardHTML()`/`priceHTML()`
from `app.js` in Node). If JS does run, `app.js` takes over those same
elements exactly as it normally would and search/tab filtering keeps
working; if JS doesn't run, the full catalog is still visible because it
was never dependent on JS running in the first place.

This duplicates every product's grid image once as static `<img>` HTML and
once more inside the embedded `PRODUCTS` data array (needed for the JS path),
roughly doubling bundle size — unavoidable tradeoff for working in a
no-JS preview. WhatsApp documents support files up to 2GB, so this is fine.

Run `node build.js` after any change to `index.html`, `css/style.css`,
`js/products.js`, `js/app.js`, or the logo. Output: `dist/index.html`
(~102 MB — fine for WhatsApp/Drive, too big for most email attachment limits).

All inline `<svg>` icons across `index.html`, `product.html`, and
`js/product.js` also have explicit `width`/`height` attributes now, as a
fallback in case CSS fails to load some other way — without them, a bare
`<svg>` with only a `viewBox` renders at the SVG spec default of 300×150px,
which is exactly the "huge icons" symptom this whole issue started from.

**Known limitation**: `dist/index.html` only makes the product *grid*
viewable standalone. Tapping a product card still links to `product.html`,
which isn't part of this bundle and won't open from a single shared file.
If that's needed, `build.js` would need to generate a self-contained file
per product too — not done yet because embedding full image galleries
across 30 separate files would multiply the ~51 MB bundle size many times
over from duplicated images. Ask before building that; it's a real
size/tradeoff decision, not just more code.
