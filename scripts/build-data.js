// One-time data transform: reads the raw API dumps in scripts/raw/ and produces
// js/products.js, js/brands.js, and a list of every image URL to download.
const fs = require("fs");
const path = require("path");

const RAW = path.join(__dirname, "raw");
const products = JSON.parse(fs.readFileSync(path.join(RAW, "products.json"), "utf8")).products;
const brands = JSON.parse(fs.readFileSync(path.join(RAW, "brands.json"), "utf8")).brands;
const categories = JSON.parse(fs.readFileSync(path.join(RAW, "categories.json"), "utf8")).categories;

// Cosmetic cleanup only — never changes the product being referred to, just
// normalizes inconsistent casing/leftover fragments from the source catalog.
function normalizeName(title) {
  return title
    .replace(/\s+Single Pc\.?$/i, "")
    .replace(/(\d+)ml\b/gi, "$1ML")
    .replace(/\b2 ply\b/i, "2-Ply")
    .trim();
}

function parseHowToUse(text) {
  if (!text) return [];
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}

const imageJobs = []; // {url, localPath}
function ext(url) {
  const m = url.match(/\.(png|jpg|jpeg|webp)(\?|$)/i);
  return m ? m[1].toLowerCase() : "png";
}

const productsOut = products.map((p) => {
  const imgUrls = p.image ? p.image.split(",").map((s) => s.trim()).filter(Boolean) : [];
  const localImages = imgUrls.map((url, i) => {
    const local = `images/products/${p.id}-${i + 1}.${ext(url)}`;
    imageJobs.push({ url, local: `images/products/${p.id}-${i + 1}.${ext(url)}` });
    return local;
  });
  return {
    id: p.id,
    name: normalizeName(p.title),
    desc: (p.desc || "").trim(),
    images: localImages,
    price: p.price || "",
    wasPrice: p.wasPrice || "",
    b2bPricingTiers: p.b2bPricingTiers || [],
    category: p.categoryName,
    categorySlug: p.category,
    brand: p.brandName,
    brandSlug: p.brand,
    howToUse: parseHowToUse(p.howToUse),
    specifications: (p.specifications || []).filter((s) => s.name && s.value),
  };
});

const brandLogoDir = "images/brands";
const brandsOut = brands.map((b) => {
  let logo = "";
  if (b.image) {
    const local = `${brandLogoDir}/${b.id}.${ext(b.image)}`;
    imageJobs.push({ url: b.image, local });
    logo = local;
  }
  return {
    id: b.id,
    name: b.name,
    shortDesc: b.shortDesc || "",
    logo,
  };
});

// site logo
const siteLogoUrl = "https://res.cloudinary.com/dif9yrwp2/image/upload/v1773566375/hallmark/assets/img/logo-white.png";
imageJobs.push({ url: siteLogoUrl, local: "images/logo-white.png" });

fs.writeFileSync(path.join(RAW, "image-jobs.json"), JSON.stringify(imageJobs, null, 2));

const jsOut = `// Generated from the live Hallmark Enterprises site's public catalog API.
// Local images are expected at the paths referenced below (see download-images.ps1).
const CATEGORIES = ${JSON.stringify(categories.map((c) => c.name), null, 2)};

const BRANDS = ${JSON.stringify(brandsOut, null, 2)};

const PRODUCTS = ${JSON.stringify(productsOut, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, "..", "js", "products.js"), jsOut);
console.log("Wrote js/products.js with", productsOut.length, "products and", brandsOut.length, "brands");
console.log("Image jobs:", imageJobs.length);
