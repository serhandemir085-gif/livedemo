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

const gameDetails = {
  takim: {
    title: "Takimini Sohbete Yaz",
    lead:
      "Takim adlari sohbetten akar, Super Chat baskisi tabloyu zorlar ve wheel sonucu turun dengesini degistirir. Rekabet hissi ilk saniyeden ekrana oturur.",
    setup: "Dakikalar icinde aktif",
    compat: "OBS + yayinci PC dostu",
    impact: "Takim savasi + destek patlamasi",
    install:
      "Node kurulu bir bilgisayarda acilir, gerekli paketler yuklenir ve yayin linki girildiginde oyun sahnesi hazir olur. OBS browser source akisi icin duzgun ve pratik bir kurulum yapisina sahiptir.",
    stream:
      "Izleyici takim adini yazar, destegi gonderir ve carki izler. Her tur yeni gerilim urettigi icin sohbet durmadan hareket eder. Rekabet, aidiyet ve para harcama motivasyonu ayni sahnede bulusur.",
    bullets: [
      "Top 3 destekci paneliyle destek verenler gorunur hale gelir.",
      "Wheel ve carpan mantigi sayesinde tek bir destek turun kaderini degistirebilir.",
      "Mobilde izleyen bile ne yapacagini tek bakista anlar; bariyer dusuktur.",
    ],
    gallery: [
      { src: "./assets/futbol-takim.png", position: "center 15%" },
      { src: "./assets/futbol-takim.png", position: "left center" },
      { src: "./assets/futbol-takim.png", position: "right 35%" },
    ],
  },
  arena: {
    title: "Futbol Arena 3D Pro",
    lead:
      "TikTok, Twitch ve YouTube bagislarini tek arenada toplayan baski oyunu. Hediye geldikce takim gucu anlik degisir ve ekran daha saldirgan bir ritme girer.",
    setup: "Tek panel, hizli acilis",
    compat: "Coklu platform destegi",
    impact: "Gift odakli skor savasi",
    install:
      "Temel Node kurulumu ile acilir. Bagis akislari tanimlandiginda ekran direkt puan mantigina baglanir. Ekibin agir bir sistem kurmasina gerek kalmadan sahneye alinabilir.",
    stream:
      "Hediye alan takim one cikar, bagis paneli sahneyi besler, izleyenler kimin onde oldugunu anlik takip eder. Bagis ekranin icinde dogrudan guce donustugu icin destek verme istegi daha yuksek hissedilir.",
    bullets: [
      "Tek ekran icinde arena hissi, puan akisi ve platform baglantisi ayni anda gorunur.",
      "Hediye ve bagislar soyut kalmaz; aninda takima etki eder.",
      "Yuksek tempolu yayinlarda bile izleyen kitlenin odagi dagilmaz.",
    ],
    gallery: [
      { src: "./assets/mars-bagisli.png", position: "center center" },
      { src: "./assets/mars-bagisli.png", position: "left center" },
      { src: "./assets/mars-bagisli.png", position: "right center" },
    ],
  },
  flaggame: {
    title: "FlagGame",
    lead:
      "Temiz, tek hedefli, aninda anlasilan survival format. Son kalan bayragi beklemek sohbeti tek noktaya toplar ve tahmin duygusu yayini tutar.",
    setup: "Tarayici tabanli ve temiz",
    compat: "OBS icin rahat gorunum",
    impact: "Tahmin + bekleme gerilimi",
    install:
      "Web tabanli yapisi sayesinde hizli acilir ve sahneye alinmasi kolaydir. Karisik kontrol panelleri gerektirmeden dogrudan ekranda calisan bir format sunar.",
    stream:
      "Izleyici kazanan bayragi tahmin eder ve bekler. Basit gorunse de son ana kadar merak duygusunu tutar. Kisa ve hizli segmentler icin cok guclu bir akis yaratir.",
    bullets: [
      "Tek bakista anlasilan mekanik sayesinde yeni gelen izleyici de oyuna dahil olur.",
      "Yorum yazdirma esigi dusuktur; herkes tahmine katilabilir.",
      "Minimal ekran ama yuksek gerilim duygusu verir.",
    ],
    gallery: [
      { src: "./assets/flaggame.png", position: "center top" },
      { src: "./assets/flaggame.png", position: "center 30%" },
      { src: "./assets/flaggame.png", position: "center bottom" },
    ],
  },
  quiz: {
    title: "Bilgi Yarismasi",
    lead:
      "Cevap, sure, skor ve destekci listesi ayni sahnede akar. Yorum yazanlar oyuna girer, hizli cevap verenler onde parlar ve destek verenler ust sira alir.",
    setup: "Hazir tema, hizli sahne",
    compat: "Browser source dostu",
    impact: "Cevap hizina dayali ivme",
    install:
      "Hazir tema yapisi sayesinde acilisi kolaydir. Sunucu acildiginda quiz sahnesi bekleme ekranindan oyuna gecer. Bilgisayar gucu istemeyen temiz bir overlay mantigina sahiptir.",
    stream:
      "Sure aktikca stres yukselir, dogru cevap yarisi izleyiciyi ekrana baglar. Super Chat destekcileri ustte gorunur, bu da sadece bilgi degil destegi de yarisa dahil eder.",
    bullets: [
      "Top 3 destekci alanini oyundan koparmadan monetization sahneye sabitler.",
      "Sure sayaci ve cevap kutulari izleyiciyi hemen aksiyona iter.",
      "Kisa tur, hizli reset ve tekrar katilim icin idealdir.",
    ],
    gallery: [
      { src: "./assets/bilgiguncel-clean.png", position: "center top" },
      { src: "./assets/bilgiguncel-clean.png", position: "center 40%" },
      { src: "./assets/bilgiguncel-clean.png", position: "center 70%" },
    ],
  },
  deathnote: {
    title: "Death Note Live",
    lead:
      "Masaustu gerilim havasini chat akisiyla birlestiren typing deneyimi. Mesaj geldikce ritim ve gerilim ayni anda yogunlasir.",
    setup: "Portable acilis mantigi",
    compat: "Windows uzerinde rahat",
    impact: "Gerilim + chat baglantisi",
    install:
      "Paketlenmis yapisi sayesinde acilisi nettir. Masaustu sahnesi olarak kurulur ve yayin icinde tek pencere mantigiyla rahat yonetilir. Fazla teknik efor istemeden kullanima alinabilir.",
    stream:
      "Chat akisi oyuna dokundukca sadece izleme degil yazma refleksi de tetiklenir. Gerilimli sanat dili sayesinde yayin farkli bir tona kavusur.",
    bullets: [
      "Desktop pencere yapisi sayesinde yayinci kontrolu nettir.",
      "Chat baglantili typing hissi niş ama akilda kalan bir fark yaratir.",
      "Karanlik atmosfer premium ve sinematik bir katman ekler.",
    ],
    gallery: [
      { src: "./assets/deathnote-clean.png", position: "center center" },
      { src: "./assets/deathnote-clean.png", position: "left center" },
      { src: "./assets/deathnote-clean.png", position: "right center" },
    ],
  },
  pickaxe: {
    title: "Falling Pickaxe",
    lead:
      "Chat komutlarini fiziksel etkiye ceviren kaotik masaustu oyun sahnesi. Pickaxe, TNT ve ozel olaylar tek satirla tetiklenir ve yayin bir anda bozulur.",
    setup: "Kur, ac, komutu yagdir",
    compat: "Masaustu yayina uygun",
    impact: "Komut kaosu + meme gucu",
    install:
      "Gerekli bagimliliklarla masaustu oyunu olarak calisir. Kurulum mantigi acik ve yonlendirilebilir oldugu icin toplu bir teknik ekip gerektirmez. Komut baglantisi kuruldugunda ekran hizla aktif olur.",
    stream:
      "Izleyici tek bir komutla oyuna fiziksel etki verir. Patlama, dusus, hiz veya ozel olaylar yayina beklenmeyen anlar ekler. Bu da kliplik anlar ve tekrar izlenme dogurur.",
    bullets: [
      "Komut tabanli kaos yapisi yayina ani surprizler ekler.",
      "Desktop oldugu icin oyun alaninin etkisi daha fiziksel hissedilir.",
      "Meme potansiyeli yuksek oldugundan izleyen kitlenin bag kurmasi kolaydir.",
    ],
    gallery: [
      { src: "./assets/falling-pickaxe.png", position: "center top" },
      { src: "./assets/falling-pickaxe.png", position: "center center" },
      { src: "./assets/falling-pickaxe.png", position: "center bottom" },
    ],
  },
}

const detailOverlay = document.querySelector("#detailOverlay")
const detailTitle = document.querySelector("#detailTitle")
const detailLead = document.querySelector("#detailLead")
const detailSetup = document.querySelector("#detailSetup")
const detailCompat = document.querySelector("#detailCompat")
const detailImpact = document.querySelector("#detailImpact")
const detailInstall = document.querySelector("#detailInstall")
const detailStream = document.querySelector("#detailStream")
const detailBullets = document.querySelector("#detailBullets")
const detailGallery = document.querySelector("#detailGallery")
const detailEyebrow = document.querySelector("#detailEyebrow")

function renderGallery(items) {
  detailGallery.innerHTML = ""
  items.forEach((item, index) => {
    const figure = document.createElement("figure")
    const image = document.createElement("img")
    image.src = item.src
    image.alt = `${detailTitle.textContent} ekran goruntusu ${index + 1}`
    image.style.objectPosition = item.position
    figure.appendChild(image)
    detailGallery.appendChild(figure)
  })
}

function openDetail(key) {
  const detail = gameDetails[key]
  if (!detail || !detailOverlay) return

  detailEyebrow.textContent = `${detail.title.toUpperCase()} SPOTLIGHT`
  detailTitle.textContent = detail.title
  detailLead.textContent = detail.lead
  detailSetup.textContent = detail.setup
  detailCompat.textContent = detail.compat
  detailImpact.textContent = detail.impact
  detailInstall.textContent = detail.install
  detailStream.textContent = detail.stream
  detailBullets.innerHTML = detail.bullets.map((item) => `<li>${item}</li>`).join("")
  renderGallery(detail.gallery)

  detailOverlay.hidden = false
  document.body.classList.add("body-locked")
}

function closeDetail() {
  if (!detailOverlay) return
  detailOverlay.hidden = true
  document.body.classList.remove("body-locked")
}

document.querySelectorAll("[data-open-game]").forEach((button) => {
  button.addEventListener("click", () => openDetail(button.dataset.openGame))
})

document.querySelectorAll("[data-close-detail]").forEach((element) => {
  element.addEventListener("click", closeDetail)
})

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDetail()
  }
})
