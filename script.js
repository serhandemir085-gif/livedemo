const games = window.LIVEPLAY_GAMES || []

const cursorGlow = document.querySelector(".cursor-glow")
const gameGrid = document.querySelector(".game-grid")
const featuredMonitor = document.querySelector("#featuredMonitor")
const heroMiniRail = document.querySelector("#heroMiniRail")
const growthMatrix = document.querySelector("#growthMatrix")
const creatorVoice = document.querySelector("#creatorVoice")

let featuredIndex = 0

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function getGamePageHref(game) {
  return `./oyunlar/${encodeURIComponent(game.id)}.html`
}

function renderFeatured(game) {
  if (!featuredMonitor) return

  const signalMarkup = (game.growthMap || [])
    .slice(0, 2)
    .map(
      (item) => `
        <article class="pulse-chip">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </article>
      `,
    )
    .join("")

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

        <div class="feature-pulse-row">
          ${signalMarkup}
        </div>

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

        <a class="button button-primary" href="${getGamePageHref(game)}">
          Kendi sekmesini aç
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

function renderGrowthMatrix(game) {
  if (!growthMatrix) return

  const growthMap = game.growthMap || []
  const audienceFlow = game.audienceFlow || []

  growthMatrix.innerHTML = `
    <article class="growth-card growth-card--intro" style="--accent:${game.accent}; --glow:${game.glow};">
      <span>Keşfet vaadi</span>
      <strong>${escapeHtml(game.growthLead || game.heroLabel)}</strong>
      <p>${escapeHtml(audienceFlow[0] || game.teaser)}</p>
    </article>

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
  `
}

function renderCreatorVoice(game) {
  if (!creatorVoice) return

  const creatorLines = game.creatorLines || []
  const audienceFlow = game.audienceFlow || []

  creatorVoice.innerHTML = `
    <div class="voice-layout">
      <article class="voice-panel" style="--accent:${game.accent}; --glow:${game.glow};">
        <span class="panel-label">Sunucunun açılış cümleleri</span>
        <h2>${escapeHtml(game.title)} ile sohbeti ilk saniyede oyuna sok</h2>
        <ol class="quote-list">
          ${creatorLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
        </ol>
      </article>

      <article class="voice-panel voice-panel-secondary" style="--accent:${game.accent}; --glow:${game.glow};">
        <span class="panel-label">İzleyiciyi neden tutar?</span>
        <p class="voice-lead">${escapeHtml(game.growthLead || game.teaser)}</p>
        <ul class="pulse-list">
          ${audienceFlow.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    </div>
  `
}

function createCard(game) {
  const hookValue = game.growthMap?.[0]?.value || game.heroLabel

  return `
    <a
      class="game-card game-card--${game.size} tilt-zone reveal"
      href="${getGamePageHref(game)}"
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

        <div class="card-hook">
          <span>Keşfet kancası</span>
          <strong>${escapeHtml(hookValue)}</strong>
        </div>

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
          <strong>Ayrı oyun sekmesi</strong>
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
  const featuredGame = games[featuredIndex]
  renderFeatured(featuredGame)
  renderMiniRail()
  renderGrowthMatrix(featuredGame)
  renderCreatorVoice(featuredGame)
  bindTiltZones()
  bindMiniRail()
}

function bindMiniRail() {
  document.querySelectorAll("[data-featured-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextIndex = Number(button.getAttribute("data-featured-index"))
      if (!Number.isNaN(nextIndex)) {
        setFeatured(nextIndex)
      }
    })
  })
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
  if (!games.length) return
  renderGameGrid()
  setFeatured(0)
  bootReveals()
  bindCursorGlow()
  bindPageTransitions()
}

init()
