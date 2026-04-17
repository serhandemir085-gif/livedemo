const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
      }
    })
  },
  { threshold: 0.18 },
)

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element))

window.setTimeout(() => {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"))
}, 200)

const cursorGlow = document.querySelector(".cursor-glow")

window.addEventListener("mousemove", (event) => {
  if (!cursorGlow) return
  cursorGlow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
})

document.querySelectorAll(".tilt-zone").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(1200px) rotateX(${y * -6}deg) rotateY(${x * 8}deg) translateY(-4px)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)"
  })
})
