import {
  Building2,
  Cctv,
  Laptop,
  SatelliteDish,
  Smartphone,
  Tv,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react"

import type { FaqItem } from "@/lib/data/faq"

export type ServiceProblem = {
  title: string
  description: string
}

export type ServiceHeroContent = {
  title: string
  description: string
  image: string
  imageAlt: string
}

export type ServiceSeo = {
  title: string
  description: string
}

export type Service = {
  slug: string
  // Bir ana hizmetin alt sayfasıysa ana hizmetin slug'ı (breadcrumb için).
  parentSlug?: string
  title: string
  shortTitle: string
  icon: LucideIcon
  summary: string
  subServices: string[]
  // İşletmenin öne çıkarmak istediği ana hizmet. Ana sayfadaki hizmet
  // kartında rozet + vurgulu çerçeve ile gösterilir.
  featured?: boolean
  // Aşağıdaki alanlar yalnızca gerçek detay sayfası oluşturulan servislerde
  // dolu olur (bkz. ServicePageTemplate). Sayfası henüz olmayan servisler için
  // boş bırakılır.
  problems?: ServiceProblem[]
  faq?: FaqItem[]
  hero?: ServiceHeroContent
  seo?: ServiceSeo
  relatedSlugs?: string[]
  // Belirtilmezse getServiceWhatsAppMessage() genel bir mesaj üretir.
  whatsappMessage?: string
}

// Ana sayfadaki hizmet kartının ihtiyaç duyduğu asgari alanlar. Detay sayfası
// olmayan ama kartta gösterilen girişler (örn. /urunler) de bu şekli kullanır,
// böylece kart bileşeni tek yerde kalır.
export type ServiceCardData = Pick<
  Service,
  "slug" | "title" | "icon" | "summary" | "subServices" | "featured" | "whatsappMessage"
>

// Sıra bilinçlidir ve işletmenin hizmet önceliğini yansıtır: önce ana odak
// (uydu ve çanak anten), sonra kamera ile elektrik-internet, ardından mağazada
// yapılan telefon ve bilgisayar tamiri. Bu dizi ana sayfa hizmet kartlarını,
// footer hizmet listesini ve hakkımızda sayfasındaki hizmet linklerini besler.
export const services: Service[] = [
  {
    slug: "uydu-sistemleri",
    title: "Uydu ve Çanak Anten Kurulumu",
    shortTitle: "Uydu ve Çanak Anten",
    icon: SatelliteDish,
    featured: true,
    summary:
      "Çanak anten kurulumu, uydu sistemleri, uydu arıza servisi ve TV bağlantı ayarları.",
    subServices: [
      "Çanak anten kurulumu ve montajı",
      "Uydu arıza ve servis",
      "Uydu alıcısı kurulumu",
      "Merkezi uydu sistemi kurulumu",
      "TV kurulumu, duvara montaj ve kanal ayarı",
    ],
    problems: [
      {
        title: "Çanak Antenim Yok veya Arızalı",
        description:
          "Yeni çanak anten kurulumu ve mevcut anten arızalarında adresinizde montaj, ayar ve onarım yapıyoruz.",
      },
      {
        title: "Uydu Sinyalim Sürekli Gidiyor",
        description:
          "Hava koşulları, konum kayması veya kablo arızasından kaynaklanan uydu sinyal sorununu yerinde tespit edip çözüyoruz.",
      },
      {
        title: "Apartmanda Herkese Ayrı Çanak Anten Yok",
        description:
          "Apartman ve siteler için merkezi uydu sistemi kurulumu ile tüm dairelere tek çanaktan yayın sağlıyoruz.",
      },
      {
        title: "Uydu Alıcım veya TV'm Kanal Bulmuyor",
        description:
          "Uydu alıcısı kurulumu, TV bağlantısı ve kanal ayarlarını yaparak sisteminizi kullanıma hazır hale getiriyoruz.",
      },
    ],
    faq: [
      {
        question: "İstanbul'da hangi bölgelere çanak anten kurulumu yapıyorsunuz?",
        answer:
          "Evet. Çanak anten kurulumu, uydu sistemi montajı ve anten servisini İstanbul genelinde, Avrupa Yakası ve Anadolu Yakası'nda adresinize gelerek yapıyoruz. Mağazamız Beyoğlu'ndadır.",
      },
      {
        question: "Uydu kurulumu ne kadar sürer?",
        answer:
          "Süre; kurulumun türüne, binanın yapısına ve kablolama ihtiyacına göre değişir. Apartman tipi merkezi sistemlerde bina büyüklüğü de etkilidir. Net bilgi için WhatsApp'tan yazabilirsiniz.",
      },
      {
        question: "Uydu sinyali neden gidiyor?",
        answer:
          "Hava koşulları, çanak antenin konumundaki oynama veya kablo/LNB arızaları sinyal kaybının en sık nedenleridir. Uydu arıza servisi için bize ulaşabilirsiniz.",
      },
      {
        question: "Merkezi uydu sistemi nedir?",
        answer:
          "Apartman veya site genelinde tek bir çanak anten üzerinden tüm dairelere yayın dağıtan sisteme merkezi uydu sistemi denir.",
      },
      {
        question: "TV kurulumu ve kanal ayarı da yapıyor musunuz?",
        answer:
          "Evet, uydu alıcısı ve TV bağlantısının kurulumu ile kanal ayarlarını da yapıyoruz.",
      },
    ],
    hero: {
      title: "İstanbul Uydu Kurulumu ve Çanak Anten Servisi",
      description:
        "Kılınç Teknomarket; İstanbul genelinde, Avrupa Yakası ve Anadolu Yakası'nda çanak anten kurulumu, uydu sistemleri, merkezi uydu sistemi, uydu arıza servisi ve TV kanal ayarı hizmetini adresinizde sunar.",
      image: "/images/services/satellite/kilinc-teknomarket-uydu-montaji-beyoglu.png",
      imageAlt: "Kılınç Teknomarket uydu ve çanak anten montajı",
    },
    seo: {
      title: "Uydu Kurulumu ve Çanak Anten Servisi İstanbul",
      description:
        "İstanbul genelinde uydu kurulumu, çanak anten kurulumu, merkezi uydu sistemi ve uydu arıza servisi. Avrupa ve Anadolu Yakası'nda yerinde hizmet. WhatsApp'tan hemen ulaşın.",
    },
    relatedSlugs: [
      "uydu-anten-ariza-servisi",
      "merkezi-uydu-sistemi",
      "tv-kurulumu-kanal-ayari",
      "kamera-sistemleri",
    ],
    whatsappMessage:
      "Merhaba, uydu kurulumu / çanak anten hakkında bilgi almak istiyorum.",
  },
  {
    slug: "kamera-sistemleri",
    title: "Kamera Sistemleri Kurulumu",
    shortTitle: "Kamera Sistemleri",
    icon: Cctv,
    summary:
      "Ev ve işyerleri için güvenlik kamerası satışı, kurulumu ve DVR/NVR bakımı.",
    subServices: [
      "Ev tipi kamera kurulumu",
      "İşyeri güvenlik sistemi",
      "DVR/NVR kurulumu",
      "Uzaktan izleme ayarı",
    ],
    problems: [
      {
        title: "Evimde Güvenlik Kamerası Yok",
        description:
          "Ev girişi, bahçe ve iç mekan için ihtiyaca uygun ev tipi güvenlik kamerası sistemi kuruyoruz.",
      },
      {
        title: "İşyerimde Kamera Sistemi Eksik",
        description:
          "Mağaza, ofis ve depo gibi işyerleri için kapsamlı işyeri kamera sistemi kurulumu yapıyoruz.",
      },
      {
        title: "Kayıtları Nereden İzleyeceğimi Bilmiyorum",
        description:
          "DVR/NVR kurulumu ile kayıtları cihazınızdan ve telefonunuzdan uzaktan izlemenizi sağlıyoruz.",
      },
      {
        title: "Kameralarım Net Görüntü Vermiyor",
        description:
          "Kamera konumlandırma ve ayar sorunlarında yerinde inceleme yapıp görüntü kalitesini iyileştiriyoruz.",
      },
    ],
    faq: [
      {
        question: "Kamera sistemi kurulumu ne kadar sürer?",
        answer:
          "Süre; kamera sayısına, mekânın büyüklüğüne ve kablolama ihtiyacına göre değişir. Keşif sonrasında size net bir süre bilgisi veriyoruz.",
      },
      {
        question: "Kayıtları telefonumdan izleyebilir miyim?",
        answer:
          "Evet, DVR/NVR kurulumu sonrasında kayıtları ve canlı görüntüyü telefon uygulaması üzerinden uzaktan izleyebilirsiniz.",
      },
      {
        question: "Kaç kameralı sistem önerirsiniz?",
        answer:
          "Kamera sayısı mekânın büyüklüğüne ve izlenmesi gereken noktalara göre değişir; yerinde keşifle size en uygun sayıyı birlikte belirliyoruz.",
      },
      {
        question: "Mevcut kamera sistemimi yükseltebilir miyim?",
        answer:
          "Evet, mevcut DVR/NVR ve kameralarınızı inceleyip ihtiyaç halinde ek kamera veya kayıt cihazıyla sistemi genişletebiliyoruz.",
      },
    ],
    hero: {
      title: "İstanbul Kamera Sistemi Kurulumu",
      description:
        "Kılınç Teknomarket, İstanbul genelinde ev ve işyerleri için güvenlik kamerası satışı, kamera sistemi kurulumu ve DVR/NVR kurulumunu adresinizde yapar.",
      image: "/images/store/kilinc-teknomarket-magaza-dis-cephe.png",
      imageAlt:
        "Kılınç Teknomarket mağaza dış cephesi, kamera ve güvenlik sistemleri hizmeti",
    },
    seo: {
      title: "Kamera Sistemi Kurulumu İstanbul",
      description:
        "İstanbul genelinde ev ve işyeri kamera sistemi kurulumu, güvenlik kamerası ve DVR/NVR kurulumu. Avrupa ve Anadolu Yakası'nda yerinde hizmet. WhatsApp'tan ulaşın.",
    },
    relatedSlugs: ["uydu-sistemleri", "elektrik-internet-hizmetleri"],
    whatsappMessage:
      "Merhaba, ev/işyerim için kamera sistemi kurulumu hakkında bilgi almak istiyorum.",
  },
  {
    slug: "elektrik-internet-hizmetleri",
    title: "Elektrik ve İnternet Arıza Servisi",
    shortTitle: "Elektrik ve İnternet",
    icon: Zap,
    summary:
      "Elektrik arıza tespiti, modem kurulumu ve internet bağlantı sorunlarına teknik destek.",
    subServices: [
      "Elektrik arıza tespiti",
      "Modem kurulumu",
      "İnternet bağlantı sorunu giderme",
      "Ev ve işyeri ağ kurulumu",
      "Kablo ve priz düzenlemesi",
    ],
    problems: [
      {
        title: "Evde veya İşyerinde Elektrik Arızası Var",
        description:
          "Sigorta atması, priz ve aydınlatma arızalarında yerinde elektrik arıza tespiti ve onarımı yapıyoruz.",
      },
      {
        title: "İnternetim Sürekli Kopuyor",
        description:
          "Modem, kablo ve altyapı kaynaklı internet arızalarını yerinde inceleyip çözüyoruz.",
      },
      {
        title: "Modemimi Kendim Kuramıyorum",
        description:
          "Yeni modem kurulumu ve Wi-Fi ayarlarını sizin için eksiksiz yapılandırıyoruz.",
      },
      {
        title: "Evde veya İşyerinde Ağ Bağlantım Zayıf",
        description:
          "Ev ve işyerleri için kablolu/kablosuz ağ kurulumu yaparak tüm odalarda stabil bağlantı sağlıyoruz.",
      },
    ],
    faq: [
      {
        question: "Elektrik arızası için ne kadar sürede gelirsiniz?",
        answer:
          "Süre, adresinize ve o günkü yoğunluğa göre değişir. WhatsApp'tan yazın veya arayın; size en yakın uygun zamanı planlayalım.",
      },
      {
        question: "İnternetim neden sürekli kopuyor?",
        answer:
          "Modem arızası, kablo hasarı veya sağlayıcı kaynaklı sorunlar internetin kopmasına neden olabilir; yerinde inceleme ile nedeni tespit ediyoruz.",
      },
      {
        question: "Modem kurulumunu sağlıyor musunuz?",
        answer: "Evet, yeni modem kurulumu ve Wi-Fi ayarlarını eksiksiz yapıyoruz.",
      },
      {
        question: "Sadece kurulum mu yapıyorsunuz, arıza da mı bakıyorsunuz?",
        answer:
          "Hem yeni kurulum hem de mevcut elektrik/internet arızalarına yerinde teknik destek sağlıyoruz.",
      },
    ],
    hero: {
      title: "İstanbul Elektrik ve İnternet Arıza Servisi",
      description:
        "Kılınç Teknomarket, İstanbul genelinde elektrik arıza tespiti, modem kurulumu, ağ kurulumu ve internet arızası için yerinde teknik destek sunar.",
      image: "/images/store/kilinc-teknomarket-magaza-dis-cephe.png",
      imageAlt:
        "Kılınç Teknomarket mağaza dış cephesi, elektrik ve internet teknik servisi",
    },
    seo: {
      title: "Elektrik ve İnternet Arıza Servisi İstanbul",
      description:
        "Kılınç Teknomarket, İstanbul genelinde elektrik arıza servisi, internet arızası, modem kurulumu ve ağ kurulumu için yerinde teknik destek sağlar. WhatsApp'tan hemen ulaşın.",
    },
    relatedSlugs: ["kamera-sistemleri", "bilgisayar-tamiri"],
    whatsappMessage:
      "Merhaba, elektrik arızası veya internet/modem sorunum için teknik destek almak istiyorum.",
  },
  {
    slug: "telefon-tamiri",
    title: "Telefon Satışı ve Tamiri",
    shortTitle: "Telefon Teknik Servis",
    icon: Smartphone,
    summary:
      "Telefon ve tablet tamiri, ekran ve batarya değişimi, telefon satışı ve ikinci el telefon.",
    subServices: [
      "Ekran değişimi",
      "Batarya değişimi",
      "Şarj soketi tamiri",
      "Tablet tamiri",
      "Telefon satışı ve ikinci el telefon",
      "Yazılım desteği",
    ],
    problems: [
      {
        title: "Ekranım Kırıldı veya Çatladı",
        description:
          "iPhone ve Android telefonlarda kırık veya çatlak ekranların değişimini yapıyoruz.",
      },
      {
        title: "Bataryam Hızlı Bitiyor veya Şişti",
        description:
          "Performansı düşen ya da şişen bataryalarda güvenli batarya değişimi yapıyoruz.",
      },
      {
        title: "Şarj Olmuyor veya Soket Oynuyor",
        description:
          "Şarj soketi temassızlığı ve kablo algılama sorunlarını mağazamızda tespit edip onarıyoruz.",
      },
      {
        title: "Yeni veya İkinci El Telefon Arıyorum",
        description:
          "Mağazamızda telefon satışı yapıyor, ihtiyacınıza uygun ikinci el telefon seçeneklerinde de size yardımcı oluyoruz.",
      },
    ],
    faq: [
      {
        question: "iPhone ekran değişimi ne kadar sürer?",
        answer:
          "Süre, cihazın modeline ve parça durumuna göre değişir. Cihazınızın modelini WhatsApp'tan yazarsanız güncel süre bilgisini iletiriz.",
      },
      {
        question: "Android telefon tamiri de yapıyor musunuz?",
        answer:
          "Evet, iPhone'un yanı sıra Android telefonlarda da ekran, batarya ve şarj soketi tamiri yapıyoruz. Cihazınızın modeli için WhatsApp'tan yazarak bilgi alabilirsiniz.",
      },
      {
        question: "İkinci el telefon satışınız var mı?",
        answer:
          "Mağazamızda telefon satışının yanı sıra ikinci el telefon seçenekleri de bulunabiliyor. Güncel seçenekler için WhatsApp'tan yazabilir veya mağazamıza uğrayabilirsiniz.",
      },
      {
        question: "Tablet tamiri yapıyor musunuz?",
        answer:
          "Evet, tabletlerde ekran, batarya, şarj soketi ve yazılım kaynaklı sorunlarda tamir ve teknik destek sağlıyoruz.",
      },
    ],
    hero: {
      title: "Telefon Tamiri ve Telefon Satışı",
      description:
        "Kılınç Teknomarket, Beyoğlu'ndaki mağazasında iPhone ve Android telefonlar için ekran değişimi, batarya değişimi, şarj soketi tamiri, tablet tamiri ile telefon ve ikinci el telefon satışı sunar.",
      image: "/images/store/kilinc-teknomarket-telefon-kiliflari.png",
      imageAlt: "Kılınç Teknomarket telefon ve aksesuar reyonu",
    },
    seo: {
      title: "Telefon Tamiri ve Telefon Satışı - İstanbul Beyoğlu",
      description:
        "İstanbul Beyoğlu'ndaki mağazamızda iPhone ve Android telefon tamiri, ekran ve batarya değişimi, tablet tamiri, telefon ve ikinci el telefon satışı. WhatsApp'tan ulaşın.",
    },
    relatedSlugs: ["bilgisayar-tamiri", "kamera-sistemleri"],
    whatsappMessage:
      "Merhaba, telefonum/tabletimle ilgili bir sorun var (ekran, batarya veya şarj soketi). Telefon tamiri hakkında bilgi almak istiyorum.",
  },
  {
    slug: "bilgisayar-tamiri",
    title: "Bilgisayar ve Laptop Tamiri",
    shortTitle: "Bilgisayar Teknik Servis",
    icon: Laptop,
    summary:
      "Format, yazılım desteği ve donanım arızaları için bilgisayar ve laptop tamiri.",
    subServices: [
      "Format ve yazılım kurulumu",
      "Virüs ve yavaşlık temizliği",
      "Donanım arıza tespiti",
      "Ekran ve klavye değişimi",
      "RAM/SSD yükseltme",
    ],
    problems: [
      {
        title: "Bilgisayarım Çok Yavaş Çalışıyor",
        description:
          "Yavaşlama ve donma sorunlarında format atma, gereksiz yazılım temizliği ve SSD yükseltmesiyle performansı artırıyoruz.",
      },
      {
        title: "Laptop Açılmıyor veya Ekran Gelmiyor",
        description:
          "Anakart, ekran kartı ve güç sorunlarından kaynaklanan açılmama arızalarında donanım tespiti yapıyoruz.",
      },
      {
        title: "Format Sonrası Sürücü ve Program Kurulumu",
        description:
          "Format atma sonrası gerekli sürücü ve temel programların kurulumunu eksiksiz tamamlıyoruz.",
      },
      {
        title: "RAM/SSD Yetersizliği Nedeniyle Yavaşlık",
        description:
          "RAM ve SSD yükseltmesiyle eski bilgisayar ve laptoplara yeni bir performans kazandırıyoruz.",
      },
    ],
    faq: [
      {
        question: "Format atma verilerimi siler mi?",
        answer:
          "Evet, format öncesi önemli verilerinizi yedeklemenizi öneririz; talep etmeniz halinde yedekleme konusunda da destek oluyoruz.",
      },
      {
        question: "SSD yükseltmesi bilgisayarı gerçekten hızlandırır mı?",
        answer:
          "Evet, özellikle eski HDD'li bilgisayarlarda SSD yükseltmesi açılış ve program hızında belirgin bir fark yaratır.",
      },
      {
        question: "Anakart arızası tamir edilebilir mi?",
        answer:
          "Arızanın türüne göre değişmekle birlikte birçok anakart arızasında onarım mümkündür; kesin bilgi için cihazı incelememiz gerekir.",
      },
      {
        question: "Laptop tamiri için randevu gerekir mi?",
        answer:
          "Çoğu laptop arızası için mağazamıza gelmeniz yeterlidir, karmaşık arızalarda önce WhatsApp'tan yazmanızı öneririz.",
      },
    ],
    hero: {
      title: "Bilgisayar ve Laptop Tamiri",
      description:
        "Kılınç Teknomarket, Beyoğlu'ndaki mağazasında bilgisayar ve laptoplar için format atma, RAM/SSD yükseltme, anakart tamiri ve donanım desteği sunar.",
      image: "/images/store/kilinc-teknomarket-bilgisayar-aksesuarlari.png",
      imageAlt: "Kılınç Teknomarket bilgisayar aksesuarları reyonu",
    },
    seo: {
      title: "Bilgisayar ve Laptop Tamiri - İstanbul Beyoğlu",
      description:
        "Kılınç Teknomarket, İstanbul Beyoğlu'ndaki mağazasında bilgisayar ve laptop tamiri, format atma, RAM/SSD yükseltme ve anakart tamiri yapar. WhatsApp'tan hemen ulaşın.",
    },
    relatedSlugs: ["telefon-tamiri", "elektrik-internet-hizmetleri"],
    whatsappMessage:
      "Merhaba, bilgisayarım/laptopumla ilgili bir sorun var. Bilgisayar tamiri hakkında bilgi almak istiyorum.",
  },
]

// Uydu ana hizmetinin altındaki detay sayfaları. Bilinçli olarak `services`
// dizisinde değildir: ana sayfa kartlarında ve footer'da görünmez, uydu
// sayfasından ve birbirlerinden linklenir. Bunlar ilçe sayfası değil, ayrı
// arama niyetlerine karşılık gelen gerçek hizmetlerdir.
export const satelliteServices: Service[] = [
  {
    slug: "uydu-anten-ariza-servisi",
    parentSlug: "uydu-sistemleri",
    title: "Uydu ve Anten Arıza Servisi",
    shortTitle: "Uydu ve Anten Tamiri",
    icon: Wrench,
    summary:
      "Sinyal kaybı, görüntü donması ve kanal gelmemesi gibi uydu ve anten arızalarında yerinde tespit ve tamir.",
    subServices: [
      "Uydu sinyal arızası tespiti",
      "Çanak anten ayarı ve yön düzeltme",
      "LNB ve kablo değişimi",
      "Uydu alıcısı arıza kontrolü",
      "Anten tamiri ve yenileme",
    ],
    problems: [
      {
        title: "Ekranda Sinyal Yok Yazıyor",
        description:
          "Çanak antenin yönü, LNB, kablo ve bağlantı noktalarını kontrol ederek sinyal kaybının kaynağını yerinde tespit ediyoruz.",
      },
      {
        title: "Görüntü Donuyor veya Karelere Bölünüyor",
        description:
          "Zayıf sinyal çoğu zaman çanak ayarından veya yıpranmış kablodan kaynaklanır; ayar ve gerekirse parça değişimi yapıyoruz.",
      },
      {
        title: "Bazı Kanallar Gelmiyor",
        description:
          "Eksik kanallarda uydu ayarını, alıcı kurulumunu ve frekans listesini kontrol edip kanalları yeniden yüklüyoruz.",
      },
      {
        title: "Fırtına veya Yağmurdan Sonra Yayın Gitti",
        description:
          "Rüzgârla yönü kayan veya bağlantısı gevşeyen çanak antenleri yeniden sabitleyip ayarlıyoruz.",
      },
    ],
    faq: [
      {
        question: "Uydu sinyali neden gidiyor?",
        answer:
          "En sık nedenler çanak antenin yönünün kayması, LNB arızası, kablo veya bağlantı ucu sorunları ve alıcı ayarlarıdır. Kesin neden yerinde kontrolle anlaşılır.",
      },
      {
        question: "Uydu ve anten tamiri için adrese geliyor musunuz?",
        answer:
          "Evet. Uydu ve anten arızalarına İstanbul genelinde, Avrupa Yakası ve Anadolu Yakası'nda adresinize gelerek bakıyoruz.",
      },
      {
        question: "Arıza için çanak antenin tamamen değişmesi gerekir mi?",
        answer:
          "Her zaman gerekmez. Birçok arıza ayar, kablo veya LNB değişimiyle çözülür; değişim gerekip gerekmediğini kontrol sonrasında size söylüyoruz.",
      },
      {
        question: "Arızayı gelmeden önce anlayabilir misiniz?",
        answer:
          "Ekrandaki uyarının ve çanak antenin fotoğrafını WhatsApp'tan gönderirseniz ön bilgi verebiliriz; kesin tespit yerinde yapılır.",
      },
    ],
    hero: {
      title: "İstanbul Uydu ve Anten Arıza Servisi",
      description:
        "Kılınç Teknomarket; sinyal kaybı, görüntü donması ve kanal gelmemesi gibi uydu ve anten arızalarını İstanbul genelinde adresinizde tespit edip onarır.",
      image: "/images/services/satellite/kilinc-teknomarket-uydu-montaji-beyoglu.png",
      imageAlt: "Kılınç Teknomarket uydu ve anten arıza servisi, çanak anten ayarı",
    },
    seo: {
      title: "Uydu ve Anten Tamiri, Arıza Servisi İstanbul",
      description:
        "İstanbul genelinde uydu tamiri, anten tamiri ve uydu arıza servisi. Sinyal yok, görüntü donması ve kanal sorunlarında yerinde çözüm. WhatsApp'tan ulaşın.",
    },
    relatedSlugs: ["uydu-sistemleri", "tv-kurulumu-kanal-ayari"],
    whatsappMessage:
      "Merhaba, uydu/anten arızam var (sinyal veya kanal sorunu). Servis hakkında bilgi almak istiyorum.",
  },
  {
    slug: "merkezi-uydu-sistemi",
    parentSlug: "uydu-sistemleri",
    title: "Merkezi Uydu Sistemi Kurulumu",
    shortTitle: "Merkezi Uydu Sistemi",
    icon: Building2,
    summary:
      "Apartman, site ve iş yerleri için tek çanaktan tüm dairelere yayın dağıtan merkezi uydu sistemi kurulumu ve bakımı.",
    subServices: [
      "Apartman ve site merkezi uydu sistemi kurulumu",
      "Mevcut merkezi sistemin bakımı ve arıza tespiti",
      "Daire içi uydu hattı çekimi",
      "Sisteme yeni daire veya uç ekleme",
      "Keşif ve ihtiyaca göre sistem önerisi",
    ],
    problems: [
      {
        title: "Çatıda Her Daire İçin Ayrı Çanak Var",
        description:
          "Merkezi uydu sistemiyle tüm daireler tek çanak anten üzerinden yayın alır; çatıdaki çanak kalabalığı ortadan kalkar.",
      },
      {
        title: "Bazı Dairelerde Yayın Zayıf veya Yok",
        description:
          "Dağıtım ekipmanını ve kablo hattını kontrol ederek sorunun hangi noktadan kaynaklandığını tespit ediyoruz.",
      },
      {
        title: "Eski Merkezi Sistem Artık Yetmiyor",
        description:
          "Mevcut sistemi inceleyip onarımın mı yoksa yenilemenin mi daha uygun olduğunu size açıkça söylüyoruz.",
      },
      {
        title: "Yeni Binaya Sistem Kurulacak",
        description:
          "Daire sayısına ve binanın yapısına göre keşif yapıp uygun merkezi uydu sistemini planlıyoruz.",
      },
    ],
    faq: [
      {
        question: "Merkezi uydu sistemi nedir?",
        answer:
          "Apartman veya site genelinde tek bir çanak anten üzerinden tüm dairelere yayın dağıtan sistemdir. Her daire kendi uydu alıcısıyla bağımsız olarak izler.",
      },
      {
        question: "Kurulum ne kadar sürer?",
        answer:
          "Süre; daire sayısına, binanın yapısına ve kablolama ihtiyacına göre değişir. Keşif sonrasında size net bir süre bilgisi veriyoruz.",
      },
      {
        question: "Fiyat nasıl belirlenir?",
        answer:
          "Fiyat daire sayısına ve gereken ekipmana göre değişir. Keşif sonrasında bilgi veriyoruz; ön bilgi için WhatsApp'tan yazabilirsiniz.",
      },
      {
        question: "Mevcut merkezi sistemin arızasına da bakıyor musunuz?",
        answer:
          "Evet, mevcut merkezi uydu sistemlerinde de arıza tespiti ve bakım yapıyoruz.",
      },
    ],
    hero: {
      title: "İstanbul Merkezi Uydu Sistemi Kurulumu",
      description:
        "Kılınç Teknomarket; apartman, site ve iş yerleri için merkezi uydu sistemi kurulumu, bakımı ve arıza servisini İstanbul genelinde yerinde sunar.",
      image: "/images/services/satellite/kilinc-teknomarket-uydu-montaji-beyoglu.png",
      imageAlt: "Kılınç Teknomarket merkezi uydu sistemi ve çanak anten montajı",
    },
    seo: {
      title: "Merkezi Uydu Sistemi Kurulumu İstanbul",
      description:
        "İstanbul genelinde apartman ve siteler için merkezi uydu sistemi kurulumu, bakımı ve arıza servisi. Keşif ve bilgi için WhatsApp'tan ulaşın.",
    },
    relatedSlugs: ["uydu-sistemleri", "uydu-anten-ariza-servisi"],
    whatsappMessage:
      "Merhaba, apartmanımız/sitemiz için merkezi uydu sistemi hakkında bilgi almak istiyorum.",
  },
  {
    slug: "tv-kurulumu-kanal-ayari",
    parentSlug: "uydu-sistemleri",
    title: "TV Kurulumu ve Kanal Ayarı",
    shortTitle: "TV Kurulumu ve Kanal Ayarı",
    icon: Tv,
    summary:
      "Televizyon kurulumu, TV duvara montajı, uydu alıcısı bağlantısı, kanal arama ve kanal sıralama.",
    subServices: [
      "Televizyon ilk kurulumu",
      "TV duvara montajı",
      "Uydu alıcısı kurulumu ve bağlantısı",
      "Kanal arama ve kanal sıralama",
      "TV ile uydu bağlantısının yapılması",
      "Kumanda ve alıcı ayarları",
    ],
    problems: [
      {
        title: "Yeni Televizyon Aldım, Kanallar Yok",
        description:
          "Televizyonun ilk kurulumunu, uydu bağlantısını ve kanal aramasını yaparak izlemeye hazır hale getiriyoruz.",
      },
      {
        title: "Kanallar Karışık veya Sırası Bozuldu",
        description:
          "Kanal listesini yeniden yükleyip istediğiniz sıraya göre düzenliyoruz.",
      },
      {
        title: "Televizyonu Duvara Astırmak İstiyorum",
        description:
          "Televizyonunuzu duvara monte ediyor, uydu ve anten bağlantılarını da aynı ziyarette yapıyoruz.",
      },
      {
        title: "Uydu Alıcısını Televizyona Bağlayamıyorum",
        description:
          "Uydu alıcısı ile televizyon arasındaki bağlantıyı ve gerekli ayarları yapıyoruz.",
      },
    ],
    faq: [
      {
        question: "Televizyon kurulumu için eve geliyor musunuz?",
        answer:
          "Evet. TV kurulumu, uydu bağlantısı ve kanal ayarını İstanbul genelinde adresinize gelerek yapıyoruz.",
      },
      {
        question: "TV duvara montajı yapıyor musunuz?",
        answer:
          "Evet, televizyonun duvara montajını yapıyoruz. Televizyonun ekran boyutunu ve duvarın türünü WhatsApp'tan yazarsanız ön bilgi verebiliriz.",
      },
      {
        question: "Sadece kanal ayarı için de gelir misiniz?",
        answer:
          "Evet, yalnızca kanal arama ve kanal sıralama için de hizmet veriyoruz.",
      },
      {
        question: "Uydu alıcısı da satıyor musunuz?",
        answer:
          "Evet, Beyoğlu'ndaki mağazamızda uydu alıcıları ve uydu-anten ürünleri satıyoruz. Güncel stok için WhatsApp'tan yazabilirsiniz.",
      },
      {
        question: "Kanallar hiç gelmiyorsa sorun televizyonda mı?",
        answer:
          "Her zaman değil. Sorun çanak antenden, kablodan veya alıcıdan da kaynaklanabilir; yerinde kontrol ederek nedenini belirliyoruz.",
      },
    ],
    hero: {
      title: "İstanbul TV Kurulumu, Montajı ve Kanal Ayarı",
      description:
        "Kılınç Teknomarket; televizyon kurulumu, TV duvara montajı, uydu alıcısı bağlantısı, kanal arama ve kanal sıralama hizmetini İstanbul genelinde adresinizde sunar.",
      image: "/images/products/kilinc-teknomarket-uydu-alicilari-tv-box.png",
      imageAlt: "Kılınç Teknomarket uydu alıcıları ve TV kurulum ürünleri",
    },
    seo: {
      title: "TV Kurulumu, Duvara Montaj ve Kanal Ayarı İstanbul",
      description:
        "İstanbul genelinde televizyon kurulumu, TV duvara montajı, uydu alıcısı kurulumu ve kanal ayarı. Adresinizde yerinde hizmet. WhatsApp'tan ulaşın.",
    },
    relatedSlugs: ["uydu-sistemleri", "uydu-anten-ariza-servisi"],
    whatsappMessage:
      "Merhaba, TV kurulumu / duvara montaj / kanal ayarı hakkında bilgi almak istiyorum.",
  },
]

const allServices = [...services, ...satelliteServices]

export function getService(slug: string): Service {
  const service = allServices.find((item) => item.slug === slug)
  if (!service) {
    throw new Error(`Service not found for slug: ${slug}`)
  }
  return service
}

export function getServiceWhatsAppMessage(service: ServiceCardData): string {
  return (
    service.whatsappMessage ??
    `Merhaba, ${service.title} hakkında bilgi almak istiyorum.`
  )
}
