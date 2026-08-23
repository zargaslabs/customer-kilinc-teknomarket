import {
  Battery,
  Cable,
  Cpu,
  Package,
  SatelliteDish,
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
}

// Sıra bilinçlidir: işletmenin en çok sattığı ürün grubu (uydu ürünleri) ilk
// sırada. Fiyat ve stok bilgisi tutulmaz; güncel durum WhatsApp'tan sorulur.
export const products: Product[] = [
  { icon: SatelliteDish, label: "Uydu ve Anten Ürünleri" },
  { icon: Smartphone, label: "Telefon Aksesuarları" },
  { icon: Battery, label: "Powerbank" },
  { icon: Speaker, label: "Hoparlör ve Kulaklık" },
  { icon: Cable, label: "Şarj Aletleri ve Kablolar" },
  { icon: Cpu, label: "Elektronik Ürünler" },
  { icon: TabletSmartphone, label: "Tablet Aksesuarları" },
  { icon: Tv, label: "TV Kumandaları" },
  { icon: Package, label: "Küçük Ev Aletleri" },
]

// Ana sayfada gösterilen kısa liste. Tam liste /urunler sayfasındadır.
export const featuredProducts = products.slice(0, 6)

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
