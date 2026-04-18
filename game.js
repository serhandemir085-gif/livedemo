const detailRoot = document.querySelector(".detail-root")
const lightbox = document.querySelector("#lightbox")
const lightboxImage = document.querySelector("#lightboxImage")
const lightboxCaption = document.querySelector("#lightboxCaption")
const lightboxClose = document.querySelector("#lightboxClose")
const cursorGlowDetail = document.querySelector(".cursor-glow")

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function getGameFromUrl() {
  const params = new URLSearchParams(window.location.search)
  return params.get("oyun") || ""
}

function renderNotFound() {
  if (!detailRoot) return
  detailRoot.innerHTML = `
    <section class="missing-state reveal is-visible">
      <span class="eyebrow">OYUN BULUNAMADI</span>
      <h1>İstediğin detay sayfası şu an yok.</h1>
      <p>Listeye dönüp diğer vitrinleri açabilirsin.</p>
      <a class="button button-primary" href="./index.html#oyunlar">Oyun listesine dön</a>
    </section>
  `
}

function renderDetail(game) {
  if (!detailRoot) return

  document.title = `LivePlay | ${game.title}`
  document.documentElement.style.setProperty("--page-accent", game.accent)
  document.documentElement.style.setProperty("--page-glow", game.glow)

  detailRoot.innerHTML = `
    <section class="detail-hero reveal">
      <div class="detail-copy">
        <a class="back-link" href="./index.html#oyunlar">← Tüm oyunlara dön</a>
        <span class="eyebrow">${escapeHtml(game.eyebrow)}</span>
        <h1>${escapeHtml(game.title)}</h1>
        <p class="detail-description">${escapeHtml(game.description)}</p>

        <div class="chip-row">
          ${game.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>

        <div class="detail-stat-grid">
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

      <div class="detail-visual">
        <div class="media-shell media-shell-detail media-fit-${game.homeFit}" style="--preview:url('${game.homeImage}')">
          <img src="${game.homeImage}" alt="${escapeHtml(game.title)} ana görseli" />
        </div>
      </div>
    </section>

    <section class="detail-columns">
      <article class="detail-panel reveal">
        <span class="panel-label">Kurulum mantığı</span>
        <p>${escapeHtml(game.setup)}</p>
      </article>

      <article class="detail-panel reveal delay-1">
        <span class="panel-label">Yayında ne olur?</span>
        <ol class="story-list">
          ${game.streamFlow.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ol>
      </article>

      <article class="detail-panel detail-panel-wide reveal delay-2">
        <span class="panel-label">Bu oyun neden çalışır?</span>
        <div class="reason-pills">
          ${game.reasons.map((reason) => `<span>${escapeHtml(reason)}</span>`).join("")}
        </div>
      </article>
    </section>

    <section class="section-head reveal">
      <span class="eyebrow">SAHNE GALERİSİ</span>
      <h2>Yayın içinde gerçekten nasıl görünür?</h2>
      <p>Her kart tıklanabilir. Büyük haliyle yalnızca oyunun kendisini görürsün.</p>
    </section>

    <section class="gallery-grid">
      ${game.gallery
        .map(
          (item, index) => `
            <button
              class="gallery-card gallery-card--${index === 0 ? "wide" : "standard"} reveal"
              type="button"
              data-lightbox-src="${item.src}"
              data-lightbox-title="${escapeHtml(item.title)}"
              data-lightbox-caption="${escapeHtml(item.caption)}"
              style="--accent:${game.accent}; --glow:${game.glow};"
            >
              <div class="media-shell media-shell-gallery media-fit-${item.fit}" style="--preview:url('${item.src}')">
                <img src="${item.src}" alt="${escapeHtml(item.title)}" />
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
      <span class="eyebrow">ETKİ MOTORU</span>
      <h2>Bu oyunda hangi anlar izleyiciyi geri çağırır?</h2>
    </section>

    <section class="feature-grid">
      ${game.features
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
      <span class="eyebrow">İLGİLİ VİTRİNLER</span>
      <h2>Diğer sahneleri de karşılaştır</h2>
    </section>

    <section class="related-grid">
      ${window.LIVEPLAY_GAMES.filter((item) => item.id !== game.id)
        .slice(0, 3)
        .map(
          (item) => `
            <a class="related-card reveal" href="./game.html?oyun=${encodeURIComponent(item.id)}" style="--accent:${item.accent}; --glow:${item.glow};">
              <div class="media-shell media-shell-mini media-fit-${item.homeFit}" style="--preview:url('${item.homeImage}')">
                <img src="${item.homeImage}" alt="${escapeHtml(item.title)}" />
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

function bootReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
        }
      })
    },
    { threshold: 0.16 },
  )

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element))

  window.setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"))
  }, 180)
}

function bindCursorGlow() {
  if (!cursorGlowDetail) return
  window.addEventListener("mousemove", (event) => {
    cursorGlowDetail.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
  })
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
    if (event.key === "Escape") {
      closeLightbox()
    }
  })
}

function init() {
  const gameId = getGameFromUrl()
  const game = window.LIVEPLAY_LOOKUP?.[gameId]

  if (!game) {
    renderNotFound()
    return
  }

  renderDetail(game)
  bootReveals()
  bindCursorGlow()
  bindLightbox()
}

init()
