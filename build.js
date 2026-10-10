// Builds dist/index.html — a single self-contained file for sharing through
// apps (WhatsApp, email, etc.) that only keep the one file you tap/attach,
// dropping the css/, js/, fonts/ and images/ folders it would normally need.
//
// The multi-file site (index.html, product.html, css/, js/, images/, fonts/)
// stays the source of truth and is what you edit. Re-run this after any
// change to index.html, style.css, products.js, app.js or the site logo:
//
//   node build.js
//
// Known limitation: tapping a product card in dist/index.html links to
// product.html, which isn't part of this bundle, so it won't open standalone.
// This build only makes the catalog GRID viewable from a single shared file.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");

function toDataUri(absPath) {
  const ext = path.extname(absPath).slice(1).toLowerCase();
  const mime = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", woff2: "font/woff2" }[ext]
    || "application/octet-stream";
  const data = fs.readFileSync(absPath).toString("base64");
  return `data:${mime};base64,${data}`;
}

// 1. Inline the @font-face files referenced inside style.css.
let css = fs.readFileSync(path.join(ROOT, "css/style.css"), "utf8");
css = css.replace(/url\("\.\.\/fonts\/([^"]+)"\)/g, (_match, fontFile) =>
  `url("${toDataUri(path.join(ROOT, "fonts", fontFile))}")`
);

// 2. Load products.js data and inline only the first image per product —
// the only image index.html + app.js actually render (the grid thumbnail).
const productsSrc = fs.readFileSync(path.join(ROOT, "js/products.js"), "utf8");
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(productsSrc + "\nthis.CATEGORIES=CATEGORIES;this.BRANDS=BRANDS;this.PRODUCTS=PRODUCTS;", sandbox);

const productsInlined = sandbox.PRODUCTS.map((p) => ({
  ...p,
  images: p.images.length ? [toDataUri(path.join(ROOT, p.images[0]))] : [],
}));

const productsJsInlined = `const CATEGORIES = ${JSON.stringify(sandbox.CATEGORIES)};
const BRANDS = ${JSON.stringify(sandbox.BRANDS)};
const PRODUCTS = ${JSON.stringify(productsInlined)};`;

// 3. app.js, verbatim.
const appJs = fs.readFileSync(path.join(ROOT, "js/app.js"), "utf8");

// 4. Site logo.
const logoUri = toDataUri(path.join(ROOT, "images/logo-white.png"));

// 5. Pre-render the grid, tabs, result count and footer links as plain HTML.
// Some preview contexts (WhatsApp's in-app document preview, iOS Quick Look)
// render the page as a static document and never run JavaScript at all —
// in that case app.js's renderGrid()/renderTabs() simply never fire, and the
// page looks like an empty shell. Pre-rendering means the catalog is already
// fully visible on load; if JS *does* run, app.js takes over the same
// elements and search/tab filtering starts working on top of this.
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function priceHTML(p) {
  if (!p.price) return "";
  const isRealDiscount = p.wasPrice && parseFloat(p.wasPrice) > parseFloat(p.price);
  const was = isRealDiscount ? `<span class="was">₹${esc(p.wasPrice)}</span>` : "";
  return `<div class="card-price"><span class="now">₹${esc(p.price)}</span>${was}</div>`;
}

function cardHTML(p) {
  const img = p.images[0] || "";
  return `
    <a class="card" href="product.html?id=${encodeURIComponent(p.id)}">
      <div class="card-media">
        <span class="category-badge">${esc(p.category)}</span>
        <img src="${img}" alt="${esc(p.name)}" loading="lazy">
      </div>
      <div class="card-body">
        <span class="card-brand">${esc(p.brand)}</span>
        <span class="card-name">${esc(p.name)}</span>
        <p class="card-desc">${esc(p.desc)}</p>
        ${priceHTML(p)}
      </div>
    </a>
  `;
}

const presentCategories = [...new Set(productsInlined.map((p) => p.category))];
const tabs = ["All", ...sandbox.CATEGORIES.filter((c) => presentCategories.includes(c))];
const tabsHtml = tabs
  .map((cat) => `<button class="tab-btn${cat === "All" ? " active" : ""}" data-cat="${esc(cat)}">${esc(cat)}</button>`)
  .join("");
const gridHtml = productsInlined.map(cardHTML).join("");
const resultCountHtml = `${productsInlined.length} products`;

const brandsWithProducts = sandbox.BRANDS.filter((b) => productsInlined.some((p) => p.brandSlug === b.id));
const brandLinksHtml = brandsWithProducts
  .map((b) => `<li><a href="index.html?brand=${encodeURIComponent(b.name)}">${esc(b.name)}</a></li>`)
  .join("");
const categoriesWithProducts = sandbox.CATEGORIES.filter((c) => productsInlined.some((p) => p.category === c));
const categoryLinksHtml = categoriesWithProducts
  .map((c) => `<li><a href="index.html?category=${encodeURIComponent(c)}">${esc(c)}</a></li>`)
  .join("");

// 6. Assemble.
let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
html = html.replace(
  '<link rel="stylesheet" href="css/style.css">',
  `<style>\n${css}\n</style>`
);
html = html.replace(/images\/logo-white\.png/g, logoUri);
html = html.replace(
  '<script src="js/products.js"></script>',
  `<script>\n${productsJsInlined}\n</script>`
);
html = html.replace(
  '<script src="js/app.js"></script>',
  `<script>\n${appJs}\n</script>`
);
html = html.replace('<div class="tabs" id="tabs"></div>', `<div class="tabs" id="tabs">${tabsHtml}</div>`);
html = html.replace('<p class="result-count" id="result-count"></p>', `<p class="result-count" id="result-count">${resultCountHtml}</p>`);
html = html.replace('<div class="grid" id="grid"></div>', `<div class="grid" id="grid">${gridHtml}</div>`);
html = html.replace('<ul id="brand-links"></ul>', `<ul id="brand-links">${brandLinksHtml}</ul>`);
html = html.replace('<ul id="category-links"></ul>', `<ul id="category-links">${categoryLinksHtml}</ul>`);
html = html.replace('<span id="year"></span>', `<span id="year">${new Date().getFullYear()}</span>`);

fs.mkdirSync(DIST, { recursive: true });
const outPath = path.join(DIST, "index.html");
fs.writeFileSync(outPath, html);

const sizeMB = (fs.statSync(outPath).size / (1024 * 1024)).toFixed(2);
console.log(`Wrote dist/index.html — ${sizeMB} MB`);
