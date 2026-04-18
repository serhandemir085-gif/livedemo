const games = window.LIVEPLAY_GAMES || []

const cursorGlow = document.querySelector(".cursor-glow")
const gameGrid = document.querySelector(".game-grid")
const featuredMonitor = document.querySelector("#featuredMonitor")
const heroMiniRail = document.querySelector("#heroMiniRail")

let featuredIndex = 0
let featuredTimer = null

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function renderFeatured(game) {
  if (!featuredMonitor) return

  document.documentElement.style.setProperty("--page-accent", game.accent)
  document.documentElement.style.setProperty("--page-glow", game.glow)

  featuredMonitor.innerHTML = `
    <article class="feature-console" style="--accent:${game.accent}; --glow:${game.glow};">
      <div class="media-shell media-shell-hero media-fit-${game.homeFit}" style="--preview:url('${game.homeImage}')">
        <img src="${game.homeImage}" alt="${escapeHtml(game.title)} ekran görüntüsü" />
        <div class="media-badge">
          <span>${escapeHtml(game.eyebrow)}</span>
          <strong>${escapeHtml(game.title)}</strong>
        </div>
      </div>

      <div class="feature-console-copy">
        <p class="feature-label">${escapeHtml(game.heroLabel)}</p>
        <h2>${escapeHtml(game.title)}</h2>
        <p>${escapeHtml(game.teaser)}</p>

        <div class="metric-row">
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

        <div class="chip-row">
          ${game.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>

        <a class="button button-primary" href="./game.html?oyun=${encodeURIComponent(game.id)}">
          Detay sayfasını aç
        </a>
      </div>
    </article>
  `
}

function renderMiniRail() {
  if (!heroMiniRail) return

  heroMiniRail.innerHTML = games
    .map(
      (game, index) => `
        <button
          class="mini-card ${index === featuredIndex ? "is-active" : ""}"
          type="button"
          data-featured-index="${index}"
          style="--accent:${game.accent}; --glow:${game.glow};"
          aria-label="${escapeHtml(game.title)} oyununu öne çıkar"
        >
          <div class="media-shell media-shell-mini media-fit-${game.homeFit}" style="--preview:url('${game.homeImage}')">
            <img src="${game.homeImage}" alt="" />
          </div>
          <div class="mini-card-copy">
            <span>${escapeHtml(game.eyebrow)}</span>
            <strong>${escapeHtml(game.title)}</strong>
          </div>
        </button>
      `,
    )
    .join("")
}

function createCard(game) {
  return `
    <a
      class="game-card game-card--${game.size} tilt-zone reveal"
      href="./game.html?oyun=${encodeURIComponent(game.id)}"
      style="--accent:${game.accent}; --glow:${game.glow};"
    >
      <div class="card-media-wrap">
        <div class="media-shell media-shell-card media-fit-${game.homeFit}" style="--preview:url('${game.homeImage}')">
          <img src="${game.homeImage}" alt="${escapeHtml(game.title)} oyunundan sahne" />
        </div>
      </div>

      <div class="card-copy">
        <div class="chip-row">
          ${game.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>

        <h3>${escapeHtml(game.title)}</h3>
        <p>${escapeHtml(game.description)}</p>

        <div class="card-metrics">
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

        <div class="card-footer">
          <span>${escapeHtml(game.compatibility)}</span>
          <strong>Detay sayfası</strong>
        </div>
      </div>
    </a>
  `
}

function renderGameGrid() {
  if (!gameGrid) return
  gameGrid.innerHTML = games.map((game) => createCard(game)).join("")
}

function setFeatured(index) {
  featuredIndex = index
  renderFeatured(games[featuredIndex])
  renderMiniRail()
  bindTiltZones()
  bindMiniRail()
}

function bindMiniRail() {
  document.querySelectorAll("[data-featured-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = Number(button.getAttribute("data-featured-index"))
      if (!Number.isNaN(nextIndex)) {
        stopFeaturedTimer()
        setFeatured(nextIndex)
        startFeaturedTimer()
      }
    })
  })
}

function startFeaturedTimer() {
  stopFeaturedTimer()
  if (games.length < 2) return
  featuredTimer = window.setInterval(() => {
    const nextIndex = (featuredIndex + 1) % games.length
    setFeatured(nextIndex)
  }, 5400)
}

function stopFeaturedTimer() {
  if (featuredTimer) {
    window.clearInterval(featuredTimer)
    featuredTimer = null
  }
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

function bindTiltZones() {
  document.querySelectorAll(".tilt-zone").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      card.style.transform = `perspective(1400px) rotateX(${y * -5}deg) rotateY(${x * 7}deg) translateY(-4px)`
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = ""
    })
  })
}

function bindCursorGlow() {
  if (!cursorGlow) return
  window.addEventListener("mousemove", (event) => {
    cursorGlow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
  })
}

function init() {
  if (!games.length) return
  renderGameGrid()
  setFeatured(0)
  bootReveals()
  bindCursorGlow()
  startFeaturedTimer()
}

init()
