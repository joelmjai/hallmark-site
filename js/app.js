(function () {
  const presentCategories = [...new Set(PRODUCTS.map((p) => p.category))];
  const TABS = ["All", ...CATEGORIES.filter((c) => presentCategories.includes(c))];

  const grid = document.getElementById("grid");
  const tabsEl = document.getElementById("tabs");
  const searchEl = document.getElementById("search");
  const countEl = document.getElementById("result-count");

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "All";
  let activeBrand = params.get("brand") || null;
  let query = "";
  let firstRender = true;

  function slug(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }

  function renderTabs() {
    tabsEl.innerHTML = TABS.map((cat) => `
      <button class="tab-btn${cat === activeCategory ? " active" : ""}" data-cat="${cat}">${cat}</button>
    `).join("");
    tabsEl.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        activeBrand = null;
        renderTabs();
        renderGrid();
      });
    });
  }

  function matches(p) {
    if (activeBrand && p.brand !== activeBrand) return false;
    const inCategory = activeCategory === "All" || p.category === activeCategory;
    if (!inCategory) return false;
    if (!query) return true;
    const haystack = `${p.name} ${p.brand} ${p.desc}`.toLowerCase();
    return haystack.includes(query);
  }

  function priceHTML(p) {
    if (!p.price) return "";
    const isRealDiscount = p.wasPrice && parseFloat(p.wasPrice) > parseFloat(p.price);
    const was = isRealDiscount ? `<span class="was">₹${p.wasPrice}</span>` : "";
    return `<div class="card-price"><span class="now">₹${p.price}</span>${was}</div>`;
  }

  function cardHTML(p, index) {
    const delay = firstRender ? Math.min(index * 0.03, 0.4) : 0;
    const img = p.images[0] || "";
    return `
      <a class="card" href="product.html?id=${encodeURIComponent(p.id)}" style="animation-delay:${delay}s">
        <div class="card-media">
          <span class="category-badge">${p.category}</span>
          <img src="${img}" alt="${p.name}" loading="lazy">
        </div>
        <div class="card-body">
          <span class="card-brand">${p.brand}</span>
          <span class="card-name">${p.name}</span>
          <p class="card-desc">${p.desc}</p>
          ${priceHTML(p)}
        </div>
      </a>
    `;
  }

  function renderGrid() {
    const results = PRODUCTS.filter(matches);
    const brandNote = activeBrand ? ` from ${activeBrand}` : "";
    countEl.textContent = `${results.length} product${results.length === 1 ? "" : "s"}${brandNote}`;

    if (results.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <strong>No products match that search</strong>
          Try a different keyword or clear the category filter.
        </div>
      `;
      return;
    }
    grid.innerHTML = results.map(cardHTML).join("");
    firstRender = false;
  }

  searchEl.addEventListener("input", (e) => {
    query = e.target.value.trim().toLowerCase();
    renderGrid();
  });

  renderTabs();
  renderGrid();
})();
