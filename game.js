const detailRoot = document.querySelector(".detail-root")
const lightbox = document.querySelector("#lightbox")
const lightboxImage = document.querySelector("#lightboxImage")
const lightboxCaption = document.querySelector("#lightboxCaption")
const lightboxClose = document.querySelector("#lightboxClose")
const cursorGlowDetail = document.querySelector(".cursor-glow")
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
  if (!isNestedGamePage) return value
  return value.replace("./", "../")
}

function getHomeHref() {
  return isNestedGamePage ? "../index.html#oyunlar" : "./index.html#oyunlar"
}

function getGameHref(game) {
  return isNestedGamePage
    ? `./${encodeURIComponent(game.id)}.html`
    : `./oyunlar/${encodeURIComponent(game.id)}.html`
}

function renderNotFound() {
  if (!detailRoot) return
  detailRoot.innerHTML = `
    <section class="missing-state reveal is-visible">
      <span class="eyebrow">OYUN BULUNAMADI</span>
      <h1>İstediğin detay sayfası şu an yok.</h1>
      <p>Listeye dönüp diğer vitrinleri açabilirsin.</p>
      <a class="button button-primary" href="${getHomeHref()}">Oyun listesine dön</a>
    </section>
  `
}

function renderDetail(game) {
  if (!detailRoot) return

  const growthMap = game.growthMap || []
  const creatorLines = game.creatorLines || []
  const audienceFlow = game.audienceFlow || []
  const marketBullets = game.marketBullets || []
  const packageItems = game.packageItems || []

  document.title = `LivePlay | ${game.title}`
  document.documentElement.style.setProperty("--page-accent", game.accent)
  document.documentElement.style.setProperty("--page-glow", game.glow)

  detailRoot.innerHTML = `
    <section class="detail-hero reveal">
      <div class="detail-copy">
        <a class="back-link" href="${getHomeHref()}">← Tüm oyunlara dön</a>
        <span class="eyebrow">${escapeHtml(game.eyebrow)}</span>
        <h1>${escapeHtml(game.title)}</h1>
        <p class="detail-description">${escapeHtml(game.description)}</p>

        <div class="detail-tabs">
          ${window.LIVEPLAY_GAMES.map(
            (item) => `
              <a class="detail-tab ${item.id === game.id ? "is-active" : ""}" href="${getGameHref(item)}">
                <span>${escapeHtml(item.eyebrow)}</span>
                <strong>${escapeHtml(item.title)}</strong>
              </a>
            `,
          ).join("")}
        </div>

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
        <div class="media-shell media-shell-detail media-fit-${game.homeFit}" style="--preview:url('${assetPath(game.homeImage)}')">
          <img src="${assetPath(game.homeImage)}" alt="${escapeHtml(game.title)} ana görseli" />
        </div>
      </div>
    </section>

    <section class="buy-panel reveal">
      <article class="buy-card" style="--accent:${game.accent}; --glow:${game.glow};">
        <div>
          <span class="panel-label">Satın alma alanı</span>
          <h2>${escapeHtml(game.title)} için ilgili ilana geç</h2>
          <p class="detail-description">${escapeHtml(game.offerSummary || game.growthLead || game.description)}</p>
        </div>

        <div class="buy-actions">
          <a class="button button-primary" href="${escapeHtml(game.buyUrl || window.LIVEPLAY_PROFILE_URL || "#")}" target="_blank" rel="noreferrer">
            ${escapeHtml(game.buyLabel || "İlana git")}
          </a>
          <a class="button button-secondary" href="${escapeHtml(window.LIVEPLAY_PROFILE_URL || "#")}" target="_blank" rel="noreferrer">
            CodeHub profili
          </a>
        </div>
      </article>
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

    <section class="magnet-board reveal">
      <div class="section-head section-head-inline">
        <span class="eyebrow">KEŞFET PROFİLİ</span>
        <h2>Bu oyun YouTube keşfetinde neden dikkat çeker?</h2>
        <p>${escapeHtml(game.growthLead || game.teaser)}</p>
      </div>

      <div class="growth-grid growth-grid-detail">
        ${growthMap
          .map(
            (item) => `
              <article class="growth-card" style="--accent:${game.accent}; --glow:${game.glow};">
                <span>${escapeHtml(item.label)}</span>
                <strong>${escapeHtml(item.value)}</strong>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="voice-board voice-board-detail reveal">
      <div class="voice-layout">
        <article class="voice-panel" style="--accent:${game.accent}; --glow:${game.glow};">
          <span class="panel-label">Sunucunun açılış cümleleri</span>
          <h2>${escapeHtml(game.title)} ile sohbeti ilk saniyede oyuna sok</h2>
          <ol class="quote-list">
            ${creatorLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
          </ol>
        </article>

        <article class="voice-panel voice-panel-secondary" style="--accent:${game.accent}; --glow:${game.glow};">
          <span class="panel-label">İzleyiciyi neden geri çağırır?</span>
          <p class="voice-lead">${escapeHtml(game.growthLead || game.description)}</p>
          <ul class="pulse-list">
            ${audienceFlow.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </article>
      </div>
    </section>

    <section class="section-head reveal">
      <span class="eyebrow">ÜRÜN MANTIĞI</span>
      <h2>Bu sistem satılırken hangi vaatlerle öne çıkıyor?</h2>
      <p>Canlı yayın odaklı script satış dilindeki güçlü noktaları, teknoloji ve yayın akışı tarafından desteklenmiş şekilde burada topladık.</p>
    </section>

    <section class="detail-columns commerce-columns">
      <article class="detail-panel detail-panel-wide reveal">
        <span class="panel-label">Satış dilindeki ana vaat</span>
        <p>${escapeHtml(game.offerSummary || game.growthLead || game.description)}</p>
        <div class="reason-pills">
          ${marketBullets.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>

      <article class="detail-panel reveal delay-1">
        <span class="panel-label">Paket içeriği hissi</span>
        <ul class="pulse-list">
          ${packageItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>

      <article class="detail-panel reveal delay-2">
        <span class="panel-label">Teknik vurgular</span>
        <ul class="pulse-list">
          <li>${escapeHtml(game.compatibility)}</li>
          <li>${escapeHtml(game.metrics?.[0]?.value || "Canlı yayın için optimize kurulum")}</li>
          <li>${escapeHtml(game.metrics?.[1]?.value || "Hızlı anlaşılır yayın mantığı")}</li>
          <li>${escapeHtml(game.metrics?.[2]?.value || "Teknoloji odaklı gösterim")}</li>
        </ul>
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
              data-lightbox-src="${assetPath(item.src)}"
              data-lightbox-title="${escapeHtml(item.title)}"
              data-lightbox-caption="${escapeHtml(item.caption)}"
              style="--accent:${game.accent}; --glow:${game.glow};"
            >
              <div class="media-shell media-shell-gallery media-fit-${item.fit}" style="--preview:url('${assetPath(item.src)}')">
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
            <a class="related-card reveal" href="${getGameHref(item)}" style="--accent:${item.accent}; --glow:${item.glow};">
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

function init() {
  const gameId = getGameId()
  const game = window.LIVEPLAY_LOOKUP?.[gameId]

  if (!game) {
    renderNotFound()
    return
  }

  renderDetail(game)
  bootReveals()
  bindCursorGlow()
  bindLightbox()
  bindPageTransitions()
}

init()
