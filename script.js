const games = window.LIVEPLAY_GAMES || []

const spotlightFrame = document.querySelector("#spotlightFrame")
const spotlightSwitcher = document.querySelector("#spotlightSwitcher")
const catalogGrid = document.querySelector(".catalog-grid")

let selectedGameIndex = 0

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
  if (!spotlightFrame) return

  document.documentElement.style.setProperty("--page-accent", game.accent)
  document.documentElement.style.setProperty("--page-glow", game.glow)

  spotlightFrame.innerHTML = `
    <article class="spotlight-card" style="--accent:${game.accent}; --glow:${game.glow};">
      <div class="spotlight-media media-shell media-fit-${game.homeFit}" style="--preview:url('${game.homeImage}')">
        <img src="${game.homeImage}" alt="${escapeHtml(game.title)} sahnesi" />
      </div>

      <div class="spotlight-copy">
        <div class="spotlight-meta">
          <span>${escapeHtml(game.eyebrow)}</span>
          <strong>${escapeHtml(game.title)}</strong>
        </div>

        <p>${escapeHtml(game.teaser)}</p>

        <div class="spotlight-metrics">
          ${game.metrics
            .slice(0, 3)
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

        <div class="spotlight-actions">
          <a class="button button-primary" href="${gameHref(game)}">Ürün sayfası</a>
          <a class="button button-secondary" href="${escapeHtml(game.buyUrl || window.LIVEPLAY_PROFILE_URL || "#")}" target="_blank" rel="noreferrer">
            ${escapeHtml(game.buyLabel || "İlan")}
          </a>
        </div>
      </div>
    </article>
  `
}

function renderSwitcher() {
  if (!spotlightSwitcher) return

  spotlightSwitcher.innerHTML = games
    .map(
      (game, index) => `
        <button
          class="switch-chip ${index === selectedGameIndex ? "is-active" : ""}"
          type="button"
          data-switch-index="${index}"
          style="--accent:${game.accent}; --glow:${game.glow};"
        >
          <span>${escapeHtml(game.eyebrow)}</span>
          <strong>${escapeHtml(game.title)}</strong>
        </button>
      `,
    )
    .join("")
}

function renderCatalog() {
  if (!catalogGrid) return

  catalogGrid.innerHTML = games
    .map(
      (game) => `
        <article class="catalog-card reveal" style="--accent:${game.accent}; --glow:${game.glow};">
          <a class="catalog-media media-shell media-fit-${game.homeFit}" href="${gameHref(game)}" style="--preview:url('${game.homeImage}')">
            <img src="${game.homeImage}" alt="${escapeHtml(game.title)} görseli" />
          </a>

          <div class="catalog-copy">
            <div class="catalog-topline">
              <span>${escapeHtml(game.eyebrow)}</span>
              <strong>${escapeHtml(game.title)}</strong>
            </div>

            <p>${escapeHtml(game.description)}</p>

            <div class="catalog-tags">
              ${game.tags.slice(0, 3).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
            </div>

            <div class="catalog-footer">
              <a class="text-link" href="${gameHref(game)}">Detay sayfası</a>
              <a class="text-link" href="${escapeHtml(game.buyUrl || window.LIVEPLAY_PROFILE_URL || "#")}" target="_blank" rel="noreferrer">
                ${escapeHtml(game.buyLabel || "İlan")}
              </a>
            </div>
          </div>
        </article>
      `,
    )
    .join("")
}

function bindSwitcher() {
  document.querySelectorAll("[data-switch-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = Number(button.getAttribute("data-switch-index"))
      if (Number.isNaN(nextIndex)) return
      selectedGameIndex = nextIndex
      renderSpotlight(games[selectedGameIndex])
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
  if (!games.length) return
  renderSpotlight(games[selectedGameIndex])
  renderSwitcher()
  renderCatalog()
  bindSwitcher()
  bootReveals()
  bindPageTransitions()
}

init()
