(function () {
  const presentCategories = [...new Set(PRODUCTS.map((p) => p.category))];
  const TABS = ["All", ...CATEGORIES.filter((c) => presentCategories.includes(c))];

  const grid = document.getElementById("grid");
  const tabsEl = document.getElementById("tabs");
  const searchEl = document.getElementById("search");
  const countEl = document.getElementById("result-count");
  const marqueeEl = document.getElementById("marquee-track");

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "All";
  let activeBrand = params.get("brand") || null;
  let query = "";
  let firstRender = true;

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      )
    : null;

  function renderMarquee() {
    if (!marqueeEl) return;
    const brandsWithLogos = BRANDS.filter((b) => b.logo && PRODUCTS.some((p) => p.brandSlug === b.id));
    if (brandsWithLogos.length === 0) {
      marqueeEl.closest(".brand-marquee")?.remove();
      return;
    }
    const logos = brandsWithLogos
      .map((b) => `<img src="${b.logo}" alt="${b.name}" loading="lazy">`)
      .join("");
    marqueeEl.innerHTML = logos + logos; // duplicated for seamless loop
  }

  function positionTabIndicator() {
    const indicator = document.getElementById("tab-indicator");
    const activeBtn = tabsEl.querySelector(".tab-btn.active");
    if (!indicator || !activeBtn) return;
    indicator.style.width = `${activeBtn.offsetWidth}px`;
    indicator.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
  }

  function renderTabs() {
    const buttons = TABS.map((cat) => `
      <button class="tab-btn${cat === activeCategory ? " active" : ""}" data-cat="${cat}">${cat}</button>
    `).join("");
    tabsEl.innerHTML = `<div class="tab-indicator" id="tab-indicator"></div>${buttons}`;
    tabsEl.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        activeBrand = null;
        renderTabs();
        renderGrid();
      });
    });
    positionTabIndicator();
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
    const delay = Math.min(index * 0.04, 0.4);
    const img = p.images[0] || "";
    return `
      <a class="card reveal-up" href="product.html?id=${encodeURIComponent(p.id)}" style="transition-delay:${delay}s">
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

    if (revealObserver) {
      grid.querySelectorAll(".reveal-up").forEach((el) => revealObserver.observe(el));
    } else {
      grid.querySelectorAll(".reveal-up").forEach((el) => el.classList.add("in-view"));
    }
  }

  searchEl.addEventListener("input", (e) => {
    query = e.target.value.trim().toLowerCase();
    renderGrid();
  });

  window.addEventListener("resize", positionTabIndicator);

  renderMarquee();
  renderTabs();
  renderGrid();
})();
