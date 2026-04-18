window.LIVEPLAY_GAMES = [
  {
    id: "takim",
    title: "Takımını Sohbete Yaz",
    eyebrow: "TRİBÜN SAVAŞI",
    accent: "#f4c25b",
    glow: "rgba(244, 194, 91, 0.28)",
    size: "wide",
    homeImage: "./assets/takim-votes-live.png",
    homeFit: "contain",
    heroLabel: "Oylar, Super Chat ve çark aynı sahnede çalışır.",
    teaser:
      "İzleyici takım adını yazar, puan çubuğu dolar, Super Chat geldiğinde çark döner ve tek bir destek turun kaderini değiştirir.",
    metrics: [
      { label: "Kurulum", value: "OBS + browser source" },
      { label: "Sahne formatı", value: "1080x1920 dikey arena" },
      { label: "Tetkik", value: "Oy, bağış, çark, sonuç" },
    ],
    tags: ["Takım seçimi", "Super Chat", "Çark", "Skor barları"],
    description:
      "Takım savaşı yayını açılır açılmaz anlaşılır. Oylar barlara akar, liderlik anında görünür ve para desteği geldiğinde çark, sonuç kartı ve teşekkür sahnesi doğrudan ekrana vurur.",
    compatibility: "OBS Browser Source, dikey yayın düzeni, canlı sohbet tetikleri",
    setup:
      "Sunucuyu aç, OBS içine yerleştir, takım isimlerini sahaya bırak ve Super Chat tetiklerini bağla. Kısa kurulumla yüksek tempolu yayın akışı üretir.",
    streamFlow: [
      "İzleyici takım adını yazdığı anda puan barı parlar.",
      "Super Chat sonrası teşekkür katmanı ve Top 3 paneli yenilenir.",
      "Çark döner, bonus belirlenir ve sonuç kartı yeni tur dengesini kurar.",
    ],
    features: [
      {
        title: "Super Chat görünürlüğü",
        text: "Destek veren isimler sadece listede kalmaz; ekrana teşekkür katmanı ve Top 3 paneli olarak geri döner.",
      },
      {
        title: "Çark gerilimi",
        text: "Bağış sonrası dönen çark, hem izleyiciyi beklemeye sokar hem de sonucu dramatik bir an haline getirir.",
      },
      {
        title: "Bar savaşı",
        text: "Takım oyları şeffaf değil, büyük ve net skor barlarıyla akar. Yeni gelen izleyici de anında tabloyu çözer.",
      },
      {
        title: "Son tur hafızası",
        text: "Kazanan kartı ve önceki tur özeti sayesinde oyunda hikâye birikir, yayın segmentleri birbirine bağlanır.",
      },
    ],
    reasons: [
      "Tek bir karede hem monetization hem rekabet görünür olur.",
      "Takım aidiyeti yorum yazdırmayı doğal hale getirir.",
      "Çark ekranı klip çıkaran bekleme anı üretir.",
      "Dikey sahne tasarımı mobil izleyici için çok net çalışır.",
    ],
    gallery: [
      {
        src: "./assets/takim-votes-live.png",
        fit: "contain",
        title: "Oy yağdığında tablo böyle görünür",
        caption: "Takım barları dolarken liderlik, çark ve son tur kartı aynı anda görünür.",
      },
      {
        src: "./assets/takim-superchat-live.png",
        fit: "contain",
        title: "Super Chat geldiğinde sahne anında parlar",
        caption: "Teşekkür katmanı ve konfeti, bağışın ekrandaki ağırlığını görünür kılar.",
      },
      {
        src: "./assets/takim-wheel-live.png",
        fit: "contain",
        title: "Çark dönerken bekleme anı gerilime dönüşür",
        caption: "Çark mesajı, destekçi kartı ve odaklanmış wheel görüntüsü tek bir sonuç anı üretir.",
      },
      {
        src: "./assets/takim-result-live.png",
        fit: "contain",
        title: "Sonuç açıklandığında puan sahaya yazılır",
        caption: "Bonus sonrası takım puanı büyür, kazanan kartı yeni turun psikolojisini belirler.",
      },
    ],
  },
  {
    id: "arena",
    title: "Futbol Arena 3D Pro",
    eyebrow: "BAĞIŞ ODAKLI ARENA",
    accent: "#5ec8ff",
    glow: "rgba(94, 200, 255, 0.24)",
    size: "standard",
    homeImage: "./assets/arena-live-clean.png",
    homeFit: "contain",
    heroLabel: "Bağış puana çevrilir, takım baskısı tek panelde yaşar.",
    teaser:
      "TikTok, Twitch ve YouTube desteklerini tek arenada birleştiren hızlı skor formatı. Puan akışı, takım kartları ve canlı anlatım aynı panelde tutulur.",
    metrics: [
      { label: "Kurulum", value: "Tek pencere sahne" },
      { label: "Odak", value: "Bağış → skor" },
      { label: "Kullanım", value: "Kısa ve hızlı yayın segmenti" },
    ],
    tags: ["Arena", "Bağış akışı", "Skor paneli"],
    description:
      "Futbol Arena 3D Pro, hediye ve bağış akışını direkt takımların puan kartına bağlar. Görsel dili sade ama agresiftir; izleyen kişi bir bakışta hangi takımın baskı kurduğunu görür.",
    compatibility: "Tek pencere masaüstü sahnesi, çoklu platform bağış akışına uygun",
    setup:
      "Arena ekranını aç, puan kaynaklarını bağla ve sahneyi tam pencere olarak yayın düzenine yerleştir. Karmaşık kontrol katmanları gerektirmez.",
    streamFlow: [
      "Anlatım kutusu o anki çağrıyı canlı olarak taşır.",
      "Bağış geldikçe takım kartı ve skor parlak şekilde öne çıkar.",
      "Kısa tur mantığı sayesinde tempolu yayınlarda odak dağılmaz.",
    ],
    features: [
      {
        title: "Tek panel ritmi",
        text: "Ayrı overlay kalabalığı üretmeden, bilgi hiyerarşisini tek sahnede tutar.",
      },
      {
        title: "Yüksek okunabilirlik",
        text: "Takım kartları ve skor noktaları hızlı yayın akışında bile rahat seçilir.",
      },
      {
        title: "Bağış → etki zinciri",
        text: "Destek, soyut bir teşekkür olarak kalmaz; yarışın hissedilen gücüne dönüşür.",
      },
      {
        title: "Mobil uyum",
        text: "Dikey odağı güçlü olduğu için mobil izleyici kimin önde olduğunu kolayca görür.",
      },
    ],
    reasons: [
      "Sade ama vurucu bir rekabet hissi verir.",
      "Bağış çağrısını abartmadan, oyunun akışına gömer.",
      "İlk bakışta anlaşılır olduğu için yeni izleyici de tutunur.",
      "Kısa yayın segmentlerinde çok iyi çalışır.",
    ],
    gallery: [
      {
        src: "./assets/arena-live-clean.png",
        fit: "contain",
        title: "Arena sahnesinin tam görünümü",
        caption: "Süre, anlatım ve takım kartları tek dikey ekranda toplanır.",
      },
      {
        src: "./assets/arena-header-detail.png",
        fit: "cover",
        title: "Üst bant canlı maç hissi verir",
        caption: "Başlık, süre ve anlatım kutusu ritmi ilk bakışta kurar.",
      },
      {
        src: "./assets/arena-teamcard-detail.png",
        fit: "cover",
        title: "Takım kartları bağış baskısını taşır",
        caption: "Her takım alanı, puan akışını izleyiciye net bir şekilde gösterir.",
      },
      {
        src: "./assets/arena-score-detail.png",
        fit: "cover",
        title: "Skor odaklı orta panel",
        caption: "Takım blokları ekrana yayıldığında rekabet duygusu doğrudan okunur.",
      },
    ],
  },
  {
    id: "flaggame",
    title: "FlagGame",
    eyebrow: "SURVIVAL BAYRAK HAVUZU",
    accent: "#45d8ff",
    glow: "rgba(69, 216, 255, 0.24)",
    size: "standard",
    homeImage: "./assets/flaggame-live-clean.png",
    homeFit: "contain",
    heroLabel: "Bayrak havuzu sade görünür, merak duygusu yüksek çalışır.",
    teaser:
      "Son kalan bayrak mantığıyla işleyen, tahmin güdüsünü anında tetikleyen temiz bir survival format.",
    metrics: [
      { label: "Format", value: "Tahmin ve eleme" },
      { label: "Okunabilirlik", value: "Tek bakışta anlaşılır" },
      { label: "Tempo", value: "Kısa segmentler" },
    ],
    tags: ["Tahmin", "Survival", "Bayrak havuzu"],
    description:
      "FlagGame, çok basit bir ekranla büyük bir merak hissi yaratır. İzleyici hangi bayrağın sona kalacağını tahmin eder, bekleme anı gerilim üretir ve final geldiğinde sohbet doğal biçimde patlar.",
    compatibility: "OBS ile rahat kullanılır, düşük karmaşa isteyen yayınlara çok uygun",
    setup:
      "Oyunu tam pencere aç, sahneye yerleştir ve tahmin çağrısını sohbette başlat. Öğretmesi kolay, izletmesi güçlü bir format sunar.",
    streamFlow: [
      "İlk çağrıdan sonra izleyici favori ülkeyi seçer.",
      "Bayrak havuzundaki boşalmalar beklenti yaratır.",
      "Kazanan yaklaştıkça sohbet aynı hedefe kilitlenir.",
    ],
    features: [
      {
        title: "Basit giriş eşiği",
        text: "Oyunu ilk kez gören kişi bile saniyeler içinde mantığını kavrar.",
      },
      {
        title: "Bekleme gerilimi",
        text: "Finale kadar kalan birkaç bayrak, düşük eforla güçlü merak üretir.",
      },
      {
        title: "Temiz dikey kompozisyon",
        text: "Dikey ekranda merkez havuz ve alt bank birlikte güzel görünür.",
      },
      {
        title: "Yüksek tekrar potansiyeli",
        text: "Kısa segmentler halinde tekrar tekrar oynatılabilir.",
      },
    ],
    reasons: [
      "Tahmine dayalı olduğu için yorum eşiği düşüktür.",
      "Kısa sürede merak kurar, sıkmadan biter.",
      "Sade görsel dil sayesinde mobilde temiz okunur.",
      "Arka arkaya oynatılabilecek kadar hafif ama akılda kalıcıdır.",
    ],
    gallery: [
      {
        src: "./assets/flaggame-live-clean.png",
        fit: "contain",
        title: "Tam oyun sahnesi",
        caption: "Kazanan sayacı, merkez havuz ve alt bayrak bankı aynı ekranda görünür.",
      },
      {
        src: "./assets/flaggame-winners-detail.png",
        fit: "cover",
        title: "Üst bilgi bandı final baskısını taşır",
        caption: "Kalan kişi ve Top Winners alanı oyunun mini hikâyesini kurar.",
      },
      {
        src: "./assets/flaggame-bowl-detail.png",
        fit: "cover",
        title: "Merkez havuzda eleme gerilimi büyür",
        caption: "Bayrakların sıkışık yapısı gözün orta sahneye kilitlenmesini sağlar.",
      },
      {
        src: "./assets/flaggame-bank-detail.png",
        fit: "cover",
        title: "Alt bank yeni tahmin için referans olur",
        caption: "Seyirci hem kalanları hem yedek havuzu görerek daha rahat seçim yapar.",
      },
    ],
  },
  {
    id: "quiz",
    title: "Bilgi Yarışması",
    eyebrow: "QUIZ + TOP 3 PANELİ",
    accent: "#1df2ff",
    glow: "rgba(29, 242, 255, 0.24)",
    size: "wide",
    homeImage: "./assets/bilgiguncel-active-live.png",
    homeFit: "contain",
    heroLabel: "Başlangıç ekranı değil, oyunun aktif soru hali kullanılır.",
    teaser:
      "Süre, soru, cevaplar, Super Chat Top 3 ve skor tablosu aynı sahnede akar. Cevap hızlandıkça yayın da hızlanır.",
    metrics: [
      { label: "Kurulum", value: "Browser source akışı" },
      { label: "Odak", value: "Soru + skor + destek" },
      { label: "Duygu", value: "Hızlı cevap baskısı" },
    ],
    tags: ["Quiz", "Zaman", "Top 3", "Skor tablosu"],
    description:
      "Bu sahnede bekleme perdesi yok; izleyici doğrudan oyunun içindedir. Soru kutusu, süre halkası ve skor tablosu birleşerek tempolu ve tekrar oynatılabilir bir bilgi yarışı kurar.",
    compatibility: "Dikey browser source, yorum tabanlı cevap akışı, destek paneliyle uyumlu",
    setup:
      "Quiz sahnesini browser source olarak ekle, soru setini bağla ve oyunu doğrudan aktif ekranla aç. İzleyici hangi seçeneği yazacağını saniyesinde anlar.",
    streamFlow: [
      "Soru göründüğü anda A-B-C-D seçenekleri ekrana net biçimde açılır.",
      "Skor tablosu cevap hızını ödüllendirir, Super Chat paneli görünür destek yaratır.",
      "Yeni tur başladığında izleyici yeniden dahil olmak için doğal bir sebep bulur.",
    ],
    features: [
      {
        title: "Aktif sahne görünümü",
        text: "Detay sayfasında artık karanlık bekleme katmanı değil, oyunun gerçekten başladığı ekran kullanılır.",
      },
      {
        title: "Süre baskısı",
        text: "Merkezde duran halka sayaç, soru çözme anını dramatik hale getirir.",
      },
      {
        title: "Skor görünürlüğü",
        text: "Yüksek puan alanlar ekranda hemen belirir ve yarışma hissi artar.",
      },
      {
        title: "Top 3 desteği",
        text: "Destek verenlerin panelde görünmesi monetization ile quiz akışını aynı sahnede toplar.",
      },
    ],
    reasons: [
      "Yeni izleyici için giriş noktası son derece nettir.",
      "Her soru yeni bir mini final hissi yaratır.",
      "Skor tablosu tekrar katılımı teşvik eder.",
      "Dikey yayın formatında çok güçlü görünür.",
    ],
    gallery: [
      {
        src: "./assets/bilgiguncel-active-live.png",
        fit: "contain",
        title: "Aktif oyun sahnesi",
        caption: "Karanlık açılış overlay'i yerine soru, sayaç, Top 3 ve skor tablosunun birlikte aktığı gerçek oyun ekranı.",
      },
      {
        src: "./assets/bilgiguncel-question-detail.png",
        fit: "cover",
        title: "Soru kutusu karar anını kurar",
        caption: "Soru ve seçenekler yorum yazma eylemini doğrudan tetikler.",
      },
      {
        src: "./assets/bilgiguncel-superchat-detail.png",
        fit: "cover",
        title: "Super Chat Top 3 sürekli görünür kalır",
        caption: "Bağış akışı skor yarışının üstüne net bir destek katmanı ekler.",
      },
      {
        src: "./assets/bilgiguncel-scoreboard-detail.png",
        fit: "cover",
        title: "Skor tablosu hızlı cevap verenleri yukarı taşır",
        caption: "Oyuncu sayısı arttıkça tablo ekranda kendi dramatik yapısını üretir.",
      },
    ],
  },
  {
    id: "deathnote",
    title: "Death Note Live",
    eyebrow: "KARANLIK TYPING ATMOSFERİ",
    accent: "#f5f0e8",
    glow: "rgba(245, 240, 232, 0.18)",
    size: "standard",
    homeImage: "./assets/deathnote-clean.png",
    homeFit: "cover",
    heroLabel: "Masaüstü sızıntısı yok; yalnızca sahnenin kendisi gösterilir.",
    teaser:
      "Typing ve masaüstü gerilimini anime diliyle birleştiren niş ama akılda kalan bir yayın deneyi.",
    metrics: [
      { label: "Format", value: "Desktop sahnesi" },
      { label: "Hissiyat", value: "Gerilim + yazı akışı" },
      { label: "Öne çıkan", value: "Estetik atmosfer" },
    ],
    tags: ["Typing", "Desktop", "Gerilim"],
    description:
      "Death Note Live, yayına tür duygusu katan işlerden biri. Karanlık üst bant, boş defter yüzeyi ve kalem detayı basit bir ekrandan çok daha sinematik bir hava çıkarıyor.",
    compatibility: "Pencere yakalama ya da masaüstü sahnesi olarak kullanılabilir",
    setup:
      "Temiz pencere görüntüsünü OBS içine al ve sahneyi ekrana tam oturacak şekilde yerleştir. Atmosferi kuvvetli olduğu için özel etkinlik yayınlarında iyi çalışır.",
    streamFlow: [
      "Sahne açıldığında izleyici önce boş sayfanın gerilimini görür.",
      "Typing anı yazma dürtüsünü hikâye duygusuna bağlar.",
      "Niş estetik, yayını genel görünümden ayırır ve hatırlanır kılar.",
    ],
    features: [
      {
        title: "Sinematik kadraj",
        text: "Tek bir pencere görüntüsüyle yüksek estetik etki verir.",
      },
      {
        title: "Düşük karmaşa",
        text: "Arayüz kalabalığı yerine sahnenin çizgisel gücüne yaslanır.",
      },
      {
        title: "Hatırlanabilir ton",
        text: "Gerilim atmosferi yüzünden izleyici bu sahneyi sıradan oyun ekranlarından ayırır.",
      },
      {
        title: "Klibe uygun anlar",
        text: "Kalem ve sayfa detayı kısa kesitlerde bile dikkat çeker.",
      },
    ],
    reasons: [
      "Yayın kimliğine karakter katar.",
      "Masaüstü görüntüsü değil, temiz sahne hissi verir.",
      "Minimal öğeyle güçlü atmosfer üretir.",
      "Niş içerik seven kitle için çok etkili görünür.",
    ],
    gallery: [
      {
        src: "./assets/deathnote-clean.png",
        fit: "cover",
        title: "Temiz ana sahne",
        caption: "Detay sayfasında sadece oyun penceresi görünür; masaüstü veya pencere artığı yoktur.",
      },
      {
        src: "./assets/deathnote-pen-detail.png",
        fit: "cover",
        title: "Kalem detayı görsel tonu kurar",
        caption: "Yazma anının gerilimi küçük bir crop'ta bile hissedilir.",
      },
      {
        src: "./assets/deathnote-hand-detail.png",
        fit: "cover",
        title: "El ve sayfa hareketi ana vurgu",
        caption: "Sahnenin en ikonik açısı, typing deneyimine karakter katar.",
      },
      {
        src: "./assets/deathnote-page-detail.png",
        fit: "cover",
        title: "Boş sayfa bekleyişi büyütür",
        caption: "Henüz yazılmamış alan, izleyicide bir sonraki anı bekleme refleksi oluşturur.",
      },
    ],
  },
  {
    id: "pickaxe",
    title: "Falling Pickaxe",
    eyebrow: "KOMUT TABANLI KAOS",
    accent: "#ffb45e",
    glow: "rgba(255, 180, 94, 0.24)",
    size: "standard",
    homeImage: "./assets/falling-pickaxe-clean.png",
    homeFit: "contain",
    heroLabel: "Oyun alanının tamamı görünür, masaüstü sızıntısı yoktur.",
    teaser:
      "Komutlarla pickaxe düşür, TNT yağdır, zemini boz ve ekrandaki fiziksel kaosu izlet. Meme potansiyeli yüksek, klip çıkarması kolay bir format.",
    metrics: [
      { label: "Motor", value: "Pygame masaüstü sahnesi" },
      { label: "Tetkik", value: "Komut ve olay akışı" },
      { label: "Hissiyat", value: "Fiziksel kaos" },
    ],
    tags: ["Pygame", "Komut", "Kaos", "Meme"],
    description:
      "Falling Pickaxe kartında artık yalnızca oyunun kendisi var. Tüm alan görünüyor; cevher sayacı, yüzey, düşen pickaxe ve alt cevher bölgesi aynı çerçevede okunuyor.",
    compatibility: "Masaüstü pencere yakalama, komut tetikleri ve eğlence segmentleri için uygun",
    setup:
      "Oyunu tam sahne aç, pencereyi temiz crop ile OBS içine al ve komut akışını yorum/bağış tetikleriyle eşleştir. Karmaşa büyüdükçe içerik değeri de büyür.",
    streamFlow: [
      "İzleyici komut attıkça pickaxe ve yüzey etkileşime girer.",
      "Kaotik düşüşler oyunun meme gücünü artırır.",
      "Alt bölümdeki cevher alanı, ekranın sadece dekor değil oyun alanı olduğunu hissettirir.",
    ],
    features: [
      {
        title: "Tam alan görünümü",
        text: "Kartta ve detay sayfasında bütün oyun sahnesi görünür; hiçbir noktada masaüstü sızıntısı bırakılmaz.",
      },
      {
        title: "Cevher ekonomisi",
        text: "Sol sayaç ve alt taş blokları oyuna minik bir toplama dili katar.",
      },
      {
        title: "Düşüş anı",
        text: "Pickaxe'in orta boşlukta süzülmesi ekranı her an kliplik hale getirir.",
      },
      {
        title: "Komutla hikâye",
        text: "Tek satırlık komutun fiziksel sonuç üretmesi izleyicide tekrar etkileşim isteği yaratır.",
      },
    ],
    reasons: [
      "Komut ve kaos ilişkisi çok nettir.",
      "Görsel dil arcade hissi verir.",
      "Küçük anlardan kolay klip çıkar.",
      "Masaüstü artığı görünmeden temiz sahne sunar.",
    ],
    gallery: [
      {
        src: "./assets/falling-pickaxe-clean.png",
        fit: "contain",
        title: "Tam oyun alanı",
        caption: "Tüm sahne, yüzey, sayaç ve alt maden dokusu birlikte görünür.",
      },
      {
        src: "./assets/pickaxe-surface-detail.png",
        fit: "cover",
        title: "Yüzey baskısı ilk bakışta okunur",
        caption: "Üst bölüm düşüş hattını ve oyunun boşluk mantığını gösterir.",
      },
      {
        src: "./assets/pickaxe-fall-detail.png",
        fit: "cover",
        title: "Pickaxe düşüş anı",
        caption: "Sahnenin orta bölgesi doğrudan fiziksel etki hissi üretir.",
      },
      {
        src: "./assets/pickaxe-ore-detail.png",
        fit: "cover",
        title: "Alt cevher alanı oyunu zenginleştirir",
        caption: "Maden dokusu ve cevher kümeleri oyunun loot duygusunu güçlendirir.",
      },
    ],
  },
]

window.LIVEPLAY_LOOKUP = Object.fromEntries(
  window.LIVEPLAY_GAMES.map((game) => [game.id, game]),
)
