import { Cctv, Laptop, SatelliteDish, Smartphone, Zap, type LucideIcon } from "lucide-react"

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

// Sıra bilinçlidir: işletmenin öne çıkarmak istediği uydu ve çanak anten
// hizmeti ilk sırada. Bu dizi ana sayfa hizmet kartlarını, footer hizmet
// listesini ve hakkımızda sayfasındaki hizmet linklerini besler.
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
      "TV bağlantı ve kanal ayarı",
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
        question: "Beyoğlu'nda çanak anten kurulumu yapıyor musunuz?",
        answer:
          "Evet, Beyoğlu ve Kasımpaşa başta olmak üzere İstanbul Avrupa Yakası'nda çanak anten kurulumu, uydu sistemi montajı ve anten servisi yapıyoruz.",
      },
      {
        question: "Uydu kurulumu ne kadar sürer?",
        answer:
          "Standart bir çanak anten kurulumu genellikle bir saat içinde tamamlanır, apartman tipi merkezi sistemlerde süre bina büyüklüğüne göre değişir.",
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
      title: "Beyoğlu Uydu Kurulumu ve Çanak Anten Servisi",
      description:
        "Kılınç Teknomarket, Beyoğlu ve Kasımpaşa'da çanak anten kurulumu, uydu sistemleri, merkezi uydu sistemi, uydu arıza servisi ve TV kanal ayarı hizmeti sunar.",
      image: "/images/store/kilinc-teknomarket-magaza-dis-cephe-genis.png",
      imageAlt:
        "Kılınç Teknomarket mağaza geniş dış cephe görünümü, uydu ve çanak anten hizmeti",
    },
    seo: {
      title: "Uydu Kurulumu ve Çanak Anten Servisi Beyoğlu",
      description:
        "Beyoğlu ve Kasımpaşa'da uydu kurulumu, çanak anten kurulumu, merkezi uydu sistemi ve uydu arıza servisi. Kılınç Teknomarket'e WhatsApp'tan hemen ulaşın.",
    },
    relatedSlugs: ["kamera-sistemleri", "elektrik-internet-hizmetleri"],
    whatsappMessage:
      "Merhaba, uydu kurulumu / çanak anten hakkında bilgi almak istiyorum.",
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
          "iPhone ve Android telefonlarda kırık veya çatlak ekranları kaliteli parçalarla değiştiriyoruz.",
      },
      {
        title: "Bataryam Hızlı Bitiyor veya Şişti",
        description:
          "Performansı düşen ya da şişen bataryalarda güvenli batarya değişimi yapıyoruz.",
      },
      {
        title: "Şarj Olmuyor veya Soket Oynuyor",
        description:
          "Şarj soketi temassızlığı ve kablo algılama sorunlarını yerinde tespit edip onarıyoruz.",
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
          "Modele göre değişmekle birlikte iPhone ekran değişimi genellikle aynı gün içinde, çoğu zaman birkaç saat içinde tamamlanır.",
      },
      {
        question: "Android telefon tamiri de yapıyor musunuz?",
        answer:
          "Evet, Samsung, Xiaomi, Oppo ve Huawei başta olmak üzere birçok Android markasında ekran, batarya ve şarj soketi tamiri yapıyoruz.",
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
      title: "Telefon Tamiri ve Telefon Satışı Beyoğlu",
      description:
        "Kılınç Teknomarket, Beyoğlu/Kasımpaşa'da iPhone ve Android telefonlar için ekran değişimi, batarya değişimi, şarj soketi tamiri, tablet tamiri ile telefon ve ikinci el telefon satışı sunar.",
      image: "/images/store/kilinc-teknomarket-telefon-kiliflari.png",
      imageAlt: "Kılınç Teknomarket telefon ve aksesuar reyonu",
    },
    seo: {
      title: "Telefon Tamiri ve Telefon Satışı Beyoğlu",
      description:
        "Kılınç Teknomarket, Beyoğlu/Kasımpaşa'da iPhone ve Android telefon tamiri, ekran ve batarya değişimi, tablet tamiri ile telefon ve ikinci el telefon satışı yapar. WhatsApp'tan hemen ulaşın.",
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
      title: "Bilgisayar ve Laptop Tamiri Beyoğlu",
      description:
        "Kılınç Teknomarket, Beyoğlu/Kasımpaşa'da bilgisayar ve laptoplar için format atma, RAM/SSD yükseltme, anakart tamiri ve donanım desteği sunar.",
      image: "/images/store/kilinc-teknomarket-bilgisayar-aksesuarlari.png",
      imageAlt: "Kılınç Teknomarket bilgisayar aksesuarları reyonu",
    },
    seo: {
      title: "Bilgisayar Tamiri Beyoğlu",
      description:
        "Kılınç Teknomarket, Beyoğlu/Kasımpaşa'da bilgisayar ve laptop tamiri, format atma, RAM/SSD yükseltme ve anakart tamiri yapar. WhatsApp'tan hemen ulaşın.",
    },
    relatedSlugs: ["telefon-tamiri", "elektrik-internet-hizmetleri"],
    whatsappMessage:
      "Merhaba, bilgisayarım/laptopumla ilgili bir sorun var. Bilgisayar tamiri hakkında bilgi almak istiyorum.",
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
          "Kamera sayısına ve mekânın büyüklüğüne göre değişmekle birlikte çoğu ev/işyeri kurulumu bir gün içinde tamamlanır.",
      },
      {
        question: "Kayıtları telefonumdan izleyebilir miyim?",
        answer:
          "Evet, DVR/NVR kurulumu sonrasında kayıtları ve canlı görüntüyü telefon uygulaması üzerinden uzaktan izleyebilirsiniz.",
      },
      {
        question: "Kaç kameralı sistem önerirsiniz?",
        answer:
          "Ev için genellikle 4 kameralı, işyerleri için mekânın büyüklüğüne göre 4-8 kameralı sistemler tercih ediliyor; yerinde keşifle size en uygun sayıyı belirliyoruz.",
      },
      {
        question: "Mevcut kamera sistemimi yükseltebilir miyim?",
        answer:
          "Evet, mevcut DVR/NVR ve kameralarınızı inceleyip ihtiyaç halinde ek kamera veya kayıt cihazıyla sistemi genişletebiliyoruz.",
      },
    ],
    hero: {
      title: "Kamera Sistemi Kurulumu Beyoğlu",
      description:
        "Kılınç Teknomarket, Beyoğlu/Kasımpaşa'da ev ve işyerleri için güvenlik kamerası satışı, kamera sistemi kurulumu ve DVR/NVR kurulumu sunar.",
      image: "/images/store/kilinc-teknomarket-magaza-dis-cephe.png",
      imageAlt:
        "Kılınç Teknomarket mağaza dış cephesi, kamera ve güvenlik sistemleri hizmeti",
    },
    seo: {
      title: "Kamera Sistemi Kurulumu Beyoğlu",
      description:
        "Kılınç Teknomarket, Beyoğlu/Kasımpaşa'da ev ve işyeri kamera sistemi kurulumu, güvenlik kamerası ve DVR/NVR kurulumu yapar. WhatsApp'tan hemen ulaşın.",
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
          "Bölgemizde genellikle aynı gün içinde yerinde teknik destek sağlıyoruz.",
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
      title: "Elektrik ve İnternet Arıza Servisi Beyoğlu",
      description:
        "Kılınç Teknomarket, Beyoğlu/Kasımpaşa'da elektrik arıza tespiti, modem kurulumu, ağ kurulumu ve internet arızası için yerinde teknik destek sunar.",
      image: "/images/store/kilinc-teknomarket-magaza-dis-cephe.png",
      imageAlt:
        "Kılınç Teknomarket mağaza dış cephesi, elektrik ve internet teknik servisi",
    },
    seo: {
      title: "Elektrik ve İnternet Arıza Servisi Beyoğlu",
      description:
        "Kılınç Teknomarket, Beyoğlu/Kasımpaşa'da elektrik arıza servisi, internet arızası, modem kurulumu ve ağ kurulumu için yerinde teknik destek sağlar. WhatsApp'tan hemen ulaşın.",
    },
    relatedSlugs: ["kamera-sistemleri", "bilgisayar-tamiri"],
    whatsappMessage:
      "Merhaba, elektrik arızası veya internet/modem sorunum için teknik destek almak istiyorum.",
  },
]

export function getService(slug: string): Service {
  const service = services.find((item) => item.slug === slug)
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
