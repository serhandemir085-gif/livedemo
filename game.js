const detailRoot = document.querySelector(".detail-root")
const lightbox = document.querySelector("#lightbox")
const lightboxImage = document.querySelector("#lightboxImage")
const lightboxCaption = document.querySelector("#lightboxCaption")
const lightboxClose = document.querySelector("#lightboxClose")
const isNestedGamePage = window.location.pathname.includes("/oyunlar/")

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function getGameFromUrl() {
  const params = new URLSearchParams(window.location.search)
  return params.get("oyun") || ""
}

function getGameId() {
  return document.body.dataset.gameId || getGameFromUrl()
}

function assetPath(value) {
  return isNestedGamePage ? value.replace("./", "../") : value
}

function homeHref() {
  return isNestedGamePage ? "../index.html#urunler" : "./index.html#urunler"
}

function gameHref(game) {
  return isNestedGamePage
    ? `./${encodeURIComponent(game.id)}.html`
    : `./oyunlar/${encodeURIComponent(game.id)}.html`
}

function renderNotFound() {
  if (!detailRoot) return

  detailRoot.innerHTML = `
    <section class="missing-state reveal is-visible">
      <span class="section-kicker">SYSTEM NOT FOUND</span>
      <h1>İstediğin ürün sayfası bulunamadı.</h1>
      <p>Ana showroom'a dönüp diğer sistemleri açabilirsin.</p>
      <a class="button button-primary" href="${homeHref()}">Showroom'a dön</a>
    </section>
  `
}

function renderDetail(game) {
  if (!detailRoot) return

  document.title = `LivePlay | ${game.title}`
  document.documentElement.style.setProperty("--page-accent", game.accent)
  document.documentElement.style.setProperty("--page-glow", game.glow)

  detailRoot.innerHTML = `
    <section class="product-hero reveal">
      <div class="product-copy">
        <a class="back-link" href="${homeHref()}">← Showroom'a dön</a>
        <span class="section-kicker">${escapeHtml(game.eyebrow)}</span>
        <h1>${escapeHtml(game.title)}</h1>
        <p class="product-summary">${escapeHtml(game.summary)}</p>

        <div class="product-strip">
          ${game.metrics
            .map(
              (metric) => `
                <article>
                  <span>${escapeHtml(metric.label)}</span>
                  <strong>${escapeHtml(metric.value)}</strong>
                </article>
              `,
            )
            .join("")}
        </div>

        <div class="product-actions">
          <a class="button button-primary" href="${escapeHtml(game.buyUrl || window.LIVEPLAY_PROFILE_URL || "#")}" target="_blank" rel="noreferrer">
            ${escapeHtml(game.buyLabel || "İlanı aç")}
          </a>
          <a class="button button-secondary" href="${escapeHtml(window.LIVEPLAY_PROFILE_URL || "#")}" target="_blank" rel="noreferrer">
            CodeHub profili
          </a>
        </div>
      </div>

      <aside class="purchase-panel">
        <div class="purchase-visual media-shell media-fit-${game.homeFit}" style="--preview:url('${assetPath(game.homeImage)}')">
          <img src="${assetPath(game.homeImage)}" alt="${escapeHtml(game.title)} önizleme görseli" />
        </div>

        <div class="purchase-copy">
          <span class="purchase-label">SATIŞ AÇISI</span>
          <strong>${escapeHtml(game.offerTitle)}</strong>
          <p>${escapeHtml(game.offerSummary)}</p>
          <ul class="compact-list">
            ${game.salesPoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
          </ul>
        </div>
      </aside>
    </section>

    <section class="tab-row reveal">
      ${window.LIVEPLAY_GAMES.map(
        (item) => `
          <a class="mini-tab ${item.id === game.id ? "is-active" : ""}" href="${gameHref(item)}">
            <span>${escapeHtml(item.eyebrow)}</span>
            <strong>${escapeHtml(item.title)}</strong>
          </a>
        `,
      ).join("")}
    </section>

    <section class="product-grid reveal">
      <article class="info-card">
        <span class="card-label">Yayında ne olur?</span>
        <h2>İlk saniyeden anlaşılır akış</h2>
        <div class="timeline-list">
          ${game.streamMoments
            .map(
              (item, index) => `
                <article>
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <p>${escapeHtml(item)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </article>

      <article class="info-card">
        <span class="card-label">Paket içeriği</span>
        <h2>Ürünün anlattığı modüller</h2>
        <ul class="compact-list">
          ${game.packageItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>

      <article class="info-card">
        <span class="card-label">Neden satın alınır?</span>
        <h2>Yayıncı tarafında değeri net</h2>
        <ul class="compact-list">
          ${game.marketBullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>

      <article class="info-card">
        <span class="card-label">Teknik yapı</span>
        <h2>Kurulum ve kullanım</h2>
        <p>${escapeHtml(game.setup)}</p>
        <p class="muted-paragraph">${escapeHtml(game.compatibility)}</p>
      </article>
    </section>

    <section class="section-head reveal">
      <span class="section-kicker">GÖRSEL AKIŞ</span>
      <h2>Ürünün sahnede nasıl göründüğü</h2>
      <p>Büyük tek bir görsel yerine farklı sahne anları küçük ve net kartlarla sunulur.</p>
    </section>

    <section class="gallery-grid">
      ${game.gallery
        .map(
          (item, index) => `
            <button
              class="gallery-card reveal ${index === 0 ? "gallery-card-wide" : ""}"
              type="button"
              data-lightbox-src="${assetPath(item.src)}"
              data-lightbox-title="${escapeHtml(item.title)}"
              data-lightbox-caption="${escapeHtml(item.caption)}"
            >
              <div class="media-shell media-fit-${item.fit}" style="--preview:url('${assetPath(item.src)}')">
                <img src="${assetPath(item.src)}" alt="${escapeHtml(item.title)}" />
              </div>
              <div class="gallery-copy">
                <strong>${escapeHtml(item.title)}</strong>
                <span>${escapeHtml(item.caption)}</span>
              </div>
            </button>
          `,
        )
        .join("")}
    </section>

    <section class="section-head reveal">
      <span class="section-kicker">ÖNE ÇIKAN MODÜLLER</span>
      <h2>Sistemin güçlü tarafları</h2>
    </section>

    <section class="module-grid">
      ${game.features
        .map(
          (feature, index) => `
            <article class="module-card reveal ${index % 2 === 0 ? "" : "delay-1"}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <h3>${escapeHtml(feature.title)}</h3>
              <p>${escapeHtml(feature.text)}</p>
            </article>
          `,
        )
        .join("")}
    </section>

    <section class="section-head reveal">
      <span class="section-kicker">DİĞER ÜRÜNLER</span>
      <h2>Sayfalar arasında geçiş yap</h2>
    </section>

    <section class="related-grid">
      ${window.LIVEPLAY_GAMES.filter((item) => item.id !== game.id)
        .map(
          (item) => `
            <a class="related-card reveal" href="${gameHref(item)}">
              <div class="media-shell media-shell-mini media-fit-${item.homeFit}" style="--preview:url('${assetPath(item.homeImage)}')">
                <img src="${assetPath(item.homeImage)}" alt="${escapeHtml(item.title)}" />
              </div>
              <div class="related-copy">
                <span>${escapeHtml(item.eyebrow)}</span>
                <strong>${escapeHtml(item.title)}</strong>
              </div>
            </a>
          `,
        )
        .join("")}
    </section>
  `
}

function openLightbox(src, title, caption) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return
  lightboxImage.src = src
  lightboxImage.alt = title
  lightboxCaption.textContent = `${title} - ${caption}`
  lightbox.hidden = false
  document.body.classList.add("body-locked")
}

function closeLightbox() {
  if (!lightbox) return
  lightbox.hidden = true
  document.body.classList.remove("body-locked")
}

function bindLightbox() {
  document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(
        button.getAttribute("data-lightbox-src") || "",
        button.getAttribute("data-lightbox-title") || "",
        button.getAttribute("data-lightbox-caption") || "",
      )
    })
  })

  lightboxClose?.addEventListener("click", closeLightbox)
  document.querySelectorAll("[data-close-lightbox]").forEach((element) => {
    element.addEventListener("click", closeLightbox)
  })

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox()
  })
}

function bindPageTransitions() {
  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href") || ""
      if (!href || href.startsWith("#")) return
      if (link.target === "_blank") return
      if (href.startsWith("http")) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      event.preventDefault()
      document.body.classList.add("page-leaving")
      window.setTimeout(() => {
        window.location.href = href
      }, 220)
    })
  })
}

function bootReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible")
      })
    },
    { threshold: 0.14 },
  )

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element))
  window.setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"))
  }, 120)
}

function init() {
  const game = window.LIVEPLAY_LOOKUP?.[getGameId()]
  if (!game) {
    renderNotFound()
    return
  }

  renderDetail(game)
  bindLightbox()
  bindPageTransitions()
  bootReveals()
}

init()
