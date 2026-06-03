const currency = new Intl.NumberFormat("vi-VN");
const inPagesDir = window.location.pathname.includes("/pages/");
const pageHref = (name) => inPagesDir ? name : `pages/${name}`;

function formatMoney(value) {
  if (!value) return "Đã gồm";
  if (value >= 1000000) return `${(value / 1000000).toFixed(value % 1000000 ? 1 : 0)} triệu`;
  return `${currency.format(value)}đ`;
}

function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

function getSelectedAmenities() {
  return qsa("[data-filter-amenity]:checked").map((item) => item.value);
}

function getTrustBadges(property) {
  const tags = property.tags.join(" ").toLowerCase();
  const amenities = new Set(property.amenities);
  const badges = [
    { label: "Tin đã kiểm duyệt", type: "verified", show: true },
    { label: "PCCC", type: "safety", show: amenities.has("pccc") || tags.includes("pccc") },
    { label: "Camera", type: "safety", show: amenities.has("security") || tags.includes("camera") },
    { label: "Giờ tự do", type: "comfort", show: tags.includes("giờ tự do") || tags.includes("gio tu do") },
    { label: "Hợp đồng điện tử", type: "contract", show: property.deposit > 0 },
    { label: "Chi phí tách riêng", type: "cost", show: property.electricity > 0 || property.water > 0 || property.service > 0 }
  ];
  return badges.filter((badge) => badge.show);
}

function renderTrustBadges(property, limit = 4) {
  return `<div class="trust-badges">${getTrustBadges(property).slice(0, limit).map((badge) => `<span class="trust-badge trust-badge--${badge.type}">${badge.label}</span>`).join("")}</div>`;
}

function renderTrustPanel(property) {
  const feeMessage = property.electricity || property.water || property.service
    ? `Giá thuê tách riêng điện ${property.electricity ? currency.format(property.electricity) + "đ/kWh" : "trọn gói"}, nước ${property.water ? currency.format(property.water) + "đ/" + property.waterUnit : "trọn gói"} và phí dịch vụ ${property.service ? currency.format(property.service) + "đ/tháng" : "không thu"}.`
    : "Giá thuê đang hiển thị theo gói trọn gói, không tách thêm điện nước trong dữ liệu mẫu.";
  const safetyMessage = property.amenities.includes("pccc") || property.amenities.includes("security")
    ? "PCCC và camera/an ninh được gắn nhãn trong tin để người thuê kiểm tra nhanh trước khi đặt lịch."
    : "Tin đã chuẩn hóa thông tin cơ bản; người thuê nên xác nhận thêm PCCC và an ninh khi xem phòng.";
  return `
    <div class="panel trust-panel">
      <div>
        <span class="eyebrow">Thông tin đáng tin cậy</span>
        <h2>Minh bạch trước khi đặt lịch</h2>
      </div>
      ${renderTrustBadges(property, 6)}
      <div class="trust-list">
        <p><strong>Chi phí rõ ràng</strong>${feeMessage}</p>
        <p><strong>Hợp đồng</strong>Hỗ trợ hợp đồng SMS/điện tử hoặc nhãn “Tin đã kiểm duyệt” trong giai đoạn frontend tĩnh.</p>
        <p><strong>An toàn</strong>${safetyMessage}</p>
      </div>
    </div>
  `;
}

function cardTemplate(property) {
  const feeLine = `Điện ${property.electricity ? currency.format(property.electricity) + "đ/kWh" : "trọn gói"} - Nước ${property.water ? currency.format(property.water) + "đ/" + property.waterUnit : "trọn gói"}`;
  return `
    <article class="listing-card" data-id="${property.id}">
      <a class="listing-media" href="${pageHref("detail.html")}?id=${property.id}" aria-label="Xem ${property.title}">
        <img src="${property.image}" alt="${property.title}" loading="lazy">
        <span>${property.posted}</span>
      </a>
      <div class="listing-body">
        <div class="listing-meta">
          <span>${property.typeLabel}</span>
          <span>${property.district}, ${property.city}</span>
        </div>
        <h3><a href="${pageHref("detail.html")}?id=${property.id}">${property.title}</a></h3>
        <p>${property.address}</p>
        <div class="price-row">
          <strong>${formatMoney(property.price)}/tháng</strong>
          <span>${property.area} m2</span>
        </div>
        <div class="mini-specs">
          <span>Cọc ${formatMoney(property.deposit)}</span>
          <span>${feeLine}</span>
          <span>${property.commute} phút di chuyển</span>
        </div>
        ${renderTrustBadges(property)}
        <div class="tag-list">${property.tags.slice(0, 4).map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
    </article>
  `;
}

function compactCardTemplate(property) {
  return `
    <a class="compact-card" href="${pageHref("detail.html")}?id=${property.id}">
      <img src="${property.image}" alt="${property.title}" loading="lazy">
      <span>${property.typeLabel}</span>
      <strong>${property.title}</strong>
      <small>${formatMoney(property.price)}/tháng - ${property.area} m2</small>
    </a>
  `;
}

function blogCardTemplate(post) {
  return `
    <article class="blog-card">
      <a class="blog-media" href="${pageHref("blog-detail.html")}?id=${post.id}">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </a>
      <div class="blog-body">
        <div class="listing-meta">
          <span>${post.category}</span>
          <span>${post.readTime}</span>
        </div>
        <h3><a href="${pageHref("blog-detail.html")}?id=${post.id}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
        <a class="text-link" href="${pageHref("blog-detail.html")}?id=${post.id}">Đọc bài viết</a>
      </div>
    </article>
  `;
}

function renderHome() {
  const featured = qs("[data-featured-list]");
  if (featured) featured.innerHTML = NHAXANH_PROPERTIES.slice(0, 3).map(cardTemplate).join("");

  const compact = qs("[data-compact-list]");
  if (compact) compact.innerHTML = NHAXANH_PROPERTIES.slice(3, 6).map(compactCardTemplate).join("");

  const homeBlogs = qs("[data-home-blogs]");
  if (homeBlogs) homeBlogs.innerHTML = NHAXANH_BLOGS.slice(0, 3).map(blogCardTemplate).join("");
}

function applyFilters() {
  const form = qs("[data-filter-form]");
  const result = qs("[data-results]");
  if (!form || !result) return;

  const values = Object.fromEntries(new FormData(form).entries());
  const selectedAmenities = getSelectedAmenities();
  const keyword = (values.keyword || "").trim().toLowerCase();
  const minPrice = Number(values.minPrice || 0);
  const maxPrice = Number(values.maxPrice || Number.MAX_SAFE_INTEGER);
  const minArea = Number(values.minArea || 0);
  const maxArea = Number(values.maxArea || Number.MAX_SAFE_INTEGER);
  const maxElectricity = Number(values.maxElectricity || Number.MAX_SAFE_INTEGER);
  const maxWater = Number(values.maxWater || Number.MAX_SAFE_INTEGER);
  const maxDepositMonths = Number(values.maxDepositMonths || Number.MAX_SAFE_INTEGER);

  let filtered = NHAXANH_PROPERTIES.filter((property) => {
    const searchable = `${property.title} ${property.address} ${property.district} ${property.city} ${property.tags.join(" ")}`.toLowerCase();
    const keywordMatch = !keyword || searchable.includes(keyword);
    const locationMatch = !values.city || property.city === values.city;
    const typeMatch = !values.type || property.type === values.type;
    const priceMatch = property.price >= minPrice && property.price <= maxPrice;
    const areaMatch = property.area >= minArea && property.area <= maxArea;
    const electricMatch = property.electricity <= maxElectricity || property.electricity === 0;
    const waterMatch = property.water <= maxWater || property.water === 0;
    const depositMatch = property.deposit <= property.price * maxDepositMonths;
    const amenityMatch = selectedAmenities.every((amenity) => property.amenities.includes(amenity));
    return keywordMatch && locationMatch && typeMatch && priceMatch && areaMatch && electricMatch && waterMatch && depositMatch && amenityMatch;
  });

  if (values.sort === "priceAsc") filtered.sort((a, b) => a.price - b.price);
  if (values.sort === "priceDesc") filtered.sort((a, b) => b.price - a.price);
  if (values.sort === "areaDesc") filtered.sort((a, b) => b.area - a.area);
  if (values.sort === "vibeDesc") filtered.sort((a, b) => b.vibe - a.vibe);

  qs("[data-result-count]").textContent = `${filtered.length} kết quả phù hợp`;
  result.innerHTML = filtered.length ? filtered.map(cardTemplate).join("") : `<div class="empty-state"><strong>Chưa có phòng phù hợp</strong><span>Thử nới rộng khoảng giá, diện tích hoặc bỏ bớt tiện ích bắt buộc.</span></div>`;
}

function renderListings() {
  const amenityWrap = qs("[data-amenities]");
  if (amenityWrap) {
    amenityWrap.innerHTML = Object.entries(NHAXANH_AMENITIES).map(([key, label]) => `
      <label class="check-chip">
        <input type="checkbox" value="${key}" data-filter-amenity>
        <span>${label}</span>
      </label>
    `).join("");
  }

  const form = qs("[data-filter-form]");
  if (form) {
    const params = new URLSearchParams(window.location.search);
    params.forEach((value, key) => {
      const field = form.elements[key];
      if (field && value) field.value = value;
    });
    form.addEventListener("input", applyFilters);
    form.addEventListener("reset", () => setTimeout(applyFilters, 0));
    applyFilters();
  }
}

function renderDetail() {
  const detail = qs("[data-detail]");
  if (!detail) return;
  const params = new URLSearchParams(window.location.search);
  const property = NHAXANH_PROPERTIES.find((item) => item.id === params.get("id")) || NHAXANH_PROPERTIES[0];
  document.title = `${property.title} | Nhà Xanh`;
  detail.innerHTML = `
    <section class="detail-hero">
      <img src="${property.image}" alt="${property.title}">
      <div class="detail-summary">
        <span class="eyebrow">${property.typeLabel} tại ${property.district}</span>
        <h1>${property.title}</h1>
        <p>${property.description}</p>
        <div class="detail-price">${formatMoney(property.price)}/tháng</div>
        <div class="tag-list">${property.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
    </section>
    <section class="content-grid">
      <div class="detail-stack">
        <div class="panel">
          <h2>Thông tin thuê</h2>
          <div class="spec-grid">
            <span><strong>${property.area} m2</strong>Diện tích</span>
            <span><strong>${formatMoney(property.deposit)}</strong>Tiền cọc</span>
            <span><strong>${property.electricity ? currency.format(property.electricity) + "đ" : "Trọn gói"}</strong>Điện mỗi kWh</span>
            <span><strong>${property.water ? currency.format(property.water) + "đ" : "Trọn gói"}</strong>Nước / ${property.waterUnit}</span>
            <span><strong>${property.service ? currency.format(property.service) + "đ" : "Không thu"}</strong>Phí dịch vụ</span>
            <span><strong>${property.availableFrom}</strong>Có thể vào ở</span>
          </div>
        </div>
        ${renderTrustPanel(property)}
      </div>
      <aside class="contact-box">
        <h2>Hẹn xem phòng</h2>
        <p>${property.landlord} - ${property.phone}</p>
        <button class="primary-btn" type="button">Gửi yêu cầu xem phòng</button>
        <button class="ghost-btn" type="button">Chat với chủ nhà</button>
      </aside>
    </section>
  `;
}

function renderBlogList() {
  const blogList = qs("[data-blog-list]");
  if (!blogList) return;
  blogList.innerHTML = NHAXANH_BLOGS.map(blogCardTemplate).join("");
}

function renderBlogDetail() {
  const article = qs("[data-blog-detail]");
  if (!article) return;
  const params = new URLSearchParams(window.location.search);
  const post = NHAXANH_BLOGS.find((item) => item.id === params.get("id")) || NHAXANH_BLOGS[0];
  document.title = `${post.title} | Blog Nhà Xanh`;
  article.innerHTML = `
    <section class="article-hero">
      <div>
        <span class="eyebrow">${post.category}</span>
        <h1>${post.title}</h1>
        <p>${post.excerpt}</p>
        <div class="article-meta">${post.date} - ${post.readTime}</div>
      </div>
      <img src="${post.image}" alt="${post.title}">
    </section>
    <section class="article-content">
      ${post.content.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <a class="ghost-btn" href="blog.html">Quay lại blog</a>
    </section>
  `;
}

function initTabs() {
  qsa("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest("[data-tabs]");
      qsa("[data-tab]", group).forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const target = button.dataset.tab;
      qsa("[data-tab-panel]").forEach((panel) => panel.hidden = panel.dataset.tabPanel !== target);
    });
  });
}

function initMobileNav() {
  const toggle = qs("[data-nav-toggle]");
  const nav = qs("[data-nav]");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("is-open"));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  renderListings();
  renderDetail();
  renderBlogList();
  renderBlogDetail();
  initTabs();
  initMobileNav();
});
