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
      <span class="eyebrow">SİSTEM BULUNAMADI</span>
      <h1>İstediğin ürün sayfası şu an yok.</h1>
      <p>Ana vitrine dönüp diğer sistemleri açabilirsin.</p>
      <a class="button button-primary" href="${homeHref()}">Ürün kataloğuna dön</a>
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
        <a class="back-link" href="${homeHref()}">← Kataloğa dön</a>
        <span class="eyebrow">${escapeHtml(game.eyebrow)}</span>
        <h1>${escapeHtml(game.title)}</h1>
        <p class="detail-description">${escapeHtml(game.offerSummary || game.description)}</p>

        <div class="product-actions">
          <a class="button button-primary" href="${escapeHtml(game.buyUrl || window.LIVEPLAY_PROFILE_URL || "#")}" target="_blank" rel="noreferrer">
            ${escapeHtml(game.buyLabel || "İlana git")}
          </a>
          <a class="button button-secondary" href="${escapeHtml(window.LIVEPLAY_PROFILE_URL || "#")}" target="_blank" rel="noreferrer">
            CodeHub profili
          </a>
        </div>

        <div class="detail-tabs">
          ${window.LIVEPLAY_GAMES.map(
            (item) => `
              <a class="detail-tab ${item.id === game.id ? "is-active" : ""}" href="${gameHref(item)}">
                <span>${escapeHtml(item.eyebrow)}</span>
                <strong>${escapeHtml(item.title)}</strong>
              </a>
            `,
          ).join("")}
        </div>

        <div class="product-stats">
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
      </div>

      <div class="product-visual media-shell media-fit-${game.homeFit}" style="--preview:url('${assetPath(game.homeImage)}')">
        <img src="${assetPath(game.homeImage)}" alt="${escapeHtml(game.title)} ana görseli" />
      </div>
    </section>

    <section class="overview-grid reveal">
      <article class="overview-card">
        <span class="panel-label">Ne yapar?</span>
        <p>${escapeHtml(game.growthLead || game.teaser)}</p>
        <div class="catalog-tags">
          ${game.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
      </article>

      <article class="overview-card">
        <span class="panel-label">Kurulum</span>
        <p>${escapeHtml(game.setup)}</p>
      </article>

      <article class="overview-card">
        <span class="panel-label">Paket hissi</span>
        <ul class="compact-list">
          ${(game.packageItems || []).slice(0, 4).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>

      <article class="overview-card">
        <span class="panel-label">Teknik vurgular</span>
        <ul class="compact-list">
          <li>${escapeHtml(game.compatibility)}</li>
          ${(game.marketBullets || []).slice(0, 3).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    </section>

    <section class="section-head reveal">
      <span class="eyebrow">SAHNE DURUMLARI</span>
      <h2>Yayında nasıl görünür?</h2>
      <p>Küçük ve okunabilir sahne önizlemeleriyle ürün davranışını hızlıca göster.</p>
    </section>

    <section class="visual-grid">
      ${game.gallery
        .slice(0, 4)
        .map(
          (item, index) => `
            <button
              class="visual-card reveal ${index === 0 ? "visual-card-wide" : ""}"
              type="button"
              data-lightbox-src="${assetPath(item.src)}"
              data-lightbox-title="${escapeHtml(item.title)}"
              data-lightbox-caption="${escapeHtml(item.caption)}"
              style="--accent:${game.accent}; --glow:${game.glow};"
            >
              <div class="media-shell media-shell-visual media-fit-${item.fit}" style="--preview:url('${assetPath(item.src)}')">
                <img src="${assetPath(item.src)}" alt="${escapeHtml(item.title)}" />
              </div>
              <div class="visual-copy">
                <strong>${escapeHtml(item.title)}</strong>
                <span>${escapeHtml(item.caption)}</span>
              </div>
            </button>
          `,
        )
        .join("")}
    </section>

    <section class="section-head reveal">
      <span class="eyebrow">ÖNE ÇIKAN NOKTALAR</span>
      <h2>Bu sistemin güçlü tarafları</h2>
    </section>

    <section class="feature-grid compact-feature-grid">
      ${game.features
        .slice(0, 4)
        .map(
          (feature, index) => `
            <article class="feature-card reveal ${index % 2 === 0 ? "" : "delay-1"}">
              <span class="feature-index">${String(index + 1).padStart(2, "0")}</span>
              <h3>${escapeHtml(feature.title)}</h3>
              <p>${escapeHtml(feature.text)}</p>
            </article>
          `,
        )
        .join("")}
    </section>

    <section class="section-head reveal">
      <span class="eyebrow">DİĞER SİSTEMLER</span>
      <h2>Geçiş yapabileceğin diğer ürünler</h2>
    </section>

    <section class="related-grid compact-related-grid">
      ${window.LIVEPLAY_GAMES.filter((item) => item.id !== game.id)
        .map(
          (item) => `
            <a class="related-card reveal" href="${gameHref(item)}" style="--accent:${item.accent}; --glow:${item.glow};">
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
  lightboxCaption.textContent = `${title} — ${caption}`
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
      }, 200)
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
    { threshold: 0.12 },
  )

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element))
  window.setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"))
  }, 120)
}

function init() {
  const gameId = getGameId()
  const game = window.LIVEPLAY_LOOKUP?.[gameId]

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
