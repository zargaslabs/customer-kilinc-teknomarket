import {
  Battery,
  Cable,
  Cpu,
  Package,
  SatelliteDish,
  Shield,
  ShoppingBag,
  Smartphone,
  Speaker,
  TabletSmartphone,
  Tv,
  type LucideIcon,
} from "lucide-react"

import type { ServiceCardData } from "@/lib/data/services"

export type Product = {
  icon: LucideIcon
  label: string
  // Müşteriden gelen gerçek ürün/reyon fotoğrafı. Yalnızca fotoğrafı çekilmiş
  // kategorilerde dolu olur; diğerleri ikonla temsil edilmeye devam eder.
  image?: string
  imageAlt?: string
}

// Sıra bilinçlidir: işletmenin en çok sattığı ürün grubu (uydu ürünleri) ilk
// sırada. Fiyat ve stok bilgisi tutulmaz; güncel durum WhatsApp'tan sorulur.
export const products: Product[] = [
  {
    icon: SatelliteDish,
    label: "Uydu ve Anten Ürünleri",
    image: "/images/products/kilinc-teknomarket-uydu-alicilari-tv-box.png",
    imageAlt: "Kılınç Teknomarket uydu alıcıları ve Android TV Box ürünleri",
  },
  {
    icon: Smartphone,
    label: "Telefon Aksesuarları",
    image: "/images/products/kilinc-teknomarket-telefon-kiliflari.png",
    imageAlt: "Kılınç Teknomarket telefon kılıfı ve mobil aksesuarlar",
  },
  {
    icon: Shield,
    label: "Ekran Koruyucu",
    image: "/images/products/kilinc-teknomarket-ekran-koruyucu-aksesuarlari.png",
    imageAlt: "Kılınç Teknomarket ekran koruyucu ve telefon aksesuarları",
  },
  { icon: Battery, label: "Powerbank" },
  { icon: Speaker, label: "Hoparlör ve Kulaklık" },
  {
    icon: Cable,
    label: "Şarj Aletleri ve Kablolar",
    image: "/images/products/kilinc-teknomarket-sarj-kablo-aksesuarlari.png",
    imageAlt: "Kılınç Teknomarket şarj cihazları, kablolar ve telefon aksesuarları",
  },
  {
    icon: Cpu,
    label: "Elektronik Ürünler",
    image: "/images/products/kilinc-teknomarket-elektronik-urunler.png",
    imageAlt: "Kılınç Teknomarket elektronik ürünler ve küçük ev aletleri",
  },
  { icon: TabletSmartphone, label: "Tablet Aksesuarları" },
  { icon: Tv, label: "TV Kumandaları" },
  { icon: Package, label: "Küçük Ev Aletleri" },
]

// Ana sayfada gösterilen kısa liste. Tam liste /urunler sayfasındadır.
export const featuredProducts = products.slice(0, 6)

// Fotoğrafı çekilmiş kategoriler. /urunler sayfasındaki gerçek ürün
// galerisini besler.
export const productsWithPhotos = products.filter((product) => product.image)

// Ana sayfada gösterilen gerçek fotoğraf çifti (uydu + telefon aksesuarları).
// Ana sayfada ürün raflarını doldurmamak için bilinçli olarak sadece 2 tane.
export const homepageProductPhotos = productsWithPhotos.slice(0, 2)

export const productsWhatsAppMessage =
  "Merhaba, ürün ve stok durumu hakkında bilgi almak istiyorum."

// Ana sayfadaki hizmet kartları arasında ürünlerin de görünmesi için kullanılır
// (detay sayfası /urunler). Hizmet dizisine eklenmez; sitemap, footer hizmet
// listesi ve servis şeması yalnızca gerçek hizmetleri içerir.
export const productsHighlight: ServiceCardData = {
  slug: "urunler",
  title: "Teknoloji Ürünleri ve Aksesuarlar",
  icon: ShoppingBag,
  summary:
    "Uydu ürünlerinden telefon aksesuarlarına, elektronik ürünlerden küçük ev aletlerine mağazamızda satış.",
  subServices: [
    "Uydu ve anten ürünleri",
    "Telefon aksesuarları",
    "Powerbank, hoparlör ve kulaklık",
    "Elektronik ürünler ve küçük ev aletleri",
  ],
  whatsappMessage: productsWhatsAppMessage,
}
