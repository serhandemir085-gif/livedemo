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

const STORY_PACKS = {
  takim: {
    growthLead:
      "Takımını Sohbete Yaz, taraf seçtirdiği için yorumu ilk saniyede başlatır; Super Chat ve çark sayesinde her turu kliplik final anına çevirir.",
    growthMap: [
      { label: "3 saniyelik kanca", value: "Takımını yaz ve tarafını seç." },
      { label: "Yorum motoru", value: "Her yeni oy, skor barlarını gözle görülür biçimde iter." },
      { label: "Klip anı", value: "Çark döndüğünde bütün yayın tek karede gerilir." },
      { label: "Geri dönüş nedeni", value: "Her turda yeni lider, yeni bonus ve yeni hesaplaşma vardır." },
    ],
    creatorLines: [
      "Sohbete takımını yaz, bu turun tribünü kimde görelim.",
      "Super Chat gelirse çark açılıyor; tek destek bütün tabloyu çevirebilir.",
      "Son saniyelerde barı öne taşıyan takım spotlight'ı kapacak.",
    ],
    audienceFlow: [
      "Taraf tutma duygusu izleyiciyi pasif izleyici olmaktan çıkarır.",
      "Skor barlarının canlı değişmesi ekrana bakma süresini uzatır.",
      "Çark ve sonuç kartı doğal paylaşılabilir final sahnesi üretir.",
      "Her yeni tur, kaçıran kişiye yeniden katılma bahanesi verir.",
    ],
  },
  arena: {
    growthLead:
      "Futbol Arena 3D Pro, bağışın skora çevrildiğini tek bakışta gösterdiği için hızlı anlaşılır ve kısa rekabet segmentlerinde güçlü çalışır.",
    growthMap: [
      { label: "İlk görüntü", value: "Skor ve takım kartları anında rekabet hissi verir." },
      { label: "Bağış etkisi", value: "Destek doğrudan puana döndüğü için neden bağışlandığı nettir." },
      { label: "Tempo", value: "Kısa turlar sayesinde yayın ritmi düşmez." },
      { label: "Geri dönüş nedeni", value: "Yeni destek geldiğinde skor dengesi bir anda değişebilir." },
    ],
    creatorLines: [
      "Bu tur hangi takım baskı kuracak, desteği ona göre yağdırın.",
      "Bir bağış oyunun bütün yönünü çevirebilir; skora dikkat edin.",
      "Sürenin sonuna kadar lider değişirse yeni tur direkt daha sert açılacak.",
    ],
    audienceFlow: [
      "Skor düzeni sade olduğu için mobil izleyici bile hızlıca oyuna girer.",
      "Bağışın soyut kalmaması, destek çağrısını daha inandırıcı yapar.",
      "Takım kartları rekabeti kişiselleştirir ve taraf yaratır.",
      "Kısa format olması, art arda birkaç tur oynanmasını kolaylaştırır.",
    ],
  },
  flaggame: {
    growthLead:
      "FlagGame sadeliğiyle keşfette çalışır; yeni gelen izleyici mantığı saniyesinde çözer ve kazanan bayrağı tahmin etmek ister.",
    growthMap: [
      { label: "İlk görüntü", value: "Merkez havuz ve kalan bayraklar tek bakışta anlaşılır." },
      { label: "Yorum motoru", value: "İzleyici favori bayrağını seçip tahminini savunur." },
      { label: "Klip anı", value: "Son birkaç bayrak kaldığında doğal gerilim tavan yapar." },
      { label: "Geri dönüş nedeni", value: "Her yeni tur farklı favori ve farklı final üretir." },
    ],
    creatorLines: [
      "Sona hangi bayrak kalacak, şimdi yorumlara ülkenizi yazın.",
      "Son üçe kalınca sohbeti kaplayan ülke gerçekten güçlü demektir.",
      "Bu finali kaçırmayın; son kalan bayrak bir anda her şeyi tersine çevirebilir.",
    ],
    audienceFlow: [
      "Kuralların aşırı basit olması, keşfetten gelen kişiyi de hemen dahil eder.",
      "Tahmin kültürü yorum yazmayı doğal hale getirir.",
      "Sonlara doğru oluşan sessiz gerilim izleme süresini uzatır.",
      "Kısa sürmesi, tekrar tekrar oynanarak içerik hacmi üretmesini sağlar.",
    ],
  },
  quiz: {
    growthLead:
      "Bilgi Yarışması aktif soru ekranıyla açıldığı için bekletmez; cevap baskısı, skor tablosu ve Top 3 desteğiyle sürekli mikro-final üretir.",
    growthMap: [
      { label: "İlk görüntü", value: "Soru, sayaç ve seçenekler aynı anda karar baskısı kurar." },
      { label: "Yorum motoru", value: "A-B-C-D yazmak kadar düşük eşikli bir giriş sunar." },
      { label: "Klip anı", value: "Süre biterken doğru cevap ve sıralama patlar." },
      { label: "Geri dönüş nedeni", value: "Her yeni soru yeni bir mini final gibi davranır." },
    ],
    creatorLines: [
      "Süre akıyor, doğru şıkkı şimdi yorumlara bırakın.",
      "En hızlı cevap verenler yukarı çıkacak; geç kalırsanız tabloyu kaçırırsınız.",
      "Super Chat desteği Top 3'ü değiştirirse bu soru tamamen başka yere gider.",
    ],
    audienceFlow: [
      "Cevap girişi çok kolay olduğu için yeni gelenler de hızlı katılır.",
      "Sayaç yüzünden izleyici ekrandan kolay kopamaz.",
      "Skor tablosu rekabet duygusunu soru bittiğinde de taşır.",
      "Arka arkaya sorular yayın içinde doğal seri etkisi oluşturur.",
    ],
  },
  deathnote: {
    growthLead:
      "Death Note Live, niş estetiği sayesinde thumb-stop etkisi üretir; yayın içinde farklı görünmek isteyen kanallar için atmosfer üzerinden merak toplar.",
    growthMap: [
      { label: "İlk görüntü", value: "Boş sayfa ve karanlık üst bant anında dikkat çeker." },
      { label: "Merak motoru", value: "İzleyici bu sahnenin nereye evrileceğini görmek ister." },
      { label: "Klip anı", value: "Kalem ve sayfa hareketi kısa kesitte bile akılda kalır." },
      { label: "Geri dönüş nedeni", value: "Sıradan oyun ekranlarına benzemediği için hafızada kalır." },
    ],
    creatorLines: [
      "Bu sayfaya birazdan ne yazılacağını yorumlarla siz belirleyeceksiniz.",
      "Sahne sakin görünüyor ama bir sonraki kelime bütün tonu değiştirecek.",
      "Bu anı kaçırmayın; yazı geldiğinde ekranın hissi tamamen dönüşecek.",
    ],
    audienceFlow: [
      "Niş estetik, yayını benzer içeriklerden ayırır.",
      "Minimal sahne kalabalık üretmeden dikkat toplar.",
      "Gerilim hissi izleyicinin merakını daha uzun tutar.",
      "Kısa kliplerde bile farklı tonu sayesinde seçilebilir kalır.",
    ],
  },
  pickaxe: {
    growthLead:
      "Falling Pickaxe saf kaos hissi verdiği için keşfette hızlı dikkat çeker; komutun ekranda fiziksel sonuç üretmesi izleyiciyi tekrar tekrar denemeye iter.",
    growthMap: [
      { label: "İlk görüntü", value: "Tüm oyun alanı tek karede arcade kaosu gibi görünür." },
      { label: "Yorum motoru", value: "Komut atıldığında ekranda gerçek fiziksel tepki oluşur." },
      { label: "Klip anı", value: "Pickaxe düşüşü ve yüzey kırılması kolay paylaşılır an üretir." },
      { label: "Geri dönüş nedeni", value: "Bir sonraki komutun ne bozacağını herkes görmek ister." },
    ],
    creatorLines: [
      "Komutu yazın, pickaxe'i birazdan hep beraber aşağı salıyoruz.",
      "Bu zemini kim bozacak görelim; tek komut oyunu tamamen çirkinleştirebilir.",
      "Bir sonraki düşüş kliplik olabilir, komut yağdırmayı kesinlikle bırakmayın.",
    ],
    audienceFlow: [
      "Komutla fiziksel sonuç almak izleyiciyi oyunun ortağı gibi hissettirir.",
      "Ekrandaki kaos her saniye yeni görsel varyasyon üretir.",
      "Meme potansiyeli yüksek olduğu için klip alma isteği doğal yükselir.",
      "Tam oyun alanının görünmesi, izleyicinin neyi etkilediğini açıkça göstermesini sağlar.",
    ],
  },
}

const COMMERCIAL_PACKS = {
  takim: {
    buyUrl: "https://www.itemsatis.com/script-satisi/youtube-canli-yayin-takim-oylama-oyunu-4825124.html",
    buyLabel: "İlanı aç",
    offerSummary:
      "Itemsatış tarafındaki takım oylama ve keşfet scripti diline yakın şekilde bu ürün; yüksek chat, Super Chat tetikleri, çark gerilimi ve yayıncının tek yayında daha fazla bağış görmesini hedefleyen premium yayın motoru gibi konumlanır.",
    marketBullets: [
      "Daha fazla chat, daha fazla bağış mantığı",
      "Super Chat sonrası otomatik reaksiyon",
      "Keşfet ve izlenme süresi odaklı tur yapısı",
      "Tek seferlik kurulum ve yayıncı dostu akış",
    ],
    packageItems: [
      "OBS uyumlu dikey sahne düzeni",
      "Hazır takım temaları ve skor efektleri",
      "Çark, bonus ve sonuç anı kurgusu",
      "Kurulum akışı ve kullanım mantığı",
    ],
  },
  arena: {
    buyUrl: "https://www.itemsatis.com/script-satisi/premium-1-aylik-canli-yayin-kesfet-scripti-4673070.html",
    buyLabel: "İlgili keşfet ilanı",
    offerSummary:
      "Futbol Arena 3D Pro, bağışı doğrudan skora çevirdiği için satış sayfasında 'anlaşılır rekabet + görünür gelir etkisi' vurgusuyla öne çıkabilecek bir yayın aracı gibi davranır.",
    marketBullets: [
      "Bağışın anında skora dönmesi",
      "Tek bakışta anlaşılır takım rekabeti",
      "Kısa tur mantığıyla yüksek tempo",
      "Yayıncı için düşük operasyon yükü",
    ],
    packageItems: [
      "Tek pencere arena sahnesi",
      "Skor ve takım kartı sistematiği",
      "Anlatım kutusu ve süre bandı",
      "Hızlı kurulum mantığı",
    ],
  },
  flaggame: {
    buyUrl: "https://www.itemsatis.com/p/CodeHub",
    buyLabel: "CodeHub profilinde gör",
    offerSummary:
      "FlagGame sade görünmesine rağmen satış dili açısından 'düşük bariyer, yüksek tahmin dürtüsü, tekrar oynanabilir kısa segment' formülüyle kitle toplamak için güçlü bir ürün gibi konumlanır.",
    marketBullets: [
      "İlk bakışta anlaşılır tahmin oyunu",
      "Mobil izleyicide temiz okunabilirlik",
      "Kısa ama tekrar oynanabilir yayın turları",
      "Yorum yazdıran ülke ve bayrak rekabeti",
    ],
    packageItems: [
      "Tam oyun sahnesi görünümü",
      "Kazanan ve kalanlar bilgisi",
      "Bayrak havuzu ve alt bank kurgusu",
      "Yayıncıya kolay anlatılan oyun mantığı",
    ],
  },
  quiz: {
    buyUrl: "https://www.itemsatis.com/yayincilara-video-hizmeti/canli-yayin-script-4561468.html",
    buyLabel: "Genel canlı yayın ilanı",
    offerSummary:
      "Bilgi Yarışması, bekleme overlay'i yerine aktif soru ekranıyla açıldığı için satış sayfasında 'hazır etkileşim, hızlı cevap baskısı, skorla geri dönüş' vadeden teknoloji odaklı bir quiz sistemi gibi öne çıkar.",
    marketBullets: [
      "Aktif sahne ile anında başlayan oyun akışı",
      "Süre baskısı sayesinde yüksek dikkat",
      "Top 3 destek paneli ile gelir katmanı",
      "Her soruda yeni mini final hissi",
    ],
    packageItems: [
      "Soru, sayaç ve cevap paneli",
      "Skor tablosu ve oyuncu görünürlüğü",
      "Super Chat Top 3 desteği",
      "Browser source uyumlu kurulum mantığı",
    ],
  },
  deathnote: {
    buyUrl: "https://www.itemsatis.com/yayincilara-video-hizmeti/deathnote-otomasyonu-4475955.html",
    buyLabel: "Deathnote ilanı",
    offerSummary:
      "Death Note Live, klasik yayın oyunlarından ayrılan atmosferi sayesinde satış tarafında 'niş ama çok akılda kalıcı premium sahne' olarak konumlanabilecek estetik odaklı bir deneyim sunar.",
    marketBullets: [
      "Sinematik ve ayırt edici yayın estetiği",
      "Masaüstü sızıntısı olmadan temiz sahne",
      "Kısa kliplerde bile dikkat çeken ton",
      "Özel etkinlik ve konsept yayın uyumu",
    ],
    packageItems: [
      "Temiz pencere sahnesi",
      "Kalem ve sayfa odaklı kompozisyon",
      "Gerilim hissi taşıyan görsel dil",
      "Yayın kimliği güçlendiren farklı atmosfer",
    ],
  },
  pickaxe: {
    buyUrl: "https://www.itemsatis.com/yayinci-tasarimlari/minecraft-tnt-patlatma-kazma-yayin-scripti-4475428.html",
    buyLabel: "Minecraft TNT ilanı",
    offerSummary:
      "Minecraft TNT Patlatma ve Kazma scripti ilanlarındaki yaklaşım gibi bu ürün de 'yayın linkini gir, komutları çalıştır, sohbeti canlı oyun alanına çevir' mantığıyla yüksek etkileşimli otomasyon paketi hissi verir.",
    marketBullets: [
      "Sohbet komutlarını anlık algılayan yapı",
      "Tek komutta fiziksel sonuç üreten kaos motoru",
      "Meme ve klip potansiyeli yüksek sahneler",
      "Kurulumu kolay, izlenmesi zor bırakılan format",
    ],
    packageItems: [
      "Tam görünür oyun alanı ve temiz crop",
      "Yüzey, düşüş ve cevher sahne katmanları",
      "Komut tabanlı olay akışı mantığı",
      "Yayın başlatma ve otomasyon hissi",
    ],
  },
}

window.LIVEPLAY_PROFILE_URL = "https://www.itemsatis.com/p/CodeHub"

window.LIVEPLAY_GAMES = window.LIVEPLAY_GAMES.map((game) => ({
  ...game,
  ...(STORY_PACKS[game.id] || {}),
  ...(COMMERCIAL_PACKS[game.id] || {}),
}))

window.LIVEPLAY_LOOKUP = Object.fromEntries(
  window.LIVEPLAY_GAMES.map((game) => [game.id, game]),
)
