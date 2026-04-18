const games = window.LIVEPLAY_GAMES || []
const spotlightFrame = document.querySelector("#spotlightFrame")
const spotlightSwitcher = document.querySelector("#spotlightSwitcher")
const systemGrid = document.querySelector("#urunler")

let activeGameId = games[0]?.id || ""

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function gameHref(game) {
  return `./oyunlar/${encodeURIComponent(game.id)}.html`
}

function renderSpotlight(game) {
  if (!spotlightFrame || !game) return

  spotlightFrame.innerHTML = `
    <article class="command-deck" style="--accent:${game.accent}; --glow:${game.glow};">
      <div class="deck-head">
        <span class="deck-label">ACTIVE SYSTEM</span>
        <strong>${escapeHtml(game.title)}</strong>
      </div>

      <div class="deck-media media-shell media-fit-${game.homeFit}" style="--preview:url('${game.homeImage}')">
        <img src="${game.homeImage}" alt="${escapeHtml(game.title)} önizleme görseli" />
      </div>

      <div class="deck-copy">
        <span class="eyebrow-chip">${escapeHtml(game.eyebrow)}</span>
        <p>${escapeHtml(game.hook)}</p>
      </div>

      <div class="deck-metrics">
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

      <div class="deck-actions">
        <a class="button button-primary" href="${gameHref(game)}">Ürün sayfası</a>
        <a class="button button-secondary" href="${escapeHtml(game.buyUrl || window.LIVEPLAY_PROFILE_URL || "#")}" target="_blank" rel="noreferrer">
          ${escapeHtml(game.buyLabel || "İlanı aç")}
        </a>
      </div>
    </article>
  `
}

function renderSwitcher() {
  if (!spotlightSwitcher) return

  spotlightSwitcher.innerHTML = games
    .map(
      (game) => `
        <button
          class="switch-card ${game.id === activeGameId ? "is-active" : ""}"
          type="button"
          data-switch-game="${escapeHtml(game.id)}"
          style="--accent:${game.accent}; --glow:${game.glow};"
        >
          <span>${escapeHtml(game.eyebrow)}</span>
          <strong>${escapeHtml(game.title)}</strong>
        </button>
      `,
    )
    .join("")
}

function renderSystems() {
  if (!systemGrid) return

  systemGrid.innerHTML = games
    .map(
      (game, index) => `
        <article class="system-card reveal ${index % 3 === 1 ? "delay-1" : index % 3 === 2 ? "delay-2" : ""}" style="--accent:${game.accent}; --glow:${game.glow};">
          <div class="system-card-head">
            <span>${escapeHtml(game.eyebrow)}</span>
            <strong>${escapeHtml(game.title)}</strong>
          </div>

          <a class="system-media media-shell media-fit-${game.homeFit}" href="${gameHref(game)}" style="--preview:url('${game.homeImage}')">
            <img src="${game.homeImage}" alt="${escapeHtml(game.title)} ana görseli" />
          </a>

          <p class="system-summary">${escapeHtml(game.summary)}</p>

          <div class="chip-row">
            ${game.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
          </div>

          <div class="signal-list">
            ${game.salesPoints
              .slice(0, 3)
              .map((point) => `<p>${escapeHtml(point)}</p>`)
              .join("")}
          </div>

          <div class="system-actions">
            <a class="text-link" href="${gameHref(game)}">Detayları aç</a>
            <a class="text-link" href="${escapeHtml(game.buyUrl || window.LIVEPLAY_PROFILE_URL || "#")}" target="_blank" rel="noreferrer">
              ${escapeHtml(game.buyLabel || "İlanı aç")}
            </a>
          </div>
        </article>
      `,
    )
    .join("")
}

function bindSwitcher() {
  spotlightSwitcher?.querySelectorAll("[data-switch-game]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextId = button.getAttribute("data-switch-game") || ""
      const nextGame = games.find((game) => game.id === nextId)
      if (!nextGame) return

      activeGameId = nextGame.id
      renderSpotlight(nextGame)
      renderSwitcher()
      bindSwitcher()
    })
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
    { threshold: 0.16 },
  )

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element))
  window.setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"))
  }, 100)
}

function init() {
  const current = games.find((game) => game.id === activeGameId) || games[0]
  renderSpotlight(current)
  renderSwitcher()
  renderSystems()
  bindSwitcher()
  bindPageTransitions()
  bootReveals()
}

init()
