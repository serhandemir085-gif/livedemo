const PROFILE_URL = "https://www.itemsatis.com/p/CodeHub";

const PRODUCTS = [
  {
    id: "takim",
    eyebrow: "Tribun savasi",
    title: "Takimini Sohbete Yaz",
    hook: "Takim secimi, Super Chat ve cark ayni dikey sahnede calisir.",
    summary:
      "Izleyici takimini yazar, puan barlari dolar ve Super Chat geldiginde oyunun tonu aninda degisir. Rekabet hissi cok hizli kurulur.",
    accent: "#f7c45e",
    image: "../assets/takim-votes-live.png",
    metrics: [
      { label: "Kurulum", value: "OBS + browser source" },
      { label: "Format", value: "Dikey yayin sahnesi" },
      { label: "Aksiyon", value: "Oy, cark, bagis" },
    ],
    tags: ["Takim secimi", "Super Chat", "Skor bari", "Cark"],
    salesPoints: [
      "Takim aidiyeti yorum yazdirir.",
      "Bagis ekranda direkt sonuc uretir.",
      "Cark ani kliplik gerilim cikarir.",
    ],
    streamMoments: [
      "Takim adi yazilinca bar aninda tepki verir.",
      "Super Chat tesekkur panelini ve bonus beklentisini tetikler.",
      "Tur sonucu yayin hikayesine bir sonraki gerilimi ekler.",
    ],
    packageItems: [
      "Takim barlari ve skor alani",
      "Bonus/cark ekranlari",
      "Top 3 ve tesekkur gorunumu",
      "Dikey yayin kurgusu",
    ],
    compatibility:
      "OBS browser source ile uyumlu; chat ve bagis tetikleriyle sahnede rahat kullanilir.",
    setup:
      "Takim adlarini gir, sahneyi yerlestir ve bagis tetiklerini bagla. Kisa kurulumdan sonra hizli tempolu sekilde calisir.",
    gallery: [
      { src: "../assets/takim-votes-live.png", title: "Ana oylar sahnesi", caption: "Takim barlari ve tur karti ayni panelde okunur." },
      { src: "../assets/takim-superchat-live.png", title: "Super Chat etkisi", caption: "Bagis sadece listede kalmaz, ana sahneye tasinir." },
      { src: "../assets/takim-wheel-live.png", title: "Cark gerilimi", caption: "Bonus ve sonuc akisi klip cikaracak enerji uretir." },
      { src: "../assets/takim-result-live.png", title: "Tur sonucu", caption: "Kazanan taraf ve bonus psikolojisi gorunur hale gelir." },
    ],
    buyUrl: "https://www.itemsatis.com/script-satisi/youtube-canli-yayin-takim-oylama-oyunu-4825124.html",
  },
  {
    id: "arena",
    eyebrow: "Bagis odakli arena",
    title: "Futbol Arena 3D Pro",
    hook: "Bagis dogrudan skora yazilir, takim baskisi tek panelde akar.",
    summary:
      "TikTok, Twitch ve YouTube desteklerini tek arena mantiginda birlestiren hizli ve gergin bir skor sistemi.",
    accent: "#5ac7ff",
    image: "../assets/arena-live-clean.png",
    metrics: [
      { label: "Kurulum", value: "Tek pencere sahne" },
      { label: "Odak", value: "Bagistan skora" },
      { label: "Ritim", value: "Hizli tur akisi" },
    ],
    tags: ["Arena", "Skor paneli", "Bagis akisi", "Futbol"],
    salesPoints: [
      "Bagis aninda gorunur puana donusur.",
      "Takim baskisi tek panelde net okunur.",
      "Kisa yayin segmentleri icin cok uygundur.",
    ],
    streamMoments: [
      "Anlatim kutusu yayin enerjisini sabitler.",
      "Destek geldiginde takim kartlari sert sekilde one cikar.",
      "Tur bitince yeni baski hizla tekrar kurulur.",
    ],
    packageItems: ["Takim kartlari", "Skor paneli", "Sure ve ust bant", "Kisa arena tur mantigi"],
    compatibility:
      "Masaustu sahne duzenine ve coklu platform bagis akislarina uygun bir yapiya sahiptir.",
    setup:
      "Arena ekranini ac, puan kaynaklarini bagla ve tam pencere olarak sahneye yerlestir.",
    gallery: [
      { src: "../assets/arena-live-clean.png", title: "Arena tam gorunum", caption: "Sure, anlatim ve takim kartlari ayni sahnede toplanir." },
      { src: "../assets/arena-header-detail.png", title: "Ust bant", caption: "Baslik ve sayac mac hissini belirginlestirir." },
      { src: "../assets/arena-teamcard-detail.png", title: "Takim kartlari", caption: "Skor baskisi tek panelde rahat okunur." },
      { src: "../assets/arena-score-detail.png", title: "Skor merkezi", caption: "Orta alan rekabet duygusunu dogrudan tasir." },
    ],
    buyUrl: "https://www.itemsatis.com/script-satisi/premium-1-aylik-canli-yayin-kesfet-scripti-4673070.html",
  },
  {
    id: "flaggame",
    eyebrow: "Survival bayrak havuzu",
    title: "FlagGame",
    hook: "Tahmin durtusu yuksek, ekran dili sade ve aninda anlasilir.",
    summary:
      "Son kalan bayrak mantigiyla ilerleyen bu sistem, yeni gelen izleyicinin saniyeler icinde oyuna dahil olmasini saglar.",
    accent: "#45d8ff",
    image: "../assets/flaggame-live-clean.png",
    metrics: [
      { label: "Format", value: "Tahmin ve eleme" },
      { label: "Okunabilirlik", value: "Tek bakista net" },
      { label: "Tempo", value: "Kisa segment" },
    ],
    tags: ["Tahmin", "Survival", "Bayrak havuzu"],
    salesPoints: [
      "Ilk saniyede anlasilan oyun kurgusu.",
      "Yorum yazdiran favori secimi.",
      "Kisa ama tekrar oynanabilir akis.",
    ],
    streamMoments: [
      "Izleyici favori ulkesini yorumlara yazar.",
      "Kalan bayraklar azaldikca beklenti buyur.",
      "Finale yakin her eleme sohbeti tek noktaya kilitler.",
    ],
    packageItems: ["Merkez bayrak havuzu", "Kazanan ve kalan bilgisi", "Alt bank bolumu", "Sade dikey gorunum"],
    compatibility: "OBS ile rahat kullanilir; dusuk karmasa isteyen yayinlara cok iyi oturur.",
    setup: "Tam pencere ac, sahneye yerlestir ve izleyiciyi favori ulkesini yazmaya cagir.",
    gallery: [
      { src: "../assets/flaggame-live-clean.png", title: "Tam oyun sahnesi", caption: "Merkez havuz ve alt bank birlikte gorunur." },
      { src: "../assets/flaggame-winners-detail.png", title: "Kazanan alani", caption: "Finale yaklasan tablo tahmin enerjisini artirir." },
      { src: "../assets/flaggame-bowl-detail.png", title: "Merkez havuz", caption: "Mobilde bile kolay okunan sade kompozisyon." },
      { src: "../assets/flaggame-bank-detail.png", title: "Alt bank", caption: "Kalan secenekleri karar alanina donusturur." },
    ],
    buyUrl: PROFILE_URL,
  },
  {
    id: "quiz",
    eyebrow: "Quiz engine",
    title: "Bilgi Yarismasi",
    hook: "Seffaf bekleme yerine aktif soru ekranindan direkt baslar.",
    summary:
      "Soru, sayac, oyuncu sayisi ve Top 3 destegi ayni anda sahnede oldugu icin cevap verme baskisini cok hizli kurar.",
    accent: "#7dfc96",
    image: "../assets/bilgiguncel-active-live.png",
    metrics: [
      { label: "Giris", value: "A B C D ile katilim" },
      { label: "Gerilim", value: "Sayac ve skor" },
      { label: "Gelir", value: "Top 3 paneli" },
    ],
    tags: ["Quiz", "Sure baskisi", "Top 3", "Skor"],
    salesPoints: [
      "Aktif sahne ile aninda baslayan akis.",
      "Cevap yazmayi kolaylastiran dusuk giris esigi.",
      "Her soruda mini final duygusu uretir.",
    ],
    streamMoments: [
      "Soru gelir gelmez sohbet dogru sikki arar.",
      "Sayac aktikca dikkat ve gerilim artar.",
      "Sure bitiminde cevap ve siralama yeni bir final anina donusur.",
    ],
    packageItems: ["Soru ve cevap alani", "Sayac ve oyuncu bolumu", "Top 3 destek paneli", "Skor gorunurlugu"],
    compatibility:
      "Browser source mantigiyla calisir ve dikey yayin kompozisyonlarina rahat oturur.",
    setup:
      "Soru akisini baslat, sahneyi ekle ve cevap cagrisi ver. Sayac ile skor izleyiciyi oyunda tutar.",
    gallery: [
      { src: "../assets/bilgiguncel-active-live.png", title: "Aktif soru ekrani", caption: "Oyun bekleme katmaninda degil, direkt canli sahnede acilir." },
      { src: "../assets/bilgiguncel-question-detail.png", title: "Soru modulu", caption: "Soru alani cevap baskisini net kurar." },
      { src: "../assets/bilgiguncel-scoreboard-detail.png", title: "Skor bolumu", caption: "Yaris devam ederken siralamayi gorunur tutar." },
      { src: "../assets/bilgiguncel-superchat-detail.png", title: "Top 3 paneli", caption: "Bagisin gorunur etkisi yukari tasinir." },
    ],
    buyUrl: "https://www.itemsatis.com/yayincilara-video-hizmeti/canli-yayin-script-4561468.html",
  },
  {
    id: "deathnote",
    eyebrow: "Atmosfer odakli sahne",
    title: "Death Note Live",
    hook: "Karanlik, nis ve direkt ayirt edilen bir yayin estetigi tasir.",
    summary:
      "Chat akisi ile birlesen Death Note estetigi, masaustu sizintisi olmadan konsept bir yayin deneyimine donusur.",
    accent: "#d8dde7",
    image: "../assets/deathnote-clean.png",
    metrics: [
      { label: "Tarz", value: "Sinematik ve nis" },
      { label: "Sunum", value: "Temiz kadraj" },
      { label: "Kullanim", value: "Ozel etkinlik" },
    ],
    tags: ["Atmosfer", "Typing", "Konsept yayin"],
    salesPoints: [
      "Siradan ekranlardan aninda ayrilir.",
      "Kisa kliplerde bile kimligini korur.",
      "Konsept yayin duygusunu guclendirir.",
    ],
    streamMoments: [
      "Bos sayfa ve karanlik ust bant ilk anda merak uretir.",
      "Kalem ve yazim ani yayina dramatik bir ton verir.",
      "Nis yapi sayesinde kesitler hizla ayirt edilir.",
    ],
    packageItems: ["Temiz sahne kadraji", "Kalem ve sayfa kompozisyonu", "Karanlik tema dili", "Konsept yayin kimligi"],
    compatibility:
      "Temiz sahne kompozisyonu ile masaustu gorunmeden yayina yerlestirilebilir.",
    setup:
      "Sahneyi ac, kadraji yerlestir ve konsept akisi bu ekran uzerinden tasinmaya baslansin.",
    gallery: [
      { src: "../assets/deathnote-clean.png", title: "Ana sahne", caption: "Konsept ton ve temiz ekran ayni anda tasinir." },
      { src: "../assets/deathnote-page-detail.png", title: "Sayfa kompozisyonu", caption: "Bos sayfa alaninin gerilimli bekleme etkisi." },
      { src: "../assets/deathnote-pen-detail.png", title: "Kalem detayi", caption: "Hareketli odak noktasi atmosferi guclendirir." },
      { src: "../assets/deathnote-hand-detail.png", title: "El ve kadraj tonu", caption: "Klibe uygun sinematik bir yakin plan." },
    ],
    buyUrl: "https://www.itemsatis.com/yayincilara-video-hizmeti/deathnote-otomasyonu-4475955.html",
  },
  {
    id: "pickaxe",
    eyebrow: "Command chaos",
    title: "Falling Pickaxe",
    hook: "Komut yazildigi anda fiziksel sonuc ureten tam gorunur oyun alani sunar.",
    summary:
      "Kazma duser, zemin bozulur, kaos buyur. Chat komutlari oyunun ortaagina donusur ve fiziksel etki sahnede net okunur.",
    accent: "#ffb86a",
    image: "../assets/falling-pickaxe-clean.png",
    metrics: [
      { label: "Motor", value: "Komut tabanli kaos" },
      { label: "Gorunum", value: "Tam oyun alani" },
      { label: "Etkisi", value: "Fiziksel sonuc" },
    ],
    tags: ["Pygame", "Komut", "Kaos", "Minecraft tonu"],
    salesPoints: [
      "Komut dogrudan fiziksel tepki uretir.",
      "Tam alan gorundugu icin etki aninda anlasilir.",
      "Klip ve meme potansiyeli cok yuksektir.",
    ],
    streamMoments: [
      "Izleyici komutu yazar ve pickaxe sahnede aninda tepki verir.",
      "Dusme ve kirilma anlari chat etkisini gorunur kilar.",
      "Her yeni komut bir sonraki kaos anini hazirlar.",
    ],
    packageItems: ["Tam oyun alani gorunumu", "Yuzey ve cevher detaylari", "Komut tabanli olay akisi", "Yayin baslatma mantigi"],
    compatibility:
      "Temiz crop ve tam gorunur alan mantigiyla yayin sahnesine rahat yerlestirilir.",
    setup:
      "Oyunu ac, sahneye tam alan olarak yerlestir ve komutlari baslat. Her hareket zeminde karsilik bulur.",
    gallery: [
      { src: "../assets/falling-pickaxe-clean.png", title: "Tam oyun alani", caption: "Masaustu gorunmeden oyunun tamami sahnede kalir." },
      { src: "../assets/pickaxe-surface-detail.png", title: "Yuzey bolgesi", caption: "Komut etkisinin basladigi katman net okunur." },
      { src: "../assets/pickaxe-fall-detail.png", title: "Dusus ani", caption: "Chat etkisini fiziksel hale getiren en kliplik an." },
      { src: "../assets/pickaxe-ore-detail.png", title: "Cevher ve alt katman", caption: "Bozulan alanlar oyunun kaosunu buyutur." },
    ],
    buyUrl: "https://www.itemsatis.com/yayinci-tasarimlari/minecraft-tnt-patlatma-kazma-yayin-scripti-4475428.html",
  },
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

const productsRail = document.getElementById("productsRail");
const galleryWall = document.getElementById("galleryWall");
const commandProducts = document.getElementById("commandProducts");

const previewIndex = document.getElementById("previewIndex");
const previewImage = document.getElementById("previewImage");
const previewEyebrow = document.getElementById("previewEyebrow");
const previewTitle = document.getElementById("previewTitle");
const previewHook = document.getElementById("previewHook");
const previewMetrics = document.getElementById("previewMetrics");
const previewGlow = document.getElementById("previewGlow");
const previewBuyLink = document.getElementById("previewBuyLink");

const productModal = document.getElementById("productModal");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalTitle = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const modalImage = document.getElementById("modalImage");
const modalGlow = document.getElementById("modalGlow");
const modalTags = document.getElementById("modalTags");
const modalSalesPoints = document.getElementById("modalSalesPoints");
const modalMoments = document.getElementById("modalMoments");
const modalPackage = document.getElementById("modalPackage");
const modalCompatibility = document.getElementById("modalCompatibility");
const modalSetup = document.getElementById("modalSetup");
const modalGallery = document.getElementById("modalGallery");
const modalBuyLink = document.getElementById("modalBuyLink");

const commandPalette = document.getElementById("commandPalette");
const commandOpenButtons = [document.getElementById("commandOpen"), document.getElementById("commandOpenBottom")].filter(Boolean);
const openActiveProductButton = document.getElementById("openActiveProduct");
const jumpFeaturedButton = document.getElementById("jumpFeatured");

document.getElementById("profileLinkTop").href = PROFILE_URL;
document.getElementById("profileLinkBottom").href = PROFILE_URL;

let activeProductId = PRODUCTS[0].id;

function createMetricPills(metrics) {
  return metrics.map((metric) => `<li><strong>${metric.label}</strong>: ${metric.value}</li>`).join("");
}

function renderProducts() {
  productsRail.innerHTML = PRODUCTS.map((product, index) => `
      <article class="product-card" id="product-${product.id}" data-product-id="${product.id}" tabindex="0">
        <div class="product-card-header">
          <div>
            <p class="eyebrow">${String(index + 1).padStart(2, "0")} / ${product.eyebrow}</p>
            <h3>${product.title}</h3>
          </div>
          <span class="live-pill">${product.metrics[0].value}</span>
        </div>
        <div class="product-card-body">
          <p>${product.hook}</p>
          <div class="product-meta">${product.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
        <div class="product-card-footer">
          <p>${product.summary}</p>
          <button class="ghost-button" type="button" data-open-product="${product.id}">Detayi gor<span>Signal file</span></button>
        </div>
      </article>
    `).join("");

  commandProducts.innerHTML = PRODUCTS.map((product) => `<a href="#product-${product.id}" data-command-link>${product.title}</a>`).join("");
}

function renderGalleryWall() {
  const wallItems = [
    { src: PRODUCTS[0].gallery[1].src, title: "Bagis etkisi", caption: "Super Chat veya destek, sadece bir liste degil; sahnede sonuc ureten olaydir.", size: "large" },
    { src: PRODUCTS[4].gallery[0].src, title: "Atmosferik ekran", caption: "Konsept yayinlarda siradan oyundan cok daha akilda kalici bir gorunum sunar.", size: "medium" },
    { src: PRODUCTS[2].gallery[0].src, title: "Survival tahmini", caption: "Basit ama tekrar oynanabilir bir izleyici psikolojisi uretir.", size: "small" },
    { src: PRODUCTS[3].gallery[2].src, title: "Skor baskisi", caption: "Quiz sisteminde dikkat sayac ve yan panelle sabitlenir.", size: "small" },
    { src: PRODUCTS[5].gallery[2].src, title: "Komut kaosu", caption: "Chat komutunun fiziksel karsiligi ekranda net sekilde gorunur.", size: "medium" },
  ];

  galleryWall.innerHTML = wallItems.map((item) => `
        <figure class="gallery-card ${item.size}">
          <img src="${item.src}" alt="${item.title}" />
          <figcaption><strong>${item.title}</strong><span>${item.caption}</span></figcaption>
        </figure>
      `).join("");
}

function updatePreview(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;

  activeProductId = productId;
  previewIndex.textContent = `${String(PRODUCTS.findIndex((item) => item.id === productId) + 1).padStart(2, "0")} / ${String(PRODUCTS.length).padStart(2, "0")}`;
  previewImage.src = product.image;
  previewImage.alt = `${product.title} urun onizleme gorseli`;
  previewEyebrow.textContent = product.eyebrow;
  previewTitle.textContent = product.title;
  previewHook.textContent = product.hook;
  previewMetrics.innerHTML = createMetricPills(product.metrics);
  previewBuyLink.href = product.buyUrl;
  previewGlow.style.background = `radial-gradient(circle, ${product.accent} 0%, transparent 70%)`;

  document.querySelectorAll(".product-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.productId === productId);
  });
}

function fillList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function openModal(productId) {
  const product = PRODUCTS.find((item) => item.id === productId);
  if (!product) return;

  modalEyebrow.textContent = product.eyebrow;
  modalTitle.textContent = product.title;
  modalSummary.textContent = product.summary;
  modalImage.src = product.image;
  modalImage.alt = `${product.title} ana gorseli`;
  modalGlow.style.background = `radial-gradient(circle, ${product.accent} 0%, transparent 70%)`;
  modalTags.innerHTML = product.tags.map((tag) => `<span>${tag}</span>`).join("");
  fillList(modalSalesPoints, product.salesPoints);
  fillList(modalMoments, product.streamMoments);
  fillList(modalPackage, product.packageItems);
  modalCompatibility.textContent = product.compatibility;
  modalSetup.textContent = product.setup;
  modalBuyLink.href = product.buyUrl;
  modalGallery.innerHTML = product.gallery.map((item) => `
        <figure class="modal-gallery-card">
          <img src="${item.src}" alt="${item.title}" />
          <figcaption><strong>${item.title}</strong><span>${item.caption}</span></figcaption>
        </figure>
      `).join("");

  productModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  productModal.hidden = true;
  document.body.style.overflow = "";
}

function openCommandPalette() {
  commandPalette.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCommandPalette() {
  commandPalette.hidden = true;
  if (productModal.hidden) document.body.style.overflow = "";
}

function splitHeadline() {
  document.querySelectorAll("[data-split='chars']").forEach((element) => {
    const text = element.textContent || "";
    element.innerHTML = text.split("").map((char) => (char === " " ? `<span class="char">&nbsp;</span>` : `<span class="char">${char}</span>`)).join("");
  });
}

function setupScrollTracking() {
  const productCards = [...document.querySelectorAll(".product-card")];
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) updatePreview(visible.target.dataset.productId);
    },
    { threshold: [0.35, 0.5, 0.75], rootMargin: "-10% 0px -25% 0px" }
  );
  productCards.forEach((card) => observer.observe(card));
}

function setupInteractions() {
  productsRail.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-product]");
    if (!trigger) return;
    openModal(trigger.dataset.openProduct);
  });

  productsRail.addEventListener("focusin", (event) => {
    const card = event.target.closest(".product-card");
    if (!card) return;
    updatePreview(card.dataset.productId);
  });

  productsRail.addEventListener("keydown", (event) => {
    const card = event.target.closest(".product-card");
    if (!card) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(card.dataset.productId);
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-modal='true']")) closeModal();
    if (event.target.closest("[data-close-command='true']")) closeCommandPalette();
  });

  commandOpenButtons.forEach((button) => button.addEventListener("click", openCommandPalette));

  document.addEventListener("click", (event) => {
    const commandLink = event.target.closest("[data-command-link]");
    if (!commandLink) return;
    closeCommandPalette();
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (commandPalette.hidden) openCommandPalette();
      else closeCommandPalette();
    }
    if (event.key === "Escape") {
      closeCommandPalette();
      closeModal();
    }
  });

  openActiveProductButton.addEventListener("click", () => openModal(activeProductId));
  jumpFeaturedButton.addEventListener("click", () => {
    document.getElementById(`product-${PRODUCTS[1].id}`)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  });
}

function setupMotion() {
  if (reduceMotion || typeof gsap === "undefined") {
    document.querySelectorAll(".reveal-block, .char").forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".hero-product-frame", {
    yPercent: -8,
    rotate: 2,
    ease: "none",
    scrollTrigger: { trigger: ".hero-scene", start: "top top", end: "bottom top", scrub: true },
  });
  gsap.to(".panel-left", {
    y: 60,
    rotate: -6,
    ease: "none",
    scrollTrigger: { trigger: ".hero-scene", start: "top top", end: "bottom top", scrub: true },
  });
  gsap.to(".panel-right", {
    y: -80,
    rotate: 18,
    ease: "none",
    scrollTrigger: { trigger: ".hero-scene", start: "top top", end: "bottom top", scrub: true },
  });
  gsap.to(".panel-bottom", {
    y: 90,
    x: 40,
    ease: "none",
    scrollTrigger: { trigger: ".hero-scene", start: "top top", end: "bottom top", scrub: true },
  });

  gsap.fromTo(".hero-title .char", { yPercent: 110, opacity: 0 }, {
    yPercent: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.02,
    ease: "power3.out",
    delay: 0.2,
  });

  document.querySelectorAll(".reveal-block").forEach((block, index) => {
    gsap.to(block, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: index < 2 ? 0.2 : 0,
      scrollTrigger: { trigger: block, start: "top 82%", once: true },
    });
  });

  if (!coarsePointer) {
    document.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, { rotateX: py * -3, rotateY: px * 6, transformPerspective: 900, duration: 0.25, ease: "power2.out" });
      });
      card.addEventListener("pointerleave", () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.35, ease: "power2.out" });
      });
    });
  }
}

splitHeadline();
renderProducts();
renderGalleryWall();
updatePreview(activeProductId);
setupScrollTracking();
setupInteractions();
setupMotion();
