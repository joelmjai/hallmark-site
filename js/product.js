(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = PRODUCTS.find((p) => p.id === id);
  const root = document.getElementById("product-root");
  const breadcrumbEl = document.getElementById("breadcrumb-extra");

  if (!product) {
    root.innerHTML = `
      <div class="empty-state">
        <strong>We couldn't find that product</strong>
        It may have been renamed. <a href="index.html" style="color:var(--heading);font-weight:700;">Back to the full catalog</a>.
      </div>
    `;
    document.title = "Product not found — Hallmark Enterprises";
    return;
  }

  document.title = `${product.name} — ${product.brand} | Hallmark Enterprises`;

  breadcrumbEl.innerHTML = `
    <span class="sep">/</span>
    <a href="index.html?category=${encodeURIComponent(product.category)}">${product.category}</a>
    <span class="sep">/</span>
    <span class="current">${product.name}</span>
  `;

  const brandMeta = BRANDS.find((b) => b.id === product.brandSlug);

  function priceBlockHTML() {
    if (!product.price) return "";
    const isRealDiscount = product.wasPrice && parseFloat(product.wasPrice) > parseFloat(product.price);
    const was = isRealDiscount ? `<span class="price-was">₹${product.wasPrice}</span>` : "";
    return `
      <div class="price-block">
        <span class="price-now">₹${product.price}</span>
        ${was}
        <span class="price-label">MRP, inclusive of taxes</span>
      </div>
    `;
  }

  function tiersHTML() {
    if (!product.b2bPricingTiers || product.b2bPricingTiers.length === 0) return "";
    const rows = product.b2bPricingTiers
      .map((t) => `<tr><td>${t.minQty}+ pcs</td><td class="price-col">₹${t.price} / pc</td></tr>`)
      .join("");
    return `
      <div class="section-block">
        <h2 class="with-bar">Wholesale Pricing</h2>
        <table class="tiers-table">
          <thead><tr><th>Order quantity</th><th>Price</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  function specsHTML() {
    if (!product.specifications || product.specifications.length === 0) return "";
    const items = product.specifications
      .map((s) => `<div class="spec-item"><span class="spec-label">${s.name}</span><span class="spec-value">${s.value}</span></div>`)
      .join("");
    return `
      <div class="section-block">
        <h2 class="with-bar">Product Specifications</h2>
        <div class="spec-panel">${items}</div>
      </div>
    `;
  }

  function parseHowToBlocks(lines) {
    const isHeading = (l) => /:$/.test(l) && l.replace(/:$/, "").trim().split(/\s+/).length <= 5;
    const isNote = (l) => /^tip:/i.test(l) || /^✔/.test(l);
    const blocks = [];
    let current = null;
    lines.forEach((raw) => {
      const line = raw.replace(/^\*\s*/, "");
      if (isHeading(line)) {
        current = { heading: line, steps: [], notes: [] };
        blocks.push(current);
        return;
      }
      if (!current) {
        current = { heading: null, steps: [], notes: [] };
        blocks.push(current);
      }
      if (isNote(line)) {
        current.notes.push(line.replace(/^✔\s*/, ""));
      } else {
        current.steps.push(line);
      }
    });
    return blocks;
  }

  function howToUseHTML() {
    if (!product.howToUse || product.howToUse.length === 0) return "";
    const blocksHtml = parseHowToBlocks(product.howToUse)
      .map((b) => {
        const heading = b.heading ? `<p class="howto-heading">${b.heading}</p>` : "";
        const steps = b.steps.length
          ? `<ul class="howto-list">${b.steps.map((s) => `<li>${s}</li>`).join("")}</ul>`
          : "";
        const notes = b.notes.map((n) => `<p class="howto-note">${n}</p>`).join("");
        return heading + steps + notes;
      })
      .join("");
    return `
      <div class="section-block">
        <h2 class="with-bar">How to Use</h2>
        ${blocksHtml}
      </div>
    `;
  }

  function thumbsHTML() {
    if (product.images.length <= 1) return "";
    return `
      <div class="thumb-strip" id="thumb-strip">
        ${product.images.map((img, i) => `
          <button data-idx="${i}" class="${i === 0 ? "active" : ""}"><img src="${img}" alt="${product.name} ${i + 1}"></button>
        `).join("")}
      </div>
    `;
  }

  root.innerHTML = `
    <div class="reveal-up">
      <div class="product-media-main">
        <img id="main-image" src="${product.images[0]}" alt="${product.name}">
      </div>
      ${thumbsHTML()}
    </div>
    <div class="product-info reveal-up" style="transition-delay:0.1s">
      <span class="product-category">${product.category}</span>
      <h1 class="product-name">${product.name}</h1>
      <div class="product-brand">Brand: <a href="index.html?brand=${encodeURIComponent(product.brand)}">${product.brand}</a></div>
      ${priceBlockHTML()}
      <div class="section-block">
        <h2>Product Description</h2>
        <p>${product.desc}</p>
      </div>
      ${specsHTML()}
      ${tiersHTML()}
      <div class="cta-row">
        <a class="btn-primary" href="tel:+918943051632">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Call to Order
        </a>
        <a class="btn-secondary" href="index.html">Back to catalog</a>
      </div>
    </div>
  `;

  // Reveal the hero block (image + info) immediately — it's above the fold,
  // a scroll-triggered delay here would just look like a loading glitch.
  requestAnimationFrame(() => {
    root.querySelectorAll(":scope > .reveal-up").forEach((el) => el.classList.add("in-view"));
  });

  const thumbStrip = document.getElementById("thumb-strip");
  if (thumbStrip) {
    thumbStrip.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const mainImg = document.getElementById("main-image");
        mainImg.style.opacity = "0";
        setTimeout(() => {
          mainImg.src = product.images[+btn.dataset.idx];
          mainImg.style.opacity = "1";
        }, 150);
        thumbStrip.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  // How to Use rendered after specs/price, but keep it visually after description — reinsert in right order
  const howTo = howToUseHTML();
  if (howTo) {
    document.querySelector(".cta-row").insertAdjacentHTML("beforebegin", howTo);
  }

  const sameBrand = PRODUCTS.filter((p) => p.brand === product.brand && p.id !== product.id);
  const related = sameBrand.length > 0
    ? sameBrand
    : PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id);
  const relatedTitle = sameBrand.length > 0 ? `More from ${product.brand}` : `More from ${product.category}`;

  const moreSection = document.getElementById("more-from");
  if (related.length === 0) {
    moreSection.remove();
  } else {
    document.getElementById("more-from-title").textContent = relatedTitle;
    const moreGrid = document.getElementById("more-grid");
    moreGrid.innerHTML = related.slice(0, 8).map((p, i) => `
      <a class="card reveal-up" href="product.html?id=${encodeURIComponent(p.id)}" style="transition-delay:${Math.min(i * 0.05, 0.3)}s">
        <div class="card-media">
          <span class="category-badge">${p.category}</span>
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        </div>
        <div class="card-body">
          <span class="card-brand">${p.brand}</span>
          <span class="card-name">${p.name}</span>
          <p class="card-desc">${p.desc}</p>
          ${p.price ? `<div class="card-price"><span class="now">₹${p.price}</span></div>` : ""}
        </div>
      </a>
    `).join("");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      moreGrid.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));
    } else {
      moreGrid.querySelectorAll(".reveal-up").forEach((el) => el.classList.add("in-view"));
    }
  }
})();
